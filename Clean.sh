#!/bin/bash
set -euo pipefail

# 🎨 สีสำหรับข้อความ
GREEN='\033[0;32m'
RED='\033[0;31m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
NC='\033[0m' # ไม่มีสี

# 🧨 จัดการ error และ ctrl+c
trap "echo -e '\n${RED}🚨 เกิดข้อผิดพลาด หรือถูกยกเลิก!${NC}'; exit 1" ERR INT

# 📁 ตรวจว่ารันจาก root โปรเจกต์
if [ ! -f "package.json" ]; then
  echo -e "${RED}❌ กรุณารันสคริปต์จาก root ของโปรเจกต์ (ที่มี package.json)${NC}"
  exit 1
fi

echo -e "${CYAN}🧼 เริ่มทำความสะอาดโปรเจกต์...${NC}"

# ตัวเลือก argument
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

# 🔥 ลบ dependencies และ build outputs
echo -e "${GREEN}📦 ลบ node_modules/...${NC}"
rm -rf node_modules

echo -e "${GREEN}🔒 ลบ lock files...${NC}"
rm -f pnpm-lock.yaml yarn.lock package-lock.json

echo -e "${GREEN}🗑️ ลบ output folders (dist, .vite, .next, .turbo, .vercel)...${NC}"
rm -rf dist .vite .next .turbo .vercel build

echo -e "${GREEN}📂 ลบ cache อื่นๆ เช่น .tsbuildinfo ...${NC}"
find . -type f -name '*.tsbuildinfo' -delete

# 🔐 ลบ .env ถ้าระบุ
if [ "$INCLUDE_ENV" = true ]; then
  echo -e "${GREEN}🧪 ลบไฟล์ .env และ .env.* ...${NC}"
  find . -type f -name ".env*" -delete
fi

# 📋 ลบ logs ถ้าระบุ
if [ "$INCLUDE_LOG" = true ]; then
  echo -e "${GREEN}📋 ลบ log files (*.log, report.html)...${NC}"
  find . -type f \( -name "*.log" -o -name "report.html" \) -delete
fi

# 📦 ติดตั้ง dependencies ใหม่
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

# 🚀 รัน dev server
if [ "$SKIP_DEV" = false ]; then
  echo -e "${GREEN}🚀 รัน dev server...${NC}"
  pnpm run dev
else
  echo -e "${YELLOW}⏩ ข้ามขั้นตอนรัน dev server (--skip-dev)${NC}"
fi

echo -e "${GREEN}✅ ทำความสะอาดและรีเซตโปรเจกต์เรียบร้อย!${NC}"