# Modular OnePage

โปรเจกต์ **Modular OnePage SPA** ด้วยเทคโนโลยีสมัยใหม่: **React + TypeScript + Vite + TailwindCSS + DaisyUI + Express + Framer Motion**

---

## 🔧 เทคโนโลยีหลัก

- React 18.x
- TypeScript 5.x
- Vite 7.x
- TailwindCSS 3.x + DaisyUI 5.x
- Express 5.x (API Server)
- Framer Motion 12.x (Animation)
- React Router DOM 6.x *(แนะนำ downgrade จาก 7.x เพื่อความเสถียรกับ TypeScript)*
- Lucide React, React Icons

---

## 📁 โครงสร้างโปรเจกต์ (ตัวอย่าง)

. ├── Clean.sh                       # ล้างไฟล์ build / cache ├── analyze-project.sh            # วิเคราะห์ bundle ├── api/ │   ├── apiAdmin.ts               # API ฝั่ง server │   └── apiClient.ts              # API ฝั่ง client ├── env-vars-YYYYMMDD-HHMMSS.txt  # บันทึก env vars ที่ export ไว้ ├── index.html                    # หน้า HTML หลัก ├── jest.config.js                # Jest config ├── node_modules/ ├── package.json ├── src/ │   ├── components/               # Component หลักและย่อย │   ├── App.tsx                   # Root React Component │   ├── main.tsx                  # Entry point │   └── ... ├── tailwind.config.mjs           # Tailwind config (ESM) ├── tsconfig.json                 # TypeScript config ├── tsconfig.base.json ├── vite.config.mjs               # Vite config (ESM)

---

## ⚙️ ตัวแปรสภาพแวดล้อม (.env)

สร้างไฟล์ `.env` ใน root (ไม่ควร commit ขึ้น Git)

```env
# พอร์ตสำหรับ Express API Server
PORT=3000

# Base URL สำหรับ client (ลงท้ายด้วย /api)
VITE_API_BASE_URL=http://localhost:3000/api

# ระบุโหมดปัจจุบัน (dev, production)
NODE_ENV=development

# เปิดอัตโนมัติใน browser
VITE_OPEN_BROWSER=true

# เปิด report visualizer หรือไม่
VITE_OPEN_REPORT=true

# พอร์ต dev server
VITE_DEV_SERVER_PORT=5173

# พอร์ต preview server
VITE_PREVIEW_SERVER_PORT=4173

# โฟลเดอร์ output ของ build
VITE_BUILD_OUTDIR=dist

> 🔐 ตัวแปรขึ้นต้น VITE_ จะถูก inject เข้า client bundle โดยอัตโนมัติ




---

📦 สคริปต์สำคัญใน package.json

คำสั่ง	คำอธิบาย

dev	รัน Vite dev server (React SPA)
build	สร้าง production build
preview	Preview build ที่สร้าง
start:api	รัน Express API server
clean	ล้างไฟล์ build และ cache
typecheck	ตรวจสอบ TypeScript โดยไม่ compile
lint	ตรวจสอบโค้ดด้วย ESLint
check	รัน typecheck + lint พร้อมกัน
analyze	วิเคราะห์ bundle size และ visualizer



---

🚀 การใช้งาน

ติดตั้ง Dependency

pnpm install
# หรือ
yarn install
# หรือ
npm install

Development (SPA)

pnpm run dev

Start API Server

pnpm run start:api

Build Production

pnpm run build

Preview Production Build

pnpm run preview


---

🧱 โครงสร้าง Component หลัก (ตัวอย่าง)

src/
├── components/
│   ├── About.tsx
│   ├── Feature.tsx
│   ├── AdminBoard/
│   │   ├── Dashboard.tsx
│   │   ├── RepoList.tsx
│   │   ├── StatsPanel.tsx
│   │   └── UserTable.tsx
│   └── Features/
│       ├── Feature1.tsx
│       ├── Feature2.tsx
│       ├── Feature3.tsx
│       └── Feature4.tsx


---

🧠 หมายเหตุ

ใช้ vite.config.mjs และ tailwind.config.mjs เพื่อรองรับ ESM

React Router DOM ควรใช้เวอร์ชัน 6.x สำหรับความเสถียรกับ TypeScript

ค่าที่ขึ้นต้น VITE_ จะถูกแปลงเข้าสู่ client-side โดยอัตโนมัติ

รองรับ theme mode (light/dark) ด้วย localStorage และ DaisyUI data-theme



---

📄 License

Private Project — ไม่เผยแพร่ต่อสาธารณะ


---

📬 ติดต่อ

Email: myub25217@gmail.com

GitHub: myub217/projects




