// depcheck.config.js
module.exports = {
  // 📁 โฟลเดอร์ที่ไม่ต้องตรวจสอบ
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
    "logs"
  ],

  // 📦 Dependencies ที่แม้จะไม่ได้ import โดยตรง แต่ก็ถูกใช้งานผ่าน config/tools
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
    "dotenv"
  ]
};