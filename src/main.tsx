// src/main.tsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '@/styles/tailwind-base.css'
import '@/styles/tailwind.css'

import IndexPage from '@pages/IndexPage'
import LoginPage from '@pages/LoginPage'
import SecretRoomPage from '@pages/SecretRoomPage'
import AdminPage from '@pages/AdminPage'
import NotFoundPage from '@pages/NotFoundPage'

import ProtectedRoute from '@components/ProtectedRoute'
import { ThemeProvider, useTheme } from '@components/ThemeProvider'

const AppRoutes: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Routes>
      <Route index element={<IndexPage theme={theme} toggleTheme={toggleTheme} />} />
      <Route path="/login" element={<LoginPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/secret" element={<SecretRoomPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

const RootApp: React.FC = () => (
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)

const root = document.getElementById('root')

if (!root) {
  console.error('❌ ไม่พบ <div id="root"> ใน index.html')
} else {
  ReactDOM.createRoot(root).render(<RootApp />)
}

export default RootApp