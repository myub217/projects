import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // เปิดใช้ Dark Mode แบบควบคุมผ่าน class

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },

      colors: {
        indigo: {
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
        blue: {
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          900: "#1e3a8a",
        },
        pink: {
          400: "#f472b6",
          500: "#ec4899",
        },
      },

      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },

      fontSize: {
        "2xs": "0.65rem",
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },

      boxShadow: {
        "md-soft": "0 4px 6px rgba(0,0,0,0.1)",
        "lg-glow": "0 10px 15px -3px rgba(99,102,241,0.6), 0 4px 6px -2px rgba(99,102,241,0.5)",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },

      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        spinSlow: "spin 3s linear infinite",
      },

      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    // line-clamp plugin ถูกตัดออก เพราะ Tailwind 3.3+ รวมมาแล้ว
    require("daisyui"),
  ],

  daisyui: {
    styled: true,
    themes: [
      {
        mylight: {
          primary: "#6366f1",
          "primary-focus": "#4f46e5",
          "primary-content": "#ffffff",

          secondary: "#ec4899",
          "secondary-focus": "#db2777",
          "secondary-content": "#ffffff",

          accent: "#818cf8",
          "accent-focus": "#4338ca",
          "accent-content": "#ffffff",

          neutral: "#312e81",
          "neutral-focus": "#1e3a8a",
          "neutral-content": "#ffffff",

          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#d1d5db",
          "base-content": "#1f2937",

          info: "#3b82f6",
          success: "#22c55e",
          warning: "#facc15",
          error: "#ef4444",
        },
      },
      "dark",
    ],
    darkTheme: "dark",
  },
};

export default config;