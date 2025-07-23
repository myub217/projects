import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import '@/styles/tailwind-base.css'
import '@/styles/tailwind.css'

import { ThemeProvider } from '@components/ThemeProvider'
import AppRoutes from './routes/AppRoutes'
import LoadingFallback from './routes/LoadingFallback'

const RootApp: React.FC = () => (
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)

const root = document.getElementById('root')

if (!root) {
  console.error('❌ <div id="root"> not found')
} else {
  ReactDOM.createRoot(root).render(<RootApp />)
}

export default RootApp