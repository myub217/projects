# ✅ Project Structure Report

📁 **Project Root Directory:** `/data/data/com.termux/files/home/projects`

## 📂 Required Directories

| Directory         | Status   |
| ----------------- | -------- |
| `src/`            | ✅ Found |
| `public/`         | ✅ Found |
| `api/`            | ✅ Found |
| `src/components/` | ✅ Found |
| `node_modules/`   | ✅ Found |

## 📄 Required Files

| File             | Status   |
| ---------------- | -------- |
| `package.json`   | ✅ Found |
| `vite.config.ts` | ✅ Found |
| `.env`           | ✅ Found |
| `README.md`      | ✅ Found |

## 🎨 tailwind.config.ts

```ts
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

## ⚙️ vite.config.ts

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'node:path'
import fs from 'fs'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.ts',
      injectRegister: 'auto',
      registerType: 'autoUpdate',
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
          {
            src: '/images/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/images/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'public/images',
          dest: 'images',
        },
      ],
    }),
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
  },
})
```

## 🧩 .prettierrc

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "plugins": ["prettier-plugin-tailwindcss"],
  "tailwindConfig": "./tailwind.config.ts",
  "endOfLine": "lf"
}
```

## 🧩 src/main.tsx

```tsx
// src/main.tsx
// ✅ Root app entry with ThemeProvider, Router, Suspense fallback, and strict mode

import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Global styles
import '@/styles/tailwind-base.css'
import '@/styles/tailwind.css'
import '@/styles/global.css'

// Providers & Routes
import { ThemeProvider } from '@components/ThemeProvider'
import AppRoutes from './routes/AppRoutes'
import LoadingFallback from './routes/LoadingFallback'

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

## 🧩 src/routes/AppRoutes.tsx

```tsx
// src/routes/AppRoutes.tsx
// ✅ Centralized, scalable routing with theme props, protected nested routes, and lazy loading

import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import ProtectedRoute from '@components/ProtectedRoute'
import { useTheme } from '@components/ThemeProvider'
import LoadingFallback from '@components/common/LoadingFallback'

// Lazy loaded pages
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

        {/* 404 fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
```

## 🧩 src/pages/SecretRoomPage.tsx

```tsx
// src/pages/SecretRoomPage.tsx
// Secure dashboard page with theme toggle, user greeting, full accessibility, and clean responsive layout

import React, { useEffect, useState, useCallback } from 'react'
import Dashboard from '@components/SecretRoom/Dashboard'
import ThemeToggleButton from '@components/SecretRoom/ThemeToggleButton'
import UserProfileCard from '@components/SecretRoom/UserProfileCard'
import { THEMES, getInitialTheme, applyTheme } from '@config/theme'

const SecretRoomPage: React.FC = () => {
  const [username, setUsername] = useState('กำลังโหลด...')
  const [theme, setTheme] = useState<'light' | 'dark'>(() => getInitialTheme())

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser')?.trim()
    setUsername(storedUser || 'ไม่ทราบชื่อผู้ใช้')

    applyTheme(theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    applyTheme(newTheme)
    setTheme(newTheme)
  }, [theme])

  return (
    <main
      role="main"
      aria-label="แดชบอร์ดระบบรักษาความปลอดภัย"
      className="relative min-h-screen bg-base-100 px-4 py-16 text-base-content transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100"
    >
      {/* Theme Toggle Button */}
      <div className="fixed right-4 top-4 z-50">
        <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
      </div>

      {/* Welcome Section */}
      <section
        aria-label="ข้อความต้อนรับผู้ใช้งาน"
        tabIndex={0}
        aria-live="polite"
        aria-atomic="true"
        className="mx-auto max-w-2xl space-y-4 text-center"
      >
        <h1
          className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl"
          tabIndex={0}
        >
          ยินดีต้อนรับสู่ระบบ
        </h1>
        <p className="text-lg leading-relaxed text-base-content/80 sm:text-xl">
          สวัสดีคุณ{' '}
          <span
            className="font-semibold text-secondary underline decoration-secondary/60 underline-offset-4"
            aria-label={`ชื่อผู้ใช้: ${username}`}
            tabIndex={0}
          >
            {username}
          </span>{' '}
          👋
          <br />
          คุณเข้าสู่ระบบเรียบร้อยแล้ว
        </p>
      </section>

      {/* User Profile Summary */}
      <section aria-label="สรุปข้อมูลผู้ใช้งาน" className="mx-auto mt-10 max-w-md" tabIndex={-1}>
        <UserProfileCard username={username} />
      </section>

      {/* Dashboard Section */}
      <section
        aria-label="แดชบอร์ดข้อมูลและระบบ"
        className="mx-auto mt-12 w-full max-w-7xl rounded-2xl bg-base-200 p-6 shadow-xl outline-none transition-shadow duration-300 focus-within:shadow-2xl hover:shadow-2xl dark:bg-zinc-800 sm:p-10"
        tabIndex={-1}
      >
        <Dashboard />
      </section>
    </main>
  )
}

export default SecretRoomPage
```

## 🧩 src/pages/AdminPage.tsx

```tsx
// src/pages/AdminPage.tsx
// แผงควบคุมผู้ดูแลระบบ พร้อมต้อนรับผู้ใช้และแสดงแดชบอร์ดอย่างมีประสิทธิภาพ

import React, { useEffect, useState } from 'react'
import AdminDashboard from '@components/AdminBoard/Dashboard'

const AdminPage: React.FC = () => {
  const [username, setUsername] = useState<string>('ผู้ใช้ระบบ')

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser')?.trim()
    if (storedUser) setUsername(storedUser)
  }, [])

  return (
    <main
      role="main"
      aria-label="แผงควบคุมผู้ดูแลระบบ"
      className="flex min-h-screen flex-col items-center bg-base-100 px-6 py-12 text-base-content transition-colors duration-300 dark:bg-gray-900"
      tabIndex={-1}
    >
      {/* Header ต้อนรับผู้ใช้ */}
      <header
        className="mb-10 w-full max-w-xl select-text text-center"
        aria-live="polite"
        aria-atomic="true"
      >
        <h1
          className="mb-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl"
          tabIndex={0}
        >
          แผงควบคุมผู้ดูแลระบบ
        </h1>
        <p className="text-lg text-muted sm:text-xl">
          ยินดีต้อนรับคุณ{' '}
          <span
            className="font-semibold underline decoration-primary decoration-2"
            aria-label={`ชื่อผู้ใช้: ${username}`}
            tabIndex={0}
          >
            {username}
          </span>
        </p>
      </header>

      {/* แดชบอร์ดผู้ดูแลระบบ */}
      <section className="w-full max-w-7xl" tabIndex={-1} aria-label="แดชบอร์ดผู้ดูแลระบบ">
        <AdminDashboard />
      </section>
    </main>
  )
}

export default AdminPage
```

## 🗂️ Project Tree: Full

```
/data/data/com.termux/files/home/projects
├── Clean.sh
├── README.md
├── api
│   └── contact.ts
├── check-structure.sh
├── dev-dist
│   └── registerSW.js
├── dist
│   ├── assets
│   │   ├── 1hero.webp
│   │   ├── 2hero.webp
│   │   ├── AdminPage-DFp68Zig.js
│   │   ├── AdminPage-DFp68Zig.js.map
│   │   ├── CustomerAssessmentSummary-BdOVgZwd.js
│   │   ├── CustomerAssessmentSummary-BdOVgZwd.js.map
│   │   ├── Hhero.webp
│   │   ├── IndexPage-BwI58qYs.js
│   │   ├── IndexPage-BwI58qYs.js.map
│   │   ├── LoginPage-BDSPTYxb.js
│   │   ├── LoginPage-BDSPTYxb.js.map
│   │   ├── NotFoundPage-apQR5Smh.js
│   │   ├── NotFoundPage-apQR5Smh.js.map
│   │   ├── SecretRoomPage-BOM36zZ0.js
│   │   ├── SecretRoomPage-BOM36zZ0.js.map
│   │   ├── about-IgS6mAQi.webp
│   │   ├── about.webp
│   │   ├── hero-BRaXPQvd.webp
│   │   ├── hero.webp
│   │   ├── index-B-JNwvOM.js
│   │   ├── index-B-JNwvOM.js.map
│   │   ├── index-BsFq5mWC.css
│   │   ├── jp-logo-CH0zBIqT.webp
│   │   ├── jp-logo.webp
│   │   ├── logo.svg
│   │   ├── signature-BovtCThw.webp
│   │   ├── signature.webp
│   │   ├── vendor-BK35A2Ft.js
│   │   └── vendor-BK35A2Ft.js.map
│   ├── docs
│   │   ├── certificate.pdf
│   │   ├── contract.pdf
│   │   └── registration.pdf
│   ├── images
│   │   ├── images
│   │   │   ├── review
│   │   │   │   └── review1.png
│   │   │   └── services
│   │   │       ├── service1.webp
│   │   │       ├── service10.webp
│   │   │       ├── service11.webp
│   │   │       ├── service12.webp
│   │   │       ├── service2.webp
│   │   │       ├── service22.webp
│   │   │       ├── service3.webp
│   │   │       ├── service4.webp
│   │   │       ├── service5.webp
│   │   │       ├── service6.webp
│   │   │       ├── service7.webp
│   │   │       ├── service8.webp
│   │   │       └── service9.webp
│   │   ├── review
│   │   │   └── review1.png
│   │   └── services
│   │       ├── service1.webp
│   │       ├── service10.webp
│   │       ├── service11.webp
│   │       ├── service12.webp
│   │       ├── service2.webp
│   │       ├── service22.webp
│   │       ├── service3.webp
│   │       ├── service4.webp
│   │       ├── service5.webp
│   │       ├── service6.webp
│   │       ├── service7.webp
│   │       ├── service8.webp
│   │       └── service9.webp
│   ├── index.html
│   ├── logo.svg
│   ├── manifest.webmanifest
│   ├── registerSW.js
│   ├── sw.js
│   └── sw.js.map
├── foo.ts
├── index.html
├── index.ts
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.cjs
├── public
│   ├── assets
│   │   ├── 1hero.webp
│   │   ├── 2hero.webp
│   │   ├── Hhero.webp
│   │   ├── about.webp
│   │   ├── hero.webp
│   │   ├── jp-logo.webp
│   │   ├── logo.svg
│   │   └── signature.webp
│   ├── docs
│   │   ├── certificate.pdf
│   │   ├── contract.pdf
│   │   └── registration.pdf
│   ├── images
│   │   ├── review
│   │   │   └── review1.png
│   │   └── services
│   │       ├── service1.webp
│   │       ├── service10.webp
│   │       ├── service11.webp
│   │       ├── service12.webp
│   │       ├── service2.webp
│   │       ├── service22.webp
│   │       ├── service3.webp
│   │       ├── service4.webp
│   │       ├── service5.webp
│   │       ├── service6.webp
│   │       ├── service7.webp
│   │       ├── service8.webp
│   │       └── service9.webp
│   └── logo.svg
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
│   │   ├── hero.webp
│   │   ├── jp-logo.webp
│   │   ├── logo.svg
│   │   └── signature.webp
│   ├── components
│   │   ├── About.tsx
│   │   ├── AdminBoard
│   │   │   ├── CustomerCard.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── SalaryCertificate.tsx
│   │   │   ├── StatsPanel.tsx
│   │   │   └── UserTable.tsx
│   │   ├── CTASection.tsx
│   │   ├── CustomerAssessmentForm.tsx
│   │   ├── CustomerCard.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── Feature.tsx
│   │   ├── Footer.tsx
│   │   ├── GetFollowers.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Layout
│   │   │   └── MainLayout.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── NotificationBanner.tsx
│   │   ├── ProtectedRoute.tsx
│   │   ├── ResponsiveNavbar.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── RichMenuSetter.tsx
│   │   ├── SecretRoom
│   │   │   ├── AccessLogTable.tsx
│   │   │   ├── CustomerLoanProgressGraph.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── DashboardCard.tsx
│   │   │   ├── FileUpload.tsx
│   │   │   ├── HeaderBlock.tsx
│   │   │   ├── HelpSupport.tsx
│   │   │   ├── NotificationToast.tsx
│   │   │   ├── NotificationsPanel.tsx
│   │   │   ├── PerformanceMetrics.tsx
│   │   │   ├── SystemCheckCard.tsx
│   │   │   ├── ThemeToggleButton.tsx
│   │   │   └── UserProfileCard.tsx
│   │   ├── SendMessage.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── StatsPanel.tsx
│   │   ├── ThemeProvider.tsx
│   │   ├── common
│   │   │   ├── Badge.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── DashboardCard.tsx
│   │   │   ├── ErrorMessage.tsx
│   │   │   ├── FormGroup.tsx
│   │   │   ├── Icon.tsx
│   │   │   ├── LoadingFallback.tsx
│   │   │   ├── LoadingSpinner.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── ServiceRequestModal.tsx
│   │   │   └── UserAvatar.tsx
│   │   ├── contact
│   │   │   ├── ContactCard.tsx
│   │   │   ├── ContactIconButton.tsx
│   │   │   ├── ContactList.tsx
│   │   │   └── index.ts
│   │   └── ui
│   │       ├── Accordion.tsx
│   │       ├── DashboardCard.tsx
│   │       ├── Input.tsx
│   │       ├── Modal.tsx
│   │       ├── Tabs.tsx
│   │       ├── Tooltip.tsx
│   │       └── card.tsx
│   ├── config
│   │   ├── adminConfig.ts
│   │   ├── contact.ts
│   │   ├── evn.ts
│   │   ├── salaryCertificateConfig.ts
│   │   └── theme.ts
│   ├── data
│   │   ├── approvedCustomers.ts
│   │   ├── reviewsData.ts
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
├── structure-report.md
├── tailwind.config.ts
├── test.ts
├── tsconfig.json
├── vercel.json
└── vite.config.ts

36 directories, 218 files
```

## 📁 src Tree: Full

```
/data/data/com.termux/files/home/projects/src
├── api
│   └── auth.ts
├── assets
│   ├── 1hero.webp
│   ├── 2hero.webp
│   ├── 404.svg
│   ├── Hhero.webp
│   ├── about.webp
│   ├── hero.webp
│   ├── jp-logo.webp
│   ├── logo.svg
│   └── signature.webp
├── components
│   ├── About.tsx
│   ├── AdminBoard
│   │   ├── CustomerCard.tsx
│   │   ├── Dashboard.tsx
│   │   ├── SalaryCertificate.tsx
│   │   ├── StatsPanel.tsx
│   │   └── UserTable.tsx
│   ├── CTASection.tsx
│   ├── CustomerAssessmentForm.tsx
│   ├── CustomerCard.tsx
│   ├── ErrorBoundary.tsx
│   ├── Feature.tsx
│   ├── Footer.tsx
│   ├── GetFollowers.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Layout
│   │   └── MainLayout.tsx
│   ├── LoadingSpinner.tsx
│   ├── NotificationBanner.tsx
│   ├── ProtectedRoute.tsx
│   ├── ResponsiveNavbar.tsx
│   ├── ReviewsSection.tsx
│   ├── RichMenuSetter.tsx
│   ├── SecretRoom
│   │   ├── AccessLogTable.tsx
│   │   ├── CustomerLoanProgressGraph.tsx
│   │   ├── Dashboard.tsx
│   │   ├── DashboardCard.tsx
│   │   ├── FileUpload.tsx
│   │   ├── HeaderBlock.tsx
│   │   ├── HelpSupport.tsx
│   │   ├── NotificationToast.tsx
│   │   ├── NotificationsPanel.tsx
│   │   ├── PerformanceMetrics.tsx
│   │   ├── SystemCheckCard.tsx
│   │   ├── ThemeToggleButton.tsx
│   │   └── UserProfileCard.tsx
│   ├── SendMessage.tsx
│   ├── ServiceCard.tsx
│   ├── ServicesSection.tsx
│   ├── StatsPanel.tsx
│   ├── ThemeProvider.tsx
│   ├── common
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── DashboardCard.tsx
│   │   ├── ErrorMessage.tsx
│   │   ├── FormGroup.tsx
│   │   ├── Icon.tsx
│   │   ├── LoadingFallback.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── Modal.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── ServiceRequestModal.tsx
│   │   └── UserAvatar.tsx
│   ├── contact
│   │   ├── ContactCard.tsx
│   │   ├── ContactIconButton.tsx
│   │   ├── ContactList.tsx
│   │   └── index.ts
│   └── ui
│       ├── Accordion.tsx
│       ├── DashboardCard.tsx
│       ├── Input.tsx
│       ├── Modal.tsx
│       ├── Tabs.tsx
│       ├── Tooltip.tsx
│       └── card.tsx
├── config
│   ├── adminConfig.ts
│   ├── contact.ts
│   ├── evn.ts
│   ├── salaryCertificateConfig.ts
│   └── theme.ts
├── data
│   ├── approvedCustomers.ts
│   ├── reviewsData.ts
│   ├── servicesData.ts
│   └── users.ts
├── hooks
│   ├── useAuth.ts
│   ├── useLineAuth.ts
│   └── useOnlineStatus.ts
├── main.tsx
├── pages
│   ├── AdminPage.tsx
│   ├── CustomerAssessmentSummary.tsx
│   ├── IndexPage.tsx
│   ├── LoginPage.tsx
│   ├── NotFoundPage.tsx
│   ├── SecretRoomPage.tsx
│   └── SettingsPage.tsx
├── routes
│   ├── AppRoutes.tsx
│   └── LoadingFallback.tsx
├── styles
│   ├── global.css
│   ├── tailwind-base.css
│   └── tailwind.css
├── sw.ts
├── types
│   ├── assets.d.ts
│   ├── connect-history-api-fallback.d.ts
│   ├── index.d.ts
│   ├── user.ts
│   └── vite-env.d.ts
└── utils
    ├── formatDate.ts
    └── hashPassword.ts

18 directories, 106 files
```

## 📌 Dev Partner Note

คุณคือ Dev Partner ที่พัฒนาร่วมในโปรเจกต์นี้ โดยมีหน้าที่หลัก:

- แก้ไข/ออกแบบโค้ดให้สอดคล้องกับ UI/UX, Business Logic และระบบ Responsive
- ทุก Component ต้อง Import ให้ถูกต้อง, รองรับ Desktop & Mobile
- แก้ปัญหาทันที ไม่อธิบายเยิ่นเย้อ
- ทุกคำตอบต้องแม่นยำตาม Stack และโครงสร้างที่กำหนด

JP - VISUAL & DOCS
ธุรกิจสีเทาที่ออกแบบมาให้ได้มาตรฐานเท่าที่สามารถแสดงได้ เราพร้อมร่วมงานกับทุกสายอาชีพ ทุกวงการ และพร้อมสร้างเครื่องมือที่ตอบโจทย์จริงให้ทุกคน

เรายินดีให้คำปรึกษาแบบตรงไปตรงมา ด้วยข้อมูลจริง พร้อมอธิบายเปอร์เซ็นต์ความเสี่ยงและผลลัพธ์อย่างโปร่งใส — เราไม่ขายฝัน
Project structure and core config check complete.

All required folders & files verified ✅
Tailwind config extended with:

- responsive breakpoints
- colors (light/dark)
- fonts, animations, shadows
- daisyUI themes customized

Vite config:

- React + PWA with InjectManifest SW
- Static copy plugin for images
- Dev server with mock API & proxy setup
- Path aliases all mapped correctly

Core entry (main.tsx):

- ThemeProvider, Router, Suspense fallback, strict mode enabled

Routing (AppRoutes):

- Protected routes properly wrapped
- Theme context passed down

Pages:

- SecretRoom & AdminPage clean, accessible, stateful
- Theme toggle & user session handled

File tree:

- Modular, logical components structure
- Separate admin, secret room, common UI & api layers

Ready for dev or deployment.

Ask next task or specific code/bug fix.
🕛 Last Checked: Thu Jul 24 01:03:18 +07 2025
