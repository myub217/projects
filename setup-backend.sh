#!/data/data/com.termux/files/usr/bin/bash

echo "🚀 Starting full backend setup..."

# 1. ตรวจสอบว่าอยู่ใน root โปรเจกต์
if [ ! -d "server" ]; then
  echo "❌ Directory 'server/' not found. กรุณารันสคริปต์จาก root ของโปรเจกต์"
  exit 1
fi

# 2. ติดตั้ง pnpm ถ้ายังไม่มี
if ! command -v pnpm &> /dev/null; then
  echo "📦 Installing pnpm globally..."
  npm install -g pnpm
fi

# 3. ติดตั้ง dependencies ใน root (ถ้ามี package.json)
if [ -f "package.json" ]; then
  echo "📦 Installing root project dependencies..."
  pnpm install
fi

# 4. เข้าโฟลเดอร์ backend
cd server || exit 1

# 5. ติดตั้ง dependencies สำหรับ backend
echo "📦 Installing backend dependencies..."
pnpm install

# 6. สร้าง config/env.mjs หากยังไม่มี
if [ ! -f "./config/env.mjs" ]; then
  echo "⚙️  Creating default env.mjs file..."
  mkdir -p config
  cat <<EOF > ./config/env.mjs
export const PORT = 8080;
export const HOST = "localhost";
export const SECRET_KEY = "my-secret-key";
EOF
  echo "✅ Created config/env.mjs"
fi

# 7. สร้าง server.log หากยังไม่มี
touch server.log

# 8. ให้สิทธิ์ execute กับ setup.sh และไฟล์อื่นใน server/
chmod +x setup.sh
chmod +x *.sh

# 9. กลับไป root (ถ้าต้องการ)
cd ..

# 10. สรุปการทำงาน
echo ""
echo "✅ Backend setup completed!"
echo "👉 คำสั่งสำหรับรันเซิร์ฟเวอร์:"
echo "   cd server && pnpm dev       # หรือ"
echo "   cd server && node server.mjs"
echo ""
echo "📂 Config path: server/config/env.mjs"
echo "🪵 Log file: server/server.log"
