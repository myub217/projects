#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

# 📅 Timestamp
NOW=$(date +"%Y%m%d-%H%M%S")

# 📄 Output files
INFO_JSON="project-info-${NOW}.json"
ENV_TXT="env-${NOW}.txt"
TREE_TXT="tree-${NOW}.txt"
BUILD_LOG="build-${NOW}.log"
SUMMARY_PROMPT="summary-${NOW}.txt"
DEPCHECK_JSON="depcheck-${NOW}.json"
ESLINT_LOG="eslint-unused-${NOW}.log"
SUMMARY_MD="summary-preview-${NOW}.md"

# ✅ Tools check
echo -e "\n🟦 [1/13] ตรวจสอบเครื่องมือพื้นฐาน..."
REQUIRED_TOOLS=(jq depcheck eslint node)
for TOOL in "${REQUIRED_TOOLS[@]}"; do
  if ! command -v "$TOOL" &>/dev/null; then
    echo "⚠️ ไม่พบ $TOOL → ติดตั้ง..."
    npm install -g "$TOOL"
  else
    echo "✅ $TOOL พร้อมใช้งาน"
  fi
done

# 🔧 Config check
echo -e "\n🟦 [2/13] ตรวจสอบ config..."
CONFIG_FILES=(vite.config.mjs tailwind.config.mjs tsconfig.json eslint.config.mjs depcheck.config.js)
CONFIG_STATUS=()
for FILE in "${CONFIG_FILES[@]}"; do
  [[ -f "$FILE" ]] && CONFIG_STATUS+=("✅ $FILE") || CONFIG_STATUS+=("❌ $FILE")
done

if [[ ! -f package.json ]]; then
  echo "❌ ไม่พบ package.json"
  exit 1
fi

PROJECT_NAME=$(jq -r '.name // "Unnamed Project"' package.json)
jq '{dependencies, devDependencies, scripts}' package.json > "$INFO_JSON"
echo "✅ export → $INFO_JSON"

# 🧹 Clean old build & temp files
echo -e "\n🟦 [3/13] ล้างไฟล์ขยะเก่า..."
VITE_BUILD_OUTDIR="dist"
PATTERNS=(build-*.log env-*.txt project-info-*.json tree-*.txt summary-*.txt depcheck-*.json eslint-unused-*.log summary-preview-*.md)

echo "🧼 ลบโฟลเดอร์ build: $VITE_BUILD_OUTDIR"
[[ -d "$VITE_BUILD_OUTDIR" ]] && rm -rf -- "$VITE_BUILD_OUTDIR" && echo "✅ ลบ $VITE_BUILD_OUTDIR แล้ว" || echo "ℹ️ ไม่มี $VITE_BUILD_OUTDIR"

for pattern in "${PATTERNS[@]}"; do
  if compgen -G "$pattern" > /dev/null; then
    rm -f -- $pattern
    echo "✅ ลบ pattern: $pattern"
  else
    echo "ℹ️ ไม่พบไฟล์ pattern: $pattern"
  fi
done

# 🌱 Env & Tree
echo -e "\n🟦 [4/13] ENV + โครงสร้าง"
[[ -f .env ]] && cp .env "$ENV_TXT" || printenv > "$ENV_TXT"

generate_tree() {
  if command -v tree &>/dev/null; then
    tree -L "$1"
  else
    find . -maxdepth "$1" -print | sed 's|^\./||'
  fi
}
generate_tree 3 > "$TREE_TXT"
echo "✅ ENV → $ENV_TXT, TREE → $TREE_TXT"

# ⚙️ Build
echo -e "\n🟦 [5/13] Build..."
if command -v pnpm &>/dev/null; then
  BUILD_CMD=(pnpm run build)
elif command -v yarn &>/dev/null; then
  BUILD_CMD=(yarn build)
else
  BUILD_CMD=(npm run build)
fi

echo "▶️ ${BUILD_CMD[*]}"
if "${BUILD_CMD[@]}" > "$BUILD_LOG" 2>&1; then
  echo "✅ build สำเร็จ → $BUILD_LOG"
else
  echo "❌ build ล้มเหลว → $BUILD_LOG"
  exit 1
fi

# 🧩 Components
echo -e "\n🟦 [6/13] ตัวอย่าง Components..."
if [[ -d src/components ]]; then
  TOP_COMPONENTS=$(find src/components -type f -name "*.tsx" | head -n 10 | sed 's/^/- /')
else
  TOP_COMPONENTS="(ไม่มี)"
fi

# 📦 depcheck
echo -e "\n🟦 [7/13] depcheck..."
depcheck --json --config=depcheck.config.js > "$DEPCHECK_JSON" 2>/dev/null || echo "{}" > "$DEPCHECK_JSON"
echo "✅ depcheck → $DEPCHECK_JSON"

# 🧹 ESLint
echo -e "\n🟦 [8/13] unused imports..."
eslint --ext .ts,.tsx,.js,.jsx --rule 'unused-imports/no-unused-imports: error' ./src > "$ESLINT_LOG" 2>&1 || true
echo "✅ eslint log → $ESLINT_LOG"

# 🔍 Git status
echo -e "\n🟦 [9/13] ตรวจสอบ Git..."
if command -v git &>/dev/null && [ -d .git ]; then
  GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "N/A")
  GIT_STATUS=$(git status --short)
else
  GIT_BRANCH="N/A"
  GIT_STATUS="(ไม่ใช่ git repo)"
fi

# 📦 Build Size
echo -e "\n🟦 [10/13] ตรวจสอบขนาด build..."
BUILD_SIZE=$(du -sh "$VITE_BUILD_OUTDIR" 2>/dev/null || echo "N/A")
BUILD_FILES=$(find "$VITE_BUILD_OUTDIR" -type f -exec du -h {} + | sort -hr | head -n 10 2>/dev/null || echo "(ไม่มี)")

# 🔧 Runtime version
echo -e "\n🟦 [11/13] ตรวจสอบ runtime..."
NODE_VERSION=$(node -v 2>/dev/null || echo "N/A")
NPM_VERSION=$(npm -v 2>/dev/null || echo "N/A")
PNPM_VERSION=$(pnpm -v 2>/dev/null || echo "N/A")

# 📄 Markdown
echo -e "\n🟦 [12/13] สร้าง Markdown summary..."
DEPS=$(jq -r '.dependencies | keys | join(", ")' "$INFO_JSON" 2>/dev/null || echo "-")
DEV_DEPS=$(jq -r '.devDependencies | keys | join(", ")' "$INFO_JSON" 2>/dev/null || echo "-")
SCRIPTS=$(jq -r '.scripts | keys | join(", ")' "$INFO_JSON" 2>/dev/null || echo "-")
DEPCHECK_UNUSED=$(jq -r '.dependencies | keys | join(", ")' "$DEPCHECK_JSON" 2>/dev/null || echo "-")
DEPCHECK_MISSING=$(jq -r '.missing | keys | join(", ")' "$DEPCHECK_JSON" 2>/dev/null || echo "-")
TREE_PREVIEW=$(head -n 20 "$TREE_TXT" || echo "(แสดงไม่ได้)")
BUILD_PREVIEW=$(tail -n 20 "$BUILD_LOG" || echo "(แสดงไม่ได้)")

cat > "$SUMMARY_MD" <<EOF
# 🧠 สรุปภาพรวมโปรเจกต์: $PROJECT_NAME

## 📦 Stack
React, TypeScript, Vite, TailwindCSS, DaisyUI, Express, Framer Motion

## 🔧 Config
$(printf '%s\n' "${CONFIG_STATUS[@]}" | sed 's/^/- /')

## 🧩 Components
$TOP_COMPONENTS

## 📦 Dependencies
$DEPS

## 🧰 DevDependencies
$DEV_DEPS

## ⚙️ Scripts
$SCRIPTS

## 📂 โครงสร้าง
\`\`\`
$TREE_PREVIEW
\`\`\`

## 📄 Build log (ล่าสุด)
\`\`\`
$BUILD_PREVIEW
\`\`\`

## 🚫 Unused Dependencies
$DEPCHECK_UNUSED

## ❗ Missing Dependencies
$DEPCHECK_MISSING

## 🧹 ESLint: Unused Imports
ดูเพิ่มเติมใน: \`$ESLINT_LOG\`

## 🔀 Git
Branch: \`$GIT_BRANCH\`
\`\`\`
$GIT_STATUS
\`\`\`

## 📦 Build Size
$BUILD_SIZE

## 📄 Build Files
$BUILD_FILES

## 🧰 Runtime
- Node: $NODE_VERSION
- NPM: $NPM_VERSION
- PNPM: $PNPM_VERSION
EOF

echo "✅ Markdown export → $SUMMARY_MD"

# 🔚 Final summary
echo -e "\n🟦 [13/13] สรุปสถานะสุดท้าย"
cat > "$SUMMARY_PROMPT" <<EOF
🧠 สรุปภาพรวมโปรเจกต์: $PROJECT_NAME

📦 Stack: React, TypeScript, Vite, TailwindCSS, DaisyUI, Express, Framer Motion  
📂 โครงสร้าง (ตัวอย่าง):  
$TREE_PREVIEW

🔧 Config:
$(printf '%s\n' "${CONFIG_STATUS[@]}")

🧩 Components:
$TOP_COMPONENTS

📦 Dependencies:
$DEPS

🧰 DevDependencies:
$DEV_DEPS

⚙️ Scripts:
$SCRIPTS

🚫 Unused: $DEPCHECK_UNUSED  
❗ Missing: $DEPCHECK_MISSING  
🧹 Unused imports → $ESLINT_LOG  
🔀 Git Branch: $GIT_BRANCH  
📦 Build Size: $BUILD_SIZE  
🧰 Node: $NODE_VERSION / NPM: $NPM_VERSION / PNPM: $PNPM_VERSION

--------------------------------------------------
🔁 AI Dev Partner Instructions:

1. วิเคราะห์ config, dependencies, โครงสร้าง และผลลัพธ์ build
2. ลิสต์ไฟล์สำคัญตามลำดับ (เช่น entry point, core config, logic, routing)
3. ร้องขอไฟล์ที่จำเป็นจากมนุษย์ก่อนลงลึก (อย่าคาดเดา)
4. แก้ไขทันทีถ้ามี input พอ — ไม่อธิบายเกินความจำเป็น
5. หากแก้ไม่ได้ ให้วนต่อจากผลลัพธ์เดิม
6. คำตอบต้อง Dev-to-Dev — ตรง ประชิด ชัด ไม่อ้อม

📌 พร้อมสำหรับ Dev ร่วมกับ AI อย่างแท้จริง
--------------------------------------------------
EOF

echo "✅ export → $SUMMARY_PROMPT"
echo "🎉 เสร็จสมบูรณ์!"