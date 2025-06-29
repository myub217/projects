// src/App.tsx
import React from "react";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import ServicesPage from "@/pages/ServicesPage";
import SecretRoomPage from "@/pages/SecretRoomPage";

import MainLayout from "@/layout/MainLayout";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

// ✅ หน้า 404 ไม่พบ
const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main
      role="main"
      aria-labelledby="notfound-title"
      aria-describedby="notfound-desc"
      className="min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-tr from-red-50 via-white to-red-100 dark:from-red-900 dark:via-gray-900 dark:to-red-900 transition-colors duration-700"
    >
      <div className="max-w-xl w-full text-center bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8">
        <h1 id="notfound-title" className="text-6xl font-extrabold text-red-600 mb-6">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          ไม่พบหน้าที่คุณค้นหา
        </h2>
        <p id="notfound-desc" className="text-base text-gray-700 dark:text-gray-300 mb-8">
          หน้าเว็บนี้อาจถูกลบ หรือที่อยู่ URL อาจเปลี่ยน กรุณาตรวจสอบอีกครั้ง
        </p>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="btn btn-primary"
          aria-label="กลับสู่หน้าหลัก"
        >
          กลับสู่หน้าหลัก
        </button>
      </div>
    </main>
  );
};

// ✅ Wrapper route สำหรับ Layout
const LayoutRoute: React.FC = () => (
  <MainLayout>
    <Outlet />
  </MainLayout>
);

// ✅ เส้นทางทั้งหมดของแอป
const App: React.FC = () => {
  return (
    <Routes>
      {/* 🔐 Login (ไม่ใช้ Layout) */}
      <Route path="/login" element={<LoginPage />} />

      {/* ✅ Routes ครอบด้วย Layout */}
      <Route element={<LayoutRoute />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />

        {/* 🔒 Secret Room (ล็อกอินแล้วเท่านั้น) */}
        <Route
          path="/secret-room"
          element={
            <ProtectedRoute>
              <SecretRoomPage />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* ❌ ไม่พบเส้นทาง */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;