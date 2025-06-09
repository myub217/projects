import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#e3f2fd',     // ฟ้าอ่อน
          dark: '#0d1b3e',       // น้ำเงินเข้มกรมท่า
        },
        foreground: {
          light: '#0d1b3e',      // ตัวอักษรในโหมดสว่าง
          dark: '#e3f2fd',       // ตัวอักษรในโหมดมืด
        },
        primary: {
          light: '#1a237e',      // น้ำเงินกรมท่า
          dark: '#90caf9',       // ฟ้าอ่อน
        },
        accent: {
          light: '#1565c0',      // น้ำเงินสด
          dark: '#64b5f6',       // น้ำเงินอ่อน
        },
      },
    },
  },
  plugins: [],
}

export default config