// src/main.tsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '@/styles/global.css'

import IndexPage from '@pages/IndexPage'
import LoginPage from '@pages/LoginPage'
import SecretRoomPage from '@pages/SecretRoomPage'
import ProtectedRoute from '@components/ProtectedRoute'
import DocumentCenter from '@features/DocumentCenter/DocumentCenter'
import AdminPage from '@pages/AdminPage'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<IndexPage theme="light" toggleTheme={() => {}} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/secret" element={<SecretRoomPage />} />
        <Route path="/documents" element={<DocumentCenter />} />
        <Route path="/admin" element={<AdminPage />} />
      </Route>
      <Route
        path="*"
        element={
          <div className="flex items-center justify-center min-h-screen text-xl font-semibold text-error">
            404 Not Found
          </div>
        }
      />
    </Routes>
  </BrowserRouter>
)

const root = document.getElementById('root')
if (root) {
  ReactDOM.createRoot(root).render(<App />)
} else {
  console.error('Root #root element not found')
}