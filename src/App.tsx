// src/App.tsx
import React from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Outlet,
} from "react-router-dom";

import IndexPage from "@/pages"; // HomePage
import LoginPage from "@/pages/LoginPage";
import ServicesPage from "@/pages/ServicesPage";
import AdminUserManagement from "@/pages/AdminUserManagement";

import MainLayout from "@/layout/MainLayout";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

// หน้า 404
const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main
      role="main"
      aria-labelledby="notfound-title"
      aria-describedby="notfound-desc"
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32
        bg-gradient-to-tr from-red-50 via-white to-red-100
        dark:from-red-900 dark:via-gray-900 dark:to-red-900
        transition-colors duration-700"
    >
      <div
        className="max-w-xl w-full text-center bg-white dark:bg-gray-800 rounded-3xl shadow-xl
        p-8 sm:p-12 md:p-16 ring-1 ring-gray-200 dark:ring-gray-700"
      >
        <h1
          id="notfound-title"
          aria-live="assertive"
          aria-atomic="true"
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-red-600 mb-6 tracking-widest select-none drop-shadow-lg"
        >
          404
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
          ขอโทษด้วยค่ะ... ไม่พบหน้าที่คุณค้นหา
        </h2>
        <p
          id="notfound-desc"
          className="text-base sm:text-lg md:text-lg text-gray-700 dark:text-gray-300 max-w-md mx-auto
          leading-relaxed mb-8"
        >
          หน้าเว็บนี้อาจถูกลบ หรือที่อยู่ URL อาจเปลี่ยนแปลง กรุณาตรวจสอบอีกครั้ง
          <br />
          หรือกดปุ่มด้านล่างเพื่อนำทางกลับไปยังหน้าหลัก
        </p>
        <button
          type="button"
          role="link"
          aria-label="กลับสู่หน้าหลัก"
          onClick={() => navigate("/")}
          className="inline-flex items-center justify-center
            px-6 sm:px-10 py-3 sm:py-4
            bg-gradient-to-r from-primary-light to-primary-dark
            hover:from-primary-dark hover:to-primary-light
            text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl
            transition duration-400
            focus:outline-none focus:ring-4 focus:ring-primary-light dark:focus:ring-primary-dark
            focus-visible:ring focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark"
        >
          กลับสู่หน้าหลัก
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
            focusable="false"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
    </main>
  );
};

// Wrapper to inject router props to IndexPage
const IndexPageWithRouter: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return <IndexPage router={{ navigate, location }} />;
};

// Layout route with MainLayout
const LayoutRoute: React.FC = () => (
  <MainLayout>
    <Outlet />
  </MainLayout>
);

const App: React.FC = () => (
  <Routes>
    {/* Login route (no layout) */}
    <Route path="/login" element={<LoginPage />} />

    {/* Routes under MainLayout */}
    <Route element={<LayoutRoute />}>
      <Route path="/" element={<IndexPageWithRouter />} />
      <Route path="/services" element={<ServicesPage />} />

      {/* Admin route with protection */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute requiredRole="admin">
            <AdminUserManagement />
          </ProtectedRoute>
        }
      />
    </Route>

    {/* 404 fallback */}
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default App;