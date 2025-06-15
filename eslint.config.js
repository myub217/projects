module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
  ],
  plugins: ["react", "@typescript-eslint", "import"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // กำหนดกฎเพิ่มเติมตามต้องการ
  },
};