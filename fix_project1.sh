#!/bin/bash

echo "🔍 ตรวจสอบโครงสร้างและลบไฟล์ที่ไม่จำเป็น..."

# 🏗️ สร้างโฟลเดอร์ให้ถูกต้อง
mkdir -p src/components src/assets src/context src/hooks src/utils src/styles

# 🗑️ ลบไฟล์ที่ไม่จำเป็นหรือว่างเปล่า
rm -f src/components/HeroSection.tsx   # ไฟล์ไม่มีเนื้อหา
rm -f tailwind.config.js               # ใช้ tailwind.config.ts แทน

# 📂 รวม Components ไว้ใน src/components
echo 'export { default as Header } from "./Header";' > src/components/index.ts
echo 'export { default as Hero } from "./Hero";' >> src/components/index.ts
echo 'export { default as ServicesSection } from "./ServicesSection";' >> src/components/index.ts
echo 'export { default as ReviewsSection } from "./ReviewsSection";' >> src/components/index.ts
echo 'export { default as Footer } from "./Footer";' >> src/components/index.ts

# 🔄 จัดการไฟล์ assets ให้ถูกต้อง
mv public/icons src/assets/icons
mv public/vite.svg src/assets/vite.svg

# 📝 เพิ่มโค้ดพื้นฐานให้ Components ที่เป็นไฟล์เปล่า
echo 'export default function Hero() { return <h2 className="text-3xl text-center">Hero Section</h2>; }' > src/components/Hero.tsx
echo 'export default function Footer() { return <footer className="p-4 text-center">Footer</footer>; }' > src/components/Footer.tsx

# 🏗️ ตั้งค่า PostCSS ให้ถูกต้อง
mv postcss.config.cjs postcss.config.js
echo 'module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } };' > postcss.config.js

echo "✅ โปรเจกต์ถูกจัดระเบียบเรียบร้อย!"

# 🚀 รันโปรเจกต์เพื่อเช็คความถูกต้อง
pnpm run dev
