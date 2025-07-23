// src/main.tsx
// ✅ Root app entry with ThemeProvider, Router, Suspense fallback, and strict mode

import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import '@/styles/tailwind-base.css'
import '@/styles/tailwind.css'
import '@/styles/global.css'

import { ThemeProvider } from '@components/ThemeProvider'
import AppRoutes from './routes/AppRoutes'
import LoadingFallback from './routes/LoadingFallback'

const RootApp: React.FC = () => (
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL ?? '/'}>
        <Suspense fallback={<LoadingFallback />}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)

const rootElement = document.getElementById('root')

if (!rootElement) {
  console.error('❌ <div id="root"> not found')
  // Consider rendering fallback UI or logging/reporting here
} else {
  ReactDOM.createRoot(rootElement).render(<RootApp />)
}

export default RootApp
