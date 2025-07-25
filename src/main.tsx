// src/main.tsx
// ✅ ENTRY POINT สำหรับ JP Visual & Docs
// ✅ โครงสร้าง Root ครอบทุก Provider, Router, ErrorBoundary, Suspense, GlobalStyle

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// 🌐 Global Styles (รวม base, Tailwind, custom)
import '@/styles/global.css';

// 📦 Core Components
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from '@components/ThemeProvider';
import ErrorBoundary from '@components/ErrorBoundary';
import LoadingFallback from '@components/common/LoadingFallback';

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
