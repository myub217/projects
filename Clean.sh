#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail
IFS=$'\n\t'

# === 🧹 CLEANUP SCRIPT (SAFE MODE) ===
NOW=$(date +"%Y%m%d-%H%M%S")
ROOT_DIR="$(pwd)"

echo -e "\n🧹 เริ่มลบไฟล์ขยะ..."

# === 🎯 SAFE FILE PATTERNS ===
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
  "ts-error-*.log"
  "routes-*.json"
  "i18n-*.json"
)

# === 📦 BUILD-LIKE OUTPUT DIRS ===
BUILD_DIRS=(
  "dist"
  "coverage"
  ".vite"
  "dev-dist"
  "diagnostic-"*
)

for dir in "${BUILD_DIRS[@]}"; do
  if [[ -e "$dir" ]]; then
    rm -rf -- "$dir"
    echo "✅ ลบ: $dir"
  else
    echo "ℹ️ ไม่พบ: $dir"
  fi
done

# === 🔁 LOOP DELETE FILES ===
for pattern in "${PATTERNS[@]}"; do
  MATCHED=($(compgen -G "$pattern" || true))
  if [[ ${#MATCHED[@]} -gt 0 ]]; then
    rm -f -- "${MATCHED[@]}"
    echo "✅ ลบ: $pattern (${#MATCHED[@]} ไฟล์)"
  else
    echo "ℹ️ ไม่พบ: $pattern"
  fi
done

# === 📋 REPORT ===
echo -e "\n📋 ล้างไฟล์เสร็จแล้ว:"
echo "📍 เวลา: $NOW"
echo "📍 ที่: $ROOT_DIR"