#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail
IFS=$'\n\t'

# === 🗑️ CLEANUP SCRIPT — FULL VERSION ===
NOW=$(date +"%Y%m%d-%H%M%S")
ROOT_DIR="$(pwd)"

echo -e "\n🧹 เริ่มลบไฟล์ขยะที่สร้างจากสคริปต์หลัก..."

# === 📂 TARGET FILE PATTERNS ===
PATTERNS=(
  "build-*.log"
  "env-*.txt"
  "project-info-*.json"
  "tree-*.txt"
  "summary-*.md"
  "summary-prompt-*.md"
  "summary-*.txt"
  "depcheck-*.json"
  "eslint-unused-*.log"
  "coverage-summary-*.txt"
  "docker-info-*.txt"
  "gitignore-*.txt"
  "ci-info-*.txt"
  "*.txt"  # ลบ .txt ที่สคริปต์หลักรันแล้วไม่ได้จับ pattern เฉพาะ
)

# === 📦 BUILD OUTPUT DIRS ===
BUILD_DIRS=(
  "dist"
  "coverage"
  ".vite"
)

for dir in "${BUILD_DIRS[@]}"; do
  if [[ -d "$dir" ]]; then
    rm -rf -- "$dir"
    echo "✅ ลบไดเรกทอรี: $dir"
  else
    echo "ℹ️ ไม่มีไดเรกทอรี: $dir"
  fi
done

# === 🔄 LOOP DELETE PATTERNS ===
for pattern in "${PATTERNS[@]}"; do
  MATCHED_FILES=($(compgen -G "$pattern" || true))
  if [[ ${#MATCHED_FILES[@]} -gt 0 ]]; then
    rm -f -- "${MATCHED_FILES[@]}"
    echo "✅ ลบ pattern: $pattern (${#MATCHED_FILES[@]} ไฟล์)"
  else
    echo "ℹ️ ไม่พบไฟล์ที่ตรงกับ pattern: $pattern"
  fi
done

# === 📄 รายงานการลบ ===
echo -e "\n📋 รายงานการลบไฟล์และโฟลเดอร์ขยะ:"
echo "📍 เวลาทำงาน: $NOW"
echo "📍 โฟลเดอร์ที่ทำงาน: $ROOT_DIR"

echo -e "\n🧼 เสร็จสิ้นการลบไฟล์ขยะเรียบร้อย"