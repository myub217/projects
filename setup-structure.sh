#!/bin/bash

# สร้างโฟลเดอร์ระดับบน
mkdir -p dev-dist node_modules/@tailwindcss node_modules/@types node_modules/@vitejs public/assets/images public/images/services src/assets/icons src/assets/images src/components src/context src/hooks src/layout src/styles

# สร้างไฟล์ระดับ Root
touch \
  dev-dist/registerSW.js \
  dev-dist/sw.js \
  dev-dist/workbox-86c9b217.js \
  eslint.config.js \
  index.html \
  package.json \
  pnpm-lock.yaml \
  pnpm-workspace.yaml \
  postcss.config.mjs \
  setup.sh \
  tailwind.config.mjs \
  tsconfig.app.json \
  tsconfig.app.tsbuildinfo \
  tsconfig.json \
  tsconfig.json.bak \
  tsconfig.node.json \
  tsconfig.node.tsbuildinfo \
  tsconfig.tsbuildinfo \
  vite.config.mjs \
  vite.config.ts.bak

# ไฟล์ใน public/
touch \
  public/favicon.ico \
  public/manifest.json \
  public/robots.txt \
  public/sitemap.xml \
  public/images/portfolio-loan-success.jpg \
  public/images/portfolio-loan-success1.jpg \
  public/images/portfolio-loan-success2.jpg \
  public/images/portfolio-loan-success3.jpg \
  public/images/portfolio-loan-success4.jpg

# ไฟล์ใน src/
touch \
  src/App.js \
  src/App.tsx \
  src/main.js \
  src/main.tsx \
  src/vite-env.d.ts \
  src/styles/global.css \
  src/styles/theme.js \
  src/styles/theme.tsx \
  src/components/About.js \
  src/components/About.tsx \
  src/components/Hero.js \
  src/components/Hero.tsx \
  src/components/JoinButtons.js \
  src/components/JoinButtons.tsx \
  src/components/Logo.js \
  src/components/Logo.tsx \
  src/components/PortfolioSection.js \
  src/components/PortfolioSection.tsx \
  src/components/ReviewsSection.js \
  src/components/ReviewsSection.tsx \
  src/components/ScrollToTop.js \
  src/components/ScrollToTop.tsx \
  src/components/ServicesSection.js \
  src/components/ServicesSection.tsx \
  src/components/ThemeToggle.js \
  src/components/ThemeToggle.tsx \
  src/context/ThemeContext.js \
  src/context/ThemeContext.tsx \
  src/layout/Footer.js \
  src/layout/Footer.tsx \
  src/layout/Header.js \
  src/layout/Header.tsx \
  src/layout/Layout.js \
  src/layout/Layout.tsx \
  src/layout/ScrollToTop.js \
  src/layout/ScrollToTop.tsx
