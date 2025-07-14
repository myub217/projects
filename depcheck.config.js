// depcheck.config.js

const depcheck = require('depcheck');

/**
 * ✅ Depcheck Config for Modular Onepage Project
 * - Supports ESM, TypeScript, React, JSX/TSX
 * - Skips common dev-only tools and configs
 * - Fine-tuned for modern monorepo/fullstack setup
 */

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
    'ios'
  ],
  ignoreMatches: [
    // ⚙️ Tooling & DevDependencies
    'eslint*',
    '@types/*',
    'vite',
    '@vitejs/*',
    'vite-plugin-*',
    'typescript',
    'ts-node',
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
    'jest-fetch-mock'
  ],
  specials: [
    depcheck.special.babel,
    depcheck.special.typescript,
    depcheck.special.webpack,
    depcheck.special.eslint,
    depcheck.special.jest
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
    depcheck.detector.propertyAccess
  ]
};