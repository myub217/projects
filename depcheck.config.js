// depcheck.config.js

/**
 * ✅ Depcheck Config for Modular Onepage Project
 * - รองรับ ESM, TypeScript, React, JSX/TSX
 * - ข้ามไฟล์และไดเรกทอรี dev-only
 * - ปรับจูนสำหรับ fullstack project ที่ใช้ Vite + Express
 */

const depcheck = require('depcheck');

module.exports = {
  ignoreDirs: [
    'dist',
    'build',
    'coverage',
    'node_modules',
    'public',
    '.git',
    '.vscode',
    '.next',
    '.expo',
    '.turbo',
    '.output',
    '.cache',
    'android',
    'ios',
    '.summary',
    '.husky'
  ],
  ignoreMatches: [
    // ⚙️ Dev-only tools
    'eslint*',
    '@types/*',
    'vite',
    '@vitejs/*',
    'vite-plugin-*',
    'typescript',
    'ts-node',
    'tsx',
    'vitest',
    'jest*',
    'prettier',
    'postcss',
    'autoprefixer',
    'tailwindcss',
    'daisyui',
    'nodemon',
    'rollup*',
    'babel*',
    'identity-obj-proxy',
    'connect-history-api-fallback',
    'jest-fetch-mock',
    'husky',
    'depcheck',
    'concurrently',
    'ncu'
  ],
  specials: [
    depcheck.special.babel,
    depcheck.special.typescript,
    depcheck.special.webpack,
    depcheck.special.eslint,
    depcheck.special.jest,
    depcheck.special.vue,
    depcheck.special.bin
  ],
  parsers: {
    '**/*.js': depcheck.parser.es6,
    '**/*.cjs': depcheck.parser.es6,
    '**/*.mjs': depcheck.parser.es6,
    '**/*.jsx': depcheck.parser.jsx,
    '**/*.ts': depcheck.parser.typescript,
    '**/*.tsx': depcheck.parser.typescript
  },
  detectors: [
    depcheck.detector.requireCallExpression,
    depcheck.detector.importDeclaration,
    depcheck.detector.exportDeclaration,
    depcheck.detector.dynamicImport,
    depcheck.detector.tsTypeReference,
    depcheck.detector.typescriptEnum,
    depcheck.detector.typescriptImportType,
    depcheck.detector.propertyAccess,
    depcheck.detector.memberExpression
  ]
};