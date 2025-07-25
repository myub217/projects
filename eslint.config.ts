// eslint.config.ts
import js from '@eslint/js';
import eslintGlobals from './tools/.eslintrc-auto-import.json';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: eslintGlobals.globals,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
];
