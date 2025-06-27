// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Layout & Hooks
import Layout from "@/layout/Layout";
import useScrollToTop from "@/hooks/useScrollToTop";

// Pages
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import SecretRoomPage from "@/pages/SecretRoomPage";

// Route protection
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const App: React.FC = () => {
  useScrollToTop(); // 🟢 เลื่อนหน้าขึ้นบนเมื่อเปลี่ยนเส้นทาง

  return (
    <Router>
      <Routes>
        {/* 🔓 หน้าแรก (สาธารณะ) */}
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />

        {/* 🔓 หน้าล็อกอิน */}
        <Route path="/login" element={<LoginPage />} />

        {/* 🔐 หน้าเฉพาะสมาชิก */}
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

        {/* 🔁 หากไม่พบเส้นทางใดเลย */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;