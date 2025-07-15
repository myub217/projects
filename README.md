
---

# 🚀 Modular OnePage

SPA โปรเจกต์ด้วย **React + TypeScript + Vite + TailwindCSS + DaisyUI + Express + Framer Motion**

---

## 🔧 เทคโนโลยีหลัก

| Stack            | Version |
| ---------------- | ------- |
| React            | 18.x    |
| TypeScript       | 5.x     |
| Vite             | 7.x     |
| TailwindCSS      | 3.x     |
| DaisyUI          | 5.x     |
| Express (API)    | 5.x     |
| Framer Motion    | 12.x    |
| React Router DOM | 6.x     |
| Lucide React     | latest  |
| React Icons      | latest  |

> ✅ *React Router DOM ใช้เวอร์ชัน 6.x เพื่อความเสถียรสูงสุดกับ TypeScript*

---

## 📁 โครงสร้างโปรเจกต์ (ย่อ)

. ├── Clean.sh ├── README.md ├── api/ │   ├── apiAdmin.ts │   └── apiClient.ts ├── dist/ ├── eslint.config.mjs ├── full-setup.sh ├── index.html ├── jest.config.js ├── jest.setup.js ├── node_modules/ ├── package.json ├── src/ │   ├── App.tsx │   ├── main.tsx │   └── components/ │       ├── About.tsx │       ├── Feature.tsx │       ├── AdminBoard/ │       │   ├── Dashboard.tsx │       │   ├── RepoList.tsx │       │   ├── StatsPanel.tsx │       │   └── UserTable.tsx │       └── Features/ │           ├── Feature1.tsx │           ├── Feature2.tsx │           ├── Feature3.tsx │           └── Feature4.tsx ├── tailwind.config.mjs ├── tsconfig.json ├── tsconfig.base.json └── vite.config.mjs

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

> ⚠️ ตัวแปรขึ้นต้นด้วย VITE_ จะถูก inject เข้า client bundle อัตโนมัติ




---

📦 Scripts สำคัญ (ใน package.json)

Command	Description

pnpm dev	รัน Vite Dev Server (SPA)
pnpm build	สร้าง Production Build
pnpm preview	Preview Build ที่สร้าง
pnpm start:api	รัน Express API Server
pnpm clean	ล้างไฟล์ Build และ Cache
pnpm typecheck	ตรวจสอบ TypeScript (no build)
pnpm lint	รัน ESLint ตรวจ style/code issue
pnpm check	รวม typecheck + lint ในคำสั่งเดียว
pnpm analyze	วิเคราะห์ bundle ผ่าน visualizer



---

🌙 ฟีเจอร์ Theme & PWA

✅ รองรับ Light/Dark mode (เก็บไว้ใน localStorage)

✅ ใช้ DaisyUI theme system (data-theme)

✅ Progressive Web App (PWA) พร้อม icon & auto-update



---

🛠 การใช้งานเบื้องต้น

pnpm install        # ติดตั้ง dependencies
pnpm dev            # เริ่ม Dev Server (SPA)
pnpm start:api      # เริ่ม Express API Server
pnpm build          # สร้าง Production build
pnpm preview        # เปิด preview แบบ static


---

🧠 หมายเหตุเพิ่มเติม

ใช้ vite.config.mjs, tailwind.config.mjs แบบ ESM รองรับ dynamic import

โครงสร้างแยก api/, components/, features/ ชัดเจน

รองรับการวิเคราะห์ bundle ด้วย rollup-plugin-visualizer



---

🔧 Setup Script Summary (setup.sh)

#	Task	Command / Fix

1	Node.js Version Check	node -v (>= 18.x)
2	PNPM Installed	command -v pnpm
3	Clean Workspace	rm -rf node_modules pnpm-lock.yaml
4	Install Dependencies	pnpm install
5	.env File Check	test -f .env
6	Vite Config Check	vite.config.ts ใช้ defineConfig
7	Tailwind Config	tailwind.config.js / .mjs
8	TypeScript Config	tsconfig.json
9	PostCSS Config	ตรวจ postcss.config.js
10	Husky Init	pnpm dlx husky install
11	Script Permission	chmod +x setup.sh
12	Terminal Prompt	ใช้ read -p สำหรับ interaction
13	Platform Compatibility	uname -o ตรวจ Linux / Unix / Android
14	Git Init	git init
15	Code Format (Prettier)	pnpm format
16	Lint Code (ESLint)	pnpm lint
17	Build App	pnpm build
18	Custom Aliases	alias devmod="pnpm start"
19	.gitignore Validation	ตรวจ .env, dist, node_modules
20	Network Check	ping -c1 registry.npmjs.org
21	Setup Logging	echo "..." >> setup.log



---

📄 License

Private Project — ไม่อนุญาตให้เผยแพร่หรือใช้งานเชิงพาณิชย์


---

📬 ติดต่อ

Email: myub25217@gmail.com

GitHub: github.com/myub217/projects



---

✅ พร้อมใช้งานทันที

Format พร้อม deploy / share ได้

รองรับ CI/CD, analyze, dev-prod env

อ่านง่าย แยก section ชัดเจน


---

📌 หากต้องการ:
- Export เป็น `.md`, `.txt`, `.pdf`
- สร้าง `setup.sh`, `Clean.sh`, `README.md` อัตโนมัติ
- เพิ่ม badge / shield / versioning info

บอกได้ทันที ✅

