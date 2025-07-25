#!/bin/bash

set -euo pipefail

# =============================================
# 🔁 JP Visual & Docs :: Auto Import Scanner & Config Updater
# =============================================
# เวอร์ชัน: 2025.07
# อัปเดต import ทั้งโปรเจกต์ให้อัตโนมัติ
# ครอบคลุม: vite.config.ts, auto-imports.d.ts, .eslintrc, tsconfig.json
# รองรับระบบ alias, IntelliSense, auto-complete, TypeScript types

# === CONFIG ===
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TOOLS_DIR="$ROOT_DIR/tools"
TEMP_DIR="$ROOT_DIR/temp"
IMPORTS_FILE="$TEMP_DIR/imports.json"

declare -A SCRIPTS=(
  ["update-vite-config.js"]="🧩 อัปเดต vite.config.ts"
  ["update-auto-imports-dts.js"]="📄 อัปเดต auto-imports.d.ts"
  ["update-eslint-auto-import.js"]="📏 อัปเดต .eslintrc-auto-import.json"
  ["update-tsconfig-types.js"]="🧠 อัปเดต tsconfig.json > compilerOptions.types"
)

# === STEP 1: เตรียม temp และ export import ทั้งโปรเจกต์
echo "📦 เตรียม temp directory..."
mkdir -p "$TEMP_DIR"

echo "🔍 สแกน import ทั้งระบบ..."
if ! node "$TOOLS_DIR/find-imports.js" > "$IMPORTS_FILE"; then
  echo "❌ ไม่สามารถสแกน import ได้"
  exit 1
fi

# === STEP 2: อัปเดต config ต่างๆ ด้วยสคริปต์
for script in "${!SCRIPTS[@]}"; do
  script_path="$TOOLS_DIR/$script"
  label="${SCRIPTS[$script]}"

  if [ -f "$script_path" ]; then
    echo -e "\n$label"
    if output=$(node "$script_path" "$(cat "$IMPORTS_FILE")" 2>&1); then
      echo "✅ สำเร็จ: $label"
    else
      echo "❌ ล้มเหลว: $label"
      echo "$output"
      exit 1
    fi
  else
    echo "⚠️ ไม่พบสคริปต์: $script_path"
  fi
done

# === STEP 3: จบงาน
echo -e "\n✅ เสร็จสิ้น :: ระบบ AutoImport อัปเดตเรียบร้อยแล้ว!"