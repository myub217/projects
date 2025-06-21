#!/data/data/com.termux/files/usr/bin/bash

echo "🧠 ตรวจสอบโฟลเดอร์..."

if [ -f "package.json" ]; then
  echo "📦 พบโปรเจกต์อยู่แล้ว ไม่สร้าง Vite ซ้ำ"
else
  echo "⚙️ สร้างโปรเจกต์ React + Vite + TypeScript"
  pnpm create vite@latest . --template react-ts
  pnpm install
fi

echo "🔧 ติดตั้ง dependencies พื้นฐาน..."
pnpm add react-router-dom react-helmet-async framer-motion clsx
pnpm add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

echo "📁 สร้างโฟลเดอร์โปรเจกต์..."
mkdir -p src/{assets/{images,icons},components/{auth,skeleton},context,data,hooks,layout,pages,styles,utils}

echo "🧩 เขียน global.css"
cat > src/styles/global.css <<'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;
EOF

echo "⚙️ ตั้งค่า tailwind.config.mjs"
sed -i 's|content:
