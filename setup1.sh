#!/bin/bash
set -e

echo "เริ่มจัดโครงสร้างโปรเจกต์ src..."

# ฟังก์ชันสร้างโฟลเดอร์+ไฟล์เปล่า
mkdir_p_file() {
  mkdir -p "$(dirname "$1")"
  if [ ! -f "$1" ]; then
    touch "$1"
    echo "สร้างไฟล์: $1"
  fi
}

# สร้างโฟลเดอร์และไฟล์ใน src ตาม tree ที่ให้มา

# โฟลเดอร์และไฟล์หลัก
mkdir -p src
mkdir_p_file src/App.tsx
mkdir_p_file src/main.tsx

# assets
mkdir -p src/assets/icons src/assets/images/src/assets/images/review
touch src/assets/hero.webp
touch src/assets/icons/icon-192x192.png
touch src/assets/icons/icon-512x512.png
touch src/assets/icons/react.svg
touch src/assets/icons/vite.svg
touch src/assets/images/about-us.jpg
touch src/assets/images/about-us.webp
touch src/assets/images/backend.jpg
touch src/assets/images/consulting.jpg
touch src/assets/images/fallback-image.png
touch src/assets/images/financial-docs.png
touch src/assets/images/jp-logo.png
touch src/assets/images/loan.png
touch src/assets/images/logo1.png
touch src/assets/images/nf98Hfe.png
touch src/assets/images/pro-team.jpg
touch src/assets/images/profile.jpg
touch src/assets/images/repository-open-graph-template.png
touch src/assets/images/review/about-us.jpg
touch src/assets/images/review/review1.png
touch src/assets/images/review/review10.png
touch src/assets/images/review/review2.png
touch src/assets/images/review/review3.png
touch src/assets/images/review/review4.png
touch src/assets/images/review/review5.png
touch src/assets/images/review/review6.png
touch src/assets/images/review/review7.png
touch src/assets/images/review/review8.png
touch src/assets/images/review/review9.png
touch src/assets/images/service-visa.webp
touch src/assets/images/special.jpg
touch src/assets/images/visa.png
touch src/assets/jp-logo.png
touch src/assets/signature.webp

# components
mkdir -p src/components/auth src/components/ui
touch src/components/About.tsx
touch src/components/ErrorBoundary.tsx
touch src/components/Hero.tsx
touch src/components/JoinButtons.tsx
touch src/components/Logo.tsx
touch src/components/MobileMenu.tsx
touch src/components/PortfolioSection.tsx
touch src/components/ReviewsSection.tsx
touch src/components/SEOHelmet.tsx
touch src/components/ScrollToTop.tsx
touch src/components/ServiceCard.tsx
touch src/components/ServicesSection.tsx
touch src/components/ThemeToggle.tsx
touch src/components/VisitorCount.tsx
touch src/components/auth/ProtectedRoute.tsx
touch src/components/ui/button.tsx

# context
mkdir -p src/context
touch src/context/AuthContext.tsx
touch src/context/ThemeContext.tsx

# data
mkdir -p src/data
touch src/data/services.ts

# documents
touch src/documents/BusinessRegistration.css
touch src/documents/BusinessRegistration.tsx
touch src/documents/SalaryCertificate.css
touch src/documents/SalaryCertificate.tsx

# hooks
mkdir -p src/hooks
touch src/hooks/useScrollToTop.ts
touch src/hooks/useTheme.ts

# layout
mkdir -p src/layout
touch src/layout/Footer.tsx
touch src/layout/Header.tsx
touch src/layout/Layout.tsx
touch src/layout/MainLayout.tsx

# lib
mkdir -p src/lib
touch src/lib/utils.ts

# pages
mkdir -p src/pages
touch src/pages/AdminUserManagement.tsx
touch src/pages/HomePage.tsx
touch src/pages/LoginPage.tsx
touch src/pages/SecretRoomPage.tsx
touch src/pages/ServicesPage.tsx
touch src/pages/index.tsx

# styles
mkdir -p src/styles
touch src/styles/global.css
touch src/styles/theme.tsx

# sw.js
touch src/sw.js

# types
mkdir -p src/types
touch src/types/vite-env.d.ts

# utils
mkdir -p src/utils
touch src/utils/documentUtils.ts
touch src/utils/downloadHelpers.ts
touch src/utils/generateLineMessage.ts
touch src/utils/tempAuth.ts

echo "จัดโครงสร้างโปรเจกต์ src เสร็จเรียบร้อย ✅"
