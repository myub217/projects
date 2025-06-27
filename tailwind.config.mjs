import type {
  Config
} from "tailwindcss"; import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,mdx}"],
  darkMode: "class",
  safelist: ["dark",
    "animate-fadeIn",
    "animate-slideInUp"],

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
        thai: ["'Sarabun'",
          "sans-serif"],
        sans: ["'Noto Sans Thai'",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"],
        heading: ["Kanit",
          "'Noto Sans Thai'",
          "ui-sans-serif",
          "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        primary: {
          DEFAULT: "#2C3E50",
          dark: "#22313F",
          light: "#34495E",
        },
        secondary: {
          DEFAULT: "#18BC9C",
          dark: "#128F7E",
          light: "#48C9B0",
        },
        background: {
          DEFAULT: "#F7F9F9",
          dark: "#22313F",
          soft: "#EAEDED",
        },
        foreground: {
          DEFAULT: "#34495E",
          dark: "#FFFFFF",
        },
        text: {
          light: "#34495E",
          dark: "#F7F9F9",
          muted: "#7F8C8D",
        },
        neutral: {
          50: "#F7F9F9",
          100: "#ECF0F1",
          200: "#BDC3C7",
          300: "#95A5A6",
          400: "#7F8C8D",
          500: "#707B7C",
          600: "#566573",
          700: "#34495E",
          800: "#2C3E50",
          900: "#22313F",
        },
        success: "#27AE60",
        error: "#E74C3C",
        warning: "#F39C12",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        pill: "9999px",
      },
      boxShadow: {
        soft: "0 1px 3px rgba(0, 0, 0, 0.05)",
        card: "0 4px 12px rgba(0, 0, 0, 0.08)",
        glow: "0 0 12px rgba(24, 188, 156, 0.6)",
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
        DEFAULT: "#18BC9C",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
        slideInUp: "slideInUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "1"
          },
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
      typography: ({
        theme
      }) => ({
        DEFAULT: {
          css: {
            color: theme("colors.foreground.DEFAULT"), a: {
              color: theme("colors.primary.DEFAULT"), textDecoration: "underline", "&:hover": {
                color: theme("colors.primary.dark"),
              },
            }, h1: {
              fontWeight: "700", fontFamily: theme("fontFamily.heading").join(", "),
            }, h2: {
              fontWeight: "600", fontFamily: theme("fontFamily.heading").join(", "),
            }, strong: {
              color: theme("colors.foreground.DEFAULT")
            }, code: {
              backgroundColor: theme("colors.neutral.100"), padding: "0.2em 0.4em", borderRadius: "0.25rem",
            },
          },
        }, dark: {
          css: {
            color: theme("colors.foreground.dark"), a: {
              color: theme("colors.secondary.light"), "&:hover": {
                color: theme("colors.secondary.DEFAULT"),
              },
            }, strong: {
              color: theme("colors.foreground.dark")
            }, code: {
              backgroundColor: theme("colors.neutral.800"), padding: "0.2em 0.4em", borderRadius: "0.25rem",
            },
          },
        },
      }),
    },
  },

  plugins: [require("daisyui"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    plugin(({
      addComponents, theme
    }) => {
      addComponents( {
        ".btn": {
          display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "0.5rem 1.25rem", borderRadius: theme("borderRadius.xl"), fontWeight: "500", transitionProperty: "background-color, color, border-color, box-shadow", transitionDuration: theme("transitionDuration.DEFAULT"), cursor: "pointer", userSelect: "none",
        }, ".btn-primary": {
          backgroundColor: theme("colors.primary.DEFAULT"), color: "#fff", "&:hover": {
            backgroundColor: theme("colors.primary.dark"),
          },
        }, ".btn-green": {
          backgroundColor: theme("colors.success"), color: "#fff", padding: "0.5rem 1rem", borderRadius: theme("borderRadius.md"), fontWeight: "600", transition: "background-color 0.3s ease", cursor: "pointer", userSelect: "none", "&:hover": {
            backgroundColor: "#218838",
          },
        }, ".card": {
          borderRadius: theme("borderRadius.2xl"), padding: "1.5rem", boxShadow: theme("boxShadow.card"), backgroundColor: theme("colors.white"), transitionProperty: "background-color, color", transitionDuration: theme("transitionDuration.DEFAULT"),
        }, ".dark .card": {
          backgroundColor: theme("colors.neutral.900"),
        }, ".card-custom": {
          backgroundColor: theme("colors.white"), borderRadius: theme("borderRadius.lg"), boxShadow: theme("boxShadow.card"), padding: "1.5rem", transition: "background-color 0.3s ease, color 0.3s ease", cursor: "default", "&:hover": {
            boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
          },
        }, ".dark .card-custom": {
          backgroundColor: theme("colors.neutral.800"),
        }, ".modal-basic": {
          position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: "1000",
        }, ".modal-basic > .modal-content": {
          backgroundColor: theme("colors.white"), borderRadius: theme("borderRadius.xl"), padding: "2rem", maxWidth: "600px", width: "90%", boxShadow: theme("boxShadow.card"), position: "relative",
        }, ".dark .modal-basic > .modal-content": {
          backgroundColor: theme("colors.neutral.900"),
        }, ".section": {
          paddingTop: "4rem", paddingBottom: "4rem", paddingLeft: "1rem", paddingRight: "1rem", "@screen sm": {
            paddingLeft: "2rem", paddingRight: "2rem",
          }, "@screen lg": {
            paddingLeft: "4rem", paddingRight: "4rem",
          },
        },
      });
    }),
  ],

  daisyui: {
    themes: ["synthwave",
      "dark",
      "light"],
  },
};

export default config;