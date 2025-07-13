# Modular OnePage

โปรเจกต์ Modular OnePage SPA ด้วย React + TypeScript + Vite + TailwindCSS + DaisyUI + Express + Framer Motion

---

## 🔧 เทคโนโลยีหลัก

- React 18.x  
- TypeScript 5.x  
- Vite 7.x  
- TailwindCSS 3.x + DaisyUI 5.x  
- Express 5.x (API Server)  
- Framer Motion 12.x (Animation)  
- React Router DOM 6.x (downgrade จาก 7.x เพื่อความเสถียรกับ TypeScript)  
- Lucide React, React Icons  

---

## 📁 โครงสร้างโปรเจกต์ (ตัวอย่าง)

. ├── Clean.sh                       # ล้างไฟล์ build / cache ├── analyze-project.sh            # วิเคราะห์ bundle ├── api/ │   ├── apiAdmin.ts               # API ฝั่ง server │   └── apiClient.ts              # API ฝั่ง client ├── env-vars-YYYYMMDD-HHMMSS.txt  # บันทึก env vars ที่ export ไว้ ├── index.html                    # หน้า HTML หลัก ├── jest.config.js                # Jest config ├── node_modules/ ├── package.json ├── src/ │   ├── components/               # Component หลักและย่อย │   ├── App.tsx                   # Root React Component │   ├── main.tsx                  # Entry point │   └── ... ├── tailwind.config.mjs           # Tailwind config (ESM) ├── tsconfig.json                 # TypeScript config ├── tsconfig.base.json ├── vite.config.mjs               # Vite config (ESM)

---

## ⚙️ ตัวแปรสภาพแวดล้อม (.env)

```env
PORT=3000                             # พอร์ต Express API Server
VITE_API_BASE_URL=http://localhost:3000/api  # Base URL client
NODE_ENV=development
VITE_OPEN_BROWSER=true
VITE_OPEN_REPORT=true
VITE_DEV_SERVER_PORT=5173
VITE_PREVIEW_SERVER_PORT=4173
VITE_BUILD_OUTDIR=dist

> ตัวแปรขึ้นต้น VITE_ จะ inject เข้า client bundle อัตโนมัติ




---

📦 สคริปต์สำคัญใน package.json

คำสั่ง	คำอธิบาย

dev	รัน Vite dev server (React SPA)
build	สร้าง production build
preview	Preview build ที่สร้าง
start:api	รัน Express API server
clean	ล้างไฟล์ build และ cache
typecheck	ตรวจสอบ TypeScript ไม่ compile
lint	ตรวจสอบโค้ดด้วย ESLint
check	รัน typecheck + lint พร้อมกัน
analyze	วิเคราะห์ bundle size + visualizer



---

🚀 การใช้งาน

pnpm install      # หรือ yarn install / npm install
pnpm run dev      # รัน dev server SPA
pnpm run start:api  # รัน API server
pnpm run build    # สร้าง production build
pnpm run preview  # Preview build


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

React Router DOM แนะนำเวอร์ชัน 6.x สำหรับความเสถียรกับ TypeScript

ตัวแปร VITE_ inject เข้า client อัตโนมัติ

รองรับ theme mode (light/dark) ด้วย localStorage + DaisyUI data-theme



---

📄 License

Private Project — ไม่เผยแพร่ต่อสาธารณะ


---

📬 ติดต่อ

Email: myub25217@gmail.com

GitHub: https://github.com/myub217/projects


ต้องการไฟล์ markdown หรือไฟล์อื่นๆ แจ้งได้เลยครับ

