#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

NOW=$(date +"%Y%m%d-%H%M%S")

# Output filenames
INFO_JSON="project-info-${NOW}.json"
ENV_TXT="env-${NOW}.txt"
TREE_TXT="tree-${NOW}.txt"
BUILD_LOG="build-${NOW}.log"
SUMMARY_PROMPT="summary-${NOW}.txt"
DEPCHECK_JSON="depcheck-${NOW}.json"
ESLINT_LOG="eslint-unused-${NOW}.log"
SUMMARY_MD="summary-preview-${NOW}.md"
HEALTH_LOG="health-${NOW}.txt"
DEV_LOG="dev-log-${NOW}.txt"
ROUTES_JSON="routes-${NOW}.json"
API_CHECK="api-${NOW}.txt"
GIT_LOG="git-${NOW}.log"
PORTS_LOG="ports-${NOW}.txt"
TS_ERR_LOG="ts-error-${NOW}.log"
LOCALE_JSON="i18n-${NOW}.json"
FILESIZES_TXT="filesizes-${NOW}.txt"
UNUSED_EXPORTS_TXT="unused-exports-${NOW}.txt"
ENV_VARS_DOTENV=.env

# 1. ตรวจสอบเครื่องมือ
REQUIRED_TOOLS=(jq depcheck eslint node ts-unused-exports tree)
echo "🟦 [1/21] ตรวจสอบเครื่องมือพื้นฐาน..."
for TOOL in "${REQUIRED_TOOLS[@]}"; do
  if ! command -v "$TOOL" &>/dev/null; then
    echo "Installing missing tool: $TOOL"
    if [[ "$TOOL" == "ts-unused-exports" ]]; then
      pnpm setup
      export PNPM_HOME="$HOME/.local/share/pnpm"
      export PATH="$PNPM_HOME:$PATH"
      pnpm add -g ts-unused-exports || true
    else
      pnpm add -g "$TOOL"
    fi
  fi
  echo "✅ $TOOL พร้อมใช้งาน"
done

# 2. ล้างไฟล์เก่า
PATTERNS=(build-*.log env-*.txt project-info-*.json tree-*.txt summary-*.txt depcheck-*.json eslint-unused-*.log summary-preview-*.md health-*.txt dev-log-*.txt routes-*.json api-*.txt git-*.log ports-*.txt ts-error-*.log i18n-*.json filesizes-*.txt unused-exports-*.txt)
echo "🟦 [2/21] ล้างไฟล์เก่า..."
for pattern in "${PATTERNS[@]}"; do
  compgen -G "$pattern" > /dev/null && rm -f -- $pattern && echo "✅ ลบ pattern: $pattern"
done

# 3. ตรวจสอบ config และสร้างข้อมูลโปรเจกต์เบื้องต้น
echo "🟦 [3/21] ตรวจสอบ config..."
CONFIG_FILES=(vite.config.mjs tailwind.config.mjs tsconfig.json eslint.config.mjs depcheck.config.js)
CONFIG_STATUS=()
for FILE in "${CONFIG_FILES[@]}"; do
  [[ -f "$FILE" ]] && CONFIG_STATUS+=("✅ $FILE") || CONFIG_STATUS+=("❌ $FILE")
done
[[ -f package.json ]] || { echo "Missing package.json"; exit 1; }
PROJECT_NAME=$(jq -r '.name // "Unnamed Project"' package.json)
jq '{name, version, dependencies, devDependencies, scripts}' package.json > "$INFO_JSON"
echo "✅ สร้างไฟล์ข้อมูลโปรเจกต์ → $INFO_JSON"

# 4. export env + โครงสร้าง
echo "🟦 [4/21] export env และโครงสร้าง..."
if [[ -f $ENV_VARS_DOTENV ]]; then
  cp "$ENV_VARS_DOTENV" "$ENV_TXT"
else
  printenv | grep -E '^VITE_|^NODE_ENV|^PORT=' > "$ENV_TXT"
fi
command -v tree &>/dev/null && tree -L 3 > "$TREE_TXT" || find . -maxdepth 3 -print | sed 's|^\./||' > "$TREE_TXT"
echo "✅ export env และโครงสร้าง → $ENV_TXT, $TREE_TXT"

# 5. Build
echo "🟦 [5/21] ตรวจสอบ build และบันทึก log..."
if pnpm run build > "$BUILD_LOG" 2>&1; then
  echo "✅ Build success → log อยู่ที่ $BUILD_LOG"
else
  echo "❌ Build failed → log อยู่ที่ $BUILD_LOG"
fi

# 6. depcheck
echo "🟦 [6/21] ตรวจ unused deps..."
pnpm exec depcheck --json --config=depcheck.config.js > "$DEPCHECK_JSON" 2>/dev/null || echo '{}' > "$DEPCHECK_JSON"
echo "✅ ผล depcheck → $DEPCHECK_JSON"

# 7. eslint unused imports
echo "🟦 [7/21] ตรวจ eslint unused imports..."
pnpm exec eslint --ext .ts,.tsx,.js,.jsx --rule 'unused-imports/no-unused-imports: error' ./src > "$ESLINT_LOG" 2>&1 || true
echo "✅ ผล eslint unused → $ESLINT_LOG"

# 8. git
echo "🟦 [8/21] ตรวจสอบ git log..."
if git rev-parse --git-dir > /dev/null 2>&1; then
  git status --short > "$GIT_LOG"
  git log --oneline -n 5 >> "$GIT_LOG"
else
  echo "(not a git repo)" > "$GIT_LOG"
fi
echo "✅ ผล git → $GIT_LOG"

# 9. test
echo "🟦 [9/21] รัน test..."
jq -e '.scripts.test' package.json > /dev/null && pnpm run test >> "$BUILD_LOG" 2>&1 || true
echo "✅ เพิ่มผล test → $BUILD_LOG"

# 10. Node info
echo "🟦 [10/21] export node env info..."
{
  echo "Node: $(node -v)"
  echo "NPM: $(npm -v)"
  echo "PNPM: $(pnpm -v || echo N/A)"
  echo "CPU: $(uname -m)"
  echo "OS: $(uname -s)"
  echo "Memory:"
  free -h || vm_stat
} > "$HEALTH_LOG"
echo "✅ ผล health → $HEALTH_LOG"

# 11. ports
echo "🟦 [11/21] ตรวจสอบ ports..."
lsof -i -P -n | grep LISTEN > "$PORTS_LOG" || echo "No LISTEN ports" > "$PORTS_LOG"
echo "✅ ผล ports → $PORTS_LOG"

# 12. tsc
echo "🟦 [12/21] ตรวจ ts errors..."
pnpm exec tsc --noEmit > "$TS_ERR_LOG" 2>&1 || true
echo "✅ ผล tsc → $TS_ERR_LOG"

# 13. router
echo "🟦 [13/21] ตรวจ router..."
if grep -r 'react-router' ./src &>/dev/null; then
  grep -r "<Route" ./src | sed 's/^/ROUTE: /' > "$ROUTES_JSON"
else
  echo "[]" > "$ROUTES_JSON"
fi
echo "✅ ผล router → $ROUTES_JSON"

# 14. api usage
echo "🟦 [14/21] ตรวจ API calls..."
grep -r -E 'fetch\(|axios\\.get|axios\\.post' ./src > "$API_CHECK" || echo "No API calls" > "$API_CHECK"
echo "✅ ผล API usage → $API_CHECK"

# 15. locale/i18n
echo "🟦 [15/21] รวมไฟล์ locale/i18n..."
find ./src -type f -name "*.json" | grep -i i18n | xargs cat > "$LOCALE_JSON" || echo '{}' > "$LOCALE_JSON"
echo "✅ ผล i18n → $LOCALE_JSON"


# 16. file sizes
echo "🟦 [16/21] คำนวณขนาดไฟล์..."
if command -v du &>/dev/null; then
  find . -type f -exec du -h {} + 2>/dev/null | sort -rh | head -n 50 > "$FILESIZES_TXT"
  echo "✅ ผล file sizes → $FILESIZES_TXT"
else
  echo "❌ ไม่พบคำสั่ง du" > "$FILESIZES_TXT"
fi

# 17. dev logs
echo "🟦 [17/21] ค้นหา console.log..."
LOG_COUNT=$(grep -r -i --include="*.{ts,tsx,js,jsx}" "console\\.log" ./src 2>/dev/null | tee "$DEV_LOG" | wc -l)
if (( LOG_COUNT > 0 )); then
  echo "✅ ผล dev logs → $DEV_LOG ($LOG_COUNT รายการ)"
else
  echo "No dev logs" > "$DEV_LOG"
  echo "✅ ไม่พบ console.log ใน src"
fi

# 18. สรุป prompt สำหรับ AI...
echo "🟦 [18/21] สรุป prompt สำหรับ AI..."
cat > "$SUMMARY_PROMPT" <<EOF
🧑‍💻 Project Summary: modular-onepage

🔧 Config Files:
$(ls -1 vite.config.* tailwind.config.* tsconfig.json eslint.config.* depcheck.config.* 2>/dev/null | sed 's/^/  - /')

📦 Version: 0.1.0
📆 Deps:
  - connect-history-api-fallback
  - dotenv
  - express
  - framer-motion
  - lucide-react
  - node-fetch
  - react
  - react-dom
  - react-icons
  - react-router-dom

🚰 DevDeps:
  - $(jq -r '.devDependencies | keys[]' package.json | sed 's/^/  - /')

⚙️ Scripts:
$(jq -r '.scripts | to_entries[] | "  - \(.key): \(.value)"' package.json)

📂 Components: $(find ./src/components -type f \( -name '*.tsx' -o -name '*.ts' \) | wc -l)

📁 Structure:
$(head -n 12 "$TREE_TXT" | sed 's/^/  /')

📠 Unused Dependencies:
$(jq -r '.unusedDependencies | join(", ") // "-"' "$DEPCHECK_JSON")

❗ Missing Deps:
$(jq -r '.missing | keys | join(", ") // "-"' "$DEPCHECK_JSON")

🔀 Git: $(head -n 1 "$GIT_LOG")

🧪 TypeScript Errors: $TS_ERR_LOG
🌐 API Check: $API_CHECK
📊 Health Report: $HEALTH_LOG
🌐 Used Ports: $PORTS_LOG
🌍 i18n Locales: $LOCALE_JSON
📦 File Sizes: $FILESIZES_TXT
EOF

echo "✅ สร้าง summary prompt → $SUMMARY_PROMPT"

# 19. markdown summary
echo "🟦 [19/21] สร้าง markdown สรุป..."
echo "## 📦 Scripts" > "$SUMMARY_MD"
jq -r '.scripts // {} | to_entries[] | "- \(.key): \(.value)"' package.json >> "$SUMMARY_MD"
echo -e "\n## 📂 Files\n" >> "$SUMMARY_MD"
head -n 20 "$TREE_TXT" >> "$SUMMARY_MD"
echo -e "\n## 🔍 Unused Deps\n" >> "$SUMMARY_MD"
jq -r '.unusedDependencies[]? // empty' "$DEPCHECK_JSON" | sed 's/^/- /' >> "$SUMMARY_MD"
echo -e "\n## 📆 Top File Sizes\n" >> "$SUMMARY_MD"
head -n 50 "$FILESIZES_TXT" >> "$SUMMARY_MD"
echo "✅ สร้าง summary markdown → $SUMMARY_MD"

# 20. ts-unused-exports
echo "🟦 [20/21] ตรวจ unused exports จาก src/components..."
if [[ -f tsconfig.json ]]; then
  pnpm exec ts-unused-exports ./tsconfig.json \
    --excludePathsFromReport="**/*.test.tsx,**/*.stories.tsx" \
    --exitWithCount > "$UNUSED_EXPORTS_TXT" 2>&1 || true
  echo "✅ ผล unused exports → $UNUSED_EXPORTS_TXT"
else
  echo "tsconfig.json not found" > "$UNUSED_EXPORTS_TXT"
fi

# 21. เสร็จสิ้น
END_MSG="🟦 [21/21] เสร็จสิ้นทั้งหมด export → $NOW"
echo "$END_MSG"
figlet "$END_MSG" | lolcat || true
