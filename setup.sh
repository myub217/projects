#!/bin/bash
set -e

# 1. ติดตั้ง dependencies
pnpm install

# 2. สร้าง/แก้ไขไฟล์ eslint.config.mjs ให้แก้ปัญหา parserOptions.project กับ globals process no-undef
cat > eslint.config.mjs << 'EOF'
import eslintJsPkg from '@eslint/js';
const { configs: jsConfigs } = eslintJsPkg;
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import tailwindPlugin from 'eslint-plugin-tailwindcss';
import prettierConfig from 'eslint-config-prettier';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';

const browserGlobals = {
  window: 'readonly',
  document: 'readonly',
  fetch: 'readonly',
  console: 'readonly',
  alert: 'readonly',
  localStorage: 'readonly',
  navigator: 'readonly',
  setTimeout: 'readonly',
  clearTimeout: 'readonly',
  setInterval: 'readonly',
  clearInterval: 'readonly',
  history: 'readonly',
  self: 'readonly',
  importScripts: 'readonly',
  caches: 'readonly',
  clients: 'readonly',
  registration: 'readonly',
  process: 'readonly',
  module: 'readonly',
};

export default [
  jsConfigs.recommended,

  {
    files: ['src/**/*.{ts,tsx,js,jsx}', 'api/**/*.{ts,tsx,js,jsx}', 'src/pages/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
      globals: browserGlobals,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'unused-imports': unusedImportsPlugin,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },

  {
    files: ['**/*.js', '**/*.jsx', '**/*.json', '**/*.d.ts'],
    languageOptions: {
      globals: browserGlobals,
    },
  },

  {
    files: ['**/*.jsx', '**/*.tsx'],
    languageOptions: {
      globals: browserGlobals,
    },
    plugins: {
      react: reactPlugin,
      tailwindcss: tailwindPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/classnames-order': 'warn',
    },
  },

  prettierConfig,
];
EOF

# 3. สร้าง .env จาก .env.example ถ้ายังไม่มี
[ ! -f .env ] && cp .env.example .env

# 4. เรียก format, lint, typecheck (lint ถ้าผิดให้หยุด)
pnpm format
pnpm lint
pnpm typecheck

# 5. ตรวจสอบ dependencies ที่ไม่ใช้ (depcheck)
pnpm depcheck || true

# 6. สร้างข้อมูลโปรเจกต์ลง .summary/
sh ./generate-project-info.sh || true

# 7. เตรียม husky (ถ้ามี)
pnpm prepare || true

# 8. เสร็จแล้ว
echo "✅ Setup complete"