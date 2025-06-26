// src/App.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Layout
import Layout from "@/layout/Layout";

// Pages
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import SecretRoomPage from "@/pages/SecretRoomPage";
import AdminUserManagement from "@/pages/AdminUserManagement";

// Hook
import useScrollToTop from "@/hooks/useScrollToTop";

// Route protection
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const App: React.FC = () => {
  useScrollToTop(); // scroll to top when route changes

  return (
    <Routes>
      {/* หน้าหลัก */}
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />

      {/* หน้าล็อกอิน */}
      <Route path="/login" element={<LoginPage />} />

      {/* Secret room สำหรับสมาชิกทั่วไป */}
      <Route
        path="/secret"
        element={
          <ProtectedRoute requiredRole="member">
            <Layout>
              <SecretRoomPage />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Admin panel สำหรับผู้ดูแลระบบ */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute requiredRole="admin">
            <Layout>
              <AdminUserManagement />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* กรณี path ไม่ตรงกับที่มี */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;