import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // เปิดใช้งาน dark mode แบบใช้ class="dark"

  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans Thai"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
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
          light: "#ffffff",
          dark: "#0f172a",
        },
        foreground: {
          light: "#1e293b",
          dark: "#f1f5f9",
        },
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'md-soft': '0 4px 12px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

export default config;