# Applicationlubmobile

โปรเจกต์เว็บไซต์สำหรับบริการด้านเอกสาร วีซ่า การเงิน การแปล และออกแบบโปรไฟล์  
พัฒนาโดยใช้ React + TypeScript พร้อม Tailwind CSS, DaisyUI, Framer Motion และ Vite

---

## โครงสร้างโปรเจกต์หลัก

- `/src` - โค้ดหลักของแอป React  
  - `App.tsx` - จุดเริ่มต้นของแอป  
  - `assets/` - รูปภาพ ไอคอน โลโก้  
  - `components/` - ส่วนประกอบ UI หลัก เช่น Hero, About, Services, Footer  
  - `context/` - React Context API (เช่น ThemeContext)  
  - `data/` - ข้อมูลคงที่ (เช่น รายการบริการ)  
  - `hooks/` - Custom React hooks  
  - `layout/` - โครงสร้างหน้าเว็บ Header, Footer  
  - `lib/` - ฟังก์ชันช่วยเหลือทั่วไป  
  - `pages/` - หน้าเพจต่าง ๆ เช่น Home, Login, SecretRoom  
  - `styles/` - ไฟล์ CSS และธีม  
  - `main.tsx` - จุดเริ่มต้น Render React App  

- `/public` - ไฟล์สาธารณะ เช่น ไอคอน, manifest, robots.txt  
- `/dist` - ไฟล์ build สุดท้าย (หลังคอมไพล์)  
- `package.json` - ข้อมูลโปรเจกต์และ dependencies  
- `vite.config.mjs` - การตั้งค่า Vite  
- `tailwind.config.mjs` - การตั้งค่า Tailwind CSS  
- `tsconfig.json` - การตั้งค่า TypeScript  

---

## การใช้งานเบื้องต้น

1. **ติดตั้ง dependencies**  
```bash
pnpm install

2. รันโปรเจกต์ในโหมดพัฒนา



pnpm run dev

3. สร้างไฟล์ build สำหรับโปรดักชัน



pnpm run build

4. รันไฟล์ build แบบ local preview



pnpm run preview


---

ฟีเจอร์เด่น

ระบบธีม (Dark/Light) พร้อม Context API

หน้า Hero พร้อมโลโก้พื้นหลังและลายเซ็นเจ้าป่า

ระบบล็อกอินแบบ Secret Room

ส่วนแสดงข้อมูลบริการ (Visa, Finance, Translation ฯลฯ)

Responsive Design สำหรับมือถือและเดสก์ท็อป

Progressive Web App (PWA) รองรับการติดตั้งบนอุปกรณ์

Smooth Scroll และ Animation ด้วย Framer Motion



---

โครงสร้างโฟลเดอร์ src/components (ตัวอย่าง)

Hero.tsx — ส่วน Hero ของหน้าแรก

About.tsx — ข้อมูลเกี่ยวกับบริษัท

ServicesSection.tsx — แสดงบริการ

ReviewsSection.tsx — รีวิวลูกค้า

SecretRoom.tsx — ส่วนล็อกอินลับ

ThemeToggle.tsx — สวิตช์เปลี่ยนธีม

VisitorCount.tsx — ตัวนับผู้เยี่ยมชม



---

ข้อมูลอื่น ๆ

ใช้ Tailwind CSS + DaisyUI ในการจัดแต่ง UI

ใช้ React Context สำหรับจัดการธีมและสถานะล็อกอิน

ใช้ Vite เป็น build tool สำหรับความเร็วและง่ายต่อการตั้งค่า

รูปภาพและไอคอนเก็บไว้ใน /src/assets

ไฟล์ลายเซ็น SVG อยู่ใน root /signature.svg



---

ติดต่อ

เว็บไซต์: https://applicationlubmobile.vercel.app/

GitHub: https://github.com/myub217/projects

LINE: @462FQTFC



Prompt

Design a professional website theme for a confidential consultancy and creative documentation brand named “JP VISUAL & DOCS”. 

The visual tone should feel warm, elegant, calm, and trustworthy — suitable for private business services, visa/document guidance, and creative branding. 

Use a muted luxury color palette with the following tones:
- Primary: #D4B087 (Beige Sand)
- Secondary: #B49B7F (Muted Gold)
- Background: #F8F5F0 (Warm Ivory)
- Text: #4A3F35 (Espresso Brown)
- Accent: #EBD9C3 (Soft Glow Cream)
- Optional Dark: #1E1A16 (Dark Coffee Black) for modals or deep sections

Professional Thai document consultancy brand workspace scene. 
Warm, soft lighting. Clean espresso-brown wooden desk. Neatly stacked Thai documents and templates. 
Visible Thai passport. Folder labeled “JP Visual & Docs”. 
Laptop glowing softly with blurred LINE OA dashboard visible. 
Printed logo mockup and branding sketches beside. 
Background shows faint finance-related icons or paperwork.
Muted luxury color palette: beige sand (#D4B087), ivory (#F8F5F0), espresso brown (#4A3F35), soft gold accents. 
Leave bottom third clean and bright for Thai text overlay. 
No people. No coffee cup. No cartoon or neon. Calm and premium branding tone.