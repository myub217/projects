# 🧾 รายงานตรวจสอบโปรเจกต์

- 📍 ที่อยู่: `/data/data/com.termux/files/home/projects`
- 🕒 เวลา: Fri Jul 25 16:44:48 +07 2025
- 📘 โหมด: Dev Audit

---

## ✅ ไฟล์และโฟลเดอร์ที่ควรมี

- [✅] `src`
- [✅] `src/components`
- [✅] `src/pages`
- [✅] `src/routes`
- [✅] `public`
- [✅] `tailwind.config.ts`
- [✅] `vite.config.ts`
- [✅] `package.json`
- [✅] `.env`

## 📄 Tailwind Config (`/data/data/com.termux/files/home/projects/tailwind.config.ts`)

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '360px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
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
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.375rem' }],
        'base': ['1rem', { lineHeight: '1.6rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
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
          'primary': '#2563eb',
          'primary-focus': '#1e3a8a',
          'secondary': '#6b7280',
          'secondary-focus': '#4b5563',
          'accent': '#f59e0b',
          'neutral': '#f9fafb',
          'base-100': '#ffffff',
          'base-200': '#f3f4f6',
          'base-300': '#e5e7eb',
          'info': '#3b82f6',
          'success': '#10b981',
          'warning': '#fbbf24',
          'error': '#ef4444',
        },
      },
      {
        'business-dark': {
          'primary': '#3b82f6',
          'primary-focus': '#2563eb',
          'secondary': '#9ca3af',
          'secondary-focus': '#6b7280',
          'accent': '#facc15',
          'neutral': '#1f2937',
          'base-100': '#1f2937',
          'base-200': '#111827',
          'base-300': '#374151',
          'info': '#60a5fa',
          'success': '#059669',
          'warning': '#f59e0b',
          'error': '#dc2626',
        },
      },
    ],
    darkTheme: 'business-dark',
  },
};

export default config;
```

## 📄 Vite Config (`/data/data/com.termux/files/home/projects/vite.config.ts`)

```ts
// vite.config.ts
// ✅ Vite config for JP Visual & Docs
// - React + Tailwind + AutoImport + PWA + StaticCopy
// - Organized aliases, proxy toggle (USE_MOCK), proper build target

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';
import { VitePWA } from 'vite-plugin-pwa';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'node:path';

export default defineConfig({
  plugins: [
    react(),

    // 🔁 Auto-import hooks, utils, api, react-router-dom
    AutoImport({
      imports: ['react', 'react-router-dom'],
      dirs: ['src/hooks', 'src/utils', 'src/api'],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: 'readonly',
      },
      eslintrcRoot: true,
    }),

    // 🔋 PWA with injectManifest strategy
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

    // 🗂️ Static assets copy
    viteStaticCopy({
      targets: [
        {
          src: 'public/images',
          dest: 'images',
        },
      ],
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@pages': path.resolve(__dirname, 'src/pages'),
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
          if (id.includes('node_modules')) return 'vendor';
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
});
```

## 📄 TS Config (`/data/data/com.termux/files/home/projects/tsconfig.json`)

```ts
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
      "@data/*": ["data/*"],
      "@utils/*": ["utils/*"],
      "@assets/*": ["assets/*"],
      "@pages/*": ["pages/*"] /* เพิ่มเติม @pages alias ให้ตรงกับ vite.config.ts */
    },
    "types": [
      "vite/client",
      "unplugin-auto-import",
      "./src/auto-imports.d.ts" /* ปรับ path ให้ถูกต้อง */
    ],
    "typeRoots": ["./node_modules/@types", "./types"]
  },
  "include": ["src/**/*", "src/sw.ts", "src/auto-imports.d.ts"],
  "exclude": ["dist", "node_modules", "public", "coverage"]
}

```

## 📄 Main Entry (`/data/data/com.termux/files/home/projects/src/main.tsx`)

```ts
// src/main.tsx
// 🚀 Root app entry
// - Wraps AppRoutes with ThemeProvider, BrowserRouter, Suspense fallback, and ErrorBoundary
// - Loads global styles

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// 🧩 Global CSS (รวม tailwind-base, tailwind, global ไว้ใน global.css แล้ว)
import '@/styles/global.css';

// 🔧 App Core
import { ThemeProvider } from '@components/ThemeProvider';
import AppRoutes from './routes/AppRoutes';

// 📦 UI
import LoadingFallback from '@components/common/LoadingFallback';
import ErrorBoundary from '@components/ErrorBoundary';

const RootApp: React.FC = () => (
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL || '/'}>
        <Suspense fallback={<LoadingFallback />}>
          <ErrorBoundary>
            <AppRoutes />
          </ErrorBoundary>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('❌ <div id="root"> not found in index.html');
} else {
  ReactDOM.createRoot(rootElement).render(<RootApp />);
}

export default RootApp;

```

## 📄 AppRoutes (`/data/data/com.termux/files/home/projects/src/routes/AppRoutes.tsx`)

```ts
// src/routes/AppRoutes.tsx
// Routes setup with Suspense fallback, lazy-loaded pages, theme support, and protected routes

import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useTheme } from '@components/ThemeProvider';
import LoadingFallback from '@components/common/LoadingFallback';

// Lazy-loaded pages
const IndexPage = lazy(() => import('@pages/IndexPage'));
const LoginPage = lazy(() => import('@pages/LoginPage'));
const SecretRoomPage = lazy(() => import('@pages/SecretRoomPage'));
const AdminPage = lazy(() => import('@pages/AdminPage'));
const CustomerAssessmentSummary = lazy(
  () => import('@pages/CustomerAssessmentSummary'),
);
const NotFoundPage = lazy(() => import('@pages/NotFoundPage'));

const AppRoutes: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {/* Public Routes */}
        <Route index element={<IndexPage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route path="/secret" element={<SecretRoomPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route
          path="/customer-assessment-summary"
          element={<CustomerAssessmentSummary />}
        />

        {/* Fallback 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;

```

## 📄 AdminPage.tsx (`/data/data/com.termux/files/home/projects/src/pages/AdminPage.tsx`)

```ts
// src/pages/AdminPage.tsx
// ✅ หน้าหลักของผู้ดูแลระบบ พร้อมโครงสร้างรองรับ accessibility และ responsive layout

import React from 'react';
import Dashboard from '@components/AdminBoard/Dashboard';

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
  );
};

export default AdminPage;

```

## 📄 SecretRoomPage.tsx (`/data/data/com.termux/files/home/projects/src/pages/SecretRoomPage.tsx`)

```ts
import React, { useEffect, useState } from 'react';
import SecretRoomDashboard from '@components/SecretRoom/Dashboard';

const SecretRoomPage: React.FC = () => {
  const [username, setUsername] = useState('ไม่ระบุชื่อผู้ใช้งาน');

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser')?.trim();
    if (storedUser) setUsername(storedUser);
  }, []);

  return (
    <main
      role="main"
      aria-label="หน้าหลักห้องลับ"
      className="min-h-screen bg-base-100 px-4 py-10 sm:px-6 lg:px-8"
      tabIndex={-1}
    >
      <SecretRoomDashboard username={username} />
    </main>
  );
};

export default SecretRoomPage;

```

## 📄 LoginPage.tsx (`/data/data/com.termux/files/home/projects/src/pages/LoginPage.tsx`)

```ts
// src/pages/LoginPage.tsx
// ✅ Secure Login with password hashing, role-based routing, and improved accessibility & UX, with warning image

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { users } from '@data/users';
import { hashPassword } from '@utils/hashPassword';
import warningImage from '@/assets/login.webp';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setError('');
    setLoading(true);

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername || !trimmedPassword) {
      setError('กรุณากรอกข้อมูลให้ครบ');
      setLoading(false);
      return;
    }

    const user = users[trimmedUsername];
    if (!user) {
      setError('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
      setPassword('');
      setLoading(false);
      return;
    }

    try {
      const hashed = await hashPassword(trimmedPassword);
      if (hashed !== user.passwordHash) {
        setError('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
        setPassword('');
        setLoading(false);
        return;
      }
    } catch {
      setError('เกิดข้อผิดพลาดในการตรวจสอบรหัสผ่าน');
      setLoading(false);
      return;
    }

    localStorage.setItem('loggedInUser', trimmedUsername);
    localStorage.setItem('userRole', user.role);
    setLoading(false);

    navigate(user.role === 'admin' ? '/admin' : '/secret', { replace: true });
  };

  return (
    <main
      role="main"
      aria-label="หน้าเข้าสู่ระบบ"
      className="flex min-h-screen items-center justify-center bg-base-100 px-4"
    >
      <form
        onSubmit={handleLogin}
        aria-label="ฟอร์มเข้าสู่ระบบ"
        className="w-full max-w-sm space-y-6 rounded-xl bg-base-200 p-6 shadow-xl"
        noValidate
      >
        <h1 className="select-none text-center text-3xl font-bold text-primary">
          เข้าสู่ระบบ
        </h1>

        {error && (
          <div
            role="alert"
            aria-live="assertive"
            className="flex flex-col items-center gap-3 rounded border border-error bg-error/10 p-4 text-center text-sm font-semibold text-error"
            tabIndex={-1}
          >
            <img
              src={warningImage}
              alt="คำเตือนการเข้าสู่ระบบ"
              className="mx-auto max-h-20 object-contain"
              aria-hidden="true"
            />
            <span>{error}</span>
          </div>
        )}

        <div className="form-control">
          <label htmlFor="username" className="label">
            <span className="label-text font-medium">ชื่อผู้ใช้</span>
          </label>
          <input
            id="username"
            type="text"
            className="input input-bordered"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
            placeholder="กรอกชื่อผู้ใช้"
            disabled={loading}
            aria-disabled={loading}
            aria-required="true"
            aria-describedby="username-desc"
          />
          <small id="username-desc" className="text-muted">
            กรอกชื่อผู้ใช้ที่ลงทะเบียนไว้
          </small>
        </div>

        <div className="form-control">
          <label htmlFor="password" className="label">
            <span className="label-text font-medium">รหัสผ่าน</span>
          </label>
          <input
            id="password"
            type="password"
            className="input input-bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            placeholder="กรอกรหัสผ่าน"
            disabled={loading}
            aria-disabled={loading}
            aria-required="true"
            aria-describedby="password-desc"
          />
          <small id="password-desc" className="text-muted">
            รหัสผ่านต้องตรงกับบัญชีผู้ใช้ของคุณ
          </small>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full"
          aria-label="ปุ่มเข้าสู่ระบบ"
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
        </button>
      </form>
    </main>
  );
};

export default LoginPage;

```

## 📄 CustomerAssessmentSummary.tsx (`/data/data/com.termux/files/home/projects/src/pages/CustomerAssessmentSummary.tsx`)

```ts
// src/pages/CustomerAssessmentSummary.tsx
// ✅ Refined + accessible + print-ready customer assessment summary

import React from 'react';
import Button from '@/components/ui/Button';
import { PrinterIcon } from 'lucide-react';

interface CustomerAssessmentSummaryProps {
  data: {
    fullName: string;
    phone: string;
    occupation: string;
    income: string;
    collateralAssets: string;
    businessManagement: string;
    requestedAmount: string;
    legalIssues: string;
    creditIssues: string;
    teamRequirements: string;
  };
}

const InfoRow: React.FC<{ label: string; value?: string }> = ({ label, value }) => (
  <p className="mb-2 break-words text-sm text-gray-800 sm:text-base">
    <strong className="text-gray-900">{label}:</strong>{' '}
    <span>{value?.trim() || '-'}</span>
  </p>
);

const MultiLineRow: React.FC<{ label: string; value?: string }> = ({
  label,
  value,
}) => (
  <div className="mb-6">
    <p className="mb-1 text-sm font-semibold text-gray-900 sm:text-base">{label}:</p>
    <p className="whitespace-pre-wrap break-words rounded-md bg-gray-50 px-4 py-2 text-sm text-gray-800 shadow-inner ring-1 ring-gray-200 sm:text-base">
      {value?.trim() || '-'}
    </p>
  </div>
);

const CustomerAssessmentSummary: React.FC<CustomerAssessmentSummaryProps> = ({
  data,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main
      role="main"
      aria-label="สรุปข้อมูลประเมินลูกค้า"
      tabIndex={-1}
      className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 sm:p-8 print:bg-transparent print:shadow-none print:ring-0"
    >
      <div className="mb-6 flex items-center justify-between print:hidden">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          สรุปข้อมูลประเมินลูกค้า
        </h1>
        <Button
          onClick={handlePrint}
          className="gap-2"
          variant="outline"
          aria-label="พิมพ์เอกสาร"
          type="button"
        >
          <PrinterIcon className="h-4 w-4" />
          พิมพ์
        </Button>
      </div>

      {/* ข้อมูลส่วนตัว */}
      <section aria-labelledby="section-personal-info" className="mb-10">
        <h2
          id="section-personal-info"
          className="mb-4 text-xl font-semibold text-gray-700 sm:text-2xl"
        >
          ข้อมูลส่วนตัว
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
          <InfoRow label="ชื่อ-นามสกุล" value={data.fullName} />
          <InfoRow label="เบอร์โทรศัพท์" value={data.phone} />
          <InfoRow label="อาชีพ" value={data.occupation} />
          <InfoRow label="รายได้โดยประมาณ" value={data.income} />
        </div>
      </section>

      {/* ธุรกิจ / การเงิน */}
      <section aria-labelledby="section-business-finance" className="mb-10">
        <h2
          id="section-business-finance"
          className="mb-4 text-xl font-semibold text-gray-700 sm:text-2xl"
        >
          ธุรกิจ / การเงิน
        </h2>
        <MultiLineRow
          label="สินทรัพย์ค้ำประกัน / จำนอง"
          value={data.collateralAssets}
        />
        <MultiLineRow
          label="สถานะบริหารธุรกิจ / การทำงาน"
          value={data.businessManagement}
        />
        <InfoRow label="ยอดเงินที่ต้องการ" value={data.requestedAmount} />
      </section>

      {/* ประวัติและความต้องการ */}
      <section aria-labelledby="section-history-needs">
        <h2
          id="section-history-needs"
          className="mb-4 text-xl font-semibold text-gray-700 sm:text-2xl"
        >
          ประวัติและความต้องการ
        </h2>
        <MultiLineRow
          label="ประวัติการฟ้องร้องใน 3 ปีที่ผ่านมา"
          value={data.legalIssues}
        />
        <MultiLineRow label="ปัญหาบูโรหรือ Blacklist" value={data.creditIssues} />
        <MultiLineRow label="สิ่งที่ต้องการจากทีมงาน" value={data.teamRequirements} />
      </section>
    </main>
  );
};

export default CustomerAssessmentSummary;

```

## 📄 NotFoundPage.tsx (`/data/data/com.termux/files/home/projects/src/pages/NotFoundPage.tsx`)

```ts
import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '@assets/404.svg'; // ✅ default export URL

const NotFoundPage: React.FC = () => {
  return (
    <main
      role="main"
      aria-label="ไม่พบหน้าที่คุณค้นหา"
      className="flex min-h-screen flex-col items-center justify-center bg-base-100 px-6 py-16 text-base-content transition-colors duration-300 dark:bg-gray-900"
    >
      <img
        src={NotFoundImage}
        alt="404 Not Found"
        className="mb-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
      />

      <h1
        className="text-3xl font-bold text-primary sm:text-4xl"
        tabIndex={0}
        aria-label="ไม่พบหน้านี้"
      >
        ไม่พบหน้านี้ (404)
      </h1>

      <p className="mt-4 text-center text-base text-muted sm:text-lg">
        ขอโทษด้วย เราไม่พบหน้าที่คุณพยายามเข้าถึง
      </p>

      <Link
        to="/"
        className="mt-6 inline-block rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow-lg transition duration-200 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        aria-label="กลับหน้าหลัก"
      >
        กลับหน้าหลัก
      </Link>
    </main>
  );
};

export default NotFoundPage;

```

## 📄 configureServer.ts (`/data/data/com.termux/files/home/projects/src/config/configureServer.ts`)

```ts
// ❌ ไม่พบไฟล์นี้
```

## 📄 .prettierrc.json (`/data/data/com.termux/files/home/projects/.prettierrc.json`)

```ts
{
  "printWidth": 88,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "quoteProps": "consistent",
  "jsxSingleQuote": false,
  "trailingComma": "all",
  "bracketSpacing": true,
  "arrowParens": "always",
  "proseWrap": "never",
  "htmlWhitespaceSensitivity": "strict",
  "endOfLine": "lf",
  "embeddedLanguageFormatting": "auto"
}

```

## 🧭 Router Mapping

### 🔸 Route: /

- Component: ``
- Import Path: ❌ ไม่พบใน import

### 🔸 Route: //login

- Component: ``
- Import Path: ❌ ไม่พบใน import

### 🔸 Route: //secret

- Component: ``
- Import Path: ❌ ไม่พบใน import

### 🔸 Route: //admin

- Component: ``
- Import Path: ❌ ไม่พบใน import

### 🔸 Route: /\*

- Component: ``
- Import Path: ❌ ไม่พบใน import

## 🗂️ โครงสร้างโปรเจกต์ (3 ชั้น)

```
/data/data/com.termux/files/home/projects
├── Clean.sh
├── README.md
├── ZzZzZ__archive__ZzZz
│   ├── ConfirmationDialog.tsx
│   ├── CustomerCard.tsx
│   ├── Feature.tsx
│   ├── GetFollowers.tsx
│   ├── LoadingSpinner.tsx
│   ├── NotificationBanner.tsx
│   ├── SendMessage.tsx
│   ├── ServiceCard.tsx
│   ├── Services
│   │   ├── ServiceCard.tsx
│   │   ├── ServiceListRenderer.tsx
│   │   └── ServicesSection.tsx
│   ├── StatsPanel.tsx
│   ├── admin-widgets
│   │   ├── CertificatePreview.tsx
│   │   ├── CertificateTemplate.tsx
│   │   ├── CustomerCard.tsx
│   │   ├── FormFieldWrapper.tsx
│   │   ├── SalaryCertificate.tsx
│   │   ├── StatsPanel.tsx
│   │   └── UserTable.tsx
│   ├── auto-archive-unused.sh
│   ├── auto-check-unused-styles.sh
│   ├── check-routes.sh
│   ├── check-unused-components.sh
│   ├── clean-static-folders.sh
│   ├── contact
│   │   ├── ContactCard.tsx
│   │   ├── ContactIconButton.tsx
│   │   └── ContactList.tsx
│   ├── merge-service-image-folders.sh
│   ├── misc
│   │   ├── About.tsx
│   │   ├── CustomerAssessmentForm.tsx
│   │   ├── DataTable.tsx
│   │   ├── PageWrapper.tsx
│   │   ├── ResponsiveNavbar.tsx
│   │   ├── ReviewsSection.tsx
│   │   └── RichMenuSetter.tsx
│   ├── scan-unused-icons.js
│   ├── script
│   ├── secret-room
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
│   ├── ui
│   │   └── Button.tsx
│   ├── ui-unused
│   │   ├── Accordion.tsx
│   │   ├── Alert.tsx
│   │   ├── Badge.tsx
│   │   ├── DashboardCard.tsx
│   │   ├── DropdownMenu.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   ├── Section.tsx
│   │   ├── Skeleton.tsx
│   │   ├── Spinner.tsx
│   │   ├── Stepper.tsx
│   │   ├── Tabs.tsx
│   │   ├── Tooltip.tsx
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── unused
│   │   ├── CertificateExporter.tsx
│   │   ├── CertificateTemplate.tsx
│   │   ├── DashboardCard.tsx
│   │   ├── FormFieldWrapper.tsx
│   │   └── SalaryCertificate.tsx
│   └── {admin-widgets,secret-room,ui-unused,misc-old}
├── api
│   └── contact.ts
├── auto-imports.d.ts
├── check-alias-usage.sh
├── check-structure.sh
├── daisyui.config.ts
├── dev-dist
│   └── registerSW.js
├── eslint.config.ts
├── index.html
├── index.ts
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.cjs
├── project-audit.md
├── public
│   ├── assets
│   │   ├── about.webp
│   │   ├── hero.webp
│   │   ├── jp-logo.webp
│   │   └── logo.svg
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
├── run-auto-import-setup.sh
├── settings.json
├── setup.sh
├── src
│   ├── __archive__
│   │   └── unused
│   ├── api
│   │   └── auth.ts
│   ├── assets
│   │   ├── 404.svg
│   │   ├── about.webp
│   │   ├── assets
│   │   ├── hero.webp
│   │   ├── jp-logo.webp
│   │   ├── login.webp
│   │   └── logo.svg
│   ├── auto-imports.d.ts
│   ├── components
│   │   ├── AboutSection.tsx
│   │   ├── AdminBoard
│   │   ├── CTASection.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── FAQSection.tsx
│   │   ├── FeatureSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Layout
│   │   ├── Modals
│   │   ├── SecretRoom
│   │   ├── Services
│   │   ├── StatsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── ThemeProvider.tsx
│   │   ├── ThemeToggleButton.tsx
│   │   ├── common
│   │   ├── contact
│   │   └── ui
│   ├── config
│   │   ├── contact.ts
│   │   ├── evn.ts
│   │   ├── salaryCertificateConfig.ts
│   │   └── theme.ts
│   ├── data
│   │   ├── approvedCustomers.ts
│   │   ├── reviewsData.ts
│   │   ├── services.ts
│   │   ├── servicesData.ts
│   │   ├── testimonials.ts
│   │   └── users.ts
│   ├── hooks
│   │   ├── useAuth.ts
│   │   ├── useLineAuth.ts
│   │   └── useOnlineStatus.ts
│   ├── lib
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
│   │   ├── base
│   │   ├── components
│   │   ├── global.css
│   │   ├── global.scss
│   │   ├── index.scss
│   │   ├── layout
│   │   ├── tailwind-base.scss
│   │   ├── tailwind.scss
│   │   └── utilities
│   ├── sw.ts
│   ├── types
│   │   ├── assets.d.ts
│   │   ├── connect-history-api-fallback.d.ts
│   │   ├── index.d.ts
│   │   ├── user.ts
│   │   └── vite-env.d.ts
│   └── utils
│       ├── cn.ts
│       ├── formatDate.ts
│       └── hashPassword.ts
├── tailwind.config.ts
├── temp
│   ├── imports.json
│   └── imports.txt
├── tools
│   ├── auto-imports.d.ts
│   ├── find-imports.js
│   ├── generate-auto-imports.js
│   ├── run-auto-import-setup.sh
│   ├── update-auto-imports-dts.js
│   ├── update-eslint-auto-import.js
│   ├── update-tsconfig-paths.js
│   ├── update-tsconfig-types.js
│   ├── update-vite-alias.js
│   └── update-vite-config.js
├── ts-prune.log
├── tsconfig.json
├── tsconfig.json.bak.1753425892
├── tsconfig.json.bak.1753426398
├── tsconfig.json.bak.1753426847
├── tsconfig.json.bak.1753431298
├── vercel.json
├── vite-audit-clean.sh
└── vite.config.ts

52 directories, 182 files

```

## 🧹 ts-prune (exports ที่ไม่ได้ใช้งาน)

```ts
src/main.tsx:43 - default
src/api/auth.ts:9 - login (used in module)
src/api/auth.ts:25 - getCurrentUser (used in module)
src/api/auth.ts:41 - default
src/components/ThemeToggleButton.tsx:55 - default
src/config/contact.ts:12 - ContactType (used in module)
src/config/contact.ts:20 - ContactLink (used in module)
src/config/contact.ts:27 - contactLinks
src/config/evn.ts:4 - env (used in module)
src/config/salaryCertificateConfig.ts:18 - defaultCompanyInfo
src/config/theme.ts:16 - getInitialTheme
src/config/theme.ts:35 - applyTheme (used in module)
src/config/theme.ts:49 - toggleTheme
src/config/theme.ts:4 - Theme (used in module)
src/config/theme.ts:6 - THEMES
src/data/approvedCustomers.ts:3 - CustomerApproval (used in module)
src/data/approvedCustomers.ts:11 - approvedCustomers
src/data/reviewsData.ts:4 - Review (used in module)
src/data/reviewsData.ts:11 - reviewsData
src/data/services.ts:127 - default
src/data/servicesData.ts:4 - Service (used in module)
src/data/servicesData.ts:15 - services
src/data/users.ts:4 - User (used in module)
src/data/users.ts:70 - envConfig
src/hooks/useAuth.ts:11 - useAuth
src/hooks/useLineAuth.ts:13 - useLineAuth
src/hooks/useOnlineStatus.ts:6 - useOnlineStatus
src/pages/SettingsPage.tsx:143 - default
src/routes/LoadingFallback.tsx:23 - default
src/types/user.ts:4 - UserRole (used in module)
src/types/user.ts:7 - User (used in module)
src/types/user.ts:22 - AuthUser (used in module)
src/types/user.ts:28 - LoginCredentials
src/types/user.ts:34 - mockAuthUser
src/utils/formatDate.ts:12 - formatDate
src/components/contact/index.ts:3 - ContactList
src/components/contact/index.ts:4 - ContactCard
src/components/contact/index.ts:5 - ContactIconButton
src/components/SecretRoom/ThemeToggleButton.tsx:54 - default
src/components/ui/index.ts:4 - Button
src/components/ui/index.ts:5 - PrimaryButton
src/components/ui/Button/index.tsx:6 - Button

```

---

## ✅ DEV CHECKLIST

- [x] ตั้งค่า Tailwind theme เรียบร้อย
- [x] Vite + React Router + alias พร้อม
- [x] ใช้ import แบบ @components, @pages
- [x] Prettier + Tailwind plugin ทำงานปกติ
- [x] รองรับ responsive (grid, flex, container)
- [x] รองรับโซนเทา (UI/คำพูดไม่เป็นทางการ)
- [x] ตรวจ unused export ด้วย ts-prune

---

## 📌 สรุปขั้นตอน Dev Audit

### Phase 0: เตรียมความพร้อม

- ตรวจสอบโครงสร้างไฟล์หลัก (src, components, pages, routes, config, public)
- ตรวจสอบ config ต่างๆ (tailwind.config.ts, vite.config.ts, tsconfig.json)

### Phase 1: ตรวจสอบการใช้งานไฟล์

- ตรวจหาไฟล์ที่ไม่ถูก import หรือใช้งานจริง
- ตรวจสอบ import path ใน Router ให้ถูกต้อง
- ตรวจสอบ Component ที่ซ้ำซ้อน

### Phase 2: ปรับปรุงโครงสร้างไฟล์

- แยกไฟล์และโฟลเดอร์ตามหน้าที่
- ย้ายหรือรวมไฟล์ตามความเหมาะสม

### Phase 3: ล้างโค้ดซ้ำซ้อนและปรับปรุง

- รวม utils หรือ constants ที่ซ้ำกัน
- ใช้ Tailwind ให้เต็มประสิทธิภาพ

### Phase 4: ตรวจสอบ Style และ Token

- ตรวจสอบ class ซ้ำซ้อน หรือตัวแปรที่ไม่ได้ใช้
- แยกตัวแปร spacing, colors, zIndex ให้ชัดเจน

### Phase 5: สรุปและ Cleanup

- เตรียมคำสั่งลบไฟล์เก่า
- สร้าง structure ใหม่ที่สะอาดและเป็นมาตรฐาน
- แจ้งปัญหา import หรือ config ที่ผิดพลาดทันที

---

📣 _พบปัญหาเช่น import ผิด หรือ config ขาด แจ้ง Dev Partner ทันที_
