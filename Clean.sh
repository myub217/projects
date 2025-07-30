#!/bin/bash
echo "🧹 Cleaning project..."

# ลบโฟลเดอร์ build และไฟล์ cache ที่มักสร้างขึ้นระหว่างพัฒนาและ build
rm -rf dist .vite node_modules .vercel .next .output

# ลบไฟล์ล็อคของ package manager ต่างๆ เพื่อให้สามารถติดตั้งแพ็กเกจใหม่ได้สะอาด
rm -rf pnpm-lock.yaml yarn.lock package-lock.json

echo "✅ Clean complete."