module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    // เพิ่มกฎเข้มงวดตามมาตรฐาน production
    "react/react-in-jsx-scope": "off", // React 17+ ไม่ต้อง import React
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "react/prop-types": "off", // ใช้ TS แทน prop-types
    "prefer-const": "error",
    "no-var": "error",
    "eqeqeq": ["error", "always"],
    "curly": "error",
    "semi": ["error", "always"],
    "quotes": ["error", "double", { avoidEscape: true }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};