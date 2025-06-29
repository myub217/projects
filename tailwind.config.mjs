/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  // เปลี่ยนเป็น "media" ได้ถ้าต้องการ auto

  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        primary: "#2563eb",
        // น้ำเงิน
        secondary: "#9333ea",
        // ม่วง
        accent: "#f59e0b",
        // เหลืองทอง
        muted: "#6b7280",
        // เทา
        background: "#f9fafb",
      },
      fontFamily: {
        sans: ["Inter",
          "ui-sans-serif",
          "system-ui"],
        heading: ["Poppins",
          "ui-sans-serif",
          "system-ui"],
        body: ["Inter",
          "ui-sans-serif",
          "system-ui"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      lineHeight: {
        tight: "1.2",
        relaxed: "1.75",
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
    "text-primary",
    "text-secondary",
    "bg-primary",
    "bg-secondary",
    "btn",
    "btn-primary",
    "btn-accent",
    "hover:bg-primary",
    "hover:bg-secondary",
    "text-center",
    "text-left",
    "text-right",
    "mt-4",
    "mb-4",
    "px-4",
    "py-2",
    "rounded",
    "shadow",
    // ✅ เพิ่มตาม class ที่ใช้แบบ dynamic ใน JSX
  ],
};