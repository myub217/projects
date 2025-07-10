Modular OnePage React Project

สรุปภาพรวมโปรเจกต์

โปรเจกต์นี้เป็นเว็บแอปแบบ Single Page Application (SPA) ที่พัฒนาโดยใช้ React + TypeScript พร้อมกับ Vite เป็นเครื่องมือสำหรับการ build และ serve ตัวโปรเจกต์ เน้นการออกแบบแบบ Modular Component-based Architecture เพื่อความง่ายในการจัดการและขยายระบบในอนาคต

นอกจากนี้ใช้ TailwindCSS + DaisyUI สำหรับ styling ที่รวดเร็วและสวยงาม พร้อมทั้งรองรับการสลับธีม Light/Dark mode ได้อย่างอัตโนมัติและสามารถบันทึกสถานะธีมของผู้ใช้ใน localStorage


## โครงสร้างโฟลเดอร์หลัก

/ ├── api/                         # โค้ดสำหรับ API backend หรือ serverless functions │   └── apiAdmin.ts              # ตัวอย่างไฟล์ API ├── dist/                        # ผลลัพธ์ไฟล์ build สำหรับ deployment │   ├── assets/                  # ไฟล์ static เช่น รูปภาพ, CSS, JS ที่ build แล้ว │   ├── favicon.ico │   ├── index.html               # หน้าเว็บหลักสำหรับ production │   └── manifest.json ├── node_modules/                # ไฟล์ไลบรารี npm (auto-generated) ├── public/                     # ไฟล์ static ที่ copy ไปยัง dist โดยตรง (เช่น รูป, ไอคอน) │   ├── assets/ │   ├── favicon.ico │   ├── icons/ │   ├── images/ │   └── manifest.json ├── src/                        # โค้ดต้นฉบับสำหรับพัฒนา │   ├── assets/                 # รูปภาพและไฟล์ static ที่ใช้ใน development │   ├── components/             # React Components ที่ใช้ซ้ำในหลายที่ │   │   ├── About.tsx │   │   ├── Feature.tsx         # Component แสดงฟีเจอร์หลัก │   │   ├── Features/           # กลุ่ม component ฟีเจอร์ย่อย (Feature1.tsx, Feature2.tsx, ...) │   │   ├── Footer.tsx │   │   ├── Header.tsx │   │   ├── Hero.tsx │   │   ├── ReviewsSection.tsx │   │   ├── ServicesSection.tsx │   │   └── ThemeToggle.tsx     # ปุ่มสลับธีม Light/Dark │   ├── data/                   # ข้อมูลตัวอย่างหรือ mock data สำหรับใช้งานในโปรเจกต์ │   ├── main.tsx                # จุดเริ่มต้น React app │   ├── pages/                  # หน้าเพจหลักของเว็บ (แบบ SPA) │   │   ├── IndexPage.tsx       # หน้าแรกของเว็บ (Landing page) │   │   ├── LoginPage.tsx       # หน้า login │   │   ├── SecretRoomPage.tsx  # ตัวอย่างหน้าอื่น │   │   └── SecretRoomPageComponents/  # Components ย่อยสำหรับ SecretRoomPage │   ├── style.css               # CSS รวม │   └── utils/                  # ฟังก์ชันช่วยเหลือต่าง ๆ (utility functions) ├── tailwind.config.mjs         # config สำหรับ TailwindCSS ├── tsconfig.json               # config สำหรับ TypeScript ├── vite.config.js              # config สำหรับ Vite ├── package.json                # รายการ dependencies และคำสั่งสคริปต์ ├── pnpm-lock.yaml              # สำหรับล็อกเวอร์ชัน dependencies (pnpm package manager) └── README.md                   # ไฟล์นี้ (คำอธิบายโปรเจกต์)

---

## รายละเอียดเทคโนโลยีหลักที่ใช้

- **React 18.x**  
  สร้าง UI ด้วย component-based architecture พร้อมใช้ TypeScript เพื่อความปลอดภัยด้านชนิดข้อมูล

- **Vite 7.x**  
  บิวด์และ serve โปรเจกต์อย่างรวดเร็ว รองรับ Hot Module Replacement (HMR)

- **TypeScript 5.x**  
  ภาษาที่เพิ่มความเข้มงวดและช่วยตรวจสอบโค้ดก่อน build

- **TailwindCSS 3.x + DaisyUI**  
  เครื่องมือ utility-first CSS และ component UI ช่วยให้การจัดการสไตล์รวดเร็วและง่าย

- **Express 5.x**  
  สำหรับรัน backend หรือ API (ถ้ามีในโปรเจกต์)

- **Framer Motion**  
  สำหรับ animation และ transition ของ UI


## การติดตั้งและใช้งาน

git clone https://github.com/myub217/projects.git

1. **ติดตั้ง dependencies**

pnpm install

2. **รัน Development Server**

pnpm run dev

เปิดเบราว์เซอร์ที่ [http://localhost:5173](http://localhost:5173)

3. **Build สำหรับ Production**

pnpm run build

ผลลัพธ์ไฟล์ build จะอยู่ในโฟลเดอร์ `dist/`

4. **รันเซิร์ฟเวอร์ production (ถ้ามี)**  
เซิร์ฟเวอร์สามารถ serve ไฟล์ใน `dist/` ได้โดยใช้เครื่องมือเช่น Nginx หรือ Express

---

## การจัดการธีม (Light / Dark Mode)

- ระบบจะโหลดธีมจาก `localStorage` หากมีค่าเก็บไว้  
- หากไม่มีค่าใน `localStorage` จะอ่านค่าจาก `prefers-color-scheme` ของ browser/system  
- สามารถสลับธีมได้ด้วยปุ่ม toggle ที่อยู่ใน `Header`  
- ธีมที่เลือกจะถูกบันทึกใน `localStorage` และเพิ่ม/ลบ class `.dark` บน `<html>` เพื่อควบคุมสไตล์  

---

## คำแนะนำสำหรับการพัฒนาเพิ่มเติม

- แยกแต่ละ component ให้อยู่ในไฟล์ของตัวเองตามโฟลเดอร์ `components/`  
- จัดเก็บข้อมูลและ config ต่าง ๆ ในโฟลเดอร์ `data/` หรือ `utils/` เพื่อความเป็นระเบียบ  
- ใช้ TailwindCSS utility classes และ DaisyUI components เพื่อให้ UI มีความสวยงามและ responsive  
- สร้างหน้าต่าง ๆ ในโฟลเดอร์ `pages/` เพื่อแยกหน้าที่และจัดการ routing ภายในแอป

---

## ตัวอย่าง Component หลักในโปรเจกต์

- `Header.tsx` — แถบนำทางด้านบน พร้อมปุ่มสลับธีม  
- `Hero.tsx` — ส่วนแนะนำเว็บหรือแบนเนอร์หน้าแรก  
- `Feature.tsx` — แสดงฟีเจอร์เด่นของเว็บ  
- `ServicesSection.tsx` — บริการหลักของบริษัท/เว็บ  
- `About.tsx` — ข้อมูลเกี่ยวกับทีมงานหรือบริษัท  
- `ReviewsSection.tsx` — รีวิวจากลูกค้า  
- `Footer.tsx` — ส่วนท้ายเว็บไซต์

---

## คำถามหรือปัญหาที่พบบ่อย

- **ปัญหา Import Error เช่นไม่พบไฟล์ component**  
ตรวจสอบชื่อไฟล์และ path ให้ตรงกัน เช่น `Feature.tsx` ต้อง import เป็น `Feature` ไม่ใช่ `Features`  
- **ปัญหา theme ไม่เปลี่ยนแปลง**  
ตรวจสอบว่ามีการเพิ่ม/ลบ class `.dark` ที่ `<html>` อย่างถูกต้อง และ localStorage ทำงานได้  
- **ไม่เห็นการเปลี่ยนแปลงใน dev server**  
รีสตาร์ท `pnpm run dev` และตรวจสอบว่า Vite HMR ทำงานปกติ

---

## คำสั่งที่ใช้บ่อย

| คำสั่ง             | คำอธิบาย                          |
|--------------------|----------------------------------|
| `pnpm install`     | ติดตั้ง dependencies ทั้งหมด      |
| `pnpm run dev`     | รันเซิร์ฟเวอร์แบบ development    |
| `pnpm run build`   | สร้างไฟล์ production build       |
| `pnpm run preview` | ทดสอบไฟล์ build ใน local server  |

---

## สรุป

โปรเจกต์นี้เหมาะสำหรับสร้างเว็บไซต์สไตล์หน้าเดียวที่รวดเร็ว ปรับแต่งง่าย รองรับธีมสีและใช้เทคโนโลยีสมัยใหม่ ช่วยให้การพัฒนามีประสิทธิภาพและต่อยอดได้ดีในอนาคต สอบถามเพิ่มเติม หรือเสนอแนะการปรับปรุงได้ที่ทีมพัฒนาหรือช่องทางติดต่อของโปรเจกต์