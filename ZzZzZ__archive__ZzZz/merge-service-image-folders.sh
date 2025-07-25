#!/bin/bash

echo "📦 รวม service images ไปที่ public/images/services/"

SRC_DIRS=("src/assets/services" "src/images/services")
TARGET="public/images/services"

mkdir -p "$TARGET"

for SRC in "${SRC_DIRS[@]}"; do
  if [ -d "$SRC" ]; then
    echo "📁 ย้ายจาก: $SRC"
    find "$SRC" -type f -exec mv {} "$TARGET/" \;
    rm -rf "$SRC"
    echo "✅ ย้ายเรียบร้อย -> $TARGET/"
  fi
done