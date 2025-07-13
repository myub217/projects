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

.
├── Clean.sh
├── README.md
├── api/
│   ├── apiAdmin.ts
│   └── apiClient.ts
├── dist/
├── env-vars-20250713-223029.txt
├── eslint.config.mjs
├── full-setup.sh
├── index.html
├── jest.config.js
├── jest.setup.js
├── node_modules/
├── package.json
├── src/
│   ├── components/
│   ├── App.tsx
│   ├── main.tsx
├── tailwind.config.mjs
├── tsconfig.json
├── tsconfig.base.json
├── vite.config.mjs

---

## ⚙️ ตัวแปรสภาพแวดล้อม (`.env`)

```env
PORT=3000
NODE_ENV=development
VITE_API_BASE_URL=http://localhost:3000/api
VITE_DEV_SERVER_PORT=5173
VITE_PREVIEW_SERVER_PORT=4173
VITE_OPEN_BROWSER=true
VITE_OPEN_REPORT=true
VITE_BUILD_OUTDIR=dist

> ✅ ตัวแปรขึ้นต้น VITE_ จะถูก inject เข้าสู่ client bundle อัตโนมัติ




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

🧱 โครงสร้าง Component หลัก

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

🚀 การใช้งาน

pnpm install        # หรือ yarn / npm install
pnpm run dev        # รัน dev server SPA
pnpm run start:api  # รัน API server
pnpm run build      # สร้าง production build
pnpm run preview    # Preview build


---

🧠 หมายเหตุ

✅ ใช้ vite.config.mjs และ tailwind.config.mjs เพื่อรองรับ ESM

✅ React Router DOM แนะนำเวอร์ชัน 6.x สำหรับความเสถียรกับ TypeScript

✅ รองรับ theme mode (light/dark) ด้วย localStorage + DaisyUI data-theme



---

📄 License

Private Project — ไม่เผยแพร่ต่อสาธารณะ


---

📬 ติดต่อ

Email: myub25217@gmail.com

GitHub: github.com/myub217/projects
