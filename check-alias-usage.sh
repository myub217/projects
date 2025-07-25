#!/bin/bash

# =======================================================================
# 🔧 JP Visual & Docs :: PROJECT CLEAN TOOLKIT (STATIC + ALIAS + AUTO DELETE)
# =======================================================================
# ✅ ตรวจสอบและลบ static assets และ TypeScript aliases ที่ไม่ได้ใช้งาน
# 🧠 รองรับ dynamic path, alias, รูปภาพ, SVG, ไฟล์ script ต่าง ๆ
# 🗑️ เพิ่มฟีเจอร์ auto ลบ static asset ที่ไม่ได้ใช้ (ถามก่อนลบ)
# 📦 ใช้กับ Termux, macOS, Linux shell ได้ทันที
# 🔁 ใช้ซ้ำได้ ไม่กระทบ production config
#
# Usage: ./clean-project.sh [--auto-delete]
# --auto-delete: ลบไฟล์ static ที่ไม่ได้ใช้งานโดยไม่ถาม (ระวัง)

# === CONFIG ===
SRC_DIR="./src"
TSCONFIG="tsconfig.json"
BACKUP_FILE="${TSCONFIG}.bak.$(date +%s)"
ASSET_DIRS=("public/assets" "public/images" "src/assets")
TMP_FILE="$(mktemp)"
AUTO_DELETE=false

# Check arg
if [[ "$1" == "--auto-delete" ]]; then
  AUTO_DELETE=true
fi

echo ""
echo "🧹 เริ่มทำความสะอาดโปรเจกต์ :: JP Visual & Docs"
echo "📂 Source Path: $SRC_DIR"
echo "🗂️  tsconfig: $TSCONFIG"
echo "💾 Backup tsconfig: $BACKUP_FILE"
echo "🖼️ Asset Dirs: ${ASSET_DIRS[*]}"
echo "----------------------------------------------------------"

# === 1. CLEAN UNUSED STATIC FILES (ตรวจหา + ลบถ้าเลือก) ===
echo -e "\n🔍 ตรวจหา static asset ที่ไม่ได้ใช้..."
UNUSED_FILES=()

for DIR in "${ASSET_DIRS[@]}"; do
  if [ -d "$DIR" ]; then
    echo "📁 ตรวจสอบ $DIR"
    while IFS= read -r -d '' FILE; do
      FILENAME=$(basename "$FILE")
      # search src and public HTML/MD/JSON/TS/JS files
      MATCH_COUNT=$(grep -r --include="*.ts*" --include="*.js*" --include="*.html" --include="*.md" --include="*.json" "$FILENAME" "$SRC_DIR" 2>/dev/null | wc -l)
      if [ "$MATCH_COUNT" -eq 0 ]; then
        UNUSED_FILES+=("$FILE")
        echo "⚠️  ไม่ได้ใช้: $FILE"
      fi
    done < <(find "$DIR" -type f -print0)
  else
    echo "⚠️  โฟลเดอร์ไม่พบหรือไม่ถูกต้อง: $DIR"
  fi
done

if [ ${#UNUSED_FILES[@]} -gt 0 ]; then
  if [ "$AUTO_DELETE" = true ]; then
    echo -e "\n🗑️ Auto-delete enabled: กำลังลบไฟล์ static ที่ไม่ได้ใช้ทั้งหมด..."
    for f in "${UNUSED_FILES[@]}"; do
      rm -f "$f" && echo "   ลบแล้ว: $f"
    done
  else
    echo -e "\n❗ ต้องการลบไฟล์ static ที่ไม่ได้ใช้หรือไม่? (y/N)"
    read -r answer
    if [[ "$answer" =~ ^[Yy]$ ]]; then
      for f in "${UNUSED_FILES[@]}"; do
        rm -f "$f" && echo "   ลบแล้ว: $f"
      done
    else
      echo "🚫 ไม่ลบไฟล์ static ที่ไม่ได้ใช้"
    fi
  fi
else
  echo "✅ ไม่พบ static asset ที่ไม่ได้ใช้งาน"
fi

# === 2. CHECK + REMOVE UNUSED ALIASES ===
echo -e "\n🔍 ตรวจสอบ alias ที่ไม่ได้ใช้งานใน tsconfig.json..."
ALIASES=$(jq -r '.compilerOptions.paths | keys[]' "$TSCONFIG" | sed 's/\/\*$//' | sort)

if [ -z "$ALIASES" ]; then
  echo "⚠️  ไม่พบ alias ใด ๆ ใน $TSCONFIG"
  exit 1
fi

USED_ALIASES=()
UNUSED_ALIASES=()

for alias in $ALIASES; do
  escaped_alias=$(printf "%s" "$alias" | sed 's/[]\/$*.^[]/\\&/g')
  count=$(grep -rE "from ['\"]$escaped_alias" "$SRC_DIR" --include="*.ts*" --include="*.tsx" --include="*.js*" --include="*.jsx" 2>/dev/null | wc -l)
  if [ "$count" -eq 0 ]; then
    UNUSED_ALIASES+=("$alias")
    printf "❌ %-20s → unused\n" "$alias"
  else
    USED_ALIASES+=("$alias")
    printf "✅ %-20s → used (%d time%s)\n" "$alias" "$count" "$(test "$count" -gt 1 && echo "s")"
  fi
done

# === 3. BACKUP + REMOVE UNUSED ALIASES ===
cp "$TSCONFIG" "$BACKUP_FILE"

if [ ${#UNUSED_ALIASES[@]} -eq 0 ]; then
  echo -e "\n✅ ทุก alias ถูกใช้งาน ไม่มีอะไรต้องลบ"
else
  echo -e "\n🧽 กำลังลบ alias ที่ไม่ได้ใช้งานออกจาก tsconfig.json..."
  jq --argjson unused "$(printf '%s\n' "${UNUSED_ALIASES[@]}" | jq -R . | jq -s .)" '
    .compilerOptions.paths |= with_entries(
      select((.key | sub("/\\*$"; "")) as $k |
        ($unused | index($k) | not)
      )
    )
  ' "$TSCONFIG" > "$TMP_FILE" && mv "$TMP_FILE" "$TSCONFIG"

  echo "✅ ลบ alias ที่ไม่ได้ใช้งานทั้งหมด ${#UNUSED_ALIASES[@]} รายการ:"
  for alias in "${UNUSED_ALIASES[@]}"; do
    echo "   🗑️  $alias"
  done
fi

# === DONE ===
echo -e "\n🎯 เสร็จสิ้น :: ทำความสะอาดโปรเจกต์เรียบร้อย"
echo "📦 tsconfig.json สำรองไว้ที่: $BACKUP_FILE"
echo "----------------------------------------------------------"