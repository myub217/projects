import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,mdx}",
  ],

  darkMode: "class", // ใช้ class "dark" บน <html>

  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    extend: {
      fontFamily: {
        sans: ['"Noto Sans Thai"', "ui-sans-serif", "system-ui", "sans-serif"],
      },

      colors: {
        transparent: "transparent",
        current: "currentColor",

        primary: {
          DEFAULT: "#4338ca",
          dark: "#3730a3",
          light: "#6366f1",
        },

        secondary: {
          DEFAULT: "#8b5cf6",
          dark: "#7c3aed",
          light: "#c4b5fd",
        },

        accent: {
          DEFAULT: "#c084fc",
          dark: "#a855f7",
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

        success: "#22c55e",
        error: "#ef4444",
        warning: "#f59e0b",

        text: {
          light: "#1e293b",
          dark: "#f1f5f9",
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

      transitionTimingFunction: {
        DEFAULT: "ease-in-out",
      },

      transitionDuration: {
        DEFAULT: "300ms",
      },
    },
  },

  // variants สามารถตัดออกได้เพราะ Tailwind v3 เปิดใช้ default อยู่แล้ว

  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

export default config;