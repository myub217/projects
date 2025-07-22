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

// 404 Component
const NotFound: React.FC = () => (
  <main
    role="alert"
    aria-live="assertive"
    className="flex items-center justify-center min-h-screen bg-base-100 text-error text-xl font-semibold select-none"
  >
    404 | ไม่พบหน้าที่คุณต้องการ
  </main>
)

// Main App Routing
const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/secret" element={<SecretRoomPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Route>

      {/* Fallback 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

// Mount App
const rootElement = document.getElementById('root')
if (!rootElement) {
  console.error('❌ ไม่พบ element ที่มี id="root" ใน index.html')
  // Optionally: fallback UI or error boundary here
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

export default App