#!/data/data/com.termux/files/usr/bin/bash
set -e

echo "🚀 Starting full clean build and backend setup process..."
echo ""

### 💥 Clean old builds
echo "🧹 Removing node_modules/, dist/, .vite/, .next/..."
rm -rf node_modules/ dist/ .vite/ .next/

### 📦 Install frontend dependencies
echo "📦 Installing root dependencies..."
pnpm install

### ⚙️ Build frontend
echo "⚙️ Building frontend project..."
pnpm run build

### 📁 Show build result
echo ""
echo "📁 Final dist structure:"
command -v tree >/dev/null 2>&1 && tree -h dist || ls -lhR dist

### 📊 Show compressed file size
echo ""
echo "📊 Gzipped files:"
find dist -name "*.gz" -exec du -h {} \;

### 🔧 Setup backend
if [ ! -d "server" ]; then
  echo ""
  echo "❌ ERROR: Folder 'server' not found! โปรดตรวจสอบโครงสร้างโปรเจกต์"
  exit 1
fi

echo ""
echo "🚀 Setting up backend..."
cd server

### 📦 Install backend dependencies
echo "📦 Installing backend dependencies..."
pnpm install

### 🔁 Install nodemon for development (if not present)
if ! pnpm list -D nodemon >/dev/null 2>&1; then
  echo "📦 Installing nodemon as dev dependency..."
  pnpm add -D nodemon
else
  echo "✅ nodemon already installed."
fi

### ✅ Done
echo ""
echo "✅ Backend setup completed!"
echo ""
echo "👉 วิธีรันเซิร์ฟเวอร์:"
echo "   cd server && pnpm dev        # ใช้ nodemon (ถ้ากำหนดไว้ใน package.json)"
echo "   หรือ"
echo "   cd server && node server.mjs  # รันด้วย node ตรงๆ"
echo ""
echo "📂 Config path: server/config/env.mjs"
echo "🪵 Log file: server/server.log"
echo ""
echo "✅ Full clean build and backend setup process complete!"