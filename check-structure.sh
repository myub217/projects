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

# ✅ สถานะโปรเจกต์: `modular-onepage@0.1.0`

## ✅ เสร็จสมบูรณ์แล้ว

### 🔧 Stack + โครงสร้าง
- [x] Vite 7 + React 18 + TypeScript
- [x] TailwindCSS 3 + DaisyUI 4 (`business`/`business-dark`)
- [x] Routing + ProtectedRoute
- [x] Express Server (`server/index.ts`)
- [x] PWA แบบ `injectManifest` + `sw.ts`
- [x] Static Assets พร้อมใช้งาน (SVG, WebP)
- [x] Hero Section + framer-motion
- [x] Document Viewer (PDF) + Dropzone Upload
- [x] ENV config (`dotenv`) ทำงานครบ

### 🔌 Dependencies ครบ (via `pnpm list`)
- React Ecosystem, Tailwind, DaisyUI, Express
- react-pdf, file-saver, workbox, etc.
- devDeps: types, vite plugins, tsx, typescript

### 🛠️ Build System ทำงานครบ
- [x] `vite build`
- [x] `vite preview` (http://localhost:4173)
- [x] `pnpm start` → Express (http://localhost:3000)
- [x] PWA sw.js build สมบูรณ์

---

## ⏭️ สิ่งที่จะทำต่อ

### 🔐 ระบบ Authentication
- [ ] API `/api/auth/login` ส่ง JWT
- [ ] Client เก็บ token (localStorage/cookie)
- [ ] Hook: `useAuth`, `useLogin`, `useLogout`
- [ ] Guard `/api/admin/*` ด้วย JWT middleware
- [ ] Redirect + ProtectedRoute

### 📄 Document Center
- [ ] แสดงรายการไฟล์จาก backend
- [ ] API สำหรับ upload → `/api/admin/upload`
- [ ] ปุ่ม Download (ผ่าน FileSaver หรือ link)
- [ ] Split public/private document

### ⚙️ Admin Tool
- [ ] สร้าง UI ที่ `/admin`
- [ ] จัดการไฟล์ (upload/delete)
- [ ] Protected route ด้วย JWT

### 🚀 Deployment & Optimization
- [ ] Gzip/Brotli + Static caching headers
- [ ] Workbox runtime caching strategy
- [ ] Deploy: Surge / Vercel / CF Pages
- [ ] ตรวจสอบ Offline Mode

---

## 📁 Suggested File Structure (ต่อยอด)
plaintext
src/
├─ api/
│  ├─ apiAdmin.ts
│  └─ apiAuth.ts     ← [new]
├─ features/
│  └─ AuthFeature.tsx  ← [new]
├─ pages/
│  ├─ DocumentsPage.tsx
│  ├─ AdminPage.tsx     ← [new]
│  └─ LoginPage.tsx     ← [new]
├─ hooks/
│  └─ useAuth.ts        ← [new]
└─ sw.ts


---

☑️ ถัดไปให้เริ่มที่:

[ ] apiAuth.ts → สร้าง /api/auth/login (JWT)

[ ] LoginPage.tsx + form login

[ ] useAuth.ts → ใช้กับ ProtectedRoute

[ ] ทดสอบ /admin + token auth


🧠 พร้อมทำงานต่อ Dev-to-Dev
สั่งแก้/ขยาย/เพิ่ม component ได้
ทันที
## 🧭 Business Overview
- บริการทั้งหมด 9 รายการ (ตั้งแต่เอกสารจนถึง AI + branding)
- จุดแข็งคือ “จริง ไม่แต่งเรื่อง” + ระบบปลอดภัย + ทีมเฉพาะทาง
- เน้นติดต่อผ่านช่องทางตรง (LINE/FB/Messenger)

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