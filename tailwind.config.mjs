import type { Config } from "tailwindcss";

const config: Config = {
  // ไฟล์ที่จะสแกนหา class name
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,mdx}", // ครอบคลุมไฟล์ส่วนใหญ่ในโปรเจกต์
  ],

  // เปิดใช้งาน dark mode โดยใช้ class "dark" บน root (<html>)
  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans Thai"', "ui-sans-serif", "system-ui", "sans-serif"],
      },

      colors: {
        transparent: "transparent",
        current: "currentColor",

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
          light: "#ffffff",
          dark: "#0f172a",
        },

        foreground: {
          light: "#1e293b",
          dark: "#f1f5f9",
        },

        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },

      boxShadow: {
        soft: "0 2px 8px rgba(0, 0, 0, 0.06)",
        "md-soft": "0 4px 12px rgba(0, 0, 0, 0.08)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },

  variants: {
    extend: {
      backgroundColor: ['dark', 'hover', 'focus', 'focus-visible'],
      textColor: ['dark', 'hover', 'focus', 'focus-visible'],
      boxShadow: ['dark', 'focus-visible'],
      ringWidth: ['focus-visible'],
      ringColor: ['focus-visible'],
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

export default config;