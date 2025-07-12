#!/bin/bash
set -euo pipefail

# 🎨 สีสำหรับข้อความ
GREEN='\033[0;32m'
RED='\033[0;31m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
NC='\033[0m' # ไม่มีสี

trap "echo -e '\n${RED}🚨 เกิดข้อผิดพลาด หรือถูกยกเลิก!${NC}'; exit 1" ERR INT

# 📁 ตรวจว่ารันจาก root โปรเจกต์
if [ ! -f "package.json" ]; then
  echo -e "${RED}❌ กรุณารันสคริปต์จาก root ของโปรเจกต์ (ที่มี package.json)${NC}"
  exit 1
fi

echo -e "${CYAN}🧼 เริ่มทำความสะอาดโปรเจกต์...${NC}"

# รับ options
SKIP_INSTALL=false
SKIP_DEV=false
FORCE=false
INCLUDE_ENV=false
INCLUDE_LOG=false

for arg in "$@"; do
  case $arg in
    --skip-install) SKIP_INSTALL=true ;;
    --skip-dev) SKIP_DEV=true ;;
    --force) FORCE=true ;;
    --env) INCLUDE_ENV=true ;;
    --logs) INCLUDE_LOG=true ;;
  esac
done

# 🔥 คำเตือนก่อนลบ
if [ "$FORCE" = false ]; then
  echo -e "${YELLOW}⚠️  การทำความสะอาดจะลบไฟล์ต่อไปนี้:"
  echo -e "   - node_modules, dist/, .vite/, .next/, .turbo/, .vercel/"
  echo -e "   - lock files และ cache อื่นๆ"
  [ "$INCLUDE_ENV" = true ] && echo -e "   - .env และไฟล์ .env.*"
  [ "$INCLUDE_LOG" = true ] && echo -e "   - *.log, report.html"
  read -r -p "${YELLOW}⚠️  ต้องการดำเนินการต่อหรือไม่? (y/n): ${NC}" confirm
  case "$confirm" in
    [yY]) ;;
    *) echo -e "${RED}❌ ยกเลิกการทำงาน${NC}" ; exit 0 ;;
  esac
fi

# 🧹 ฟังก์ชันลบโฟลเดอร์แบบปลอดภัย
safe_rm() {
  local target="$1"
  if [ -e "$target" ]; then
    chmod -R u+w "$target" 2>/dev/null || true
    rm -rf "$target" 2>/dev/null && \
      echo -e "${GREEN}✅ ลบ: $target${NC}" || \
      echo -e "${RED}⛔ ไม่สามารถลบ: $target (Permission denied)${NC}"
  fi
}

# 🔥 ลบสิ่งต่างๆ
safe_rm node_modules
safe_rm dist
safe_rm .vite
safe_rm .next
safe_rm .turbo
safe_rm .vercel
safe_rm build

# 🔒 Lock files
rm -f pnpm-lock.yaml yarn.lock package-lock.json 2>/dev/null || true

# ⚙️ Cache อื่นๆ
find . -type f -name '*.tsbuildinfo' -delete 2>/dev/null || true

# 🔐 .env
if [ "$INCLUDE_ENV" = true ]; then
  echo -e "${GREEN}🧪 ลบไฟล์ .env และ .env.* ...${NC}"
  find . -type f -name ".env*" -delete 2>/dev/null || true
fi

# 📋 logs
if [ "$INCLUDE_LOG" = true ]; then
  echo -e "${GREEN}📋 ลบ log files (*.log, report.html)...${NC}"
  find . -type f \( -name "*.log" -o -name "report.html" \) -delete 2>/dev/null || true
fi

# 📦 ติดตั้ง dependencies
if [ "$SKIP_INSTALL" = false ]; then
  echo -e "${CYAN}📦 ตรวจสอบ pnpm...${NC}"
  if ! command -v pnpm &> /dev/null; then
    echo -e "${RED}❌ ไม่พบ pnpm! กรุณาติดตั้งก่อน: npm install -g pnpm${NC}"
    exit 1
  fi

  echo -e "${GREEN}📦 ติดตั้ง dependencies ใหม่ด้วย pnpm...${NC}"
  pnpm install
else
  echo -e "${YELLOW}⏩ ข้ามขั้นตอนติดตั้ง dependencies (--skip-install)${NC}"
fi

# 🚀 dev server
if [ "$SKIP_DEV" = false ]; then
  echo -e "${GREEN}🚀 รัน dev server...${NC}"
  pnpm run dev
else
  echo -e "${YELLOW}⏩ ข้ามขั้นตอนรัน dev server (--skip-dev)${NC}"
fi

echo -e "${GREEN}✅ ทำความสะอาดและรีเซตโปรเจกต์เรียบร้อย!${NC}"