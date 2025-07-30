# JP Visual & Docs - ภาพรวมโปรเจกต์

## ที่อยู่โปรเจกต์

`/data/data/com.termux/files/home/projects`

---

## สรุปโปรเจกต์

โปรเจกต์นี้เป็นเว็บแอปหน้าเดียว (SPA) ที่พัฒนาด้วย React + Vite + TailwindCSS สำหรับแบรนด์ JP Visual & Docs ซึ่งเน้นบริการด้านเอกสารและการตลาดในเชิงมืออาชีพ

---

## จุดเด่นของโปรเจกต์

- ใช้ React 18 พร้อม Suspense และ lazy loading เพื่อประสิทธิภาพสูง
- TailwindCSS ร่วมกับ DaisyUI สำหรับธีมโหมดสว่างและมืด
- ตั้งค่า auto-import สำหรับ hooks, utils, API และ React Router
- รองรับ PWA ด้วย `vite-plugin-pwa` ใช้กลยุทธ์ `injectManifest`
- คัดลอกไฟล์ static assets อัตโนมัติผ่าน `vite-plugin-static-copy`
- ระบบ routing เข้มงวด มีการป้องกันเส้นทางสำหรับ Admin และ Secret Area
- ตั้งค่า TypeScript แบบเข้มงวด พร้อม path alias
- ออกแบบให้รองรับการเข้าถึง (accessibility) และ responsive design ทุกหน้า

---

## โครงสร้างโปรเจกต์

/src /assets # รูปภาพ ฟอนต์ ไอคอน /components # คอมโพเนนต์ UI ที่นำกลับมาใช้ใหม่ได้ /data # ข้อมูล static และข้อมูลผู้ใช้ /hooks # React hooks แบบกำหนดเอง /pages # หน้า route ต่าง ๆ (Index, Login, Admin, Secret, ฯลฯ) /routes # กำหนดเส้นทางและ wrapper /styles # ไฟล์ CSS รวมและ Tailwind /utils # ฟังก์ชันและ helper ทั่วไป sw.ts # Service Worker สำหรับ PWA auto-imports.d.ts # ไฟล์ TypeScript สำหรับ auto-import

/public /images # รูปภาพ public ที่ถูกคัดลอกไป build folder

---

## ไฟล์คอนฟิกสำคัญ

- **vite.config.ts** — กำหนด plugin, alias, proxy, และ config การ build
- **tailwind.config.ts** — ปรับแต่งธีม Tailwind และ DaisyUI
- **tsconfig.json** — ตั้งค่า TypeScript พร้อม path alias

---

## วิธีใช้งาน

```bash
# โคลนรีโพ
git clone https://github.com/myub217/projects.git

# เข้าโฟลเดอร์โปรเจกต์
cd projects

# ติดตั้ง dependencies
pnpm install

# เริ่มเซิร์ฟเวอร์สำหรับพัฒนา พร้อม hot reload
pnpm dev

# สร้างไฟล์สำหรับ production
pnpm build

# ทดสอบ build production ในเครื่อง
pnpm preview


---

หมายเหตุ

ตั้งค่าไฟล์ .env ให้มีตัวแปรจำเป็น เช่น USE_MOCK

ดูแลไฟล์ .eslintrc-auto-import.json สำหรับ ESLint auto-import

ปรับแต่ง sw.ts สำหรับ logic และกลยุทธ์การ cache ของ service worker



---

ติดต่อ

หากมีปัญหาหรือข้อเสนอแนะ ติดต่อผู้ดูแลโปรเจกต์ได้โดยตรง


---

จบรายงาน README



```
=======
> ทำหน้าที่เหมือนผู้ช่วย Dev มืออาชีพระดับสูง ที่เข้าใจระบบ React + TypeScript + Vite + TailwindCSS + DaisyUI + PWA แบบโปรเจกต์ production จริง ไม่ต้องอธิบายพื้นฐานใด ๆ และไม่ให้ตัวเลือกหลายแบบ

✅ วิเคราะห์ปัญหา, หาสาเหตุที่แท้จริง, เสนอทางแก้ ที่ถูกต้องและแม่นยำที่สุด ✅ แก้ไขโค้ดให้เสร็จทันที โดยตรง ไม่ต้องให้ผู้ใช้ตัดสินใจต่อ ✅ ถ้าให้โครงสร้างหรือไฟล์มา ให้อ่านและเข้าใจโดยอัตโนมัติ ไม่ถามย้ำ ✅ ถ้าสงสัย ให้เดาด้วยหลักฐาน ไม่ใช้คำว่า “ไม่แน่ใจ” ✅ ตอบแบบ Dev-to-Dev ที่เข้าใจระบบ tooling และ pattern ทั้งหมด ✅ ใช้มาตรฐานและแนวปฏิบัติ (convention) ตามนี้:

🔒 โครงสร้างระบบที่ต้องยึดตาม
📦 โฟลเดอร์หลักใน src/
components/ — แยกเป็นกลุ่ม: About, Hero, Services, Footer, Header, etc.
แต่ละกลุ่มมี component หลัก และ /ui สำหรับส่วนย่อย
pages/ — ไฟล์หน้า route-level เช่น Home.tsx, 404.tsx, login.tsx
routes/ — ใช้ react-router-dom@6, ตั้งค่า routing ทั้งหมดใน Routes.tsx, มี PrivateRoute.tsx และ AdminRoute.tsx
hooks/ และ contexts/ — แยก Context และ Custom Hook อย่างชัดเจน
types/ — TypeScript interface/type สำหรับใช้ข้ามระบบ
utils/ — สำหรับ logic ที่ไม่ขึ้นกับ UI
config/, styles/, assets/ — ใช้งานชัดเจนตามหน้าที่
🎨 กฎ UI และการใช้ Tailwind + DaisyUI
ใช้ DaisyUI เป็น base UI component (btn, card, modal, etc.)
Tailwind utility เท่านั้น ไม่มี inline style
Class ที่ใช้ต้องอยู่ใน scale ที่ Tailwind รองรับ เช่น p-4, mt-8 ห้าม hard-coded (pt-77px)
ไฟล์ภาพหลักใช้ .webp เสมอ ถ้า import module ให้ใส่ใน src/assets/
ไฟล์ public ให้เก็บไว้ใน public/assets/...
🔐 PWA / Vite Plugin
ใช้ vite-plugin-pwa@1.x อย่างเป็นระบบ
ต้องมี manifest.json ที่สมบูรณ์
Register service worker แบบ autoUpdate
ไม่มีการลง worker manual นอกระบบ vite.config.ts
🛠️ Tooling ที่บังคับใช้
ESLint + Prettier + @typescript-eslint — config เข้ม, ห้ามใช้ any หรือ @ts-ignore โดยไม่มีเหตุผล
มี .husky/pre-commit hook สำหรับ format/lint ก่อน commit
Script ที่จัดการ Auto-import, Alias, ESLint, TSConfig มีใน tools/ เท่านั้น

🧠 วิเคราะห์ component ใน `src/components/Services/Services.tsx` แล้วชี้ code smell, anti-pattern และแก้ให้ตรงตามแนว React 18 + TypeScript + DaisyUI

🚧 ตรวจ routes ทั้งหมดใน `routes/Routes.tsx` และ `AdminRoute.tsx` ว่าครอบ admin access ถูกต้องหรือไม่ ถ้าไม่ ให้เขียน guard ใหม่แบบปลอดภัย

🔧 ปรับ Header และ Hero ให้รองรับ mobile-first + preload asset ให้เร็วขึ้น โดยไม่เปลี่ยน behavior layout

⚙️ ใช้ tooling script ใน tools/\* เพื่อจัด auto-import และ sync config ทั้งหมด แล้วอัปเดต eslint + tsconfig ให้อัตโนมัติ

🧹 เขียน bash script เพื่อล้าง public/assets ที่ไม่ได้ใช้งาน โดย exclude ไฟล์สำคัญ เช่น logo, favicon, manifest, pdf

🔍 ตรวจ context/hook ระบบ auth ทั้งชุดว่า logic redirect และ token expiry รองรับครบไหม ถ้าไม่ให้เสนอ patch

💣 เจอ error build จาก vite หรือ ESLint ให้หาสาเหตุทันที พร้อมเสนอวิธีแก้ที่ทำให้ build ผ่านแน่นอน
>>>>>>> bbe22dc9 (update)
