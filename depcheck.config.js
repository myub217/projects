// depcheck.config.js
const depcheck = require("depcheck");

module.exports = {
  ignoreDirs: [
    "dist",
    "build",
    "public",
    "coverage",
    "node_modules",
    ".git",
    ".github",
    ".vscode",
    ".idea",
    "scripts",
    "Acode",
    "tmp",
    "logs",
  ],

  ignoreMatches: [
    // TypeScript & ESLint
    "typescript",
    "@types/node",
    "@types/react",
    "@types/react-dom",
    "@typescript-eslint/parser",
    "@typescript-eslint/eslint-plugin",
    "eslint",
    "eslint-config-prettier",
    "eslint-plugin-react",
    "eslint-plugin-tailwindcss",
    "eslint-plugin-unused-imports",

    // Styling & Tailwind
    "tailwindcss",
    "@tailwindcss/typography",
    "postcss",
    "autoprefixer",
    "daisyui",

    // Vite, Build, Tooling
    "vite",
    "@vitejs/plugin-react",
    "rollup-plugin-visualizer",
    "@rollup/plugin-strip",
    "concurrently",
    "tsx",

    // CLI Tools
    "depcheck",
    "prettier",
    "dotenv",
  ],

  detectors: [
    "importDeclaration",
    "requireCallExpression",
    "importCallExpression",
    "exportDeclaration",
    "jsxElement",
    "tsconfigPaths",
  ],

  resolvePaths: ["./src"],

  parsers: {
    "**/*.ts": depcheck.parser.typescript,
    "**/*.tsx": depcheck.parser.typescript,
  },
};