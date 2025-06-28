#!/data/data/com.termux/files/usr/bin/bash
# build.sh - สคริปต์ build โปรเจกต์ Vite พร้อมบีบอัด Gzip และแสดงผลแบบมืออาชีพ

set -euo pipefail
IFS=$'\n\t'

# สีข้อความ
RED='\033[0;31m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
NC='\033[0m'

echo -e "${CYAN}🚀 Starting clean build process...${NC}"

# 1. ลบ dist เก่า
if [ -d "dist" ]; then
  echo -e "${CYAN}🧹 Removing old dist/...${NC}"
  rm -rf dist/
fi

# 2. ตรวจสอบว่า pnpm ติดตั้งแล้ว
if ! command -v pnpm >/dev/null 2>&1; then
  echo -e "${RED}❌ Error: 'pnpm' not found. Please install pnpm.${NC}"
  exit 1
fi

# 3. สั่ง build ด้วย Vite
echo -e "${CYAN}⚙️ Building project with Vite...${NC}"
pnpm run build

# 4. ตรวจสอบผลลัพธ์
if [ ! -d "dist" ]; then
  echo -e "${RED}❌ Build failed: 'dist/' folder not found.${NC}"
  exit 1
fi

# 5. แสดงโครงสร้างและขนาดไฟล์
echo -e "${CYAN}📦 Build output structure:${NC}"
if command -v tree >/dev/null 2>&1; then
  tree -h dist
else
  ls -Rlh dist
fi

# 6. แสดงไฟล์ .gz ที่ถูกบีบอัดเรียบร้อย
echo -e "${CYAN}📊 Gzipped files:${NC}"
find dist -type f -name "*.gz" -exec du -h {} + | sort -hr

# 7. รายงานผลลัพธ์สำเร็จ
echo -e "${GREEN}✅ Build complete! Ready to deploy.${NC}"
