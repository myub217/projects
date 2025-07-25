// src/routes/AppRoutes.tsx
// ✅ จัดการ Routing หลัก พร้อม Suspense + Theme + Protected Routes เบื้องต้น
// รองรับ Public / Protected routes และ fallback page

import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useJPTheme } from '@components/ThemeProvider';
import LoadingFallback from '@components/common/LoadingFallback';

// Lazy load pages
const IndexPage = lazy(() => import('@pages/IndexPage'));
const LoginPage = lazy(() => import('@pages/LoginPage'));
const SecretRoomPage = lazy(() => import('@pages/SecretRoomPage'));
const AdminPage = lazy(() => import('@pages/AdminPage'));
const CustomerAssessmentSummary = lazy(
  () => import('@pages/CustomerAssessmentSummary'),
);
const NotFoundPage = lazy(() => import('@pages/NotFoundPage'));

// Simple auth helper (replace with real auth context or logic)
const isLoggedIn = () => !!localStorage.getItem('loggedInUser');
const getUserRole = () => localStorage.getItem('userRole') || '';

interface ProtectedRouteProps {
  children: React.ReactNode;
  roles?: string[]; // allowed roles
  redirectPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  roles = [],
  redirectPath = '/login',
}) => {
  if (!isLoggedIn()) return <Navigate to={redirectPath} replace />;

  if (roles.length > 0 && !roles.includes(getUserRole())) {
    // Unauthorized role, redirect to login
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  const { theme, setTheme } = useJPTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {/* Public Routes */}
        <Route index element={<IndexPage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route
          path="/secret"
          element={
            <ProtectedRoute roles={['user', 'admin']}>
              <SecretRoomPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute roles={['admin']}>
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/customer-assessment-summary"
          element={
            <ProtectedRoute roles={['admin', 'user']}>
              <CustomerAssessmentSummary />
            </ProtectedRoute>
          }
        />

        {/* Catch-all fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
