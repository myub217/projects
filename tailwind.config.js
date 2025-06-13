/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ตรวจสอบไฟล์ใน src ทุกโฟลเดอร์ และไฟล์ js,ts,jsx,tsx
  ],
  darkMode: "class", // เปิดใช้ dark mode แบบ class-based เพื่อ toggle ธีมได้เอง เช่น <html class="dark">
  theme: {
    extend: {
      colors: {
        primary: "#1A237E", // สีน้ำเงินกรมท่าของ JP Visual & Docs
        accent: "#f59e0b", // สีส้มเหลือง (ปรับตามต้องการ)
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"], // เพิ่มฟอนต์ custom (ถ้ามี)
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/forms"),       // ช่วยจัดการฟอร์มให้สวยงาม (optional)
    require("@tailwindcss/typography"),  // ช่วยจัดการ content แบบตัวหนังสือ (optional)
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"], // เลือกธีมที่ต้องการใช้ในโปรเจกต์
    darkTheme: "dark", // กำหนดชื่อธีม dark mode ของ daisyui ที่จะใช้
  },
};