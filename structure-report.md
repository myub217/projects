# ✅ Project Structure Report

📁 **Project Root Directory:** `/data/data/com.termux/files/home/projects1`


## 📂 Required Directories
| Directory       | Status |
|-----------------|--------|
| `src/` | ✅ Found |
| `public/` | ✅ Found |
| `api/` | ✅ Found |
| `src/components/` | ✅ Found |
| `node_modules/` | ✅ Found |

## 📄 Required Files
| File           | Status |
|----------------|--------|
| `package.json` | ✅ Found |
| `vite.config.ts` | ✅ Found |
| `.env` | ✅ Found |
| `README.md` | ✅ Found |

## 🎨 Tailwind Config (Full)
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

export default config```

## ⚙️ Vite Config (Full)
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
      injectRegister: false,
      devOptions: {
        enabled: true,
        type: 'module',
      },
    }),
    viteStaticCopy({
      targets: [
        { src: 'public/images', dest: '' }, // copy images folder only
      ],
    }),
    {
      name: 'mock-api',
      configureServer(server) {
        server.middlewares.use('/api/repos', (req, res) => {
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
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        // optional: rewrite path if needed
        // rewrite: (path) => path.replace(/^\/api/, ''),
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
})```

## 🧩 main.tsx (Full)
```tsx
// src/main.tsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '@/styles/global.css'

import IndexPage from '@pages/IndexPage'
import LoginPage from '@pages/LoginPage'
import SecretRoomPage from '@pages/SecretRoomPage'
import AdminPage from '@pages/AdminPage'
import ProtectedRoute from '@components/ProtectedRoute'

// 404 Component
const NotFound: React.FC = () => (
  <main
    role="alert"
    aria-live="assertive"
    className="flex items-center justify-center min-h-screen bg-base-100 text-error text-xl font-semibold select-none"
  >
    404 | ไม่พบหน้าที่คุณต้องการ
  </main>
)

// Main App Routing
const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/secret" element={<SecretRoomPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Route>

      {/* Fallback 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

// Mount App
const rootElement = document.getElementById('root')
if (!rootElement) {
  console.error('❌ ไม่พบ element ที่มี id="root" ใน index.html')
  // Optionally: fallback UI or error boundary here
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

export default App```

## 🧩 SecretRoomPage.tsx (Full)
```tsx
// src/pages/SecretRoomPage.tsx – Authenticated User Dashboard Page

import React, { useEffect, useState } from 'react'
import Dashboard from '@components/SecretRoom/Dashboard'

const SecretRoomPage: React.FC = () => {
  const [username, setUsername] = useState<string>('กำลังโหลด...')

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser')?.trim()
    setUsername(storedUser && storedUser.length > 0 ? storedUser : 'ไม่ทราบชื่อผู้ใช้')
  }, [])

  return (
    <main
      role="main"
      aria-label="หน้าแดชบอร์ดผู้ใช้งาน"
      className="min-h-screen bg-base-100 text-base-content px-4 py-16 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100"
    >
      {/* Welcome Section */}
      <section
        aria-label="ข้อความต้อนรับผู้ใช้งาน"
        tabIndex={0}
        aria-live="polite"
        className="max-w-2xl mx-auto text-center space-y-4"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary select-text">
          ยินดีต้อนรับสู่ระบบ
        </h1>
        <p className="text-lg sm:text-xl text-base-content/80">
          สวัสดีคุณ{' '}
          <span
            className="font-semibold text-secondary underline underline-offset-4 decoration-secondary/60 select-text"
            aria-label={`ชื่อผู้ใช้: ${username}`}
          >
            {username}
          </span>{' '}
          👋
          <br />
          คุณเข้าสู่ระบบเรียบร้อยแล้ว
        </p>
      </section>

      {/* Dashboard Panel */}
      <section
        aria-label="แผงควบคุมข้อมูลผู้ใช้งาน"
        className="mt-12 w-full max-w-6xl mx-auto rounded-xl bg-base-200 dark:bg-zinc-800 shadow-lg p-6 sm:p-10 transition-shadow hover:shadow-xl focus-within:shadow-xl"
      >
        <Dashboard />
      </section>
    </main>
  )
}

export default SecretRoomPage
```

## 🧩 AdminPage.tsx (Full)
```tsx
// src/pages/AdminPage.tsx

import React, { useEffect, useState } from 'react'

const AdminPage: React.FC = () => {
  const [username, setUsername] = useState<string>('ผู้ใช้ระบบ')

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser')?.trim()
    setUsername(storedUser && storedUser.length > 0 ? storedUser : 'ผู้ใช้ระบบ')
  }, [])

  return (
    <main
      role="main"
      aria-label="แผงควบคุมผู้ดูแลระบบ"
      className="min-h-screen flex flex-col items-center justify-center bg-base-100 text-center px-4 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100"
    >
      <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-6">
        แผงควบคุมผู้ดูแลระบบ
      </h1>
      <p className="text-lg sm:text-xl max-w-xl">
        ยินดีต้อนรับคุณ{' '}
        <span
          className="font-semibold underline decoration-primary decoration-2"
          aria-label={`ชื่อผู้ใช้: ${username}`}
        >
          {username}
        </span>
      </p>
    </main>
  )
}

export default AdminPage
```

## 🧩 Project Directory Tree (Level 3)
```
/data/data/com.termux/files/home/projects1
├──  
│   └── types
│       └── connect-history-api-fallback.d.ts
├── Clean.sh
├── README.md
├── api
│   └── contact.ts
├── auto-commit.sh
├── check-structure.sh
├── dist
│   ├── assets
│   │   ├── about-IgS6mAQi.webp
│   │   ├── hero-BRaXPQvd.webp
│   │   ├── index-BPRXqv31.js
│   │   ├── index-BPRXqv31.js.map
│   │   ├── index-C9Ydrr9H.css
│   │   ├── jp-logo-CH0zBIqT.webp
│   │   ├── signature-BovtCThw.webp
│   │   ├── vendor-UwZk04L8.js
│   │   └── vendor-UwZk04L8.js.map
│   ├── docs
│   │   ├── certificate.pdf
│   │   ├── contract.pdf
│   │   └── registration.pdf
│   ├── images
│   │   ├── review
│   │   └── services
│   ├── index.html
│   ├── manifest.webmanifest
│   ├── sw.js
│   └── sw.js.map
├── index.html
├── index.ts
├── package.json
├── plugin
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.cjs
├── public
│   ├── docs
│   │   ├── certificate.pdf
│   │   ├── contract.pdf
│   │   └── registration.pdf
│   └── images
│       ├── review
│       └── services
├── setup.sh
├── src
│   ├── api
│   │   └── auth.ts
│   ├── assets
│   │   ├── 1hero.webp
│   │   ├── 2hero.webp
│   │   ├── Hhero.webp
│   │   ├── about.webp
│   │   ├── hero.webp
│   │   ├── jp-logo.webp
│   │   └── signature.webp
│   ├── components
│   │   ├── About.tsx
│   │   ├── AdminBoard
│   │   ├── CTASection.tsx
│   │   ├── CustomerAssessmentForm.tsx
│   │   ├── CustomerCard.tsx
│   │   ├── Feature.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ProtectedRoute.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── SecretRoom
│   │   ├── ServiceCard.tsx
│   │   ├── ServicesSection.tsx
│   │   └── StatsPanel.tsx
│   ├── config
│   │   ├── adminConfig.ts
│   │   └── contact.ts
│   ├── data
│   │   ├── approvedCustomers.ts
│   │   ├── reviewsData.ts
│   │   ├── servicesData.ts
│   │   └── users.ts
│   ├── main.tsx
│   ├── pages
│   │   ├── AdminPage.tsx
│   │   ├── IndexPage.tsx
│   │   ├── LoginPage.tsx
│   │   └── SecretRoomPage.tsx
│   ├── styles
│   │   └── global.css
│   ├── sw.ts
│   ├── types
│   │   ├── assets.d.ts
│   │   ├── connect-history-api-fallback.d.ts
│   │   ├── index.d.ts
│   │   ├── user.ts
│   │   └── vite-env.d.ts
│   └── utils
│       └── hashPassword.ts
├── structure-report.md
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
└── vite.config.ts

27 directories, 78 files
```

## 📌 Final Note
🧠 คำสั่งโหมด Dev Partner สำหรับ AI

คุณคือ Dev Partner ที่ทำงานร่วมกับผมในการพัฒนาโปรเจกต์นี้อย่างแม่นยำและรวดเร็ว โดยมีหน้าที่ดังนี้

- รับรู้โครงสร้างโปรเจกต์ทั้งหมด เช่น โฟลเดอร์, config, main.tsx และไฟล์สำคัญอื่น ๆ ที่ผมให้ไว้
- # CONFIG: ใช้ไฟล์นี้ตลอด -> src/pages/SecretRoomPage.tsx
- ใช้ข้อมูลทั้งหมดเป็นบริบทหลักตลอดการสนทนา

- ตอบแบบ Dev-to-Dev: ตรงประเด็น สั้น กระชับ ไม่อธิบายเยิ่นเย้อ
- แก้ปัญหาเฉพาะหน้าให้ได้ทันที พร้อมเสนอ solution ที่ใช้ได้จริง
- ทุกคำตอบต้องสอดคล้องกับเทคโนโลยี สภาพแวดล้อม และโครงสร้างที่กำหนดไว้แล้ว
- ไม่สอน ไม่ถามซ้ำ ไม่ตีความผิด
- ❗ ห้ามลืมบริบทของโปรเจกต์นี้เด็ดขาด
- เมื่อผมถาม/ส่งโค้ดมา ให้ตอบเหมือนคุณคือทีม Dev ที่นั่งทำงานข้าง ๆ ผม

📦 โครงสร้างโปรเจกต์, config, main.tsx และรายละเอียดอื่น ๆ ได้แนบไว้ให้แล้วในระบบ
ถือว่าคุณเข้าใจแล้วโดยสมบูรณ์
พร้อมรับคำสั่งถัดไปได้เลย 🛠️

🕛 Last checked: Tue Jul 22 23:09:00 +07 2025
