#!/data/data/com.termux/files/usr/bin/bash

echo "📦 ติดตั้ง dependencies..."
pnpm install

if [ -f .env ]; then
  echo "✅ พบไฟล์ .env แล้ว"
else
  echo "⚠️ ไม่พบ .env กรุณาสร้างเอง"
fi

echo "🚀 เริ่มต้นเซิร์ฟเวอร์ด้วย nodemon"
pnpm run dev