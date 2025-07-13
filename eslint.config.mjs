import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import tailwindcssPlugin from 'eslint-plugin-tailwindcss';
import path from 'node:path';
import url from 'node:url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default js.flatConfig([
  {
    files: ['*.ts', '*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: path.join(__dirname, 'tsconfig.json'),
        tsconfigRootDir: __dirname,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': tsPlugin,
      tailwindcss: tailwindcssPlugin,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'tailwindcss/no-custom-classname': 'off',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
  {
    files: ['*.js', '*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
    },
    plugins: {
      react: reactPlugin,
      tailwindcss: tailwindcssPlugin,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'tailwindcss/no-custom-classname': 'off',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
  js.configs.recommended,
  tsPlugin.configs.recommended,
  reactPlugin.configs.recommended,
  tailwindcssPlugin.configs.recommended,
]);