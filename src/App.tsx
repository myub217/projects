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
  useScrollToTop(); // Scroll ไปบนสุดเมื่อเปลี่ยนเส้นทาง

  return (
    <Routes>
      {/* หน้าหลัก (Public) */}
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />

      {/* หน้า Login */}
      <Route path="/login" element={<LoginPage />} />

      {/* ห้องลับ สำหรับสมาชิก (member หรือ admin) */}
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

      {/* แอดมินเท่านั้น */}
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

      {/* กรณี path ไม่ตรงกับที่กำหนด */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;