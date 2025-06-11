#!/bin/bash

echo "🔍 ตรวจสอบโครงสร้างและลบไฟล์ที่ไม่จำเป็น..."

# 🛠️ สร้างโฟลเดอร์หลักให้ถูกต้อง
mkdir -p src/components src/assets src/context src/hooks src/utils src/styles

# 🗑️ ลบไฟล์ที่ไม่จำเป็นหรือซ้ำกัน
rm -f tailwind.config.js     # ไฟล์เก่า ลบออกเพื่อใช้ tailwind.config.ts
rm -f python                 # ไฟล์ไม่ชัดเจน
rm -f red.png                # ไฟล์ภาพที่ไม่ได้ใช้งาน
rm -f requirements.txt        # ไม่จำเป็นสำหรับ JS/TS โปรเจกต์

# 🏗️ ย้ายไฟล์ที่ควรอยู่ใน assets
mv public/icons src/assets/icons
mv public/vite.svg src/assets/vite.svg

# 📂 รวม Components ไว้ใน src/components
touch src/components/Header.tsx
touch src/components/Hero.tsx
touch src/components/ServicesSection.tsx
touch src/components/ReviewsSection.tsx
touch src/components/Footer.tsx

# 📝 สร้าง index.ts เพื่อรวม Components
echo 'export { default as Header } from "./Header";' > src/components/index.ts
echo 'export { default as Hero } from "./Hero";' >> src/components/index.ts
echo 'export { default as ServicesSection } from "./ServicesSection";' >> src/components/index.ts
echo 'export { default as ReviewsSection } from "./ReviewsSection";' >> src/components/index.ts
echo 'export { default as Footer } from "./Footer";' >> src/components/index.ts

# ⚡ เปลี่ยนไฟล์ PostCSS ให้ถูกต้องตาม CommonJS
mv postcss.config.cjs postcss.config.js

echo "✅ โครงสร้างโปรเจกต์ถูกปรับปรุงเรียบร้อย!"

# 🚀 รันโปรเจกต์เพื่อเช็คความถูกต้อง
pnpm run dev
