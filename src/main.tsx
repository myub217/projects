// src/main.tsx
// Root entry with ThemeProvider, Router, Suspense fallback, and protected routes

import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '@/styles/tailwind-base.css'
import '@/styles/tailwind.css'

import IndexPage from '@pages/IndexPage'
import LoginPage from '@pages/LoginPage'
import SecretRoomPage from '@pages/SecretRoomPage'
import AdminPage from '@pages/AdminPage'
import CustomerAssessmentSummary from '@pages/CustomerAssessmentSummary'
import NotFoundPage from '@pages/NotFoundPage'

import ProtectedRoute from '@components/ProtectedRoute'
import { ThemeProvider, useTheme } from '@components/ThemeProvider'

// Loading fallback UI for Suspense lazy loading
const LoadingFallback: React.FC = () => (
  <div
    className="flex justify-center items-center min-h-screen text-gray-500 select-none"
    role="status"
    aria-live="polite"
  >
    กำลังโหลด...
  </div>
)

// Main App routes with theme context and protected routes
const AppRoutes: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Routes>
      <Route index element={<IndexPage theme={theme} toggleTheme={toggleTheme} />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/secret" element={<SecretRoomPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/customer-assessment-summary" element={<CustomerAssessmentSummary />} />
      </Route>

      {/* 404 fallback */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

// Root app component wrapping ThemeProvider, Router and Suspense
const RootApp: React.FC = () => (
  <React.StrictMode>
    <ThemeProvider>
      <Suspense fallback={<LoadingFallback />}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
)

// Mount React app on #root element
const rootEl = document.getElementById('root')
if (!rootEl) {
  console.error('❌ ไม่พบ <div id="root"> ใน index.html')
} else {
  ReactDOM.createRoot(rootEl).render(<RootApp />)
}

export default RootApp