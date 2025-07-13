import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

/**
 * 🔧 Tailwind Config: JP Visual & Docs – Platinum Grade
 * 📌 Theme Modes: "platinum", "platinum-dark", "temp"
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
          DEFAULT: "#F0F2F5",
          dark: "#121417",
          surface: "#FFFFFF",
          surfaceDark: "#1B1F24",
        },
        foreground: {
          DEFAULT: "#2A2F3A",
          dark: "#E4E6EB",
        },
        whiteGray: {
          DEFAULT: "#F7F8FA",
          light: "#FAFBFC",
          dark: "#E9EBEE",
        },
        grayDark: {
          DEFAULT: "#2C2F36",
          light: "#444A55",
          dark: "#121417",
        },
        blackSoft: {
          DEFAULT: "#121417",
          light: "#252A33",
          dark: "#0D1014",
        },
        primary: {
          DEFAULT: "#D4AF37",
          contrastText: "#1B1F24",
          light: "#F0E6A1",
          dark: "#9C7A18",
        },
        secondary: {
          DEFAULT: "#6B7280",
          contrastText: "#F0F2F5",
          light: "#A3A9B4",
          dark: "#4B5261",
        },
        border: {
          DEFAULT: "#D1D5DB",
          dark: "#3C4251",
        },
        success: {
          DEFAULT: "#4ADE80",
          dark: "#22C55E",
          light: "#A3F7B0",
        },
        warning: {
          DEFAULT: "#FACC15",
          dark: "#EAB308",
          light: "#FDE68A",
        },
        error: {
          DEFAULT: "#F87171",
          dark: "#EF4444",
          light: "#FCA5A5",
        },
        info: {
          DEFAULT: "#60A5FA",
          dark: "#3B82F6",
          light: "#A5D8FF",
        },
      },
      backgroundImage: {
        "platinum-gradient": "linear-gradient(135deg, #D4AF37 0%, #F0E6A1 100%)",
        "platinum-dark-gradient": "linear-gradient(135deg, #1B1F24 0%, #444A55 100%)",
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
        soft: "0 4px 12px rgba(212, 175, 55, 0.25)",
        medium: "0 8px 24px rgba(212, 175, 55, 0.35)",
        dark: "0 12px 32px rgba(27, 31, 36, 0.9)",
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
        platinum: {
          primary: "#D4AF37",
          "primary-focus": "#B68B1B",
          secondary: "#6B7280",
          "secondary-focus": "#4B5261",
          accent: "#2A2F3A",
          neutral: "#F7F8FA",
          "base-100": "#F0F2F5",
          "base-200": "#E9EBEE",
          "base-300": "#D1D5DB",
          info: "#60A5FA",
          success: "#4ADE80",
          warning: "#FACC15",
          error: "#F87171",
        },
      },
      {
        "platinum-dark": {
          primary: "#D4AF37",
          "primary-focus": "#B68B1B",
          secondary: "#A3A9B4",
          "secondary-focus": "#475569",
          accent: "#E4E6EB",
          neutral: "#121417",
          "base-100": "#121417",
          "base-200": "#1B1F24",
          "base-300": "#444A55",
          info: "#3B82F6",
          success: "#22C55E",
          warning: "#EAB308",
          error: "#EF4444",
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
          error: "#EF4444",
        },
      },
    ],
    darkTheme: "platinum-dark",
  },
};