// tailwind.config.ts
import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        jpvisual: {
          primary: "#1e40af",
          "primary-focus": "#1d4ed8",
          "primary-content": "#ffffff",

          secondary: "#f97316",
          "secondary-focus": "#ea580c",
          "secondary-content": "#ffffff",

          accent: "#10b981",
          "accent-focus": "#059669",
          "accent-content": "#ffffff",

          neutral: "#f3f4f6",
          "neutral-focus": "#e5e7eb",
          "neutral-content": "#1f2937",

          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#f3f4f6",
          "base-content": "#1f2937",

          info: "#2563eb",
          success: "#16a34a",
          warning: "#eab308",
          error: "#dc2626",
        },
      },
      {
        jpvisualdark: {
          primary: "#1e90ff",
          "primary-focus": "#1c75d8",
          "primary-content": "#ffffff",

          secondary: "#f59e0b",
          "secondary-focus": "#d97706",
          "secondary-content": "#ffffff",

          accent: "#10b981",
          "accent-focus": "#059669",
          "accent-content": "#ffffff",

          neutral: "#1e293b",
          "neutral-focus": "#0f172a",
          "neutral-content": "#f8fafc",

          "base-100": "#0f172a",
          "base-200": "#1e293b",
          "base-300": "#334155",
          "base-content": "#e2e8f0",

          info: "#3b82f6",
          success: "#22c55e",
          warning: "#facc15",
          error: "#ef4444",
        },
      },
      "light",
      "dark",
    ],
  },
};

export default config;