#!/bin/bash

# ===========================================================
# 🛠️ Vite Config Audit & Clean Script (compatible grep)
# ===========================================================

VITE_CONFIG="vite.config.ts"
SRC_DIR="./src"

echo -e "\n🔍 ตรวจสอบ alias ใน vite.config.ts ว่าใช้งานจริงไหม..."

ALIASES=$(grep -Po "(?<=alias:\s*\{)[^}]*" "$VITE_CONFIG" 2>/dev/null | \
          grep -Po "'[^']+':\s*'[^']+'" | sed "s/'//g" | awk -F: '{print $1}' | tr -d ' ')

if [ -z "$ALIASES" ]; then
  echo "⚠️  ไม่พบ alias ใน vite.config.ts"
else
  for alias in $ALIASES; do
    count=$(grep -r --include='*.ts' --include='*.tsx' --include='*.js' --include='*.jsx' "$alias" "$SRC_DIR" | wc -l)
    if [ "$count" -eq 0 ]; then
      echo "❌ Alias '$alias' ไม่ถูกใช้งาน"
    else
      echo "✅ Alias '$alias' ถูกใช้งาน ($count ครั้ง)"
    fi
  done
fi

echo -e "\n🔍 ตรวจสอบ plugin import ใน vite.config.ts ที่ไม่ถูกใช้งาน..."

IMPORTS=$(grep -oP "^import\s+.*?from\s+['\"]" "$VITE_CONFIG" | \
          sed -E "s/import\s+(.*)\s+from\s+['\"]//; s/['\"]//" | tr ',' '\n' | tr -d ' ')

if [ -z "$IMPORTS" ]; then
  echo "⚠️  ไม่พบ import plugin ใน vite.config.ts"
else
  for imp in $IMPORTS; do
    if [ -z "$imp" ]; then
      continue
    fi
    count=$(grep -o "$imp" "$VITE_CONFIG" | wc -l)
    # ถ้าเจอแค่ 1 ครั้งใน import ก็ถือว่า unused
    if [ "$count" -le 1 ]; then
      echo "❌ Plugin import '$imp' ไม่ถูกใช้งาน"
    else
      echo "✅ Plugin import '$imp' ถูกใช้งาน"
    fi
  done
fi

echo -e "\n🧹 กำลังล้าง vite cache, node_modules, และ dist folder..."

rm -rf node_modules/.vite node_modules dist

echo "📦 ติดตั้งแพ็กเกจใหม่..."
pnpm install

echo -e "\n✅ ทำความสะอาดและติดตั้งใหม่เรียบร้อย"