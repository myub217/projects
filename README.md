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
