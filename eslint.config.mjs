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
  {
    ignores: [
      '**/*.json',
      '**/*.d.ts',
      'coverage/**',
      'public/**',
      'vercel.json',
      'tsconfig*.json',
      '**/*.config.js',
      '**/*.config.ts',
      '**/__mocks__/**',
      'depcheck.config.js',
    ],
  },

  jsConfigs.recommended,

  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      env: {
        browser: true,
        node: true,
        es2021: true,
        serviceworker: true,
      },
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
    files: ['**/*.jsx', '**/*.tsx'],
    languageOptions: {
      env: {
        browser: true,
        node: true,
        es2021: true,
        serviceworker: true,
      },
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