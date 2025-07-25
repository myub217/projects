#!/bin/bash

echo "🧹 ตรวจหา static asset ที่ไม่ได้ใช้..."

# ใช้ fdfind หรือ find
ASSET_DIRS=("public/assets" "public/images" "src/assets")
for DIR in "${ASSET_DIRS[@]}"; do
  if [ -d "$DIR" ]; then
    echo "📂 ตรวจสอบ $DIR"
    for FILE in $(find "$DIR" -type f); do
      FILENAME=$(basename "$FILE")
      grep -r "$FILENAME" src/ > /dev/null || echo "⚠️ ไม่ได้ใช้: $FILE"
    done
  fi
done