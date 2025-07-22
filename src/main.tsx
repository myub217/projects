import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '@/styles/global.css'

import IndexPage from '@pages/IndexPage'
import LoginPage from '@pages/LoginPage'
import SecretRoomPage from '@pages/SecretRoomPage'
import AdminPage from '@pages/AdminPage'
import ProtectedRoute from '@components/ProtectedRoute'

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/secret" element={<SecretRoomPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Route>

      {/* Fallback Route */}
      <Route
        path="*"
        element={
          <div className="flex items-center justify-center min-h-screen bg-base-100 text-error text-xl font-semibold">
            404 | ไม่พบหน้าที่คุณต้องการ
          </div>
        }
      />
    </Routes>
  </BrowserRouter>
)

const root = document.getElementById('root')
if (!root) {
  console.error('ไม่พบ element ที่มี id="root" ใน HTML')
} else {
  ReactDOM.createRoot(root).render(<App />)
}