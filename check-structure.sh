#!/bin/bash

# === 🔧 Config ===
BASE_DIR="${BASE_DIR:-$(pwd)}"
REPORT_FILE="$BASE_DIR/structure-report.md"
COMPONENT_DIR_REL="src/components"
COMPONENT_DIR_ABS="$BASE_DIR/$COMPONENT_DIR_REL"

required_dirs=("src" "public" "api" "$COMPONENT_DIR_REL" "node_modules")
required_files=("package.json" "vite.config.ts" ".env" "README.md")

# === 🧪 Start Report ===
echo "Project root directory: $BASE_DIR"
echo "Checking project structure in $BASE_DIR"

# Clear or create report file
if ! echo -e "# ✅ Project Structure Report\n" > "$REPORT_FILE"; then
  echo "❌ Error: Cannot write to $REPORT_FILE"
  exit 1
fi

echo -e "📁 **Project Root Directory:** \`$BASE_DIR\`\n" >> "$REPORT_FILE"

# 📂 Check Directories
echo -e "\n## 📂 Required Directories" >> "$REPORT_FILE"
echo "| Directory       | Status |" >> "$REPORT_FILE"
echo "|-----------------|--------|" >> "$REPORT_FILE"
for dir in "${required_dirs[@]}"; do
  if [ -d "$BASE_DIR/$dir" ]; then
    echo "✔ Found: $dir"
    echo "| \`$dir/\` | ✅ Found |" >> "$REPORT_FILE"
  else
    echo "✘ Missing: $dir"
    echo "| \`$dir/\` | ❌ Missing |" >> "$REPORT_FILE"
  fi
done

{
  echo -e "\n## 📄 Required Files"
  echo "| File           | Status |"
  echo "|----------------|--------|"
  for file in "${required_files[@]}"; do
    if [ -f "$BASE_DIR/$file" ]; then
      echo "| $file | ✅ Found |"
    else
      echo "| $file | ❌ Missing |"
    fi
  done
} >> "$REPORT_FILE"

# 🎨 Tailwind Config
if [ -f "$BASE_DIR/tailwind.config.ts" ]; then
  echo -e "\n## 🎨 Tailwind Config (Full)\n\`\`\`ts" >> "$REPORT_FILE"
  cat "$BASE_DIR/tailwind.config.ts" >> "$REPORT_FILE"
  echo -e '\n```' >> "$REPORT_FILE"
fi

# ⚙️ Vite Config
if [ -f "$BASE_DIR/vite.config.ts" ]; then
  echo -e "\n## ⚙️ Vite Config (Full)\n\`\`\`ts" >> "$REPORT_FILE"
  cat "$BASE_DIR/vite.config.ts" >> "$REPORT_FILE"
  echo -e '\n```' >> "$REPORT_FILE"
fi

# 🧩 main.tsx
MAIN_FILE="$BASE_DIR/src/main.tsx"
echo -e "\n## 🧩 main.tsx (Full)\n\`\`\`tsx" >> "$REPORT_FILE"
if [ -f "$MAIN_FILE" ]; then
  cat "$MAIN_FILE" >> "$REPORT_FILE"
else
  echo "// src/main.tsx not found." >> "$REPORT_FILE"
fi
echo -e '\n```' >> "$REPORT_FILE"

# 🧩 Project Directory Tree (Level 3)
if [ -d "$BASE_DIR" ]; then
  echo -e "\n## 🧩 Project Directory Tree (Level 3)\n\`\`\`" >> "$REPORT_FILE"
  if command -v tree >/dev/null 2>&1; then
    tree -L 3 -I 'node_modules|.git' "$BASE_DIR" >> "$REPORT_FILE"
  else
    echo "[⚠️ Requires 'tree'. Install with: pkg install tree]" >> "$REPORT_FILE"
  fi
  echo -e '\n```' >> "$REPORT_FILE"
fi

cat << 'EOF' >> "$REPORT_FILE"

## 📌 Final Note

📦 **dependencies:**  
daisyui 3.9.4  
framer-motion 10.18.0  
lucide-react 0.525.0  
react 18.3.1  
react-dom 18.3.1  
react-icons 5.5.0  
react-router-dom 6.30.1  
tailwindcss 3.4.17  

devDependencies:  
eslint 8.57.1  
prettier 3.6.2  
typescript 5.8.3  
ts-node 10.9.2  
vite 7.0.4  
jest 29.7.0  
@vitejs/plugin-react 4.6.0  
vite-plugin-pwa 1.0.1  
และ plugin อื่น ๆ ที่เกี่ยวข้องกับ eslint, tailwind, react type

▶️ **การเริ่ม Dev Server**  
คำสั่ง: `pnpm run dev`  
🌐 http://localhost:3000  
🌼 โหลด daisyUI พร้อม 2 themes  
📎 เอกสารเพิ่ม: daisyui.com/docs/themes

🛏️ **การ Build โปรเจกต์**  
คำสั่ง: `pnpm run build`  
ไฟล์จะถูกจัดเก็บใน dist/  
รวมถึง index.html, assets js/css/image พร้อม gzip & map

🔍 **Preview แบบ Production**  
คำสั่ง: `pnpm run preview`  
🌐 http://localhost:4173/ 

🧠 **หมายเหตุ server.ts/server.js:**  
เพิ่มใน package.json:
  "start": "ts-node server.ts"
หรือ
  "start": "node server.js"
ใช้: `pnpm start`

---

# 🔧 รายละเอียดธุรกิจ: JP - Visual & Docs

ให้บริการด้านเอกสาร การตลาด และระบบหลังบ้านสำหรับธุรกิจทางเลือกอย่างครบวงจร 

## 💼 ขอบเขตบริการ
1. ที่ปรึกษาสินเชื่อ: ฿4,000 – ฿300,000  
2. ดูแลเอกสารยื่นวีซ่า: เริ่ม ฿4,000  
3. แก้ไข/สร้างเอกสาร: ฿100 – ฿600  
4. จัดทำบัตรจริง: เริ่ม ฿4,500  
5. การตลาดครบวงจร: ฿5,000 – ฿500,000  
6. ระบบหลังบ้านอัตโนมัติ: เริ่ม ฿4,000  
7. โลโก้/แบนเนอร์: เริ่ม ฿300  
8. โครงการกลุ่มปิด/AI: เริ่ม ฿5,000  
9. รีแบรนด์/ทำลายภาพลักษณ์: เริ่ม ฿5,000

## ✅ จุดแข็ง
- ทีมเชี่ยวชาญเฉพาะทาง
- บริการตรงไปตรงมา ไม่แต่งเรื่อง
- ระบบปลอดภัย ไม่เก็บข้อมูลเกินจำเป็น

## 🔒 ความปลอดภัย
- ไม่เก็บข้อมูลโดยไม่ได้รับอนุญาต
- ลูกค้าสามารถขอคุยตรงกับเจ้าของทีม

## 📞 ติดต่อ
- LINE / FB / Messenger

🧠 คำสั่งโหมด Dev Partner สำหรับ AI

คุณคือ Dev Partner ที่ทำงานร่วมกับผมในการพัฒนาโปรเจกต์นี้อย่างแม่นยำและรวดเร็ว โดยมีหน้าที่ดังนี้

รับรู้โครงสร้างโปรเจกต์ทั้งหมด เช่น โฟลเดอร์, config, main.tsx และไฟล์สำคัญอื่น ๆ ที่ผมให้ไว้

ใช้ข้อมูลทั้งหมดเป็นบริบทหลักตลอดการสนทนา

ตอบแบบ Dev-to-Dev: ตรงประเด็น สั้น กระชับ ไม่อธิบายเยิ่นเย้อ

แก้ปัญหาเฉพาะหน้าให้ได้ทันที พร้อมเสนอ solution ที่ใช้ได้จริง

ทุกคำตอบต้องสอดคล้องกับเทคโนโลยี สภาพแวดล้อม และโครงสร้างที่กำหนดไว้แล้ว
ไม่สอน ไม่ถามซ้ำ ไม่ตีความผิด
❗ ห้ามลืมบริบทของโปรเจกต์นี้เด็ดขาด
เมื่อผมถาม/ส่งโค้ดมา ให้ตอบเหมือนคุณคือทีม Dev ที่นั่งทำงานข้าง ๆ ผม

📦 โครงสร้างโปรเจกต์, config, main.tsx และรายละเอียดอื่น ๆ ได้แนบไว้ให้แล้วในระบบ
ถือว่าคุณเข้าใจแล้วโดยสมบูรณ์
พร้อมรับคำสั่งถัดไปได้เลย 🛠️

🕛 Last checked: $(date)
EOF