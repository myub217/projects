#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail
IFS=$'\n\t'

# === 🗑️ CLEANUP SCRIPT ===
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
)

# === 📦 BUILD OUTPUT DIR ===
VITE_BUILD_OUTDIR="dist"
[[ -d "$VITE_BUILD_OUTDIR" ]] && rm -rf -- "$VITE_BUILD_OUTDIR" && echo "✅ ลบ $VITE_BUILD_OUTDIR แล้ว" || echo "ℹ️ ไม่มี $VITE_BUILD_OUTDIR"

# === 🔄 LOOP DELETE PATTERNS ===
for pattern in "${PATTERNS[@]}"; do
  FILES=($ROOT_DIR/$pattern)
  if compgen -G "$pattern" > /dev/null; then
    rm -f -- "${FILES[@]}"
    echo "✅ ลบ pattern: $pattern (${#FILES[@]} ไฟล์)"
  else
    echo "ℹ️ ไม่พบไฟล์ที่ตรงกับ pattern: $pattern"
  fi
done

echo -e "\n🧼 เสร็จสิ้นการลบไฟล์ขยะเรียบร้อย"