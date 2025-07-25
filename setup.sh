# 4. Husky + lint-staged Setup

# 1) ติดตั้ง dependencies
pnpm install -D husky lint-staged

# 2) สร้าง git hook
npx husky install

# 3) เพิ่มคำสั่งใน package.json
# package.json
{
  ...
  "scripts": {
    "prepare": "husky install",
    ...
  },
  "lint-staged": {
    "*.{ts,tsx,js,jsx,json,css,scss,md}": [
      "prettier --write",
      "eslint --fix"
    ]
  }
}

# 4) สร้าง pre-commit hook เพื่อรัน lint-staged
npx husky add .husky/pre-commit "npx lint-staged"

# 5) เรียกใช้งานคำสั่ง prepare ทุกครั้งหลังติดตั้ง dependencies
pnpm run prepare