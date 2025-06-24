import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Layout
import Layout from "@/layout/Layout";

// Pages
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import SecretRoomPage from "@/pages/SecretRoomPage";

// Hook for scrolling to top on route change
import useScrollToTop from "@/hooks/useScrollToTop";

// Route protection
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const App: React.FC = () => {
  useScrollToTop(); // เลื่อนขึ้นบนสุดเมื่อเปลี่ยนเส้นทาง

  return (
    <Routes>
      {/* หน้าแรก พร้อม Layout ครอบ */}
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />

      {/* หน้าเข้าสู่ระบบ (ไม่มี Layout) */}
      <Route path="/login" element={<LoginPage />} />

      {/* หน้า Secret Room ที่ใช้ Layout และ ProtectedRoute */}
      <Route
        path="/secret"
        element={
          <ProtectedRoute>
            <Layout>
              <SecretRoomPage />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* เส้นทางอื่นที่ไม่พบ: กลับไปหน้าแรก */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;