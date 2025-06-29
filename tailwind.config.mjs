/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // หรือ 'media' ตามความต้องการ
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",   // ตัวอย่างสีฟ้า
        secondary: "#9333ea", // สีม่วง
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
  safelist: [
    "dark",
    "btn",
    "btn-primary",
    "btn-accent",
    "text-primary",
    "text-secondary",
    // เพิ่มคลาสที่ใช้แบบไดนามิกที่ tailwind ไม่จับได้
  ],
};