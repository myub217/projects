#!/bin/bash
set -e

echo "=== ตรวจสอบ Node.js ==="
if command -v node &> /dev/null; then
  echo "✅ Node.js พบแล้ว: $(node -v)"
else
  echo "❌ Node.js ไม่พบ กรุณาติดตั้ง Node.js ก่อน"
  exit 1
fi

echo "=== ตรวจสอบ npm ==="
if command -v npm &> /dev/null; then
  echo "✅ npm พบแล้ว: $(npm -v)"
else
  echo "❌ npm ไม่พบ กรุณาติดตั้ง npm ก่อน"
  exit 1
fi

echo "=== ตรวจสอบ pnpm ==="
if command -v pnpm &> /dev/null; then
  echo "✅ pnpm พบแล้ว: $(pnpm -v)"
else
  echo "❌ pnpm ไม่พบ กำลังติดตั้ง pnpm..."
  npm install -g pnpm
fi

echo "=== ตรวจสอบ nodemon ==="
if command -v nodemon &> /dev/null; then
  echo "✅ nodemon พบแล้ว: $(nodemon -v)"
else
  echo "❌ nodemon ไม่พบ กำลังติดตั้ง nodemon..."
  pnpm add -g nodemon || pnpm add -D nodemon
fi

echo "=== ติดตั้ง dependencies ด้วย pnpm ==="
pnpm install

echo "=== ตรวจสอบไฟล์ .env ==="
if [ ! -f .env ]; then
  echo "❗ ไม่พบไฟล์ .env กำลังสร้างไฟล์ตัวอย่าง..."
  cat > .env <<EOF
PORT=3000
VALID_ACCESS_KEYS=JP2025KEY,ADMIN123,SPECIALKEY
EOF
  echo "✅ สร้างไฟล์ .env เรียบร้อย"
else
  echo "✅ พบไฟล์ .env แล้ว"
fi

# อ่านค่า PORT จาก .env หากไม่มีให้ใช้ค่าเริ่มต้น 3000
PORT=$(grep ^PORT .env | cut -d '=' -f2)
if [ -z "$PORT" ]; then
  PORT=3000
fi

echo "=== ตรวจสอบพอร์ต $PORT ว่ามีโปรเซสใช้งานอยู่หรือไม่ ==="
PID=$(lsof -t -i :"$PORT" || true)
if [ -n "$PID" ]; then
  echo "โปรเซสที่ใช้พอร์ต $PORT คือ PID: $PID"
  echo "กำลังฆ่าโปรเซส PID: $PID ..."
  kill -9 $PID
  echo "✅ ฆ่าโปรเซสเรียบร้อยแล้ว"
else
  echo "ไม่มีโปรเซสใดใช้พอร์ต $PORT"
fi

echo "=== เริ่มรันเซิร์ฟเวอร์ด้วย nodemon ==="
nohup npx nodemon index.mjs > server.log 2>&1 &

sleep 3

if ps aux | grep '[n]odemon' > /dev/null; then
  echo "✅ เซิร์ฟเวอร์ nodemon ทำงานอยู่ (ดู log ที่ server.log)"
else
  echo "❌ เซิร์ฟเวอร์ nodemon ไม่ได้ทำงาน กรุณาตรวจสอบ"
  exit 1
fi

echo ""
echo "เซิร์ฟเวอร์กำลังทำงานที่ http://localhost:$PORT"
echo "ทดสอบ API ด้วยคำสั่ง curl ดังนี้ (แก้ token ให้ถูกต้อง):"
echo ""
echo "curl -X POST http://localhost:$PORT/api/check-access-key \\"
echo "  -H 'Content-Type: application/json' \\"
echo "  -H 'Authorization: Bearer your-valid-token' \\"
echo "  -d '{\"accessKey\": \"SPECIALKEY\"}'"
echo ""

exit 0
