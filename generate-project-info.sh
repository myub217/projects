#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail
IFS=$'\n\t'
cd "$(dirname "$0")"

# === 🕒 INITIAL VARS ===
NOW=$(date +"%Y%m%d-%H%M%S")
ROOT_DIR="$(pwd)"
SRC_DIR="$ROOT_DIR/src"
SUMMARY_DIR=".summary"
mkdir -p "$SUMMARY_DIR"

# === 📄 OUTPUT FILES ===
INFO_JSON="$SUMMARY_DIR/project-info-${NOW}.json"
SUMMARY_PROMPT="$SUMMARY_DIR/summary-prompt-${NOW}.md"
TREE_TXT="$SUMMARY_DIR/tree-${NOW}.txt"
BUILD_LOG="$SUMMARY_DIR/build-${NOW}.log"
COVERAGE_TXT="$SUMMARY_DIR/coverage-summary-${NOW}.txt"
ESLINT_LOG="$SUMMARY_DIR/eslint-unused-${NOW}.log"
DEPCHECK_JSON="$SUMMARY_DIR/depcheck-${NOW}.json"
ENV_TXT="$SUMMARY_DIR/env-${NOW}.txt"
ENV_EXAMPLE="$SUMMARY_DIR/env-example-${NOW}.txt"
VITE_CONFIG="$SUMMARY_DIR/vite-config-${NOW}.txt"
TS_CONFIG="$SUMMARY_DIR/tsconfig-${NOW}.txt"
JEST_CONFIG="$SUMMARY_DIR/jest-config-${NOW}.txt"
SERVER_CODE="$SUMMARY_DIR/server-preview-${NOW}.txt"
GIT_INFO="$SUMMARY_DIR/git-info-${NOW}.txt"

# === 🛠️ REQUIRED TOOLS CHECK ===
TOOLS=(jq eslint depcheck node pnpm git du grep tail head tree find awk)
MISSING_TOOLS=()
for TOOL in "${TOOLS[@]}"; do
  command -v "$TOOL" >/dev/null 2>&1 || MISSING_TOOLS+=("$TOOL")
done
if [ ${#MISSING_TOOLS[@]} -ne 0 ]; then
  echo "❌ Missing required tools: ${MISSING_TOOLS[*]}"
  exit 1
fi

# === 📦 PACKAGE.JSON INFO ===
[[ -f package.json ]] || { echo "❌ package.json not found"; exit 1; }
jq '{name, version, dependencies, devDependencies, scripts}' package.json > "$INFO_JSON"

# === 🌲 DIRECTORY STRUCTURE ===
tree -a -I 'node_modules|dist|.git' > "$TREE_TXT" || echo "⚠️ tree failed" > "$TREE_TXT"

# === ⚙️ CONFIG FILES ===
> "$VITE_CONFIG"
for f in vite.config.*; do
  [[ -f "$f" ]] && echo -e "\n--- $f ---\n$(cat "$f")" >> "$VITE_CONFIG"
done
[[ -f tsconfig.json ]] && cp tsconfig.json "$TS_CONFIG"
[[ -f jest.config.js ]] && cp jest.config.js "$JEST_CONFIG"
[[ -f server.ts ]] && head -n 50 server.ts > "$SERVER_CODE"

# === 🔐 ENV FILES ===
[[ -f .env ]] && cp .env "$ENV_TXT"
[[ -f .env.example ]] && cp .env.example "$ENV_EXAMPLE"

# === 🧪 BUILD STEP ===
BUILD_OK=true
(pnpm run build &> "$BUILD_LOG") || { BUILD_OK=false; echo "⚠️ Build failed, see $BUILD_LOG"; }

# === 📊 DEP/LINT CHECK ===
npx depcheck --json > "$DEPCHECK_JSON" || echo "{}" > "$DEPCHECK_JSON"
npx eslint src --ext .ts,.tsx --report-unused-disable-directives > "$ESLINT_LOG" || echo "⚠️ ESLint failed" >> "$ESLINT_LOG"

# === 📈 COVERAGE REPORT ===
[[ -d coverage ]] && find coverage -name 'lcov-report' -exec grep -A10 'All files' {} \; > "$COVERAGE_TXT" || echo "No coverage report found" > "$COVERAGE_TXT"

# === 🔀 GIT INFO ===
{
  echo "# Git Info"
  echo "Branch: $(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo 'N/A')"
  echo "Remote:"; git remote -v 2>/dev/null || echo "N/A"
  echo -e "\nLast 5 commits:"; git log -n 5 --oneline 2>/dev/null || echo "N/A"
  echo -e "\nStatus:"; git status -s 2>/dev/null || echo "N/A"
} > "$GIT_INFO"

# === 🧠 FINAL SUMMARY EXPORT ===
NAME=$(jq -r '.name // "Unnamed"' package.json)
DEPS=$(jq -r '.dependencies | keys | join(", ")' "$INFO_JSON" || echo "")
DEVDEPS=$(jq -r '.devDependencies | keys | join(", ")' "$INFO_JSON" || echo "")
SCRIPTS=$(jq -r '.scripts | to_entries[] | "- \(.key): \(.value)"' package.json || echo "")
TOP_COMPONENTS=$(find "$SRC_DIR/components" -type f 2>/dev/null | head -n 5 | sed "s|$ROOT_DIR/||" || echo "N/A")
TREE_PREVIEW=$(head -n 30 "$TREE_TXT" || echo "")
BUILD_SUMMARY=$(tail -n 30 "$BUILD_LOG" || echo "")
BUILD_FILES=$(find dist -type f 2>/dev/null | head -n 10 || echo "No dist files")
BUILD_SIZE=$(du -sh dist 2>/dev/null | awk '{print $1}' || echo "N/A")
NODE_VER=$(node -v 2>/dev/null || echo "N/A")
PNPM_VER=$(pnpm -v 2>/dev/null || echo "N/A")

# === 🧪 DEPCHECK PARSE ===
DEPCHECK_UNUSED=$(jq -r '.unusedDependencies | join(", ") // "None"' "$DEPCHECK_JSON")
DEPCHECK_MISSING=$(jq -r '[.missing | keys][] // "None"' "$DEPCHECK_JSON")

# === 📄 FINAL MARKDOWN OUTPUT ===
cat > "$SUMMARY_PROMPT" <<EOF
# 🧠 Project Summary: $NAME

## ⚙️ Stack & Tools
- Vite + React + TypeScript
- TailwindCSS, DaisyUI
- Express SSR
- Jest, ESLint, Depcheck

## 📁 Structure (Top Components)
\`\`\`
$TOP_COMPONENTS
\`\`\`

## 📂 Tree (Preview)
\`\`\`
$TREE_PREVIEW
\`\`\`

## 📦 Dependencies
$DEPS

## 🧰 DevDependencies
$DEVDEPS

## 🛠️ Scripts
$SCRIPTS

## 🧪 Build Log
\`\`\`
$BUILD_SUMMARY
\`\`\`
Build Size: $BUILD_SIZE

## 📄 Build Files
$BUILD_FILES

## 🚫 Unused Deps
$DEPCHECK_UNUSED

## ❗ Missing Deps
$DEPCHECK_MISSING

## 🧹 ESLint (Unused/Warn)
ดูที่: $ESLINT_LOG

## 🧪 Coverage
ดูที่: $COVERAGE_TXT

## 🔧 Configs
- Vite: $VITE_CONFIG
- TS: $TS_CONFIG
- Jest: $JEST_CONFIG
- server.ts preview: $SERVER_CODE

## 🔐 Env
.env: $ENV_TXT  
.env.example: $ENV_EXAMPLE

## 🔀 Git
ดูที่: $GIT_INFO

## ⚙️ Runtime
- Node: $NODE_VER
- PNPM: $PNPM_VER

## 🚨 Errors/Warnings Summary
$( [[ "$BUILD_OK" = false ]] && echo "- ❌ Build Failed" )
$( [[ -s "$ESLINT_LOG" ]] && echo "- ⚠️ ESLint Warnings Found" )
$( [[ "$DEPCHECK_UNUSED" != "" ]] && echo "- ⚠️ Unused Deps Found" )
$( [[ "$DEPCHECK_MISSING" != "" ]] && echo "- ❗ Missing Deps Found" )
EOF

echo -e "\n✅ Exported Summary → $SUMMARY_PROMPT"