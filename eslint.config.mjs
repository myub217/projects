import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import tailwindPlugin from "eslint-plugin-tailwindcss";
import prettierConfig from "eslint-config-prettier";

export default [
  js.configs.recommended,

  {
    files: ["*.ts", "*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: { "@typescript-eslint": tsPlugin },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      // เพิ่ม rules ที่ต้องการ
    },
  },

  {
    plugins: {
      react: reactPlugin,
      tailwindcss: tailwindPlugin,
    },
    rules: {
      // กำหนด rules react, tailwind ตามต้องการ
    },
  },

  prettierConfig,
];