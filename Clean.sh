#!/bin/bash
set -euo pipefail

# 🎨 Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
GRAY='\033[1;30m'
NC='\033[0m'

# 🛑 Error trap
trap "echo -e '\n${RED}🚨 เกิดข้อผิดพลาด หรือถูกยกเลิก!${NC}'; exit 1" ERR INT

# 🧠 Default flags
SKIP_INSTALL=false
SKIP_DEV=false
INCLUDE_ENV=false
INCLUDE_LOG=false
ONLY_CACHE=false
DRY_RUN=false
VERBOSE=false
FORCE=false

# 📋 Parse args
for arg in "$@"; do
  case $arg in
    --skip-install) SKIP_INSTALL=true ;;
    --skip-dev) SKIP_DEV=true ;;
    --env) INCLUDE_ENV=true ;;
    --logs) INCLUDE_LOG=true ;;
    --only-cache) ONLY_CACHE=true ;;
    --dry-run) DRY_RUN=true ;;
    --force) FORCE=true ;;
    -v|--verbose) VERBOSE=true ;;
    *) 
      echo -e "${YELLOW}⚠️ Unknown argument: $arg${NC}"
      ;;
  esac
done

# 🏁 Check root
if [ ! -f "package.json" ]; then
  echo -e "${RED}❌ กรุณารันจาก root โปรเจกต์ (ที่มี package.json)${NC}"
  exit 1
fi

# ✅ Node / PNPM version checks
check_node() {
  if ! command -v node >/dev/null 2>&1; then echo -e "${RED}❌ Node.js ไม่พบ${NC}"; exit 1; fi
  local VER=$(node -v | sed 's/v//;s/\..*//')
  (( VER < 16 )) && echo -e "${RED}❌ Node >=16 เท่านั้น${NC}" && exit 1
  echo -e "${GREEN}✅ Node.js $(node -v)${NC}"
}

check_pnpm() {
  if ! command -v pnpm >/dev/null 2>&1; then echo -e "${RED}❌ pnpm ไม่พบ${NC}"; exit 1; fi
  local VER=$(pnpm -v | cut -d. -f1)
  (( VER < 7 )) && echo -e "${RED}❌ pnpm >=7 เท่านั้น${NC}" && exit 1
  echo -e "${GREEN}✅ pnpm $(pnpm -v)${NC}"
}

# 🔥 Confirm delete
if [ "$FORCE" = false ]; then
  echo -e "${YELLOW}⚠️ จะลบ: node_modules, dist/, .vite/, lockfiles, cache"
  [ "$INCLUDE_ENV" = true ] && echo -e "   + .env และ .env.*"
  [ "$INCLUDE_LOG" = true ] && echo -e "   + *.log, report.html"
  [ "$ONLY_CACHE" = true ] && echo -e "   (Only cache mode)"
  [ "$DRY_RUN" = true ] && echo -e "   (Dry run mode)"
  stty sane
  read -r -p "$(echo -e "${YELLOW}⚠️ ดำเนินการต่อ? (y/n): ${NC}")" confirm
  [[ ! "$confirm" =~ ^[yY]$ ]] && echo -e "${RED}❌ ยกเลิก${NC}" && exit 0
fi

# 🚮 Safe remove
safe_rm() {
  local target="$1"
  [ ! -e "$target" ] && return
  if [ "$DRY_RUN" = true ]; then
    echo -e "${GRAY}DRY-RUN: rm -rf $target${NC}"
    return
  fi
  chmod -R u+w "$target" 2>/dev/null || true
  rm -rf "$target" && echo -e "${GREEN}✅ ลบ: $target${NC}" || echo -e "${RED}⛔ ล้มเหลว: $target${NC}"
}

# 📦 Targets
CLEAN_TARGETS=(
  node_modules dist .vite .next .turbo .vercel build .output .nuxt .cache .eslintcache
)
LOCKFILES=(pnpm-lock.yaml yarn.lock package-lock.json)
CACHES=($(find . -type f -name '*.tsbuildinfo' 2>/dev/null))

# 🧹 Start cleaning
check_node
check_pnpm
echo -e "${CYAN}🧼 เริ่มทำความสะอาด...${NC}"

if [ "$ONLY_CACHE" = false ]; then
  for item in "${CLEAN_TARGETS[@]}"; do safe_rm "$item"; done
  for file in "${LOCKFILES[@]}"; do [ -f "$file" ] && safe_rm "$file"; done
fi

for file in "${CACHES[@]}"; do safe_rm "$file"; done

# 🔐 .env*
if [ "$INCLUDE_ENV" = true ]; then
  find . -type f -name ".env*" -exec bash -c 'safe_rm "$0"' {} \;
fi

# 📋 .log
if [ "$INCLUDE_LOG" = true ]; then
  find . -type f \( -name "*.log" -o -name "report.html" \) -exec bash -c 'safe_rm "$0"' {} \;
fi

# 🧰 Cache cleanup
if [ "$DRY_RUN" = false ]; then
  pnpm store prune >/dev/null 2>&1 || true
  npm cache clean --force >/dev/null 2>&1 || true
fi

# 📦 Reinstall
if [ "$SKIP_INSTALL" = false ] && [ "$DRY_RUN" = false ]; then
  echo -e "${CYAN}📦 ติดตั้ง dependencies...${NC}"
  pnpm install
else
  echo -e "${YELLOW}⏩ ข้ามติดตั้ง (--skip-install)${NC}"
fi

# 🚀 Dev server
if [ "$SKIP_DEV" = false ] && [ "$DRY_RUN" = false ]; then
  echo -e "${GREEN}🚀 รัน dev server...${NC}"
  pnpm run dev
else
  echo -e "${YELLOW}⏩ ข้าม dev server (--skip-dev)${NC}"
fi

# 📝 Log
LOG_FILE=".clean.log"
{
  echo "🧼 Clean completed at $(date +"%Y-%m-%d %H:%M:%S")"
  echo "Mode: FORCE=$FORCE, DRY_RUN=$DRY_RUN, ENV=$INCLUDE_ENV, LOGS=$INCLUDE_LOG, ONLY_CACHE=$ONLY_CACHE"
} >> "$LOG_FILE"

echo -e "${GREEN}✅ เสร็จสิ้น!${NC}"