import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue,mdx}"],
  darkMode: "class",

  safelist: [
    "dark", // เผื่อใช้ class toggle ใน script
    "animate-fadeIn",
    "animate-slideInUp",
  ],

  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },

    extend: {
      fontFamily: {
        sans: ['"Noto Sans Thai"', "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ['Kanit', '"Noto Sans Thai"', "ui-sans-serif", "sans-serif"],
      },

      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          DEFAULT: "#1A237E",
          dark: "#0D154D",
          light: "#3949AB",
        },
        secondary: {
          DEFAULT: "#00BCD4",
          dark: "#0097A7",
          light: "#4DD0E1",
        },
        background: {
          DEFAULT: "#F5F6FA",
          dark: "#121212",
          soft: "#ECEFF1",
        },
        foreground: {
          DEFAULT: "#212121",
          dark: "#FFFFFF",
        },
        text: {
          light: "#1e293b",
          dark: "#f1f5f9",
          muted: "#64748b",
        },
        neutral: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#0f172a",
        },
        success: "#22c55e",
        error: "#ef4444",
        warning: "#facc15",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        pill: "9999px",
      },

      boxShadow: {
        soft: "0 1px 3px rgba(0, 0, 0, 0.05)",
        card: "0 4px 12px rgba(0, 0, 0, 0.08)",
        glow: "0 0 12px rgba(0, 188, 212, 0.6)",
      },

      transitionTimingFunction: {
        DEFAULT: "ease-in-out",
      },
      transitionDuration: {
        DEFAULT: "300ms",
        fast: "150ms",
        slow: "500ms",
      },

      accentColor: {
        DEFAULT: "#00BCD4",
      },

      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
        slideInUp: "slideInUp 0.8s ease-out forwards",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInUp: {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },

      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme("colors.foreground.DEFAULT"),
            a: {
              color: theme("colors.primary.DEFAULT"),
              textDecoration: "underline",
              "&:hover": {
                color: theme("colors.primary.dark"),
              },
            },
            h1: {
              fontWeight: "700",
              fontFamily: theme("fontFamily.heading").join(", "),
            },
            h2: {
              fontWeight: "600",
              fontFamily: theme("fontFamily.heading").join(", "),
            },
            strong: { color: theme("colors.foreground.DEFAULT") },
            code: {
              backgroundColor: theme("colors.neutral.100"),
              padding: "0.2em 0.4em",
              borderRadius: "0.25rem",
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.foreground.dark"),
            a: {
              color: theme("colors.secondary.light"),
              "&:hover": {
                color: theme("colors.secondary.DEFAULT"),
              },
            },
            strong: { color: theme("colors.foreground.dark") },
            code: {
              backgroundColor: theme("colors.neutral.800"),
              padding: "0.2em 0.4em",
              borderRadius: "0.25rem",
            },
          },
        },
      }),
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),

    plugin(({ addComponents, theme }) => {
      addComponents({
        ".btn": {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.5rem 1.25rem",
          borderRadius: theme("borderRadius.xl"),
          fontWeight: "500",
          transitionProperty: "background-color, color, border-color, box-shadow",
          transitionDuration: theme("transitionDuration.DEFAULT"),
          cursor: "pointer",
          userSelect: "none",
        },
        ".btn-primary": {
          backgroundColor: theme("colors.primary.DEFAULT"),
          color: "#fff",
          "&:hover": {
            backgroundColor: theme("colors.primary.dark"),
          },
        },
        ".card": {
          borderRadius: theme("borderRadius.2xl"),
          padding: "1.5rem",
          boxShadow: theme("boxShadow.card"),
          backgroundColor: theme("colors.white"),
          transitionProperty: "background-color, color",
          transitionDuration: theme("transitionDuration.DEFAULT"),
        },
        ".dark .card": {
          backgroundColor: theme("colors.neutral.900"),
        },
        ".section": {
          paddingTop: "4rem",
          paddingBottom: "4rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          "@screen sm": {
            paddingLeft: "2rem",
            paddingRight: "2rem",
          },
          "@screen lg": {
            paddingLeft: "4rem",
            paddingRight: "4rem",
          },
        },
      });
    }),
  ],
};

export default config;