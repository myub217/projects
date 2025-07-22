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

// App Routes with ThemeContext
const AppRoutes: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Routes>
      <Route path="/" element={<IndexPage theme={theme} toggleTheme={toggleTheme} />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/secret" element={<SecretRoomPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

// Root App with Providers
const RootApp: React.FC = () => (
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)

// Mount App
const rootElement = document.getElementById('root')
if (!rootElement) {
  console.error('❌ ไม่พบ element ที่มี id="root" ใน index.html')
} else {
  ReactDOM.createRoot(rootElement).render(<RootApp />)
}

export default RootApp