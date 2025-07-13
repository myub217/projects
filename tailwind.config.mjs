import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

/**
 * 🔧 Tailwind Config: JP Visual & Docs – Blue-White Theme
 * 📌 Theme Modes: "bluewhite", "bluewhite-dark", "temp"
 * 🎨 Plugins: DaisyUI + Typography
 * 🌙 Dark Mode: Controlled by class="dark"
 */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
        160: "40rem",
      },
      maxWidth: {
        "8xl": "90rem",
        "9xl": "110rem",
      },
      zIndex: {
        "-1": "-1",
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
        110: "110",
        120: "120",
      },
      colors: {
        background: {
          DEFAULT: "#FFFFFF",  // ขาวพื้นหลังหลัก
          dark: "#1F2937",     // เทาเข้ม (background dark mode)
          surface: "#F9FAFB",  // พื้นหลังผิวเรียบ
          surfaceDark: "#111827",
        },
        foreground: {
          DEFAULT: "#1F2937",  // เทาเข้มข้อความหลัก
          dark: "#F3F4F6",     // สีอ่อนข้อความใน dark mode
        },
        muted: {
          DEFAULT: "#6B7280",  // เทาอ่อนข้อความรอง
        },
        primary: {
          DEFAULT: "#1E40AF",  // ฟ้าหลัก (blue-900)
          light: "#3B82F6",    // ฟ้าอ่อน (blue-500)
          dark: "#1E3A8A",     // ฟ้าดำ (blue-800)
          contrastText: "#FFFFFF", // ตัวหนังสือบนปุ่มฟ้า
        },
        accent: {
          DEFAULT: "#2563EB",  // สีเน้น ปุ่ม hover หรือ highlight
        },
        border: {
          DEFAULT: "#E5E7EB",  // เส้นขอบสีเทาอ่อน (gray-200)
        },
        success: {
          DEFAULT: "#22C55E",
          dark: "#16A34A",
          light: "#A7F3D0",
        },
        warning: {
          DEFAULT: "#F59E0B",
          dark: "#B45309",
          light: "#FEF3C7",
        },
        error: {
          DEFAULT: "#EF4444",
          dark: "#B91C1C",
          light: "#FEE2E2",
        },
        info: {
          DEFAULT: "#3B82F6",
          dark: "#2563EB",
          light: "#BFDBFE",
        },
      },
      backgroundImage: {
        "bluewhite-gradient": "linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)",
        "bluewhite-dark-gradient": "linear-gradient(135deg, #111827 0%, #1F2937 100%)",
      },
      fontFamily: {
        body: ["Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        heading: ["Playfair Display", "Merriweather", "Georgia", "serif"],
        code: ["Fira Code", "Menlo", "Monaco", "monospace"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.375rem" }],
        base: ["1rem", { lineHeight: "1.6rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.75rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
      },
      boxShadow: {
        soft: "0 4px 12px rgba(59, 130, 246, 0.25)", // ฟ้าใสเงานุ่ม
        medium: "0 8px 24px rgba(59, 130, 246, 0.35)",
        dark: "0 12px 32px rgba(31, 41, 55, 0.9)",
      },
      transitionProperty: {
        colors: "background-color, border-color, color, fill, stroke",
        shadow: "box-shadow",
        transform: "transform",
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-in forwards",
        slideUp: "slideUp 0.6s ease-out forwards",
        bounceSlow: "bounce 2.5s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(24px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },

  plugins: [daisyui, typography],

  daisyui: {
    themes: [
      {
        "bluewhite": {
          primary: "#1E40AF",
          "primary-focus": "#1E3A8A",
          secondary: "#6B7280",
          "secondary-focus": "#4B5261",
          accent: "#2563EB",
          neutral: "#F9FAFB",
          "base-100": "#FFFFFF",
          "base-200": "#E5E7EB",
          "base-300": "#D1D5DB",
          info: "#3B82F6",
          success: "#22C55E",
          warning: "#F59E0B",
          error: "#EF4444",
        },
      },
      {
        "bluewhite-dark": {
          primary: "#3B82F6",
          "primary-focus": "#2563EB",
          secondary: "#A3A9B4",
          "secondary-focus": "#475569",
          accent: "#60A5FA",
          neutral: "#1F2937",
          "base-100": "#1F2937",
          "base-200": "#111827",
          "base-300": "#374151",
          info: "#2563EB",
          success: "#16A34A",
          warning: "#B45309",
          error: "#B91C1C",
        },
      },
      {
        temp: {
          primary: "#4F46E5",
          "primary-focus": "#4338CA",
          secondary: "#64748B",
          "secondary-focus": "#475569",
          accent: "#1E40AF",
          neutral: "#F9FAFB",
          "base-100": "#FFFFFF",
          "base-200": "#F3F4F6",
          "base-300": "#E5E7EB",
          info: "#3B82F6",
          success: "#22C55E",
          warning: "#F59E0B",
          error: "#EF4444"
        },
      },
    ],
    darkTheme: "bluewhite-dark",
  },
};