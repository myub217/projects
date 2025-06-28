#!/bin/bash

# setup.sh - สคริปต์ล้างไฟล์ระบบเก่าออกให้เหลือแค่ระบบ login ใหม่ล่าสุด

# -----------------------------------------------

# หมายเหตุ: กรุณา backup โปรเจกต์ก่อนเรียกใช้งานสคริปต์นี้

set -e

echo "🧹 เริ่มลบไฟล์ที่ไม่จำเป็น..."

# 🔥 ลบหน้าและคอมโพเนนต์ที่ไม่ใช้งานแล้ว
rm -f src/pages/AdminUserManagement.tsx
rm -f src/pages/CodeViewer.tsx
rm -f src/utils/tempAuth.ts

# 🔥 ลบ context/auth ที่ซ้ำซ้อนหรือเก่า (ถ้าไม่ได้ใช้งานจริง)
rm -f src/context/UserContext.tsx || true

# 🔥 ลบ ProtectedRoute ถ้าไม่ได้ใช้ routing แบบนั้น
rm -f src/components/auth/ProtectedRoute.tsx || true

# 🔥 ลบฟังก์ชัน validateUser เก่า (ถ้ามี)
rm -f src/utils/validateUser.ts || true

# 🔥 ลบ route/backend เดิมที่ไม่ใช้แล้ว (เช่น user.ts)
rm -f server/routes/users.mjs || true
rm -f server/middleware/auth.mjs || true

# 🔥 ลบไฟล์ mock หรือ playground ถ้าไม่ได้ใช้
rm -f src/components/CodePlayground.tsx || true

echo "✅ ลบไฟล์ระบบเก่าเรียบร้อยแล้ว เหลือระบบ login ใหม่ตามโครงสร้างที่ตั้งไว้"
echo "💡 คุณสามารถ run ด้วยคำสั่ง: bash setup.sh"
