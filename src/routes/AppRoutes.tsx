// src/routes/AppRoutes.tsx
// ✅ Centralized route config with theme props and protected nested routes

import React from 'react'
import { Routes, Route } from 'react-router-dom'

import IndexPage from '@pages/IndexPage'
import LoginPage from '@pages/LoginPage'
import SecretRoomPage from '@pages/SecretRoomPage'
import AdminPage from '@pages/AdminPage'
import CustomerAssessmentSummary from '@pages/CustomerAssessmentSummary'
import NotFoundPage from '@pages/NotFoundPage'

import ProtectedRoute from '@components/ProtectedRoute'
import { useTheme } from '@components/ThemeProvider'

const AppRoutes: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Routes>
      <Route index element={<IndexPage theme={theme} toggleTheme={toggleTheme} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="secret" element={<SecretRoomPage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="customer-assessment-summary" element={<CustomerAssessmentSummary />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes