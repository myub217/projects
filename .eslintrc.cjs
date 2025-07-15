// eslint.config.js

/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  globals: {
    window: 'readonly',
    document: 'readonly',
    alert: 'readonly',
    fetch: 'readonly',
    console: 'readonly',
    localStorage: 'readonly',
    setTimeout: 'readonly',
    clearTimeout: 'readonly',
    setInterval: 'readonly',
    clearInterval: 'readonly',
    navigator: 'readonly',
    history: 'readonly',
    process: 'readonly',
    __dirname: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unused-imports/recommended',
  ],
  rules: {
    // ปิด eslint default เพื่อใช้ rule จาก unused-imports แทน
    'no-unused-vars': 'off',

    // ใช้ของ typescript
    '@typescript-eslint/no-unused-vars': ['error'],

    // ใช้ plugin ที่จัดการ unused import + ตัวแปร ได้สะอาดกว่า
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
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
