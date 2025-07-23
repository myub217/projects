#!/bin/bash

# === Config ===
BASE_DIR="${BASE_DIR:-$(pwd)}"
REPORT_FILE="$BASE_DIR/structure-report.md"
COMPONENT_DIR_REL="src/components"

REQUIRED_DIRS=("src" "public" "api" "$COMPONENT_DIR_REL" "node_modules")
REQUIRED_FILES=("package.json" "vite.config.ts" ".env" "README.md")

PAGES=(
  "src/pages/SecretRoomPage.tsx"
  "src/pages/AdminPage.tsx"
)

echo "📦 Scanning project in: $BASE_DIR"

# เริ่มเขียนไฟล์รายงานใหม่
cat > "$REPORT_FILE" << EOF
# ✅ Project Structure Report

📁 **Project Root Directory:** \`$BASE_DIR\`

## 📂 Required Directories
| Directory           | Status |
|---------------------|--------|
EOF

for dir in "${REQUIRED_DIRS[@]}"; do
  if [ -d "$BASE_DIR/$dir" ]; then
    echo "| \`$dir/\` | ✅ Found |" >> "$REPORT_FILE"
  else
    echo "| \`$dir/\` | ❌ Missing |" >> "$REPORT_FILE"
  fi
done

cat >> "$REPORT_FILE" << EOF

## 📄 Required Files
| File               | Status |
|--------------------|--------|
EOF

for file in "${REQUIRED_FILES[@]}"; do
  if [ -f "$BASE_DIR/$file" ]; then
    echo "| \`$file\` | ✅ Found |" >> "$REPORT_FILE"
  else
    echo "| \`$file\` | ❌ Missing |" >> "$REPORT_FILE"
  fi
done

if [ -f "$BASE_DIR/tailwind.config.ts" ]; then
  cat >> "$REPORT_FILE" << EOF

## 🎨 tailwind.config.ts
\`\`\`ts
EOF
  cat "$BASE_DIR/tailwind.config.ts" >> "$REPORT_FILE"
  echo '```' >> "$REPORT_FILE"
fi

if [ -f "$BASE_DIR/vite.config.ts" ]; then
  cat >> "$REPORT_FILE" << EOF

## ⚙️ vite.config.ts
\`\`\`ts
EOF
  cat "$BASE_DIR/vite.config.ts" >> "$REPORT_FILE"
  echo '```' >> "$REPORT_FILE"
fi

MAIN_FILE="$BASE_DIR/src/main.tsx"
cat >> "$REPORT_FILE" << EOF

## 🧩 src/main.tsx
\`\`\`tsx
EOF
if [ -f "$MAIN_FILE" ]; then
  cat "$MAIN_FILE" >> "$REPORT_FILE"
else
  echo "// Not found" >> "$REPORT_FILE"
fi
echo '```' >> "$REPORT_FILE"

for page in "${PAGES[@]}"; do
  PAGE_PATH="$BASE_DIR/$page"
  cat >> "$REPORT_FILE" << EOF

## 🧩 $page
\`\`\`tsx
EOF
  if [ -f "$PAGE_PATH" ]; then
    cat "$PAGE_PATH" >> "$REPORT_FILE"
  else
    echo "// Not found" >> "$REPORT_FILE"
  fi
  echo '```' >> "$REPORT_FILE"
done

if command -v tree >/dev/null 2>&1; then
  cat >> "$REPORT_FILE" << EOF

## 🗂️ Project Tree: Level 1
\`\`\`
EOF
  tree -L 1 -I 'node_modules|.git' "$BASE_DIR" >> "$REPORT_FILE"
  echo '```' >> "$REPORT_FILE"

  cat >> "$REPORT_FILE" << EOF

## 📁 src Tree: Level 3
\`\`\`
EOF
  if [ -d "$BASE_DIR/src" ]; then
    tree -L 3 "$BASE_DIR/src" >> "$REPORT_FILE"
  else
    echo "// src not found" >> "$REPORT_FILE"
  fi
  echo '```' >> "$REPORT_FILE"
else
  cat >> "$REPORT_FILE" << EOF

## 🗂️ Tree View
\`\`\`
[⚠️ Requires 'tree'. Install: pkg install tree]
\`\`\`

EOF
fi

cat >> "$REPORT_FILE" << EOF

## 📌 Dev Partner Note

คุณคือ Dev Partner ที่พัฒนาร่วมในโปรเจกต์นี้ โดยมีหน้าที่หลัก:
- แก้ไข/ออกแบบโค้ดให้สอดคล้องกับ UI/UX, Business Logic และระบบ Responsive
- ทุก Component ต้อง Import ให้ถูกต้อง, รองรับ Desktop & Mobile
- แก้ปัญหาทันที ไม่อธิบายเยิ่นเย้อ
- ทุกคำตอบต้องแม่นยำตาม Stack และโครงสร้างที่กำหนด
JP - VISUAL & DOCS
ธุรกิจสีเทาที่ออกแบบมาให้ได้มาตรฐานเท่าที่สามารถแสดงได้ เราพร้อมร่วมงานกับทุกสายอาชีพ ทุกวงการ และพร้อมสร้างเครื่องมือที่ตอบโจทย์จริงให้ทุกคน

เรายินดีให้คำปรึกษาแบบตรงไปตรงมา ด้วยข้อมูลจริง พร้อมอธิบายเปอร์เซ็นต์ความเสี่ยงและผลลัพธ์อย่างโปร่งใส — เราไม่ขายฝัน

หากคุณมีคำถามเพิ่มเติม หรือรายละเอียดที่ไม่สามารถเปิดเผยได้บนเว็บไซต์ สามารถสอบถามแอดมินของเราได้ตลอด 24 ชั่วโมง

หากคุณอยากคุยกับผมโดยตรง บอกแอดมินได้เลย รับรองว่าคุณจะรู้สึกปลอดภัย และสบายใจที่ได้คุยแน่นอน

ผมไม่ใช่คนที่เก่งที่สุด
แต่ผมมีทีมงานที่เก่ง
ลงรายละเอียดเนื้อหา ให้สอดคล้อง กับ ธุรกิจ ไม่เน้นคำทางการเกินไป ใช้คำกระชับเข้าใจได้ง่าย
📂 โครงสร้างทั้งหมด แนบไว้ใน Report นี้แล้ว  
🧠 เข้าใจบริบทแล้ว พร้อมรับคำสั่งถัดไปได้เลย

🕛 Last Checked: $(date)
EOF