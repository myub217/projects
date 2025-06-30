// src/components/auth/ProtectedRoute.tsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string; // ถ้าไม่กำหนด role ใด ๆ ผู้ใช้ที่ล็อกอินจะเข้าได้ทุกคน
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRole,
}) => {
  const { currentUser } = useAuth();
  const location = useLocation();

  // ⛔ ไม่ได้ล็อกอิน → ส่งไปที่ /login และจดจำ path ที่มาด้วย
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ⛔ ระบุ role แต่ currentUser ไม่มีสิทธิ์ → ส่งกลับหน้าแรก
  if (requiredRole && currentUser.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  // ✅ ผ่านทุกเงื่อนไข → แสดงหน้าที่ร้องขอ
  return <>{children}</>;
};

export default ProtectedRoute;