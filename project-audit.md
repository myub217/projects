# 📦 PROJECT STRUCTURE REPORT

- 📍 Location: `/data/data/com.termux/files/home/projects`
- 🕒 Generated: Thu Jul 24 20:06:49 +07 2025
- 🛠️ Dev Mode: Audit & Verify Setup

---

## ✅ REQUIRED DIRECTORIES & FILES

- [✅] `src`
- [✅] `src/pages`
- [✅] `src/components`
- [✅] `src/routes`
- [✅] `tailwind.config.ts`
- [✅] `vite.config.ts`
- [✅] `package.json`
- [❌] `.env`
- [✅] `public`

## 📄 tailwind.config.ts (`/data/data/com.termux/files/home/projects/tailwind.config.ts`)

```tsx
// tailwind.config.ts
import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '360px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
        160: '40rem',
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '110rem',
      },
      zIndex: {
        '-1': '-1',
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
        110: '110',
        120: '120',
      },
      colors: {
        background: {
          DEFAULT: '#ffffff',
          dark: '#1f2937',
          surface: '#f9fafb',
          surfaceDark: '#111827',
        },
        foreground: {
          DEFAULT: '#1f2937',
          dark: '#f3f4f6',
        },
        muted: '#6b7280',
        primary: {
          DEFAULT: '#2563eb',
          light: '#3b82f6',
          dark: '#1e3a8a',
          contrastText: '#ffffff',
        },
        accent: '#f59e0b',
        border: '#e5e7eb',
        success: {
          DEFAULT: '#10b981',
          dark: '#059669',
          light: '#a7f3d0',
        },
        warning: {
          DEFAULT: '#fbbf24',
          dark: '#b45309',
          light: '#fef3c7',
        },
        error: {
          DEFAULT: '#ef4444',
          dark: '#b91c1c',
          light: '#fee2e2',
        },
        info: {
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
          light: '#bfdbfe',
        },
      },
      backgroundImage: {
        'business-gradient': 'linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)',
        'business-dark-gradient': 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
      },
      fontFamily: {
        body: ['Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
        code: ['Fira Code', 'Menlo', 'Monaco', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.375rem' }],
        base: ['1rem', { lineHeight: '1.6rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.75rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      boxShadow: {
        soft: '0 4px 12px rgba(59, 130, 246, 0.2)',
        medium: '0 8px 24px rgba(59, 130, 246, 0.25)',
        dark: '0 12px 32px rgba(17, 24, 39, 0.8)',
      },
      transitionProperty: {
        colors: 'background-color, border-color, color, fill, stroke',
        shadow: 'box-shadow',
        transform: 'transform',
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in forwards',
        slideUp: 'slideUp 0.6s ease-out forwards',
        bounceSlow: 'bounce 2.5s infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { transform: 'translateY(24px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        business: {
          primary: '#2563eb',
          'primary-focus': '#1e3a8a',
          secondary: '#6b7280',
          'secondary-focus': '#4b5563',
          accent: '#f59e0b',
          neutral: '#f9fafb',
          'base-100': '#ffffff',
          'base-200': '#f3f4f6',
          'base-300': '#e5e7eb',
          info: '#3b82f6',
          success: '#10b981',
          warning: '#fbbf24',
          error: '#ef4444',
        },
      },
      {
        'business-dark': {
          primary: '#3b82f6',
          'primary-focus': '#2563eb',
          secondary: '#9ca3af',
          'secondary-focus': '#6b7280',
          accent: '#facc15',
          neutral: '#1f2937',
          'base-100': '#1f2937',
          'base-200': '#111827',
          'base-300': '#374151',
          info: '#60a5fa',
          success: '#059669',
          warning: '#f59e0b',
          error: '#dc2626',
        },
      },
    ],
    darkTheme: 'business-dark',
  },
}

export default config
```

## 📄 vite.config.ts (`/data/data/com.termux/files/home/projects/vite.config.ts`)

```tsx
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'node:path'
import fs from 'fs'

export default defineConfig({
  plugins: [
    react(),

    // 🔹 Progressive Web App
    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.ts',
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      injectManifest: {
        globDirectory: 'dist',
        globPatterns: ['**/*.{js,css,html,wasm,webmanifest}'],
        globIgnores: ['**/node_modules/**/*', 'sw.js', '**/sw.js.map'],
      },
      devOptions: {
        enabled: true,
        type: 'module',
      },
      manifest: {
        name: 'JP Visual & Docs',
        short_name: 'JPDocs',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#2563eb',
        icons: [
          { src: '/images/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/images/icon-512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
    }),

    // 🔹 Static Assets Copy
    viteStaticCopy({
      targets: [
        {
          src: 'public/images',
          dest: 'images',
        },
      ],
    }),

    // 🔹 Mock API
    {
      name: 'mock-api',
      configureServer(server) {
        server.middlewares.use('/api/repos', (req, res, next) => {
          if (req.method !== 'GET') return next()
          const filePath = path.resolve(__dirname, 'src/data/repos.json')
          if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf-8')
            res.setHeader('Content-Type', 'application/json')
            res.end(data)
          } else {
            res.statusCode = 404
            res.end(JSON.stringify({ error: 'Not found' }))
          }
        })
      },
    },
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@config': path.resolve(__dirname, 'src/config'),
    },
  },

  server: {
    host: '0.0.0.0',
    port: 5173,
    open: true,
    proxy:
      process.env.USE_MOCK === 'true'
        ? {}
        : {
            '/api': {
              target: 'http://localhost:3000',
              changeOrigin: true,
              secure: false,
            },
          },
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'esnext',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor'
        },
      },
    },
  },

  optimizeDeps: {
    include: ['react', 'react-dom'],
    esbuildOptions: {
      target: 'esnext',
    },
  },
})
```

## 📄 main.tsx (`/data/data/com.termux/files/home/projects/src/main.tsx`)

```tsx
// src/main.tsx
// ✅ Root app entry: wraps App with ThemeProvider, React Router, Suspense fallback, and global styles

import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// 🧩 Global Styles
import '@/styles/tailwind-base.css'
import '@/styles/tailwind.css'
import '@/styles/global.css'

// 🔧 Providers & Routes
import { ThemeProvider } from '@components/ThemeProvider'
import AppRoutes from './routes/AppRoutes'
import LoadingFallback from '@components/common/LoadingFallback'

const RootApp: React.FC = () => (
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL || '/'}>
        <Suspense fallback={<LoadingFallback />}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)

const rootElement = document.getElementById('root')

if (!rootElement) {
  console.error('❌ <div id="root"> not found in index.html')
} else {
  ReactDOM.createRoot(rootElement).render(<RootApp />)
}

export default RootApp
```

## 📄 AppRoutes.tsx (`/data/data/com.termux/files/home/projects/src/routes/AppRoutes.tsx`)

```tsx
// src/routes/AppRoutes.tsx
// ✅ Routes setup with Suspense fallback, lazy-loaded pages, theme support, and protected routes

import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import ProtectedRoute from '@components/ProtectedRoute'
import { useTheme } from '@components/ThemeProvider'
import LoadingFallback from '@components/common/LoadingFallback'

// Lazy-loaded pages
const IndexPage = lazy(() => import('@pages/IndexPage'))
const LoginPage = lazy(() => import('@pages/LoginPage'))
const SecretRoomPage = lazy(() => import('@pages/SecretRoomPage'))
const AdminPage = lazy(() => import('@pages/AdminPage'))
const CustomerAssessmentSummary = lazy(() => import('@pages/CustomerAssessmentSummary'))
const NotFoundPage = lazy(() => import('@pages/NotFoundPage'))

const AppRoutes: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {/* Public Routes */}
        <Route index element={<IndexPage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/secret" element={<SecretRoomPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/customer-assessment-summary" element={<CustomerAssessmentSummary />} />
        </Route>

        {/* Fallback 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
```

## 📄 AdminPage.tsx (`/data/data/com.termux/files/home/projects/src/pages/AdminPage.tsx`)

```tsx
// src/pages/AdminPage.tsx
// ✅ หน้าหลักของผู้ดูแลระบบ พร้อมโครงสร้างรองรับ accessibility และ responsive layout

import React from 'react'
import Dashboard from '@components/AdminBoard/Dashboard'

const AdminPage: React.FC = () => {
  return (
    <main
      role="main"
      aria-label="แดชบอร์ดผู้ดูแลระบบ"
      tabIndex={-1}
      className="min-h-screen bg-base-100 px-4 py-10 sm:px-6 lg:px-8"
    >
      <Dashboard />
    </main>
  )
}

export default AdminPage
```

## 📄 SecretRoomPage.tsx (`/data/data/com.termux/files/home/projects/src/pages/SecretRoomPage.tsx`)

```tsx
import React, { useEffect, useState } from 'react'
import SecretRoomDashboard from '@components/SecretRoom/Dashboard'

const SecretRoomPage: React.FC = () => {
  const [username, setUsername] = useState('ไม่ระบุชื่อผู้ใช้งาน')

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser')?.trim()
    if (storedUser) setUsername(storedUser)
  }, [])

  return (
    <main
      role="main"
      aria-label="หน้าหลักห้องลับ"
      className="min-h-screen bg-base-100 px-4 py-10 sm:px-6 lg:px-8"
      tabIndex={-1}
    >
      <SecretRoomDashboard username={username} />
    </main>
  )
}

export default SecretRoomPage
```

## 📄 tsconfig.json (`/data/data/com.termux/files/home/projects/tsconfig.json`)

```tsx
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext", "WebWorker"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": "./src",
    "paths": {
      "@/*": ["*"],
      "@components/*": ["components/*"],
      "@pages/*": ["pages/*"],
      "@data/*": ["data/*"],
      "@utils/*": ["utils/*"],
      "@api/*": ["api/*"],
      "@assets/*": ["assets/*"],
      "@styles/*": ["styles/*"],
      "@hooks/*": ["hooks/*"],
      "@config/*": ["config/*"]
    },
    "types": ["vite/client"],
    "typeRoots": ["./node_modules/@types", "./types"]
  },
  "include": ["src/**/*", "src/sw.ts"],
  "exclude": ["dist", "node_modules", "public", "coverage"]
}
```

## 📄 .prettierrc (`/data/data/com.termux/files/home/projects/.prettierrc`)

```tsx
# .prettierrc.yaml
# Prettier configuration optimized for Vite + React + TailwindCSS projects
# Designed for smooth collaboration in Dev teams and CI/CD pipelines

semi: false # No semicolons at end of statements
singleQuote: true # Use single quotes instead of double quotes
trailingComma: es5 # Add trailing commas where valid in ES5 (objects, arrays)
printWidth: 100 # Limit lines to 100 characters for better readability
tabWidth: 2 # Use 2 spaces per indentation level
useTabs: false # Use spaces instead of tabs for indentation
bracketSpacing: true # Print spaces between brackets in object literals: { foo: bar }
arrowParens: avoid # Omit parentheses when arrow function has a single argument: x => x
endOfLine: lf # Use LF for cross-platform line ending consistency

plugins:
  - prettier-plugin-tailwindcss # Automatically sort Tailwind CSS classes for consistency

tailwindConfig: './tailwind.config.ts' # Path to Tailwind config for plugin support

```

## 📄 .prettierrc.json (`/data/data/com.termux/files/home/projects/.prettierrc.json`)

```tsx
{
  "//": "Prettier config สำหรับโปรเจกต์ Vite + React + TailwindCSS เหมาะสำหรับทีม Dev และ CI/CD pipeline",
  "semi": false, // ไม่ใส่ semicolon ปิดท้าย
  "singleQuote": true, // ใช้ single quote แทน double quote
  "trailingComma": "es5", // ใส่ comma ใน object/array ตามมาตรฐาน ES5
  "printWidth": 100, // จำกัดความยาวบรรทัดไม่เกิน 100 ตัวอักษร
  "tabWidth": 2, // ใช้ indent 2 spaces
  "useTabs": false, // ใช้ space แทน tab
  "bracketSpacing": true, // เว้นวรรคใน object เช่น { foo: bar }
  "arrowParens": "avoid", // ไม่ใส่วงเล็บหาก arrow function มี param เดียว เช่น x => x
  "endOfLine": "lf", // ใช้ LF เพื่อ cross-platform compatibility
  "plugins": ["prettier-plugin-tailwindcss"], // จัดเรียง Tailwind CSS classes อัตโนมัติ
  "tailwindConfig": "./tailwind.config.ts" // ชี้ไฟล์ Tailwind config ให้ plugin ใช้งานถูกต้อง
}

```

## 🗂️ DIRECTORY TREE

```
/data/data/com.termux/files/home/projects
├── Clean.sh
├── README.md
├── api
│   └── contact.ts
├── check-structure.sh
├── daisyui.config.ts
├── dev-dist
│   └── registerSW.js
├── index.html
├── index.ts
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.cjs
├── project-audit.md
├── public
│   ├── assets
│   │   ├── 1hero.webp
│   │   ├── 2hero.webp
│   │   ├── AdminPage-DUp5W1q-.js
│   │   ├── AdminPage-DUp5W1q-.js.map
│   │   ├── CustomerAssessmentSummary-0JMa3-NI.js
│   │   ├── CustomerAssessmentSummary-0JMa3-NI.js.map
│   │   ├── Hhero.webp
│   │   ├── IndexPage-sle04z3B.js
│   │   ├── IndexPage-sle04z3B.js.map
│   │   ├── LoginPage-CgZY00-e.js
│   │   ├── LoginPage-CgZY00-e.js.map
│   │   ├── NotFoundPage-CCfNB7ix.js
│   │   ├── NotFoundPage-CCfNB7ix.js.map
│   │   ├── SecretRoomPage-xHtPFFOQ.js
│   │   ├── SecretRoomPage-xHtPFFOQ.js.map
│   │   ├── about-IgS6mAQi.webp
│   │   ├── about.webp
│   │   ├── hero-BRaXPQvd.webp
│   │   ├── hero.webp
│   │   ├── index-B73XzNFU.css
│   │   ├── index-D1x0fQs7.js
│   │   ├── index-D1x0fQs7.js.map
│   │   ├── jp-logo-CH0zBIqT.webp
│   │   ├── jp-logo.webp
│   │   ├── login-DUzPWDzB.webp
│   │   ├── logo.svg
│   │   ├── signature-BovtCThw.webp
│   │   ├── signature.webp
│   │   ├── vendor-Ccc7z4H6.js
│   │   └── vendor-Ccc7z4H6.js.map
│   ├── bg
│   │   └── cta-pattern.svg
│   ├── docs
│   │   ├── certificate.pdf
│   │   ├── contract.pdf
│   │   └── registration.pdf
│   ├── images
│   │   ├── images
│   │   ├── review
│   │   └── services
│   ├── index.html
│   ├── logo.svg
│   ├── manifest.webmanifest
│   ├── registerSW.js
│   ├── sw.js
│   └── sw.js.map
├── settings.json
├── setup.sh
├── src
│   ├── api
│   │   └── auth.ts
│   ├── assets
│   │   ├── 1hero.webp
│   │   ├── 2hero.webp
│   │   ├── 404.svg
│   │   ├── Hhero.webp
│   │   ├── about.webp
│   │   ├── assets
│   │   ├── hero.webp
│   │   ├── jp-logo.webp
│   │   ├── login.webp
│   │   ├── logo.svg
│   │   └── signature.webp
│   ├── components
│   │   ├── About.tsx
│   │   ├── AboutSection.tsx
│   │   ├── AdminBoard
│   │   ├── CTASection.tsx
│   │   ├── ConfirmationDialog.tsx
│   │   ├── CustomerAssessmentForm.tsx
│   │   ├── CustomerCard.tsx
│   │   ├── DataTable.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── FAQSection.tsx
│   │   ├── Feature.tsx
│   │   ├── FeatureSection.tsx
│   │   ├── Footer.tsx
│   │   ├── GetFollowers.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Layout
│   │   ├── LoadingSpinner.tsx
│   │   ├── Modals
│   │   ├── NotificationBanner.tsx
│   │   ├── ProtectedRoute.tsx
│   │   ├── ResponsiveNavbar.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── RichMenuSetter.tsx
│   │   ├── SecretRoom
│   │   ├── SendMessage.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── Services
│   │   ├── ServicesSection.tsx
│   │   ├── StatsPanel.tsx
│   │   ├── StatsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── ThemeProvider.tsx
│   │   ├── common
│   │   ├── contact
│   │   └── ui
│   ├── config
│   │   ├── adminConfig.ts
│   │   ├── contact.ts
│   │   ├── evn.ts
│   │   ├── salaryCertificateConfig.ts
│   │   └── theme.ts
│   ├── data
│   │   ├── approvedCustomers.ts
│   │   ├── reviewsData.ts
│   │   ├── services.ts
│   │   ├── servicesData.ts
│   │   └── users.ts
│   ├── hooks
│   │   ├── useAuth.ts
│   │   ├── useLineAuth.ts
│   │   └── useOnlineStatus.ts
│   ├── main.tsx
│   ├── pages
│   │   ├── AdminPage.tsx
│   │   ├── CustomerAssessmentSummary.tsx
│   │   ├── IndexPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── NotFoundPage.tsx
│   │   ├── SecretRoomPage.tsx
│   │   └── SettingsPage.tsx
│   ├── routes
│   │   ├── AppRoutes.tsx
│   │   └── LoadingFallback.tsx
│   ├── styles
│   │   ├── global.css
│   │   ├── tailwind-base.css
│   │   └── tailwind.css
│   ├── sw.ts
│   ├── types
│   │   ├── assets.d.ts
│   │   ├── connect-history-api-fallback.d.ts
│   │   ├── index.d.ts
│   │   ├── user.ts
│   │   └── vite-env.d.ts
│   └── utils
│       ├── formatDate.ts
│       └── hashPassword.ts
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
└── vite.config.ts

32 directories, 132 files
```

---

## 📌 DEV CHECKLIST

- [x] Tailwind theme config ตรวจสอบแล้ว
- [x] Vite + Alias + React Router พร้อมใช้งาน
- [x] Component Import ผ่าน @ alias ถูกต้อง
- [x] Prettier + Tailwind Plugin พร้อม
- [x] Responsive ผ่าน `grid`, `flex`, `container`
- [x] Design พร้อมใช้งานจริงในธุรกิจเทา

💡 หากพบปัญหา Import ผิด, alias เพี้ยน, ไฟล์หาย → ต้องแจ้งทันที
