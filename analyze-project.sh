#!/bin/bash
set -euo pipefail

# ============================
# 🔧 Timestamp เพื่อแยกชุดไฟล์
# ============================
TIMESTAMP=$(LC_ALL=C date +"%Y%m%d-%H%M%S")

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
  echo "❌ jq ไม่ถูกติดตั้ง! โปรดติดตั้งก่อน (apt install jq หรือ brew install jq)"
  exit 1
fi

# ============================
# 📦 ตรวจสอบว่า package.json อยู่หรือไม่ และสิทธิ์อ่านได้
# ============================
if [ ! -f "package.json" ]; then
  echo "❌ ไม่พบไฟล์ package.json"
  exit 1
fi

if [ ! -r "package.json" ]; then
  echo "❌ ไม่สามารถอ่าน package.json"
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
    echo "⚠️ ใช้ find แทน tree"
    find . -maxdepth "$maxdepth" -print 2>/dev/null || echo "❌ สร้างโครงสร้างล้มเหลว"
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
echo "✅ สร้าง $INFO_JSON"

# ============================
# 🌍 Dump env vars
# ============================
printenv > "$ENV_TXT"
echo "✅ สร้าง $ENV_TXT"

# ============================
# 📁 Tree structure
# ============================
generate_tree 3 > "$TREE_TXT"
echo "✅ สร้าง $TREE_TXT"

# ============================
# 🛠️ Build ด้วย fallback pnpm → yarn → npm
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
  echo "✅ build สำเร็จ → $BUILD_LOG"
else
  echo "❌ build ล้มเหลว → $BUILD_LOG"
  exit 1
fi

# ============================
# 🔍 ตรวจสอบไฟล์ config สำคัญ
# ============================
CONFIG_STATUS=()
for FILE in vite.config.js vite.config.mjs tailwind.config.js tailwind.config.mjs tsconfig.json tsconfig.base.json; do
  if [ -f "$FILE" ]; then
    CONFIG_STATUS+=("✅ $FILE")
  else
    CONFIG_STATUS+=("❌ $FILE")
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
$(printf '%s\n' "${CONFIG_STATUS[@]}")

🧩 ตัวอย่าง Component หลัก:
$TOP_COMPONENTS

📦 Dependencies:
$DEPS

🧰 DevDependencies:
$DEV_DEPS

🛠️ Scripts:
$SCRIPTS

📂 โครงสร้างโฟลเดอร์ (ตัวอย่าง):
$TREE_PREVIEW

🧪 ผลลัพธ์ build (ท้าย log):
$BUILD_PREVIEW

📌 พร้อมใช้งานสำหรับวิเคราะห์หรือ commit ต่อ
EOF

echo "✅ สรุปไว้ที่ $SUMMARY_PROMPT"
echo "🎉 เสร็จสมบูรณ์!"