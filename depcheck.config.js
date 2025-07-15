// depcheck.config.js

const depcheck = require('depcheck');

module.exports = {
  ignoreBinPackage: false,
  skipMissing: false,

  // ไฟล์หรือโฟลเดอร์ที่ไม่ต้องสแกน
  ignorePatterns: [
    'dist',
    'build',
    '.vite',
    '.next',
    'coverage',
    'node_modules',
    'public',
    '.output',
  ],

  // ชื่อ dependencies ที่ไม่ต้องรายงานว่าไม่ได้ใช้งาน
  ignoreMatches: [
    // dev tools
    'eslint',
    'eslint-*',
    'prettier',
    'typescript',
    'tslib',

    // Vite + Tailwind + DaisyUI
    'vite',
    '@vitejs/*',
    'vite-plugin-*',
    'tailwindcss',
    'autoprefixer',
    'postcss',
    'daisyui',

    // React + Types
    '@types/*',
    'react-refresh',
    'web-vitals',

    // Testing (ถ้าใช้)
    'vitest',
    '@vitest/*',
    'jsdom',
  ],

  // วิธีพิเศษในการตรวจจับการใช้งาน dependencies
  specials: [
    depcheck.special.babel,
    depcheck.special.eslint,
    depcheck.special.webpack,
    depcheck.special.typescript,
    depcheck.special.vue,
    depcheck.special.bin, // ตรวจ binary CLI
  ],
};
