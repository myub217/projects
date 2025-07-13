#!/bin/bash
set -euo pipefail

# ============================
# 🔧 Timestamp เพื่อแยกชุดไฟล์
# ============================
TIMESTAMP=$(date +"%Y%m%d-%H%M%S")

# ============================
# 🔧 ไฟล์ผลลัพธ์ที่จะถูกสร้าง
# ============================
INFO_JSON="project-info-$TIMESTAMP.json"
ENV_TXT="env-vars-$TIMESTAMP.txt"
TREE_TXT="project-structure-$TIMESTAMP.txt"
BUILD_LOG="build-$TIMESTAMP.log"
SUMMARY_PROMPT="project-summary-prompt-$TIMESTAMP.txt"

echo "⏳ กำลังรวบรวมข้อมูลโปรเจกต์..."

# ============================
# ✅ ตรวจสอบว่า jq ถูกติดตั้ง
# ============================
if ! command -v jq &> /dev/null; then
  echo "❌ jq ไม่ถูกติดตั้ง! โปรดติดตั้งก่อน (เช่น: apt install jq หรือ brew install jq)"
  exit 1
fi

# ============================
# 📦 ตรวจสอบว่า package.json อยู่หรือไม่ และสิทธิ์อ่านได้
# ============================
if [ ! -f "package.json" ]; then
  echo "❌ ไม่พบไฟล์ package.json ในโฟลเดอร์ปัจจุบัน"
  exit 1
fi

if [ ! -r "package.json" ]; then
  echo "❌ ไม่สามารถอ่านไฟล์ package.json กรุณาตรวจสอบสิทธิ์"
  exit 1
fi

# ============================
# 📁 Fallback ถ้าไม่มี tree ใช้ find
# ============================
function generate_tree {
  local maxdepth=$1
  if command -v tree &> /dev/null; then
    tree -L "$maxdepth"
  else
    echo "⚠️ ไม่มีคำสั่ง tree ติดตั้งไว้ ใช้ find แทน"
    find . -maxdepth "$maxdepth" -print 2>/dev/null || echo "❌ พบข้อผิดพลาดในการสร้างโครงสร้างโปรเจกต์"
  fi
}

# ============================
# ดึงชื่อโปรเจกต์
# ============================
PROJECT_NAME=$(jq -r '.name // "Unnamed Project"' package.json)

# ============================
# 📦 Export dependencies + scripts
# ============================
jq '{dependencies, devDependencies, scripts}' package.json > "$INFO_JSON"
echo "✅ สร้างไฟล์ $INFO_JSON"

# ============================
# 🌍 Dump env vars
# ============================
printenv > "$ENV_TXT"
echo "✅ สร้างไฟล์ $ENV_TXT"

# ============================
# 📁 Tree structure
# ============================
generate_tree 3 > "$TREE_TXT"
echo "✅ สร้างไฟล์ $TREE_TXT"

# ============================
# 🛠️ Build ด้วย fallback pnpm → yarn → npm (ไม่มี --reporter/--json flag เพื่อความ compatible)
# ============================
BUILD_CMD=()
if command -v pnpm &> /dev/null; then
  BUILD_CMD=(pnpm run build)
elif command -v yarn &> /dev/null; then
  BUILD_CMD=(yarn build)
elif command -v npm &> /dev/null; then
  BUILD_CMD=(npm run build)
else
  echo "❌ ไม่พบคำสั่ง pnpm, yarn หรือ npm"
  exit 1
fi

echo "⏳ กำลังรันคำสั่ง build: ${BUILD_CMD[*]}"
if "${BUILD_CMD[@]}" > "$BUILD_LOG" 2>&1; then
  echo "✅ build สำเร็จ บันทึกที่ $BUILD_LOG"
else
  echo "❌ build ล้มเหลว รายละเอียดดูใน $BUILD_LOG"
  exit 1
fi

# ============================
# 🔍 ตรวจสอบไฟล์ config สำคัญ
# ============================
CONFIG_STATUS=""
for FILE in vite.config.js vite.config.mjs tailwind.config.js tailwind.config.mjs tsconfig.json tsconfig.base.json; do
  if [ -f "$FILE" ]; then
    CONFIG_STATUS+="✅ พบไฟล์ $FILE\n"
  else
    CONFIG_STATUS+="❌ ไม่พบไฟล์ $FILE\n"
  fi
done

# ============================
# 📦 ดึง dependency/script string
# ============================
DEPS=$(jq -r '.dependencies | keys | if length > 0 then join(", ") else "ไม่มี dependencies" end' "$INFO_JSON")
DEV_DEPS=$(jq -r '.devDependencies | keys | if length > 0 then join(", ") else "ไม่มี devDependencies" end' "$INFO_JSON")
SCRIPTS=$(jq -r '.scripts | keys | if length > 0 then join(", ") else "ไม่มี scripts" end' "$INFO_JSON")

# ============================
# 🧩 Component ตัวอย่าง
# ============================
if [ -d "src/components" ]; then
  TOP_COMPONENTS=$(find src/components -type f -name "*.tsx" | head -n 10 | sed 's/^/- /')
  [ -z "$TOP_COMPONENTS" ] && TOP_COMPONENTS="(ไม่มีไฟล์ .tsx ใน src/components)"
else
  TOP_COMPONENTS="(ไม่มีโฟลเดอร์ src/components)"
fi

# ============================
# 📄 preview log
# ============================
TREE_PREVIEW=$(head -n 20 "$TREE_TXT")
BUILD_PREVIEW=$(tail -n 20 "$BUILD_LOG")

# ============================
# 🧠 Generate summary
# ============================
cat > "$SUMMARY_PROMPT" <<EOF
🧠 สรุปภาพรวมโปรเจกต์: $PROJECT_NAME

📦 เทคโนโลยีที่ใช้:
React, TypeScript, Vite, TailwindCSS, DaisyUI, Express, Framer Motion

🔧 ไฟล์ config ที่สำคัญ:
$CONFIG_STATUS

🧩 ตัวอย่าง Component หลัก:
$TOP_COMPONENTS

📦 Dependencies หลัก:
$DEPS

🧰 DevDependencies:
$DEV_DEPS

🛠️ สคริปต์ใน package.json:
$SCRIPTS

📂 โครงสร้างโฟลเดอร์ (ตัวอย่าง 20 บรรทัดแรก):
$TREE_PREVIEW

🧪 ผลลัพธ์การ build (20 บรรทัดท้าย):
$BUILD_PREVIEW

📌 ใช้ข้อมูลนี้สำหรับวิเคราะห์ ตรวจสอบ แนะนำ หรือช่วยพัฒนาต่อ
EOF

echo "✅ สร้างไฟล์สรุป $SUMMARY_PROMPT"
echo "🎉 เสร็จสิ้นทั้งหมด! พร้อมสำหรับการวิเคราะห์หรือ commit"