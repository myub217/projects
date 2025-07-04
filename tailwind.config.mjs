export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
      },
      maxWidth: {
        "8xl": "90rem",
      },
      zIndex: {
        "-1": "-1",
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
      colors: {
        whiteGray: {
          DEFAULT: "#F5F5F7",
          light: "#FAFAFB",
          dark: "#E6E6E8",
        },
        grayDark: {
          DEFAULT: "#222222",
          light: "#3A3A3A",
          dark: "#121212",
        },
        blackSoft: {
          DEFAULT: "#0D0D0D",
          light: "#1A1A1A",
          dark: "#000000",
        },
        primary: {
          DEFAULT: "#FFFFFF",
          contrastText: "#222222",
        },
        secondary: {
          DEFAULT: "#A3A3A8",
          contrastText: "#F5F5F7",
        },
        background: {
          DEFAULT: "#F7F8FA",
          dark: "#121212",
          surface: "#FFFFFF",
          surfaceDark: "#1E1E1E",
        },
        border: {
          DEFAULT: "#D1D5DB",
          dark: "#2C2C2C",
        },
        success: {
          DEFAULT: "#4ADE80",
          dark: "#22C55E",
        },
        warning: {
          DEFAULT: "#FACC15",
          dark: "#EAB308",
        },
        error: {
          DEFAULT: "#F87171",
          dark: "#EF4444",
        },
        info: {
          DEFAULT: "#60A5FA",
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
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      },
      boxShadow: {
        soft: "0 4px 8px rgba(0, 0, 0, 0.1)",
        medium: "0 8px 20px rgba(0, 0, 0, 0.15)",
        dark: "0 8px 24px rgba(0, 0, 0, 0.5)",
      },
      transitionProperty: {
        colors: "background-color, border-color, color, fill, stroke",
        shadow: "box-shadow",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in forwards",
        slideUp: "slideUp 0.5s ease-out forwards",
        bounceSlow: "bounce 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
  ],
  daisyui: {
    themes: [
      {
        lofi: {
          primary: "#FFFFFF",
          "primary-focus": "#E6E6E8",
          secondary: "#A3A3A8",
          "secondary-focus": "#7C7C82",
          accent: "#222222",
          neutral: "#F5F5F7",
          "base-100": "#F7F8FA",
          "base-200": "#E6E6E8",
          "base-300": "#D1D5DB",
          info: "#60A5FA",
          success: "#4ADE80",
          warning: "#FACC15",
          error: "#F87171",
          "--rounded-box": "1rem",
          "--rounded-btn": "9999px",
          "--animation-btn": "0.3s",
          "--btn-text-case": "none",
          "--btn-focus-scale": "1.05",
        },
      },
      {
        lofiDark: {
          primary: "#222222",
          "primary-focus": "#3A3A3A",
          secondary: "#A3A3A8",
          accent: "#F5F5F7",
          neutral: "#121212",
          "base-100": "#121212",
          "base-200": "#1E1E1E",
          "base-300": "#2C2C2C",
          info: "#3B82F6",
          success: "#22C55E",
          warning: "#EAB308",
          error: "#EF4444",
          "--rounded-box": "1rem",
          "--rounded-btn": "9999px",
          "--animation-btn": "0.3s",
          "--btn-text-case": "none",
          "--btn-focus-scale": "1.05",
        },
      },
    ],
  },
  darkMode: "class",
};