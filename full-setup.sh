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

# ✅ Tools check
echo -e "\n🟦 [1/8] ตรวจสอบเครื่องมือพื้นฐาน..."
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
echo -e "\n🟦 [2/8] ตรวจสอบ config..."
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

# 🌱 Env + Tree
echo -e "\n🟦 [3/8] ENV & โครงสร้าง"
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
echo -e "\n🟦 [4/8] Build..."
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
echo -e "\n🟦 [5/8] ตัวอย่าง Components..."
if [[ -d src/components ]]; then
  TOP_COMPONENTS=$(find src/components -type f -name "*.tsx" | head -n 10 | sed 's/^/- /')
  COMPONENT_COUNT=$(echo "$TOP_COMPONENTS" | wc -l)
else
  TOP_COMPONENTS="(ไม่มี)"
  COMPONENT_COUNT=0
fi
echo "✅ $COMPONENT_COUNT ไฟล์"

# 📦 depcheck
echo -e "\n🟦 [6/8] depcheck..."
depcheck --json --config=depcheck.config.js > "$DEPCHECK_JSON" 2>/dev/null || echo "{}" > "$DEPCHECK_JSON"
echo "✅ depcheck → $DEPCHECK_JSON"

# 🧹 ESLint
echo -e "\n🟦 [7/8] unused imports..."
eslint --ext .ts,.tsx,.js,.jsx --rule 'unused-imports/no-unused-imports: error' ./src > "$ESLINT_LOG" 2>&1 || true
echo "✅ eslint log → $ESLINT_LOG"

# 📄 Summary
echo -e "\n🟦 [8/8] สร้าง summary prompt..."
DEPS=$(jq -r '.dependencies | keys | join(", ")' "$INFO_JSON" 2>/dev/null || echo "N/A")
DEV_DEPS=$(jq -r '.devDependencies | keys | join(", ")' "$INFO_JSON" 2>/dev/null || echo "N/A")
SCRIPTS=$(jq -r '.scripts | keys | join(", ")' "$INFO_JSON" 2>/dev/null || echo "N/A")
DEPCHECK_UNUSED=$(jq -r '.dependencies | keys | join(", ")' "$DEPCHECK_JSON" 2>/dev/null || echo "N/A")
DEPCHECK_MISSING=$(jq -r '.missing | keys | join(", ")' "$DEPCHECK_JSON" 2>/dev/null || echo "N/A")
TREE_PREVIEW=$(head -n 20 "$TREE_TXT" || echo "(แสดงไม่ได้)")
BUILD_PREVIEW=$(tail -n 20 "$BUILD_LOG" || echo "(แสดงไม่ได้)")

cat > "$SUMMARY_PROMPT" <<EOF
🧠 สรุปภาพรวมโปรเจกต์: $PROJECT_NAME

📦 Stack:
React, TypeScript, Vite, TailwindCSS, DaisyUI, Express, Framer Motion

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

📂 โครงสร้าง:
$TREE_PREVIEW

📄 Build log:
$BUILD_PREVIEW

🚫 Unused:
$DEPCHECK_UNUSED

❗ Missing:
$DEPCHECK_MISSING

🧹 Unused imports:
→ $ESLINT_LOG

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