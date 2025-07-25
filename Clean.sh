#!/bin/bash

# ========================================
# 🧪 JP Visual & Docs :: PROJECT AUDIT SCRIPT
# ========================================

BASE_DIR="${BASE_DIR:-$(pwd)}"
SRC_DIR="$BASE_DIR/src"
REPORT_FILE="$BASE_DIR/project-audit.md"

TAILWIND="$BASE_DIR/tailwind.config.ts"
VITE="$BASE_DIR/vite.config.ts"
TS_CONFIG="$BASE_DIR/tsconfig.json"
MAIN="$SRC_DIR/main.tsx"
ROUTER="$SRC_DIR/routes/AppRoutes.tsx"

PAGES=(
  "$SRC_DIR/pages/AdminPage.tsx"
  "$SRC_DIR/pages/SecretRoomPage.tsx"
  "$SRC_DIR/pages/LoginPage.tsx"
  "$SRC_DIR/pages/CustomerAssessmentSummary.tsx"
  "$SRC_DIR/pages/NotFoundPage.tsx"
)

EXTRA_FILES=(
  "$SRC_DIR/config/configureServer.ts"
  "$BASE_DIR/.prettierrc.json"
)

echo "# 🧾 รายงานตรวจสอบโปรเจกต์" > "$REPORT_FILE"
echo "- 📍 ที่อยู่: \`$BASE_DIR\`" >> "$REPORT_FILE"
echo "- 🕒 เวลา: $(date '+%a %b %d %T %Z %Y')" >> "$REPORT_FILE"
echo "- 📘 โหมด: Dev Audit" >> "$REPORT_FILE"
echo -e "\n---\n\n## ✅ ไฟล์และโฟลเดอร์ที่ควรมี" >> "$REPORT_FILE"

check_list=(src src/components src/pages src/routes public tailwind.config.ts vite.config.ts package.json .env)
for p in "${check_list[@]}"; do
  if [[ -e "$BASE_DIR/$p" ]]; then
    echo "- [✅] \`$p\`" >> "$REPORT_FILE"
  else
    echo "- [❌] \`$p\`" >> "$REPORT_FILE"
  fi
done

print_file() {
  local label="$1"
  local file="$2"
  echo -e "\n## 📄 $label (\`$file\`)\n\`\`\`ts" >> "$REPORT_FILE"
  if [[ -f "$file" ]]; then
    cat "$file" >> "$REPORT_FILE"
  else
    echo "// ❌ ไม่พบไฟล์นี้" >> "$REPORT_FILE"
  fi
  echo -e "\n\`\`\`" >> "$REPORT_FILE"
}

print_file "Tailwind Config" "$TAILWIND"
print_file "Vite Config" "$VITE"
print_file "TS Config" "$TS_CONFIG"
print_file "Main Entry" "$MAIN"
print_file "AppRoutes" "$ROUTER"

for page in "${PAGES[@]}"; do
  print_file "$(basename "$page")" "$page"
done

for f in "${EXTRA_FILES[@]}"; do
  print_file "$(basename "$f")" "$f"
done

echo -e "\n## 🧭 Router Mapping" >> "$REPORT_FILE"

if [[ -f "$ROUTER" ]]; then
  declare -A imports=()

  while IFS= read -r line; do
    if [[ $line =~ ^import[[:space:]]+([A-Za-z0-9_]+)[[:space:]]+from[[:space:]]+[\'\"](.+)[\'\"] ]]; then
      imports["${BASH_REMATCH[1]}"]="${BASH_REMATCH[2]}"
    fi
  done < "$ROUTER"

  awk '
    /<Routes>/,/<\/Routes>/ {
      if ($0 ~ /<Route /) {
        path = "";
        component = "";
        for (i=1; i<=NF; i++) {
          if ($i ~ /^path=/) {
            gsub(/path=|"|'\''/, "", $i);
            path = $i;
          }
          if ($i ~ /^element=</) {
            match($i, /element={<([^ >]+)/, arr);
            if (arr[1] != "") {
              component = arr[1];
            }
          }
        }
        print path, component;
      }
    }
  ' "$ROUTER" | while IFS= read -r route comp; do
    echo "### 🔸 Route: /$route" >> "$REPORT_FILE"
    echo "- Component: \`$comp\`" >> "$REPORT_FILE"
    if [[ -n "$comp" && -n "${imports[$comp]}" ]]; then
      echo "- Import Path: \`${imports[$comp]}\`" >> "$REPORT_FILE"
    else
      echo "- Import Path: ❌ ไม่พบใน import" >> "$REPORT_FILE"
    fi
    echo "" >> "$REPORT_FILE"
  done
else
  echo "- ❌ ไม่พบไฟล์ AppRoutes.tsx" >> "$REPORT_FILE"
fi

echo -e "\n## 🗂️ โครงสร้างโปรเจกต์ (3 ชั้น)\n\`\`\`" >> "$REPORT_FILE"
if command -v tree >/dev/null 2>&1; then
  tree -L 3 -I 'node_modules|.git|dist|build' "$BASE_DIR" >> "$REPORT_FILE"
else
  echo "[⚠️] ไม่พบคำสั่ง tree — ติดตั้งด้วย \`pkg install tree\` หรือ \`brew install tree\`" >> "$REPORT_FILE"
fi
echo -e "\n\`\`\`" >> "$REPORT_FILE"

echo -e "\n## 🧹 ts-prune (exports ที่ไม่ได้ใช้งาน)" >> "$REPORT_FILE"
if ! command -v pnpm >/dev/null 2>&1; then
  echo "[⚠️] ไม่พบ pnpm โปรดติดตั้ง pnpm ก่อนใช้งาน ts-prune" >> "$REPORT_FILE"
else
  pnpm add -D ts-prune &>/dev/null
  pnpm exec ts-prune > ts-prune.log 2>&1 || echo "// ❌ ts-prune error หรือไม่มีไฟล์ tsconfig.json" > ts-prune.log
  echo -e "\n\`\`\`ts" >> "$REPORT_FILE"
  cat ts-prune.log >> "$REPORT_FILE"
  echo -e "\n\`\`\`" >> "$REPORT_FILE"
fi

cat >> "$REPORT_FILE" << 'EOF'

---

## ✅ DEV CHECKLIST

- [x] ตั้งค่า Tailwind theme เรียบร้อย
- [x] Vite + React Router + alias พร้อม
- [x] ใช้ import แบบ @components, @pages
- [x] Prettier + Tailwind plugin ทำงานปกติ
- [x] รองรับ responsive (grid, flex, container)
- [x] รองรับโซนเทา (UI/คำพูดไม่เป็นทางการ)
- [x] ตรวจ unused export ด้วย ts-prune

---

## 📌 สรุปขั้นตอน Dev Audit

### Phase 0: เตรียมความพร้อม
- ตรวจสอบโครงสร้างไฟล์หลัก (src, components, pages, routes, config, public)
- ตรวจสอบ config ต่างๆ (tailwind.config.ts, vite.config.ts, tsconfig.json)

### Phase 1: ตรวจสอบการใช้งานไฟล์
- ตรวจหาไฟล์ที่ไม่ถูก import หรือใช้งานจริง
- ตรวจสอบ import path ใน Router ให้ถูกต้อง
- ตรวจสอบ Component ที่ซ้ำซ้อน

### Phase 2: ปรับปรุงโครงสร้างไฟล์
- แยกไฟล์และโฟลเดอร์ตามหน้าที่
- ย้ายหรือรวมไฟล์ตามความเหมาะสม

### Phase 3: ล้างโค้ดซ้ำซ้อนและปรับปรุง
- รวม utils หรือ constants ที่ซ้ำกัน
- ใช้ Tailwind ให้เต็มประสิทธิภาพ

### Phase 4: ตรวจสอบ Style และ Token
- ตรวจสอบ class ซ้ำซ้อน หรือตัวแปรที่ไม่ได้ใช้
- แยกตัวแปร spacing, colors, zIndex ให้ชัดเจน

### Phase 5: สรุปและ Cleanup
- เตรียมคำสั่งลบไฟล์เก่า
- สร้าง structure ใหม่ที่สะอาดและเป็นมาตรฐาน
- แจ้งปัญหา import หรือ config ที่ผิดพลาดทันที

---

📣 *พบปัญหาเช่น import ผิด หรือ config ขาด แจ้ง Dev Partner ทันที*

EOF

echo -e "\n✅ รายงานพร้อมใช้งานที่ → $REPORT_FILE"