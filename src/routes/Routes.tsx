// src/routes/Routes.tsx หรือ AppRoutes.tsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "@/Layout/Layout";
import ProtectedRoutes from "@/routes/ProtectedRoutes";
import AdminRoute from "@/routes/AdminRoute";

const Home = lazy(() => import("@/pages/Home"));
const Login = lazy(() => import("@/pages/Login/Login"));
const Secret = lazy(() => import("@/pages/Secret/Secret"));
const AdminDashboard = lazy(() => import("@/pages/AdminDashboard/AdminDashboard"));
const NotFound = lazy(() => import("@/pages/404"));

const AppRoutes: React.FC = () => (
  <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />

        {/* ✅ Protected Routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path="secret" element={<Secret />} />
          {/* ถ้ามี /dashboard สำหรับ user ธรรมดา ให้เพิ่มตรงนี้ */}
        </Route>

        {/* ✅ Admin Only */}
        <Route element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
        </Route>

        {/* ✅ Catch all */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Suspense>
);

export default AppRoutes;