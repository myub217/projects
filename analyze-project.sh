#!/bin/bash
set -euo pipefail

# ============================
# 🔧 ไฟล์ผลลัพธ์ที่จะถูกสร้าง
# ============================
INFO_JSON="project-info.json"
ENV_TXT="env-vars.txt"
TREE_TXT="project-structure.txt"
BUILD_LOG="build.log"
SUMMARY_PROMPT="project-summary-prompt.txt"

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
# ฟังก์ชัน fallback ใช้ find แทน tree
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
# ดึงชื่อโปรเจกต์จาก package.json
# ============================
PROJECT_NAME=$(jq -r '.name // "Unnamed Project"' package.json)

# ============================
# 📦 ดึง dependencies, devDependencies, scripts เก็บไฟล์ JSON
# ============================
jq '{dependencies, devDependencies, scripts}' package.json > "$INFO_JSON"
echo "✅ สร้างไฟล์ $INFO_JSON เรียบร้อย"

# ============================
# 🌍 เก็บ environment variables
# ============================
printenv > "$ENV_TXT"
echo "✅ สร้างไฟล์ $ENV_TXT เรียบร้อย"

# ============================
# 📁 สร้าง tree โครงสร้างโปรเจกต์ (ระดับ 3)
# ============================
generate_tree 3 > "$TREE_TXT"
echo "✅ สร้างไฟล์ $TREE_TXT เรียบร้อย"

# ============================
# 🛠️ สั่ง build และเก็บ log
# ============================
if command -v pnpm &> /dev/null; then
  echo "⏳ รัน pnpm run build และเก็บ log ที่ $BUILD_LOG ..."
  if pnpm run build > "$BUILD_LOG" 2>&1; then
    echo "✅ สร้างไฟล์ $BUILD_LOG สำเร็จ"
  else
    echo "❌ build ล้มเหลว ดูรายละเอียดใน $BUILD_LOG"
    exit 1
  fi
else
  echo "❌ ไม่พบคำสั่ง pnpm"
  exit 1
fi

# ============================
# 📂 ตรวจสอบไฟล์ config สำคัญ
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
# 📦 อ่านข้อมูลจาก JSON พร้อมเช็คกรณีไม่มี dependencies/devDependencies/scripts
# ============================
DEPS=$(jq -r '.dependencies | keys | if length > 0 then join(", ") else "ไม่มี dependencies" end' "$INFO_JSON")
DEV_DEPS=$(jq -r '.devDependencies | keys | if length > 0 then join(", ") else "ไม่มี devDependencies" end' "$INFO_JSON")
SCRIPTS=$(jq -r '.scripts | keys | if length > 0 then join(", ") else "ไม่มี scripts" end' "$INFO_JSON")

# ============================
# 📁 Top Components (ตัวอย่าง) จำกัด 10 ไฟล์แรก
# ============================
TOP_COMPONENTS=""
if [ -d "src/components" ]; then
  TOP_COMPONENTS=$(find src/components -type f -name "*.tsx" 2>/dev/null | head -n 10 | sed 's/^/- /')
  if [ -z "$TOP_COMPONENTS" ]; then
    TOP_COMPONENTS="(ไม่มีไฟล์ .tsx ใน src/components)"
  fi
else
  TOP_COMPONENTS="(ไม่มีโฟลเดอร์ src/components)"
fi

# ============================
# 📄 เตรียมข้อมูล preview สำหรับ tree และ build log
# ============================
TREE_PREVIEW=$(head -n 20 "$TREE_TXT")
BUILD_PREVIEW=$(tail -n 20 "$BUILD_LOG")

# ============================
# 🧠 สร้าง prompt summary
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

echo "✅ สร้างไฟล์ prompt summary ที่ $SUMMARY_PROMPT เรียบร้อย"
echo "🎉 สำเร็จทั้งหมด! พร้อมใช้งานสำหรับ AI วิเคราะห์ต่อได้ทันที"