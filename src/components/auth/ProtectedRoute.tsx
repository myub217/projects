// src/components/auth/ProtectedRoute.tsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: "member" | "vip" | "admin"; // ค่า default คือ "member"
}

/**
 * 🔒 ProtectedRoute – ใช้ครอบเส้นทางที่ต้องการการยืนยันตัวตน
 * ✅ ตรวจสอบว่า login แล้ว และมี role ตามที่กำหนดไว้
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRole = "member",
}) => {
  const { isLoggedIn, role } = useAuth();
  const location = useLocation();

  // ⛔ ยังไม่ได้เข้าสู่ระบบ → ไป /login
  if (!isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // 🔐 ตรวจสอบสิทธิ์ role ขั้นต่ำ
  const roleHierarchy = {
    member: 1,
    vip: 2,
    admin: 3,
  };

  const userLevel = roleHierarchy[role as keyof typeof roleHierarchy] || 0;
  const requiredLevel = roleHierarchy[requiredRole];

  if (userLevel < requiredLevel) {
    // ⛔ สิทธิ์ไม่เพียงพอ → redirect
    return <Navigate to="/" replace />;
  }

  // ✅ ผ่านทุกเงื่อนไข → แสดงหน้าที่ร้องขอได้
  return <>{children}</>;
};

export default ProtectedRoute;