#!/bin/bash

set -euo pipefail

# =============================================
# JP Visual & Docs :: Auto Import & Config Setup Runner
# =============================================
# รวมสคริปต์ auto-imports, tsconfig paths, vite alias update
# เช็คไฟล์ก่อนรัน แจ้งสถานะอย่างชัดเจน พร้อม log ผลลัพธ์
# ใช้งานง่าย ปรับแก้ได้ไว

# === Config ===
TOOLS_DIR="./tools"

declare -A SCRIPTS=(
  ["generate-auto-imports.js"]="สร้าง auto-imports.d.ts"
  ["update-tsconfig-paths.js"]="อัปเดต tsconfig.json paths"
  ["update-vite-alias.js"]="อัปเดต alias ใน vite.config.ts"
)

echo "🚀 เริ่มกระบวนการตั้งค่า auto-imports และอัปเดต config"
echo "----------------------------------------------------------"

run_script() {
  local script_name=$1
  local description=$2
  local script_path="$TOOLS_DIR/$script_name"

  if [ -f "$script_path" ]; then
    echo -e "\n🛠️ กำลังรัน: $description"
    if output=$(node "$script_path" 2>&1); then
      echo "✅ สำเร็จ: $description"
    else
      echo "❌ ล้มเหลว: $description"
      echo "รายละเอียด: $output"
      exit 1
    fi
  else
    echo "⚠️ ไม่พบสคริปต์: $script_name ($script_path)"
    exit 1
  fi
}

for script in "${!SCRIPTS[@]}"; do
  run_script "$script" "${SCRIPTS[$script]}"
done

echo -e "\n✅ เสร็จสิ้นกระบวนการตั้งค่า auto-imports และอัปเดต config"
echo "----------------------------------------------------------"