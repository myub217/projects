#!/usr/bin/env bash

set -e

echo "🚀 เริ่มติดตั้ง pnpm และ dependencies สำหรับโปรเจกต์ vite-react..."

# ตรวจสอบว่ามี pnpm หรือยัง
if ! command -v pnpm &> /dev/null
then
    echo "📦 pnpm ไม่พบในระบบ กำลังติดตั้ง pnpm ผ่าน npm..."
    if ! command -v npm &> /dev/null
    then
      echo "❌ npm ไม่พบในระบบ กรุณาติดตั้ง Node.js และ npm ก่อน"
      exit 1
    fi

    npm install -g pnpm
else
    echo "✅ พบ pnpm อยู่แล้ว"
fi

echo "📂 กำลังติดตั้ง dependencies..."

pnpm add \
  @emotion/css@11.13.5 \
  @emotion/react@11.14.0 \
  @emotion/styled@11.14.1 \
  @radix-ui/react-dialog@1.1.14 \
  @radix-ui/react-popover@1.1.14 \
  @radix-ui/react-slot@1.2.3 \
  babel-plugin-macros@3.1.0 \
  clsx@2.1.1 \
  cors@2.8.5 \
  express@5.1.0 \
  focus-visible@5.2.1 \
  framer-motion@12.17.3 \
  html2canvas@1.4.1 \
  jspdf@3.0.1 \
  lucide-react@0.515.0 \
  qrcode.react@4.2.0 \
  react@18.3.1 \
  react-dom@18.3.1 \
  react-helmet-async@2.0.5 \
  react-icons@5.5.0 \
  react-router-dom@7.6.3 \
  react-scroll@1.9.3 \
  tailwind-merge@3.3.1 \
  twin.macro@3.4.1 \
  workbox-precaching@7.3.0 \
  workbox-routing@7.3.0 \
  workbox-window@7.3.0

echo "📂 กำลังติดตั้ง devDependencies..."

pnpm add -D \
  @tailwindcss/aspect-ratio@0.4.2 \
  @tailwindcss/forms@0.5.10 \
  @tailwindcss/postcss@4.1.11 \
  @tailwindcss/typography@0.5.16 \
  @types/cors@2.8.19 \
  @types/express@5.0.3 \
  @types/node@24.0.5 \
  @types/react@18.3.23 \
  @types/react-dom@18.3.7 \
  @types/react-router-dom@5.3.3 \
  autoprefixer@10.4.21 \
  daisyui@4.12.24 \
  eslint@9.29.0 \
  postcss@8.5.6 \
  tailwindcss@3.4.17 \
  ts-node@10.9.2 \
  typescript@5.8.3 \
  vite@6.3.5 \
  @vitejs/plugin-react@4.6.0 \
  vite-plugin-compression@0.5.1 \
  vite-plugin-pwa@1.0.0 \
  vite-plugin-svgr@4.3.0

echo "✅ ติดตั้งแพคเกจทั้งหมดเสร็จเรียบร้อยแล้ว!"

echo "👉 รันคำสั่ง 'pnpm install' หากยังไม่ได้รัน"

exit 0
