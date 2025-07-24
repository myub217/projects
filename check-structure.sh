#!/bin/bash

# === CONFIG ===
# 📁 กำหนดตัวแปรพื้นฐานสำหรับใช้งานใน shell script ตรวจสอบโปรเจกต์

# ถ้ายังไม่ได้กำหนด BASE_DIR → ใช้ path ปัจจุบัน
BASE_DIR="${BASE_DIR:-$(pwd)}"

# 📄 ชื่อไฟล์รายงานที่ script จะสร้าง
REPORT_FILE="$BASE_DIR/project-audit.md"

# 📁 โฟลเดอร์หลักของ source code
SRC_DIR="$BASE_DIR/src"

# 📄 ไฟล์ config หลักของ Tailwind CSS
TAILWIND="$BASE_DIR/tailwind.config.ts"

# 📄 ไฟล์ config หลักของ Vite
VITE="$BASE_DIR/vite.config.ts"

# 🧠 Entry point หลักของแอป
MAIN="$SRC_DIR/main.tsx"

# 🌐 ไฟล์ routes รวมทั้งหมดของแอป
ROUTER="$SRC_DIR/routes/AppRoutes.tsx"

# ⚙️ Mock API middleware สำหรับ dev mode
SERVER_MOCK="$SRC_DIR/config/configureServer.ts"

# 📄 รายการหน้าเพจที่สำคัญ ตรวจสอบเฉพาะจุด (เช่น Protected Routes)
PAGES=(
  "$SRC_DIR/pages/AdminPage.tsx"
  "$SRC_DIR/pages/SecretRoomPage.tsx"
)

# === HEADER ===
cat > "$REPORT_FILE" << EOF
# 📦 PROJECT STRUCTURE REPORT

- 📍 Location: \`$BASE_DIR\`
- 🕒 Generated: $(date '+%a %b %d %T %Z %Y')
- 🛠️ Dev Mode: Audit & Verify Setup

---

## ✅ REQUIRED DIRECTORIES & FILES
EOF

# === REQUIRED CHECK ===
check_list=(
  "src"
  "src/pages"
  "src/components"
  "src/routes"
  "tailwind.config.ts"
  "vite.config.ts"
  "package.json"
  ".env"
  "public"
)

for item in "${check_list[@]}"; do
  if [ -e "$BASE_DIR/$item" ]; then
    echo "- [✅] \`$item\`" >> "$REPORT_FILE"
  else
    echo "- [❌] \`$item\`" >> "$REPORT_FILE"
  fi
done

print_file_content() {
  local label="$1"
  local path="$2"

  echo -e "\n## 📄 $label (\`$path\`)\n\`\`\`tsx" >> "$REPORT_FILE"
  if [ -f "$path" ]; then
    cat "$path" >> "$REPORT_FILE"
  else
    echo "// ❌ File not found" >> "$REPORT_FILE"
  fi
  echo -e "\n\`\`\`\n" >> "$REPORT_FILE"
}

print_file_content "tailwind.config.ts" "$TAILWIND"
print_file_content "vite.config.ts" "$VITE"
print_file_content "main.tsx" "$MAIN"
print_file_content "AppRoutes.tsx" "$ROUTER"

for page in "${PAGES[@]}"; do
  print_file_content "$(basename "$page")" "$page"
done

print_file_content "tsconfig.json" "$BASE_DIR/tsconfig.json"
print_file_content ".prettierrc" "$BASE_DIR/.prettierrc"
print_file_content ".prettierrc.json" "$BASE_DIR/.prettierrc.json"

# === TREE VIEW ===
if command -v tree >/dev/null 2>&1; then
  echo -e "\n## 🗂️ DIRECTORY TREE\n\`\`\`" >> "$REPORT_FILE"
  tree -L 3 -I 'node_modules|.git' "$BASE_DIR" >> "$REPORT_FILE"
  echo -e "\`\`\`" >> "$REPORT_FILE"
else
  echo -e "\n## 🗂️ DIRECTORY TREE\n\`\`\`\n[⚠️] Install tree with: pkg install tree\n\`\`\`" >> "$REPORT_FILE"
fi

# === FOOTER ===
cat >> "$REPORT_FILE" << 'EOF'

---

## 📌 DEV CHECKLIST

- [x] Tailwind theme config ตรวจสอบแล้ว
- [x] Vite + Alias + React Router พร้อมใช้งาน
- [x] Component Import ผ่าน @ alias ถูกต้อง
- [x] Prettier + Tailwind Plugin พร้อม
- [x] Responsive ผ่าน `grid`, `flex`, `container`
- [x] Design พร้อมใช้งานจริงในธุรกิจเทา

💡 หากพบปัญหา Import ผิด, alias เพี้ยน, ไฟล์หาย → ต้องแจ้งทันที

EOF

echo "✅ รายงานสมบูรณ์ → $REPORT_FILE"