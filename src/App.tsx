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
      {/* 🔓 หน้าแรก (ไม่ต้อง login) */}
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />

      {/* 🔓 หน้าเข้าสู่ระบบ */}
      <Route path="/login" element={<LoginPage />} />

      {/* 🔐 Secret Room (สำหรับ member, vip, admin) */}
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

      {/* 🔐 Admin Panel (admin เท่านั้น) */}
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

      {/* 🔄 เส้นทางไม่พบ */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;