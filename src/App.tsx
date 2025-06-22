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

const App: React.FC = () => {
  useScrollToTop(); // Scroll to top when route changes

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

      {/* หน้าเข้าสู่ระบบ (ไม่ใช้ Layout เพื่อให้เต็มจอ) */}
      <Route path="/login" element={<LoginPage />} />

      {/* หน้า Secret Room ที่มี Layout ครอบ */}
      <Route
        path="/secret"
        element={
          <Layout>
            <SecretRoomPage />
          </Layout>
        }
      />

      {/* เส้นทางอื่นๆ ให้ Redirect กลับไปหน้าแรก */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;