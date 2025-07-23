// src/routes/AppRoutes.tsx
// ✅ Centralized, scalable routing with theme props, protected nested routes, lazy loading, Tailwind + DaisyUI + A11y ready

import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import ProtectedRoute from '@components/ProtectedRoute'
import { useTheme } from '@components/ThemeProvider'
import LoadingFallback from '@components/common/LoadingFallback'

// Lazy loaded pages
const IndexPage = lazy(() => import('@pages/IndexPage'))
const LoginPage = lazy(() => import('@pages/LoginPage'))
const SecretRoomPage = lazy(() => import('@pages/SecretRoomPage'))
const AdminPage = lazy(() => import('@pages/AdminPage'))
const CustomerAssessmentSummary = lazy(() => import('@pages/CustomerAssessmentSummary'))
const NotFoundPage = lazy(() => import('@pages/NotFoundPage'))

const AppRoutes: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {/* Public Routes */}
        <Route index element={<IndexPage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/secret" element={<SecretRoomPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/customer-assessment-summary" element={<CustomerAssessmentSummary />} />
        </Route>

        {/* 404 fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
