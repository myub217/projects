#!/bin/bash

set -euo pipefail

# =============================================
# JP Visual & Docs :: Auto Import Scanner & Config Updater
# =============================================
# ขั้นตอน:
# 1. สแกน import ทั่วทั้งโปรเจกต์
# 2. อัปเดต: vite.config.ts, auto-imports.d.ts, ESLint, tsconfig.json
# รองรับระบบ alias, types, linter, auto-complete

# === Config ===
TOOLS_DIR="./tools"
TEMP_DIR="./temp"
IMPORTS_FILE="$TEMP_DIR/imports.json"

declare -A SCRIPTS=(
  ["update-vite-config.js"]="อัปเดต vite.config.ts"
  ["update-auto-imports-dts.js"]="อัปเดต auto-imports.d.ts"
  ["update-eslint-auto-import.js"]="อัปเดต eslintrc-auto-import.json"
  ["update-tsconfig-types.js"]="อัปเดต tsconfig.json"
)

# === Step 1: เตรียม temp และสแกน import
echo "📦 เตรียมโฟลเดอร์ temp..."
mkdir -p "$TEMP_DIR"

echo "🧠 สแกน import ทั้งโปรเจกต์..."
node "$TOOLS_DIR/find-imports.js" > "$IMPORTS_FILE"

# === Step 2: รันแต่ละสคริปต์โดยส่ง input json
for script in "${!SCRIPTS[@]}"; do
  script_path="$TOOLS_DIR/$script"
  description="${SCRIPTS[$script]}"

  if [ -f "$script_path" ]; then
    echo -e "\n🛠️ $description"
    if output=$(node "$script_path" "$(cat "$IMPORTS_FILE")" 2>&1); then
      echo "✅ สำเร็จ: $description"
    else
      echo "❌ ล้มเหลว: $description"
      echo "$output"
      exit 1
    fi
  else
    echo "⚠️ ไม่พบสคริปต์: $script_path"
  fi
done

echo -e "\n✅ เสร็จสิ้น AutoImport System Updated!"