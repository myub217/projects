#!/bin/bash
set -euo pipefail

# 🎯 เริ่มการวิเคราะห์โปรเจกต์

# 📅 Timestamp สำหรับตั้งชื่อไฟล์
TIMESTAMP=$(LC_ALL=C date +"%Y%m%d-%H%M%S")

# 📂 ชื่อไฟล์ผลลัพธ์
INFO_JSON="project-info-$TIMESTAMP.json"
ENV_TXT="env-vars-$TIMESTAMP.txt"
TREE_TXT="project-structure-$TIMESTAMP.txt"
BUILD_LOG="build-$TIMESTAMP.log"
SUMMARY_PROMPT="project-summary-prompt-$TIMESTAMP.txt"
DEPCHECK_JSON="depcheck-$TIMESTAMP.json"
ESLINT_LOG="eslint-unused-$TIMESTAMP.log"

echo -e "\n🟦 [1/8] ตรวจสอบเครื่องมือพื้นฐาน..."
for TOOL in jq depcheck eslint node; do
  if ! command -v "$TOOL" &>/dev/null; then
    echo "⚠️ ไม่พบ $TOOL → ติดตั้ง..."
    npm install -g "$TOOL"
  else
    echo "✅ $TOOL พร้อมใช้งาน"
  fi
done

# ----------------------------------

echo -e "\n🟦 [2/8] ตรวจสอบไฟล์สำคัญของโปรเจกต์..."
CONFIG_FILES=(vite.config.mjs tailwind.config.mjs tsconfig.json eslint.config.mjs)
CONFIG_STATUS=()
for FILE in "${CONFIG_FILES[@]}"; do
  [ -f "$FILE" ] && CONFIG_STATUS+=("✅ $FILE") || CONFIG_STATUS+=("❌ $FILE")
done

if [ ! -r "package.json" ]; then
  echo "❌ ไม่สามารถอ่าน package.json"; exit 1
fi

PROJECT_NAME=$(jq -r '.name // "Unnamed Project"' package.json)
jq '{dependencies, devDependencies, scripts}' package.json > "$INFO_JSON"
echo "✅ export → $INFO_JSON"

# ----------------------------------

echo -e "\n🟦 [3/8] ดึง ENV และโครงสร้างโฟลเดอร์..."
if [ -f .env ]; then
  cp .env "$ENV_TXT"
else
  printenv > "$ENV_TXT"
fi
echo "✅ ENV → $ENV_TXT"

generate_tree() {
  if command -v tree &>/dev/null; then
    tree -L "$1"
  else
    find . -maxdepth "$1" -print
  fi
}
generate_tree 3 > "$TREE_TXT"
echo "✅ โครงสร้าง → $TREE_TXT"

# ----------------------------------

echo -e "\n🟦 [4/8] รัน build (เลือกคำสั่งอัตโนมัติ)..."
if command -v pnpm &>/dev/null; then BUILD_CMD=(pnpm run build)
elif command -v yarn &>/dev/null; then BUILD_CMD=(yarn build)
else BUILD_CMD=(npm run build); fi

echo "🛠️ คำสั่ง: ${BUILD_CMD[*]}"
if "${BUILD_CMD[@]}" > "$BUILD_LOG" 2>&1; then
  echo "✅ build สำเร็จ → $BUILD_LOG"
else
  echo "❌ build ล้มเหลว → $BUILD_LOG"
  exit 1
fi

# ----------------------------------

echo -e "\n🟦 [5/8] ตรวจสอบ Component ตัวอย่าง..."
TOP_COMPONENTS=$(find src/components -type f -name "*.tsx" 2>/dev/null | head -n 10 | sed 's/^/- /' || echo "(ไม่มี)")
echo "✅ รายการ Component: $(echo "$TOP_COMPONENTS" | wc -l) ไฟล์"

# ----------------------------------

echo -e "\n🟦 [6/8] ตรวจสอบ Dependencies ที่ไม่ถูกใช้ (depcheck)..."
depcheck --config depcheck.config.js --json > "$DEPCHECK_JSON" || echo "⚠️ depcheck มี error"
echo "✅ depcheck → $DEPCHECK_JSON"

# ----------------------------------

echo -e "\n🟦 [7/8] ตรวจสอบ unused imports (eslint)..."
eslint --ext .ts,.tsx,.js,.jsx --rule 'unused-imports/no-unused-imports: error' ./src > "$ESLINT_LOG" 2>&1 || true
echo "✅ eslint → $ESLINT_LOG"

# ----------------------------------

echo -e "\n🟦 [8/8] สรุปผลทั้งหมด..."
DEPS=$(jq -r '.dependencies | keys | join(", ")' "$INFO_JSON")
DEV_DEPS=$(jq -r '.devDependencies | keys | join(", ")' "$INFO_JSON")
SCRIPTS=$(jq -r '.scripts | keys | join(", ")' "$INFO_JSON")
DEPCHECK_UNUSED=$(jq -r '.dependencies // {} | keys | join(", ")' "$DEPCHECK_JSON")
DEPCHECK_MISSING=$(jq -r '.missing // {} | keys | join(", ")' "$DEPCHECK_JSON")
TREE_PREVIEW=$(head -n 20 "$TREE_TXT")
BUILD_PREVIEW=$(tail -n 20 "$BUILD_LOG")

cat > "$SUMMARY_PROMPT" <<EOF
🧠 สรุปภาพรวมโปรเจกต์: $PROJECT_NAME

📦 เทคโนโลยีที่ใช้:
React, TypeScript, Vite, TailwindCSS, DaisyUI, Express, Framer Motion

🔧 ไฟล์ config ที่สำคัญ:
$(printf '%s\n' "${CONFIG_STATUS[@]}")

🧩 ตัวอย่าง Component หลัก:
$TOP_COMPONENTS

📦 Dependencies:
$DEPS

🧰 DevDependencies:
$DEV_DEPS

⚙️ Scripts:
$SCRIPTS

📂 โครงสร้างโฟลเดอร์ (ตัวอย่าง):
$TREE_PREVIEW

📄 ผลลัพธ์ build (ท้าย log):
$BUILD_PREVIEW

🚫 Dependencies ที่ไม่ถูกใช้งาน (depcheck):
$DEPCHECK_UNUSED

❗ Missing dependencies ที่โปรเจกต์เรียกใช้ แต่ไม่ได้ติดตั้ง (depcheck):
$DEPCHECK_MISSING

🧹 รายการ unused imports ตาม eslint:
→ $ESLINT_LOG

📌 พร้อมใช้สำหรับวิเคราะห์/commit ต่อ
EOF

echo -e "\n✅ บันทึกสรุป → $SUMMARY_PROMPT"
echo "🎉 เสร็จสมบูรณ์!"