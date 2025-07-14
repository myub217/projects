# 🔧 Setup Script Summary (`setup.sh`)

This document summarizes the full structure and diagnostic logic of `setup.sh` in **21 key sections**. Use this as a technical checklist for debugging and improving the script.

---

## ✅ 1. Node.js Version Check
- **Command:** `node -v`
- **Fix:** Use `nvm` or install Node.js manually to ensure `>= 18.x`

---

## ✅ 2. PNPM Installed
- **Command:** `command -v pnpm`
- **Fix:** `npm install -g pnpm`

---

## ✅ 3. Clean Workspace
- **Command:** `rm -rf node_modules pnpm-lock.yaml .cache`
- **Fix:** Use `sudo` or `chmod` if permission issues occur.

---

## ✅ 4. Install Dependencies
- **Command:** `pnpm install`
- **Fix:** Fix invalid `package.json` (commas, comments, or bad syntax).

---

## ✅ 5. `.env` File Check
- **Command:** `test -f .env`
- **Fix:** Generate `.env` or `.env.example` with safe defaults.

---

## ✅ 6. Vite Config
- **Check:** `vite.config.ts` exists and uses `defineConfig(...)`
- **Fix:** Regenerate with Vite template if broken.

---

## ✅ 7. Tailwind Config
- **Check:** `tailwind.config.ts` or `.js`
- **Fix:** Run `npx tailwindcss init -p`

---

## ✅ 8. TypeScript Config
- **Check:** `tsconfig.json` exists and valid
- **Fix:** `npx tsc --init`

---

## ✅ 9. PostCSS Config
- **Check:** `postcss.config.js`
- **Fix:**
  ```js
  module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }


---

✅ 10. Husky Git Hook Init

Check: .husky folder exists

Fix:

pnpm dlx husky install



---

✅ 11. Shell Script Permission

Fix: chmod +x setup.sh



---

✅ 12. Terminal Prompt Support

Fix: Use read -p to ask the user before continuing.



---

✅ 13. Platform Compatibility

Check: uname -o

Fix: Add condition for Android (Termux) or Unix variants.



---

✅ 14. Git Init

Fix:

git rev-parse --is-inside-work-tree || git init



---

✅ 15. Code Format (Prettier)

Command: pnpm format

Fix: Ensure Prettier is installed and file globs are correct.



---

✅ 16. Lint Code (ESLint)

Command: pnpm lint

Fix: Check ESLint config, ensure plugins and parser match.



---

✅ 17. Build App

Command: pnpm build

Fix: Check for Vite, TS, or JSX errors during build.



---

✅ 18. Custom Aliases (Optional)

Suggestion: alias devmod="pnpm start"



---

✅ 19. .gitignore Validation

Fix: Ensure standard ignores: .env, node_modules, dist, etc.



---

✅ 20. Network Check

Command:

ping -c1 registry.npmjs.org > /dev/null || echo "No internet"



---

✅ 21. Setup Logging

Command:

echo "[SETUP $(date)] Starting..." >> setup.log



---

📌 Conclusion

These 21 checks form the foundation of a robust setup.sh. They ensure your environment, dependencies, and configurations are clean, reproducible, and fail-safe.

Use this list as a guide for AI-generated scripts, CI automation, or bootstrapping new modular apps.

✅ พร้อมใช้เป็น `README.md` หรือแปะใน repo/docs ได้เลย.  
ถ้าอยากให้ generate `setup.sh` จาก list นี้ก็บอกได้เลย.

