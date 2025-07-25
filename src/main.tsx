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
