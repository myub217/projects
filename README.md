# 🧩 Modular OnePage – Fullstack Web Project

## 📌 Overview

Modular OnePage is a scalable, modern fullstack web application optimized for smooth UX and maintainability.

- **Frontend:** React 18 + TypeScript + TailwindCSS + DaisyUI  
- **Routing:** React Router v6  
- **PDF Tools:** `react-pdf`, `react-dropzone`  
- **UI/UX:** Headless UI, Heroicons, Framer Motion animations  
- **PWA Support:** Vite Plugin PWA (Workbox) with offline caching  
- **Backend:** Express.js (Node.js) with Nodemailer for email handling  
- **Build Tools:** Vite, TypeScript, PostCSS  
- **DevOps:** Vercel deployment, Husky + lint-staged pre-commit hooks  

---

## 📂 Folder Structure

/projects1 ├── api/                   # Express backend API routes & email logic ├── public/                # Static assets: favicon, robots.txt, manifest, images ├── src/ │   ├── components/        # Reusable UI components (buttons, cards, modals) │   ├── layout/            # Layout components (headers, footers, navbars) │   ├── pages/             # Page-level components (Index, Login, Admin, etc.) │   ├── styles/            # Tailwind config & global CSS overrides │   ├── routes/            # React Router route definitions │   └── main.tsx           # React app entry point ├── .vercel.json           # Vercel SPA fallback & routing config ├── tailwind.config.js     # TailwindCSS configuration ├── postcss.config.js      # PostCSS plugins and setup ├── tsconfig.json          # TypeScript compiler config ├── vite.config.ts         # Vite build & dev server config ├── package.json           # NPM/Yarn/PNPM dependencies & scripts └── README.md              # Project overview & instructions

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/myub217/projects.git

# Change directory
cd projects

# Install dependencies
pnpm install

# Start development server with hot reload
pnpm dev

# Build production assets
pnpm build

# Preview production build locally
pnpm preview


---

🌐 Vercel Deployment

Ensure .vercel.json is configured for SPA fallback routing:

{
  "cleanUrls": true,
  "trailingSlash": false,
  "routes": [
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}

Deploy using Vercel CLI or GitHub integration:

npx vercel deploy --prod


---

🧪 Code Quality & Formatting

Use Husky + lint-staged for pre-commit hooks to auto-format code:

// package.json snippet
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*.{ts,tsx,js,jsx,json,css,md}": [
    "prettier --write",
    "git add"
  ]
}


---

🗂️ .gitignore Key Entries

# Logs
*.log
*.pid

# Build outputs
dist/
build/
.vite/
node_modules/

# Environment variables & secrets
.env*
.env.local
.env.production.local

# IDE & system files
.vscode/
.idea/
.DS_Store
Thumbs.db

# AI / cache files
gpt-response.json
openai_cache/


---

💡 Features & Highlights

Full PWA support with offline mode & install prompt

Responsive design optimized for desktop & mobile

Modular architecture for fast feature extension

Secure protected routes & authentication flows

PDF upload, preview, and conversion tools

Express backend with Nodemailer for contact forms

Theming support with DaisyUI (light/dark mode)



---

📬 Contact

JP Dev Team
Email: dev@jpvisual.com
GitHub: github.com/myub217/projects


---

📝 Notes

Ensure .env contains all required variables before production deploy

Use Vercel environment variables to handle secrets securely

Follow commit message guidelines for smooth CI/CD integration

Regularly run linting and tests before pushing code
