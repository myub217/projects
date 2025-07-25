// src/routes/AppRoutes.tsx
// Routes setup with Suspense fallback, lazy-loaded pages, theme support, and protected routes

import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useTheme } from '@components/ThemeProvider';
import LoadingFallback from '@components/common/LoadingFallback';

// Lazy-loaded pages
const IndexPage = lazy(() => import('@pages/IndexPage'));
const LoginPage = lazy(() => import('@pages/LoginPage'));
const SecretRoomPage = lazy(() => import('@pages/SecretRoomPage'));
const AdminPage = lazy(() => import('@pages/AdminPage'));
const CustomerAssessmentSummary = lazy(
  () => import('@pages/CustomerAssessmentSummary'),
);
const NotFoundPage = lazy(() => import('@pages/NotFoundPage'));

const AppRoutes: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {/* Public Routes */}
        <Route index element={<IndexPage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route path="/secret" element={<SecretRoomPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route
          path="/customer-assessment-summary"
          element={<CustomerAssessmentSummary />}
        />

        {/* Fallback 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
