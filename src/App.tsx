import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Layout
import Layout from "@/layout/Layout";

// Pages
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import SecretRoomPage from "@/pages/SecretRoomPage";

// Utilities
import useScrollToTop from "@/hooks/useScrollToTop";

const App: React.FC = () => {
  useScrollToTop(); // Scroll to top on route change

  return (
    <Routes>
      {/* หน้าแรก + Layout ครอบ */}
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

      {/* Secret Room (ระบบห้องลับ) */}
      <Route
        path="/secret"
        element={
          <Layout>
            <SecretRoomPage />
          </Layout>
        }
      />

      {/* เส้นทางอื่น redirect กลับหน้าแรก */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;