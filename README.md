# modular-onepage

โปรเจกต์ Modular OnePage SPA ด้วย React + TypeScript + Vite + TailwindCSS + DaisyUI + Express + Framer Motion

---

## เทคโนโลยีหลัก

- React 18.x
- TypeScript 5.x
- Vite 7.x
- TailwindCSS 3.x + DaisyUI 5.x
- Express 5.x (API Server)
- Framer Motion 12.x (Animation)
- React Router DOM 6.x (แนะนำ downgrade เป็น 6.x จาก 7.x เพื่อความเสถียร TS)
- Lucide React, React Icons

---

## โครงสร้างโปรเจกต์ (ตัวอย่าง)

. ├── Clean.sh                  # สคริปต์ล้างไฟล์ build / cache ├── analyze-project.sh        # สคริปต์วิเคราะห์ bundle ├── api │   ├── apiAdmin.ts           # API ฝั่ง server สำหรับ admin │   └── apiClient.ts          # API ฝั่ง client ├── env-vars-YYYYMMDD-HHMMSS.txt # ไฟล์เก็บ env vars (generated) ├── index.html                # หน้า HTML หลัก ├── jest.config.js            # config สำหรับ jest ├── node_modules              # ไฟล์ dependencies ├── package.json              # config npm/yarn/pnpm + scripts ├── src │   ├── components            # Component หลักและย่อย │   ├── App.tsx               # Root React Component │   ├── main.tsx              # entry point React │   └── ... ├── tailwind.config.mjs       # config TailwindCSS (ESM) ├── tsconfig.json             # config TypeScript ├── tsconfig.base.json        # base config TypeScript ├── vite.config.mjs           # config Vite (ESM) └── ...

---

## ตัวแปรสภาพแวดล้อม (Environment Variables)

สร้างไฟล์ `.env` ใน root โปรเจกต์ (ไม่ควร commit ลง Git)

```env
# พอร์ต API server
PORT=3000

# URL base ของ API ฝั่ง client (ต้องลงท้ายด้วย /api)
VITE_API_BASE_URL=http://localhost:3000/api

# โหมด development หรือ production
NODE_ENV=development

> หมายเหตุ: ตัวแปรที่ขึ้นต้นด้วย VITE_ จะถูก inject เข้า client bundle อัตโนมัติ




---

สคริปต์สำคัญใน package.json

คำสั่ง	คำอธิบาย

dev	รัน Vite dev server (React SPA)
build	สร้างไฟล์ build สำหรับ production
preview	preview build production
start:api	รัน API server (Express)
clean	ล้างไฟล์ build และ cache
typecheck	ตรวจสอบ TypeScript โดยไม่ compile
lint	ตรวจสอบโค้ดด้วย ESLint
check	รัน typecheck + lint พร้อมกัน
analyze	สร้างรายงานวิเคราะห์ bundle



---

การติดตั้ง

pnpm install   # หรือ yarn install / npm install


---

การรันโปรเจกต์

รัน SPA development server:

pnpm run dev

รัน API server (แยก process):

pnpm run start:api

สร้างไฟล์ production build:

pnpm run build

ดูผลลัพธ์ production build:

pnpm run preview



---

หมายเหตุ

โปรเจกต์นี้ใช้ vite.config.mjs และ tailwind.config.mjs เป็นไฟล์ config แทน .js เพื่อรองรับ ESM

ควร downgrade react-router-dom เป็นเวอร์ชัน 6.x เพราะ API และ typing ที่ใช้งานร่วมกับ TypeScript จะเสถียรกว่า

ตัวแปร environment ที่ขึ้นต้นด้วย VITE_ จะถูก inject เข้า client bundle อัตโนมัติ



---

โครงสร้าง Component หลัก (ตัวอย่าง)

src/components/About.tsx

src/components/AdminBoard/Dashboard.tsx

src/components/AdminBoard/RepoList.tsx

src/components/AdminBoard/StatsPanel.tsx

src/components/AdminBoard/UserTable.tsx

src/components/Feature.tsx

src/components/Features/Feature1.tsx

src/components/Features/Feature2.tsx

src/components/Features/Feature3.tsx

src/components/Features/Feature4.tsx



---

License

โปรเจกต์นี้เป็น private project ไม่เปิดเผยสาธารณะ


---

ติดต่อ

หากมีคำถามหรือข้อเสนอแนะ ติดต่อได้ที่

Email: myub25217@gmail.com

GitHub: https://github.com/myub217/projects


พร้อมแก้ไขให้ถูกต้อง ครบถ้วน และ format เรียบร้อยตามที่ต้องการครับ

