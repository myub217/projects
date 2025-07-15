#!/bin/bash
# 🔍 check-structure.sh – ตรวจสอบโครงสร้างโปรเจกต์ + ค้นหา keyword (option) + export log สรุปโครงสร้างโปรเจกต์ .md
# ใช้ใน Termux, Linux หรือ Git Bash ได้ทันที

ROOT_DIR="$(pwd)"
SEARCH_TERM="$1"
EXIT_CODE=0
LOG_FILE="check-structure-log.md"

# ─────────────────────────────────────────────────────────────
# เริ่มเขียน log ใหม่ (Markdown header)
echo "# Project Structure Check Report" > "$LOG_FILE"
echo "ตรวจสอบเมื่อ: $(date)" >> "$LOG_FILE"
echo "" >> "$LOG_FILE"

# ─────────────────────────────────────────────────────────────
# 📁 ตรวจสอบโฟลเดอร์และไฟล์หลัก
REQUIRED_PATHS=(
  "src/"
  "src/assets/"
  "src/components/"
  "public/"
  "dist/"
  "vite.config.mjs"
  "tailwind.config.mjs"
  "postcss.config.js"
  "package.json"
  "pnpm-lock.yaml"
  "eslint.config.mjs"
  "jest.config.cjs"
  "tsconfig.json"
  "server.ts"
)

echo "## Essential files and directories" >> "$LOG_FILE"
echo "" >> "$LOG_FILE"
echo "ตรวจสอบไฟล์และโฟลเดอร์หลัก:" | tee -a "$LOG_FILE"
for path in "${REQUIRED_PATHS[@]}"; do
  if [ -e "$ROOT_DIR/$path" ]; then
    echo "✅ Found: $path" | tee -a "$LOG_FILE"
  else
    echo "❌ Missing: $path" | tee -a "$LOG_FILE"
    EXIT_CODE=1
  fi
done

# ─────────────────────────────────────────────────────────────
# 📦 ตรวจ dependencies ที่ควรมีใน package.json
REQUIRED_DEPS=(
  "react"
  "react-dom"
  "react-router-dom"
  "vite"
  "tailwindcss"
  "daisyui"
  "framer-motion"
  "eslint"
  "jest"
  "typescript"
)

echo -e "\n## Required dependencies in package.json" >> "$LOG_FILE"
echo "" >> "$LOG_FILE"
echo "ตรวจสอบ dependencies:" | tee -a "$LOG_FILE"
for dep in "${REQUIRED_DEPS[@]}"; do
  if grep -q "\"$dep\"" package.json; then
    echo "✅ $dep" | tee -a "$LOG_FILE"
  else
    echo "❌ $dep missing" | tee -a "$LOG_FILE"
    EXIT_CODE=1
  fi
done

# ─────────────────────────────────────────────────────────────
# 🧩 ตรวจ feature modules/optional
OPTIONAL_PATHS=(
  "__mocks__/"
  "src/__tests__/"
  "coverage/"
  "project-info/"
  "api/"
  "src/components/AdminBoard/"
  "src/components/Features/"
)

echo -e "\n## Optional feature modules/folders" >> "$LOG_FILE"
echo "" >> "$LOG_FILE"
echo "ตรวจสอบโมดูลและโฟลเดอร์เสริม:" | tee -a "$LOG_FILE"
found_optional=0
for path in "${OPTIONAL_PATHS[@]}"; do
  if [ -d "$ROOT_DIR/$path" ]; then
    echo "📁 Found module: $path" | tee -a "$LOG_FILE"
    found_optional=1
  fi
done
[ $found_optional -eq 0 ] && echo "- None found" | tee -a "$LOG_FILE"

# ─────────────────────────────────────────────────────────────
# ⚠️ ตรวจความซ้ำซ้อนของ config
if [ -f "postcss.config.js" ] && [ -f "postcss.config.cjs" ]; then
  echo -e "\n⚠️ Found both postcss.config.js and postcss.config.cjs — keep one" | tee -a "$LOG_FILE"
  EXIT_CODE=1
fi

# ─────────────────────────────────────────────────────────────
# 📝 สรุปโครงสร้างโปรเจกต์ (ตัวอย่างสั้น ๆ)
echo -e "\n## Project Structure Summary" >> "$LOG_FILE"
echo "" >> "$LOG_FILE"
cat <<EOF >> "$LOG_FILE"
โปรเจกต์นี้ใช้เทคโนโลยีหลัก:
- React + React Router DOM สำหรับ SPA
- Vite เป็น bundler และ dev server
- TailwindCSS + DaisyUI สำหรับ styling และธีม
- Framer Motion สำหรับ animation
- ESLint + Jest สำหรับ linting และ testing
- Typescript เป็นภาษาหลัก

โครงสร้างไฟล์หลัก:
- \`src/\`: โค้ด React หลัก (components, assets)
- \`public/\`: ไฟล์ static
- \`dist/\`: โฟลเดอร์ build ผลลัพธ์
- ไฟล์ config ต่าง ๆ: vite.config.mjs, tailwind.config.mjs, postcss.config.js, eslint.config.mjs, jest.config.cjs, tsconfig.json
- server.ts สำหรับ backend หรือ API

โมดูลเสริมที่พบ:
EOF
grep -E '^📁 Found module:' "$LOG_FILE" || echo "- ไม่มีโมดูลเสริม" >> "$LOG_FILE"

# ─────────────────────────────────────────────────────────────
# 📝 สรุปโปรเจกต์ และตัวอย่างคำสั่งค้นหา
echo -e "\n## Project summary & search example" >> "$LOG_FILE"
echo "" >> "$LOG_FILE"
echo "- รายละเอียดโปรเจกต์: project-info/project-summary.md" | tee -a "$LOG_FILE"
echo "- ค้นหา keyword เช่น ./check-structure.sh keyword" | tee -a "$LOG_FILE"

# ─────────────────────────────────────────────────────────────
# 🔍 ค้นหา keyword ถ้ามี
if [ -n "$SEARCH_TERM" ]; then
  echo -e "\n## Search results for keyword: '$SEARCH_TERM'" >> "$LOG_FILE"
  echo "🔍 Searching for: '$SEARCH_TERM'..." | tee -a "$LOG_FILE"
  grep -Iinr --color=never "$SEARCH_TERM" ./src ./public >> "$LOG_FILE" 2>/dev/null || {
    echo "❌ Not found" | tee -a "$LOG_FILE"
  }
fi

# ─────────────────────────────────────────────────────────────
echo -e "\n✅ Done." | tee -a "$LOG_FILE"

echo "Log saved to: $LOG_FILE"
exit $EXIT_CODE