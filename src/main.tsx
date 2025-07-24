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
