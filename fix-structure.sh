#!/data/data/com.termux/files/usr/bin/bash

echo "🔧 แก้ไขโครงสร้างโปรเจกต์และชื่อไฟล์ให้ถูกต้อง..."

# 1. ลบ postcss.config.js ซ้ำออก
if [ -f "postcss.config.js" ]; then
  rm postcss.config.js
  echo "🗑️ ลบ postcss.config.js แล้ว (ใช้ .mjs แทน)"
fi

# 2. แก้ชื่อไฟล์ pages ให้เป็น PascalCase
mv src/pages/Homepage.tsx src/pages/HomePage.tsx 2>/dev/null && echo "✅ Rename Homepage.tsx → HomePage.tsx"
mv src/pages/Loginpage.tsx src/pages/LoginPage.tsx 2>/dev/null && echo "✅ Rename Loginpage.tsx → LoginPage.tsx"

# 3. ตรวจสอบ vite.config.mjs ให้มี plugin react แล้ว
if ! grep -q "@vitejs/plugin-react" vite.config.mjs; then
  echo "❌ vite.config.mjs ไม่พบ @vitejs/plugin-react กรุณาเพิ่มให้เรียบร้อย"
fi

# 4. ตรวจสอบให้แน่ใจว่ามี index.html ที่ root
if [ ! -f "index.html" ]; then
  echo "❌ ไม่พบ index.html กรุณา copy จาก public หรือสร้างใหม่"
fi

# 5. แสดงผลโครงสร้างล่าสุด
echo -e "\n📁 โครงสร้าง src หลังปรับปรุง:"
tree src -L 2

# 6. แนะนำคำสั่ง build/test
echo -e "\n✅ พร้อมใช้งาน! ลองรัน:\n\npnpm dev\npnpm build\npnpm preview"
