#!/data/data/com.termux/files/usr/bin/bash

echo "🧹 เริ่มเคลียร์แคช Node.js, Yarn และ Temp files..."
echo "📁 ไดเรกทอรีปัจจุบัน: $PWD"

# 1. เคลียร์ node_modules ในไดเรกทอรีปัจจุบันและย่อย
echo "🧽 ลบ node_modules ใน $PWD ..."
find "$PWD" -type d -name "node_modules" -exec rm -rf {} +

# 2. เคลียร์ .cache, .npm, .yarn ของผู้ใช้
echo "🧼 ลบโฟลเดอร์ .cache, .npm, .yarn..."
rm -rf "$HOME/.cache"
rm -rf "$HOME/.npm"
rm -rf "$HOME/.yarn"

# 3. เคลียร์ Yarn global cache (ถ้ามี)
if command -v yarn &>/dev/null; then
  echo "📦 เคลียร์ yarn cache..."
  yarn cache clean
fi

# 4. เคลียร์ temp files ใน Termux
echo "🧼 ล้าง tmp ของ Termux..."
rm -rf "$PREFIX/tmp"/*
mkdir -p "$PREFIX/tmp"

# 5. เคลียร์ unused system packages
echo "🧯 ล้างแพ็กเกจระบบที่ไม่ใช้แล้ว..."
apt autoremove -y && apt clean

# 6. แสดงพื้นที่ว่าง
echo "📊 พื้นที่ว่างหลังเคลียร์:"
df -h "$HOME"

echo "✅ ทำความสะอาดเสร็จสิ้น!"