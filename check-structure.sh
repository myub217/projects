#!/bin/bash

# Base project root directory
BASE_DIR="$HOME/projects/projects1"

# Markdown report output file
REPORT_FILE="$BASE_DIR/structure-report.md"

# Relative and absolute path for components directory
COMPONENT_DIR_REL="src/components"
COMPONENT_DIR_ABS="$BASE_DIR/$COMPONENT_DIR_REL"

required_dirs=(
  "src"
  "public"
  "api"
  "$COMPONENT_DIR_REL"
  "node_modules"
)

required_files=(
  "package.json"
  "vite.config.ts"
  ".env"
  "README.md"
)

# === 🧪 START ===
echo "Project root directory: $BASE_DIR"
echo "Checking project structure in $BASE_DIR"

echo -e "# ✅ Project Structure Report\n" > "$REPORT_FILE"
echo -e "📁 **Project Root Directory:** \`$BASE_DIR\`\n" >> "$REPORT_FILE"

# === 📂 Required Directories ===
echo "## 📂 Required Directories" >> "$REPORT_FILE"
echo -e "| Directory | Status |" >> "$REPORT_FILE"
echo -e "|-----------|--------|" >> "$REPORT_FILE"
for dir in "${required_dirs[@]}"; do
  if [ -d "$BASE_DIR/$dir" ]; then
    echo "✔ Directory found: $dir"
    echo "| \`$dir/\` | ✅ Found |" >> "$REPORT_FILE"
  else
    echo "✘ Directory missing: $dir"
    echo "| \`$dir/\` | ❌ Missing |" >> "$REPORT_FILE"
  fi
done

# === 📄 Required Files ===
echo -e "\n## 📄 Required Files" >> "$REPORT_FILE"
echo -e "| File | Status |" >> "$REPORT_FILE"
echo -e "|------|--------|" >> "$REPORT_FILE"
for file in "${required_files[@]}"; do
  if [ -f "$BASE_DIR/$file" ]; then
    echo "✔ File found: $file"
    echo "| \`$file\` | ✅ Found |" >> "$REPORT_FILE"
  else
    echo "✘ File missing: $file"
    echo "| \`$file\` | ❌ Missing |" >> "$REPORT_FILE"
  fi
done

# === 🎨 Tailwind Config ===
echo -e "\n## 🎨 Tailwind Configuration" >> "$REPORT_FILE"
echo -e "| File | Status |" >> "$REPORT_FILE"
echo -e "|------|--------|" >> "$REPORT_FILE"
if [[ -f "$BASE_DIR/tailwind.config.ts" || -f "$BASE_DIR/tailwind.config.mjs" ]]; then
  echo "✔ Tailwind config found (.ts or .mjs)"
  echo "| \`tailwind.config.ts\` or \`.mjs\` | ✅ Found |" >> "$REPORT_FILE"
else
  echo "✘ Tailwind config missing (.ts or .mjs)"
  echo "| \`tailwind.config.ts\` or \`.mjs\` | ❌ Missing |" >> "$REPORT_FILE"
fi

# === 🧩 Src Directory Tree (Level 3) ===
if [ -d "$BASE_DIR/src" ]; then
  echo -e "\n## 🧩 Src Directory Tree (Level 3)" >> "$REPORT_FILE"
  echo '```' >> "$REPORT_FILE"
  if command -v tree >/dev/null 2>&1; then
    tree -L 3 -I 'node_modules|.git' "$BASE_DIR/src" >> "$REPORT_FILE"
  else
    echo "[⚠️ Requires 'tree'. Install with: pkg install tree]" >> "$REPORT_FILE"
  fi
  echo '```' >> "$REPORT_FILE"
fi

# === 📌 Final Note ===
echo -e "\n---" >> "$REPORT_FILE"
echo -e "> 📌 หากต้องการให้ผ่านทั้งหมด กรุณาสร้าง directory: \`$COMPONENT_DIR_REL/\` (หากยังไม่มี)" >> "$REPORT_FILE"

# === ✅ Done ===
echo "📄 Markdown report saved to: $REPORT_FILE"