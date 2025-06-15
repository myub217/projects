#!/data/data/com.termux/files/usr/bin/bash

# 👉 ไปยัง root ของโปรเจกต์
cd ~/projects # หรือ path ที่คุณเก็บโปรเจกต์ไว้

echo "📦 เริ่มเคลียร์ไฟล์ .js ที่ซ้ำกับ .tsx / .ts..."

# 1. 🔥 ลบไฟล์ .js ที่มี .tsx หรือ .ts ซ้ำ
find src -type f -name "*.js" | while read jsfile; do
  tsxfile="${jsfile%.js}.tsx"
  tsfile="${jsfile%.js}.ts"
  if [[ -f "$tsxfile" || -f "$tsfile" ]]; then
    echo "🗑 ลบ $jsfile (ซ้ำกับ $tsxfile หรือ $tsfile)"
    rm "$jsfile"
  fi
done

# 2. 🔥 ลบ entry เก่า
echo "🗑 ลบไฟล์ App.js, main.js"
rm -f src/App.js src/main.js

# 3. 🔥 ลบไฟล์สำรอง/ชั่วคราว
echo "🗑 ลบ vite.config.ts.bak และ tsbuildinfo"
rm -f vite.config.ts.bak tsconfig.*.tsbuildinfo

# 4. 🔥 ลบโฟลเดอร์ build เดิม
echo "🗑 ลบโฟลเดอร์ dist/, dev-dist/"
rm -rf dist dev-dist

echo "✅ โปรเจกต์เคลียร์เรียบร้อยแล้ว!"
