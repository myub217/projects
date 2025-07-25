#!/bin/bash

# ===========================================================
# 🛠️ Vite Config Audit & Clean Script (compatible with grep)
# ===========================================================
# ✅ ตรวจ alias ที่ไม่ได้ใช้ใน vite.config.ts
# ✅ ตรวจ plugin imports ที่ไม่ได้ถูกเรียกใช้งานจริง
# ✅ ล้าง cache + dist + node_modules แล้วติดตั้งใหม่ (pnpm)

VITE_CONFIG="vite.config.ts"
SRC_DIR="./src"

echo -e "\n🔍 ตรวจสอบ alias ใน vite.config.ts ว่าใช้งานจริงไหม..."

ALIASES=$(grep -Po "(?<=alias:\s*\{)[^}]*" "$VITE_CONFIG" 2>/dev/null | \
          grep -Po "'[^']+':\s*'[^']+'" | sed "s/'//g" | awk -F: '{print $1}' | tr -d ' ')

if [ -z "$ALIASES" ]; then
  echo "⚠️  ไม่พบ alias ใน vite.config.ts"
else
  for alias in $ALIASES; do
    count=$(grep -r --include='*.ts' --include='*.tsx' --include='*.js' --include='*.jsx' "@$alias/" "$SRC_DIR" | wc -l)
    if [ "$count" -eq 0 ]; then
      echo "❌ Alias '@$alias' ไม่ถูกใช้งาน"
    else
      echo "✅ Alias '@$alias' ถูกใช้งาน ($count ครั้ง)"
    fi
  done
fi

echo -e "\n🔍 ตรวจสอบ plugin import ใน vite.config.ts ที่ไม่ถูกใช้งาน..."

IMPORTS=$(grep -oP "^import\s+.*?\s+from\s+['\"]([^'\"]+)['\"]" "$VITE_CONFIG" | \
          awk '{print $NF}' | sed -E "s/['\"]//g")

if [ -z "$IMPORTS" ]; then
  echo "⚠️  ไม่พบ import plugin ใน vite.config.ts"
else
  for imp in $IMPORTS; do
    short=$(basename "$imp")
    count=$(grep -o "$short" "$VITE_CONFIG" | wc -l)
    if [ "$count" -le 1 ]; then
      echo "❌ Plugin import '$short' ไม่ถูกใช้งาน"
    else
      echo "✅ Plugin import '$short' ถูกใช้งาน ($count ครั้ง)"
    fi
  done
fi

echo -e "\n🧹 ล้าง Vite cache, node_modules, และ dist folder..."
rm -rf node_modules/.vite node_modules dist

echo -e "📦 ติดตั้งแพ็กเกจใหม่ผ่าน pnpm..."
pnpm install

echo -e "\n✅ เสร็จสิ้น: ทำความสะอาดและติดตั้งใหม่เรียบร้อยแล้ว"