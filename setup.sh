#!/bin/bash

# --- 🔒 STEP 1: ตรวจสอบและสร้าง .env ---
ENV_FILE=".env"

if [ -f "$ENV_FILE" ]; then
  echo "✅ พบไฟล์ .env แล้ว"
else
  echo "📦 กำลังสร้างไฟล์ .env..."
  cat <<EOF > "$ENV_FILE"
# --- 🌐 Environment Variables ---
PORT=3000

# ✅ ลิงก์ JSON จาก Google Sheet ที่เปิดสิทธิ์แบบ Anyone
OPEN_SHEET_ENDPOINT=https://opensheet.vercel.app/10MjcjWE03uS1SsDvsumN5PwpHjIWsyGkLa0h4Lx18zs/Sheet1

# 🔑 Access Keys ใช้งานระบบ
VALID_ACCESS_KEYS=JPKYEKEY01,JPKYEKEY02,JPKYEKEY03,JPKYEKEY04,JPKYEKEY05,JPKYEKEY06,JPKYEKEY07,JPKYEKEY08,JPKYEKEY09,JPKYEKEY10
EOF

  echo "✅ สร้าง .env เรียบร้อยแล้ว"
fi

# --- 🛡 STEP 2: เพิ่ม .env ลงใน .gitignore ---
GITIGNORE_FILE=".gitignore"

if [ ! -f "$GITIGNORE_FILE" ]; then
  echo "📝 สร้างไฟล์ .gitignore ใหม่..."
  touch "$GITIGNORE_FILE"
fi

if grep -qxF ".env" "$GITIGNORE_FILE"; then
  echo "✅ .env มีใน .gitignore แล้ว"
else
  echo ".env" >> "$GITIGNORE_FILE"
  echo "✅ เพิ่ม '.env' ลงใน .gitignore แล้ว"
fi

# --- 🧹 STEP 3: ลบ .env จาก Git ถ้าเคย commit ไปแล้ว ---
if git ls-files --error-unmatch "$ENV_FILE" > /dev/null 2>&1; then
  echo "🧹 ลบ '.env' ออกจาก git index..."
  git rm --cached "$ENV_FILE"
  echo "✅ ลบ '.env' จากการ track ของ git แล้ว"
else
  echo "✅ .env ไม่ได้ถูก track อยู่แล้ว"
fi

# --- 🟢 STEP 4: แนะนำคำสั่ง run โปรเจกต์ ---
echo ""
echo "🎉 Setup เสร็จสมบูรณ์!"
echo "👉 ตอนนี้คุณสามารถรันโปรเจกต์ได้โดยใช้:"
echo "   npm run dev"
echo "   หรือ"
echo "   pnpm dev"
echo ""
