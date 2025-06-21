// src/App.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Layout
import Layout from "@/layout/Layout";

// Pages
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import SecretRoomPage from "@/pages/SecretRoomPage";

// Auth
import ProtectedRoute from "@/components/auth/ProtectedRoute";

// Utilities
import useScrollToTop from "@/hooks/useScrollToTop"; // ✅ ใช้ default export

const App: React.FC = () => {
  useScrollToTop(); // ✅ Scroll to top on route change

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/login" element={<LoginPage />} />
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
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;