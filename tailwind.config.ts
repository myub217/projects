// tailwind.config.ts

import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '360px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
        160: '40rem',
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '110rem',
      },
      zIndex: {
        '-1': '-1',
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
        110: '110',
        120: '120',
      },
      colors: {
        background: {
          DEFAULT: '#ffffff',
          dark: '#1f2937',
          surface: '#f9fafb',
          surfaceDark: '#111827',
        },
        foreground: {
          DEFAULT: '#1f2937',
          dark: '#f3f4f6',
        },
        muted: {
          DEFAULT: '#6b7280',
        },
        primary: {
          DEFAULT: '#2563eb',
          light: '#3b82f6',
          dark: '#1e3a8a',
          contrastText: '#ffffff',
        },
        accent: {
          DEFAULT: '#f59e0b',
        },
        border: {
          DEFAULT: '#e5e7eb',
        },
        success: {
          DEFAULT: '#10b981',
          dark: '#059669',
          light: '#a7f3d0',
        },
        warning: {
          DEFAULT: '#fbbf24',
          dark: '#b45309',
          light: '#fef3c7',
        },
        error: {
          DEFAULT: '#ef4444',
          dark: '#b91c1c',
          light: '#fee2e2',
        },
        info: {
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
          light: '#bfdbfe',
        },
      },
      backgroundImage: {
        'business-gradient': 'linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)',
        'business-dark-gradient': 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
      },
      fontFamily: {
        body: ['Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
        code: ['Fira Code', 'Menlo', 'Monaco', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.375rem' }],
        base: ['1rem', { lineHeight: '1.6rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.75rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      boxShadow: {
        soft: '0 4px 12px rgba(59, 130, 246, 0.2)',
        medium: '0 8px 24px rgba(59, 130, 246, 0.25)',
        dark: '0 12px 32px rgba(17, 24, 39, 0.8)',
      },
      transitionProperty: {
        colors: 'background-color, border-color, color, fill, stroke',
        shadow: 'box-shadow',
        transform: 'transform',
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in forwards',
        slideUp: 'slideUp 0.6s ease-out forwards',
        bounceSlow: 'bounce 2.5s infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: {
            transform: 'translateY(24px)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        business: {
          primary: '#2563eb',
          'primary-focus': '#1e3a8a',
          secondary: '#6b7280',
          'secondary-focus': '#4b5563',
          accent: '#f59e0b',
          neutral: '#f9fafb',
          'base-100': '#ffffff',
          'base-200': '#f3f4f6',
          'base-300': '#e5e7eb',
          info: '#3b82f6',
          success: '#10b981',
          warning: '#fbbf24',
          error: '#ef4444',
        },
      },
      {
        'business-dark': {
          primary: '#3b82f6',
          'primary-focus': '#2563eb',
          secondary: '#9ca3af',
          'secondary-focus': '#6b7280',
          accent: '#facc15',
          neutral: '#1f2937',
          'base-100': '#1f2937',
          'base-200': '#111827',
          'base-300': '#374151',
          info: '#60a5fa',
          success: '#059669',
          warning: '#f59e0b',
          error: '#dc2626',
        },
      },
    ],
    darkTheme: 'business-dark',
  },
};

export default config;