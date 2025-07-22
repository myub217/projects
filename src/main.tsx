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
import { ThemeProvider, useTheme } from '@components/ThemeProvider'

// 404 Not Found Page
const NotFound: React.FC = () => (
  <main
    role="alert"
    aria-live="assertive"
    className="flex items-center justify-center min-h-screen bg-base-100 text-error text-xl font-semibold select-none"
  >
    404 | ไม่พบหน้าที่คุณต้องการ
  </main>
)

// Routes Section
const AppRoutes: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Routes>
      <Route
        path="/"
        element={<IndexPage theme={theme} toggleTheme={toggleTheme} />}
      />
      <Route path="/login" element={<LoginPage />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/secret" element={<SecretRoomPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Route>

      {/* Fallback Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

// Root Wrapper
const RootApp: React.FC = () => (
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)

// Mount to DOM
const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RootApp />)
} else {
  console.error('❌ ไม่พบ <div id="root"> ใน index.html')
}

export default RootApp