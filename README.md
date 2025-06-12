✅ คู่มือการใช้งานและแก้ไขโปรเจกต์ React + Vite (JP Visual & Docs)

🔧 โครงสร้างโปรเจกต์หลัก (ระดับ 1)

ไฟล์/โฟลเดอร์	หน้าที่

index.html	HTML Template หลัก (SEO/OG/Image/Meta อยู่ที่นี่)
vite.config.ts	ตั้งค่า Vite เช่น plugin, PWA, alias
tailwind.config.ts	ตั้งค่า Tailwind เช่น theme, plugin
postcss.config.cjs	PostCSS สำหรับ Tailwind
tsconfig.*.json	ตั้งค่า TypeScript ในแต่ละบริบท
src/	โค้ดแอปทั้งหมด อยู่ที่นี่
public/	ไฟล์สาธารณะ เช่น favicon, manifest.json
dist/	ผลลัพธ์ที่ได้จาก vite build
fix_project.sh	สคริปต์ช่วยแก้ไขบางจุด (ต้องตรวจสอบว่าทำอะไร)



---

🧩 โฟลเดอร์ src/ รายละเอียดและหน้าที่

โฟลเดอร์ / ไฟล์	หน้าที่

App.tsx	โครงสร้าง SPA หลักของเว็บ
main.tsx	Entry point ของแอป
index.css	สไตล์ Tailwind/Custom ทั่วไป
assets/	รูปภาพ โลโก้ ไอคอน
components/	UI Components ที่นำไปใช้ในหน้า
components/skeletons/	Skeleton Loader แต่ละจุด
context/ThemeContext.tsx	Context สำหรับ Dark/Light Mode
components/index.js	Export รวม components



---

🎯 แพ็กเกจหลักที่ใช้งาน (และควรคงไว้)

กลุ่ม	แพ็กเกจ	หน้าที่

Core	react, react-dom	React Core
Tailwind	tailwindcss, @tailwindcss/*	CSS Framework + Plugin
UI	daisyui, lucide-react, react-icons	UI Components + Icons
Motion	framer-motion	Animation / Page transitions
SEO	react-helmet-async	SEO/Meta tag รองรับ async
Loader	react-loading-skeleton	Loading UI
Scroll	react-scroll	ลิงก์เลื่อนหน้า (SPA)
Dev	vite, typescript, eslint, pnpm	ระบบพัฒนา



---

🛠️ ข้อเสนอแนะสิ่งที่ควรเอาออก / เพิ่ม

❌ สิ่งที่ควรเอาออก (หากไม่ใช้งานจริง)

รายการ	เหตุผล

fix_project1.sh	หากไม่มีการใช้งานจริงหรือล้าสมัย
tailwind.config.js	ถ้าใช้ tailwind.config.ts แล้วไม่จำเป็นต้องมีทั้งสอง
vite-env.d.ts	ตรวจสอบว่าใช้งานหรือไม่ บางโปรเจกต์ไม่จำเป็น
make-icons.py	ถ้าไม่ได้ build icons หรือสร้าง favicon ด้วย Python แล้วไม่จำเป็น
.tsbuildinfo	สร้างโดย TypeScript อัตโนมัติ ไม่จำเป็นต้องเก็บไว้ใน git


✅ สิ่งที่ควรเพิ่ม / ตรวจสอบ

รายการ	เหตุผล

manifest.webmanifest (ใน public/)	เพื่อรองรับ PWA อย่างสมบูรณ์
favicon.ico / favicon.svg	เพื่อให้ทุกเบราว์เซอร์แสดง favicon ถูกต้อง
robots.txt / sitemap.xml	รองรับ SEO (สร้างได้ง่าย ๆ ด้วยสคริปต์หรือมือ)
README.md (เขียนเพิ่ม)	อธิบายโปรเจกต์ให้คนอื่นอ่านรู้เรื่อง
.env / .env.example	แยก config เช่น API_KEY ออกไปจากโค้ด
404.html (ใน public/)	สำหรับ SPA รองรับ fallback หน้า



---

🚀 วิธีการใช้งานและพัฒนา

✅ คำสั่งที่ควรรู้

# ติดตั้ง dependency
pnpm install

# รันโหมดพัฒนา
pnpm dev

# สร้าง build สำหรับ production
pnpm build

# เปิดดู build
pnpm preview


---

🌗 Dark Mode Toggle

> ใช้ผ่าน ThemeContext.tsx + ปุ่ม toggle ใน ThemeToggle.tsx
ค่า theme จะถูกเก็บใน localStorage และมีการใช้ class dark บน <html>




---

🔍 SEO & OG Tag

ใช้ react-helmet-async สำหรับใส่ <meta>, <title>, OG image

ให้ตั้งค่าไว้ใน index.html และ App.tsx


<Helmet>
  <title>JP Visual & Docs</title>
  <meta name="description" content="บริการครบวงจรเกี่ยวกับการเงิน เอกสาร และระบบ" />
  <meta property="og:image" content="/repository-open-graph-template.png" />
</Helmet>


---

📲 Progressive Web App (PWA)

> ตรวจสอบว่าใน vite.config.ts มี plugin PWA แล้วหรือยัง เช่น:



import { VitePWA } from 'vite-plugin-pwa'

plugins: [
  react(),
  VitePWA({
    manifest: {
      name: 'JP Visual & Docs',
      icons: [/* ... */],
    },
    registerType: 'autoUpdate',
  })
]


---

📁 ตัวอย่างโฟลเดอร์ที่ดีสำหรับโปรเจกต์นี้

src/
├── components/
│   ├── Hero.tsx
│   ├── ServicesSection.tsx
│   ├── ...
│   └── skeletons/
├── pages/        ← (เพิ่มถ้าแยกหน้าในอนาคต)
├── assets/
├── context/
├── App.tsx
├── main.tsx


---

📚 ข้อเสนอแนะเพิ่มเติม

เพิ่ม i18n (แปลภาษา) ถ้ามีแผนทำเว็บหลายภาษา

ใช้ React Router v6+ ถ้าจะมีหลายหน้าแทน SPA

ใช้ zustand หรือ redux หาก state เริ่มซับซ้อนขึ้น

ใช้ commit lint + husky เพื่อควบคุมคุณภาพ git commit
