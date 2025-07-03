export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ครอบคลุมไฟล์ JS, TS, JSX, TSX ใน src ทุกโฟลเดอร์และไฟล์ย่อย
  ],
  theme: {
    extend: {
      colors: {
        whiteGray: {
          DEFAULT: "#F5F5F7", // สีขาวอมเทา สว่างนวลตา
          light: "#FAFAFB",
          dark: "#E6E6E8",
        },
        grayDark: {
          DEFAULT: "#222222", // เทาเข้มเกือบดำ
          light: "#3A3A3A",
          dark: "#121212",
        },
        blackSoft: {
          DEFAULT: "#0D0D0D", // ดำอ่อน ไม่ดำสนิท ดูนุ่มนวล
          light: "#1A1A1A",
          dark: "#000000",
        },
        primary: {
          DEFAULT: "#FFFFFF", // เน้นสีขาวสำหรับข้อความหรือองค์ประกอบหลัก
          contrastText: "#222222",
        },
        secondary: {
          DEFAULT: "#A3A3A8", // สีเทาอ่อนสำหรับองค์ประกอบรอง
          contrastText: "#F5F5F7",
        },
        background: {
          DEFAULT: "#F7F8FA", // สีพื้นหลังหลัก very light
          dark: "#121212", // พื้นหลังโหมดมืด
          surface: "#FFFFFF", // พื้นหลังพื้นผิว (กล่อง การ์ด ฯลฯ)
          surfaceDark: "#1E1E1E",
        },
        border: {
          DEFAULT: "#D1D5DB", // สีเส้นขอบอ่อน
          dark: "#2C2C2C", // เส้นขอบโหมดมืด
        },
        success: {
          DEFAULT: "#4ADE80", // สีเขียวอ่อน
          dark: "#22C55E",
        },
        warning: {
          DEFAULT: "#FACC15", // สีเหลือง
          dark: "#EAB308",
        },
        error: {
          DEFAULT: "#F87171", // สีแดงอ่อน
          dark: "#EF4444",
        },
        info: {
          DEFAULT: "#60A5FA", // สีน้ำเงินอ่อน
          dark: "#3B82F6",
        },
      },

      fontFamily: {
        sans: ["Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["Merriweather", "Georgia", "serif"],
        mono: ["Fira Code", "Menlo", "Monaco", "monospace"],
      },

      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      },

      boxShadow: {
        soft: "0 4px 8px rgba(0, 0, 0, 0.1)",
        medium: "0 8px 20px rgba(0, 0, 0, 0.15)",
        dark: "0 8px 24px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lofi: {
          primary: "#FFFFFF",             // ข้อความสีขาว
          "primary-focus": "#E6E6E8",    // สีขาวอมเทาเข้ม
          secondary: "#A3A3A8",           // เทาอ่อน
          "secondary-focus": "#7C7C82",  // เทาเข้มขึ้น
          accent: "#222222",              // เทาเข้มเกือบดำ
          neutral: "#F5F5F7",             // ขาวอมเทา (พื้นหลังบางส่วน)
          "base-100": "#F7F8FA",         // พื้นหลังหลัก
          "base-200": "#E6E6E8",         // พื้นหลังรอง
          "base-300": "#D1D5DB",         // พื้นหลังเข้มขึ้น
          info: "#60A5FA",                // น้ำเงินอ่อน
          success: "#4ADE80",             // เขียวอ่อน
          warning: "#FACC15",             // เหลือง
          error: "#F87171",               // แดงอ่อน
          "--rounded-box": "1rem",        // border-radius สำหรับกล่อง
          "--rounded-btn": "9999px",      // ปุ่มกลมมาก
          "--animation-btn": "0.3s",      // ความเร็วอนิเมชันปุ่ม
          "--btn-text-case": "none",      // ตัวพิมพ์ปุ่ม
          "--btn-focus-scale": "1.05",    // การซูมปุ่มเมื่อโฟกัส
        },
      },
    ],
  },
  darkMode: "class", // เปิดใช้งาน dark mode ด้วย class "dark"
};