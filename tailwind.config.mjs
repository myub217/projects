import type { Config } from "tailwindcss";

const config: Config = {
  // ไฟล์ที่ Tailwind จะสแกนหา class names เพื่อสร้าง CSS
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  // เปิดใช้งาน dark mode แบบใช้ class "dark" บน root element (<html>)
  darkMode: "class",

  theme: {
    extend: {
      // เพิ่มฟอนต์รองรับภาษาไทย พร้อม fallback font สำหรับ UI ทั่วไป
      fontFamily: {
        sans: ['"Noto Sans Thai"', "ui-sans-serif", "system-ui", "sans-serif"],
      },

      // กำหนดสีหลักที่ใช้ในโปรเจกต์ (custom color palette)
      colors: {
        primary: {
          DEFAULT: "#4338ca",  // Indigo 700
          dark: "#3730a3",     // Indigo 800
          light: "#6366f1",    // Indigo 500
        },
        secondary: {
          DEFAULT: "#8b5cf6",  // Violet 500
          dark: "#7c3aed",     // Violet 600
          light: "#c4b5fd",    // Violet 300
        },
        accent: {
          DEFAULT: "#c084fc",  // Violet 300
          dark: "#a855f7",     // Violet 400
        },
        background: {
          light: "#ffffff",    // สีพื้นหลังโหมดสว่าง
          dark: "#0f172a",     // สีพื้นหลังโหมดมืด
        },
        foreground: {
          light: "#1e293b",    // สีข้อความโหมดสว่าง
          dark: "#f1f5f9",     // สีข้อความโหมดมืด
        },
      },

      // เงานุ่มนวล เพิ่มความลึกให้ UI
      boxShadow: {
        soft: "0 2px 8px rgba(0, 0, 0, 0.06)",
        "md-soft": "0 4px 12px rgba(0, 0, 0, 0.08)",
      },

      // รัศมีมุมโค้ง ขนาดใหญ่สำหรับ UI ที่ดูทันสมัย
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },

  // เพิ่มปลั๊กอินอย่างเป็นทางการของ Tailwind สำหรับฟอร์ม, typography, aspect-ratio
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

export default config;