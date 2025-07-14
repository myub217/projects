# 🚀 Modular OnePage

SPA โปรเจกต์ด้วย **React + TypeScript + Vite + TailwindCSS + DaisyUI + Express + Framer Motion**

---

## 🔧 เทคโนโลยีหลัก

| Stack            | Version  |
|------------------|----------|
| React            | 18.x     |
| TypeScript       | 5.x      |
| Vite             | 7.x      |
| TailwindCSS      | 3.x      |
| DaisyUI          | 5.x      |
| Express (API)    | 5.x      |
| Framer Motion    | 12.x     |
| React Router DOM | 6.x      |
| Lucide React     | latest   |
| React Icons      | latest   |

> ✅ *React Router DOM ใช้เวอร์ชัน 6.x เพื่อความเสถียรสูงสุดกับ TypeScript*

---

## 📁 โครงสร้างโปรเจกต์ (ย่อ)

. ├── Clean.sh ├── README.md ├── api/ │   ├── apiAdmin.ts │   └── apiClient.ts ├── dist/ ├── env-vars-20250713-223029.txt ├── eslint.config.mjs ├── full-setup.sh ├── index.html ├── jest.config.js ├── jest.setup.js ├── node_modules/ ├── package.json ├── src/ │   ├── App.tsx │   ├── main.tsx │   └── components/ │       ├── About.tsx │       ├── Feature.tsx │       ├── AdminBoard/ │       │   ├── Dashboard.tsx │       │   ├── RepoList.tsx │       │   ├── StatsPanel.tsx │       │   └── UserTable.tsx │       └── Features/ │           ├── Feature1.tsx │           ├── Feature2.tsx │           ├── Feature3.tsx │           └── Feature4.tsx ├── tailwind.config.mjs ├── tsconfig.json ├── tsconfig.base.json └── vite.config.mjs

---

## ⚙️ ตัวแปรสภาพแวดล้อม `.env`

```env
PORT=3000
NODE_ENV=development

VITE_API_BASE_URL=http://localhost:3000/api
VITE_DEV_SERVER_PORT=5173
VITE_PREVIEW_SERVER_PORT=4173

VITE_OPEN_BROWSER=true
VITE_OPEN_REPORT=true

VITE_BUILD_OUTDIR=dist

> ✅ ตัวแปรที่ขึ้นต้นด้วย VITE_ จะถูก inject เข้า client bundle อัตโนมัติใน Vite
🧪 ใช้ .env.production, .env.development ได้หากต้องการแยก stage




---

📦 Scripts สำคัญ (ใน package.json)

Command	Description

dev	รัน Vite Dev Server (SPA)
build	สร้าง Production Build
preview	Preview Build ที่สร้าง
start:api	รัน Express API Server
clean	ล้างไฟล์ Build และ Cache
typecheck	ตรวจสอบ TypeScript (no build)
lint	รัน ESLint ตรวจ style/code issue
check	รวม typecheck + lint ในคำสั่งเดียว
analyze	สร้างรายงาน bundle (เปิด auto ด้วย env)



---

🛠 การใช้งานเบื้องต้น

pnpm install        # หรือ npm / yarn install
pnpm dev            # เริ่ม Dev Server (SPA)
pnpm start:api      # เริ่ม Express API Server
pnpm build          # สร้าง Production build
pnpm preview        # เปิด preview แบบ static


---

🌙 ฟีเจอร์ Theme & PWA

✅ รองรับ Light/Dark mode (เก็บไว้ใน localStorage)

✅ ใช้ DaisyUI theme system (data-theme)

✅ Progressive Web App (PWA) พร้อม icon & auto-update



---

🧠 หมายเหตุเพิ่มเติม

ใช้ vite.config.mjs และ tailwind.config.mjs แบบ ESM (รองรับ dynamic import + tree-shake)

จัดโครงสร้างแยก api/, components/, features/ ชัดเจน

รองรับการวิเคราะห์ bundle ด้วย rollup-plugin-visualizer



---

📄 License

Private Project — ไม่อนุญาตให้เผยแพร่หรือใช้งานเชิงพาณิชย์


---

📬 ติดต่อ

Email: myub25217@gmail.com

GitHub: github.com/myub217/projects


---

### ✅ พร้อมใช้
- Format พร้อม deploy / share ได้
- รองรับ CI/CD, analyze, dev-prod env
- อ่านง่าย แยก section ชัดเจน

ต้องการ export เป็น `.md`, `.txt`, `.pdf`, หรือรวมกับไฟล์ `README.md` บอกได้เลย.

