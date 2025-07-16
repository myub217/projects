# ✅ Project Structure Report

📁 **Project Root Directory:** `/data/data/com.termux/files/home/projects/projects1`


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
| package.json | ✅ Found |
| vite.config.ts | ✅ Found |
| .env | ✅ Found |
| README.md | ✅ Found |

## 🎨 Tailwind Config (Full)
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
        xs: '480px',
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
        muted: {
          DEFAULT: '#6b7280',
        },
        primary: {
          DEFAULT: '#2563eb',
          light: '#3b82f6',
          dark: '#1e3a8a',
          contrastText: '#ffffff',
        },
        accent: {
          DEFAULT: '#f59e0b',
        },
        border: {
          DEFAULT: '#e5e7eb',
        },
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
          from: {
            transform: 'translateY(24px)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
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
};

export default config;
```

## ⚙️ Vite Config (Full)
```ts
// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});
```

## 🧩 main.tsx (Full)
```tsx
// src/main.tsx

import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/global.css'; // Tailwind + custom vars

import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import SecretRoomPage from './pages/SecretRoomPage';

const THEME_KEY = 'app-theme';
export type ThemeMode = 'light' | 'dark';

const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>('light');

  const applyTheme = useCallback((mode: ThemeMode) => {
    const root = document.documentElement;
    const isDark = mode === 'dark';

    root.classList.toggle('dark', isDark);
    root.setAttribute('data-theme', isDark ? 'bluewhite-dark' : 'bluewhite');

    localStorage.setItem(THEME_KEY, mode);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY) as ThemeMode | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme: ThemeMode =
      stored === 'dark' || (!stored && prefersDark) ? 'dark' : 'light';

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, [applyTheme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: ThemeMode = prev === 'light' ? 'dark' : 'light';
      applyTheme(next);
      return next;
    });
  }, [applyTheme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/secret"
          element={<SecretRoomPage theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="*"
          element={
            <div className="p-8 text-center text-xl text-red-600">
              404 - Not Found
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

const rootEl = document.getElementById('root');

if (rootEl) {
  ReactDOM.createRoot(rootEl).render(<App />);
} else {
  console.error('⚠️ Root element not found: #root');
}
```

## 🧩 Project Directory Tree (Level 3)
```
/data/data/com.termux/files/home/projects/projects1
├──  
│   └── types
│       └── connect-history-api-fallback.d.ts
├── Clean.sh
├── README.md
├── __mocks__
│   └── fileMock.js
├── api
│   ├── apiAdmin.ts
│   └── apiClient.ts
├── check-structure.sh
├── depcheck.config.js
├── dist
│   ├── assets
│   │   ├── about-us-IgS6mAQi.webp
│   │   ├── hero-C1-WP8yC.webp
│   │   ├── index-2pYJRS_Y.js
│   │   ├── index-2pYJRS_Y.js.map
│   │   ├── index-8jBA3xxM.css
│   │   ├── jp-logo-DClkmN1r.png
│   │   ├── krut.webp
│   │   ├── krut1.webp
│   │   ├── review1-7dlrv2oA.png
│   │   ├── review10-D0SwORip.png
│   │   ├── review2-Bz0_BXyV.png
│   │   ├── review3-UloQNvHI.png
│   │   ├── review4-CBioFpeu.png
│   │   ├── review5-CAS9ctNR.png
│   │   ├── review6-C1CShlkS.png
│   │   ├── review7-Bt93fMFo.png
│   │   ├── review8-kXAHO_8W.png
│   │   ├── review9-DhFu7Jzq.png
│   │   ├── signature-BovtCThw.webp
│   │   ├── vendor-csClpOmu.js
│   │   └── vendor-csClpOmu.js.map
│   ├── favicon.ico
│   ├── icons
│   │   ├── icon-192x192.png
│   │   └── icon-512x512.png
│   ├── images
│   │   ├── icons
│   │   ├── portfolio-loan-success.jpg
│   │   ├── portfolio-loan-success1.jpg
│   │   ├── portfolio-loan-success2.jpg
│   │   ├── portfolio-loan-success3.jpg
│   │   ├── portfolio-loan-success4.jpg
│   │   └── services
│   ├── index.html
│   └── manifest.json
├── eslint.config.mjs
├── index.html
├── jest.config.cjs
├── jest.setup.ts
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.js
├── public
│   ├── assets
│   │   ├── krut.webp
│   │   └── krut1.webp
│   ├── favicon.ico
│   ├── icons
│   │   ├── icon-192x192.png
│   │   └── icon-512x512.png
│   ├── images
│   │   ├── icons
│   │   ├── portfolio-loan-success.jpg
│   │   ├── portfolio-loan-success1.jpg
│   │   ├── portfolio-loan-success2.jpg
│   │   ├── portfolio-loan-success3.jpg
│   │   ├── portfolio-loan-success4.jpg
│   │   └── services
│   └── manifest.json
├── server.ts
├── setup.sh
├── setupset.sh
├── src
│   ├── api
│   │   └── apiClient.ts
│   ├── assets
│   │   ├── fb.webp
│   │   ├── hero.webp
│   │   ├── icons
│   │   ├── images
│   │   ├── jp-logo.png
│   │   ├── krut.webp
│   │   └── signature.webp
│   ├── components
│   │   ├── About.tsx
│   │   ├── AdminBoard
│   │   ├── CTASection.tsx
│   │   ├── CustomerAssessmentForm.tsx
│   │   ├── CustomerCard.tsx
│   │   ├── DocumentPreviewModal.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── Feature.tsx
│   │   ├── Features
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── LogoSecretApp.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── VisitorCount.tsx
│   ├── config
│   │   ├── contact.ts
│   │   └── themes.ts
│   ├── constants
│   │   └── env.ts
│   ├── data
│   │   ├── approvedCustomers.ts
│   │   ├── servicesData.ts
│   │   └── users.ts
│   ├── main.tsx
│   ├── pages
│   │   ├── AdminPage.tsx
│   │   ├── IndexPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── SecretRoomPage.tsx
│   │   ├── SecretRoomPageComponents
│   │   └── config
│   ├── styles
│   │   └── global.css
│   ├── types
│   │   ├── assets.d.ts
│   │   ├── connect-history-api-fallback.d.ts
│   │   ├── index.d.ts
│   │   └── vite-env.d.ts
│   └── utils
│       └── hashPassword.ts
├── structure-report.md
├── tailwind.config.ts
├── tsconfig.base.json
├── tsconfig.json
├── types
│   ├── assets.d.ts
│   ├── connect-history-api-fallback.d.ts
│   ├── index.d.ts
│   └── vite-env.d.ts
├── vercel.json
└── vite.config.ts

35 directories, 111 files

```

## 📌 Final Note

📦 **dependencies:**  
daisyui 3.9.4  
framer-motion 10.18.0  
lucide-react 0.525.0  
react 18.3.1  
react-dom 18.3.1  
react-icons 5.5.0  
react-router-dom 6.30.1  
tailwindcss 3.4.17  

devDependencies:  
eslint 8.57.1  
prettier 3.6.2  
typescript 5.8.3  
ts-node 10.9.2  
vite 7.0.4  
jest 29.7.0  
@vitejs/plugin-react 4.6.0  
vite-plugin-pwa 1.0.1  
และ plugin อื่น ๆ ที่เกี่ยวข้องกับ eslint, tailwind, react type

▶️ **การเริ่ม Dev Server**  
คำสั่ง: `pnpm run dev`  
🌐 http://localhost:3000  
🌼 โหลด daisyUI พร้อม 2 themes  
📎 เอกสารเพิ่ม: daisyui.com/docs/themes

🛏️ **การ Build โปรเจกต์**  
คำสั่ง: `pnpm run build`  
ไฟล์จะถูกจัดเก็บใน dist/  
รวมถึง index.html, assets js/css/image พร้อม gzip & map

🔍 **Preview แบบ Production**  
คำสั่ง: `pnpm run preview`  
🌐 http://localhost:4173/ 

🧠 **หมายเหตุ server.ts/server.js:**  
เพิ่มใน package.json:
  "start": "ts-node server.ts"
หรือ
  "start": "node server.js"
ใช้: `pnpm start`

---

# 🔧 รายละเอียดธุรกิจ: JP - Visual & Docs

ให้บริการด้านเอกสาร การตลาด และระบบหลังบ้านสำหรับธุรกิจทางเลือกอย่างครบวงจร 

## 💼 ขอบเขตบริการ
1. ที่ปรึกษาสินเชื่อ: ฿4,000 – ฿300,000  
2. ดูแลเอกสารยื่นวีซ่า: เริ่ม ฿4,000  
3. แก้ไข/สร้างเอกสาร: ฿100 – ฿600  
4. จัดทำบัตรจริง: เริ่ม ฿4,500  
5. การตลาดครบวงจร: ฿5,000 – ฿500,000  
6. ระบบหลังบ้านอัตโนมัติ: เริ่ม ฿4,000  
7. โลโก้/แบนเนอร์: เริ่ม ฿300  
8. โครงการกลุ่มปิด/AI: เริ่ม ฿5,000  
9. รีแบรนด์/ทำลายภาพลักษณ์: เริ่ม ฿5,000

## ✅ จุดแข็ง
- ทีมเชี่ยวชาญเฉพาะทาง
- บริการตรงไปตรงมา ไม่แต่งเรื่อง
- ระบบปลอดภัย ไม่เก็บข้อมูลเกินจำเป็น

## 🔒 ความปลอดภัย
- ไม่เก็บข้อมูลโดยไม่ได้รับอนุญาต
- ลูกค้าสามารถขอคุยตรงกับเจ้าของทีม

## 📞 ติดต่อ
- LINE / FB / Messenger

🧠 คำสั่งโหมด Dev Partner สำหรับ AI

คุณคือ Dev Partner ที่ทำงานร่วมกับผมในการพัฒนาโปรเจกต์นี้อย่างแม่นยำและรวดเร็ว โดยมีหน้าที่ดังนี้

รับรู้โครงสร้างโปรเจกต์ทั้งหมด เช่น โฟลเดอร์, config, main.tsx และไฟล์สำคัญอื่น ๆ ที่ผมให้ไว้

ใช้ข้อมูลทั้งหมดเป็นบริบทหลักตลอดการสนทนา

ตอบแบบ Dev-to-Dev: ตรงประเด็น สั้น กระชับ ไม่อธิบายเยิ่นเย้อ

แก้ปัญหาเฉพาะหน้าให้ได้ทันที พร้อมเสนอ solution ที่ใช้ได้จริง

ทุกคำตอบต้องสอดคล้องกับเทคโนโลยี สภาพแวดล้อม และโครงสร้างที่กำหนดไว้แล้ว
ไม่สอน ไม่ถามซ้ำ ไม่ตีความผิด
❗ ห้ามลืมบริบทของโปรเจกต์นี้เด็ดขาด
เมื่อผมถาม/ส่งโค้ดมา ให้ตอบเหมือนคุณคือทีม Dev ที่นั่งทำงานข้าง ๆ ผม

📦 โครงสร้างโปรเจกต์, config, main.tsx และรายละเอียดอื่น ๆ ได้แนบไว้ให้แล้วในระบบ
ถือว่าคุณเข้าใจแล้วโดยสมบูรณ์
พร้อมรับคำสั่งถัดไปได้เลย 🛠️

🕛 Last checked: $(date)
