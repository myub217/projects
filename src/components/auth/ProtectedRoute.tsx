// src/components/auth/ProtectedRoute.tsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
  const { currentUser } = useAuth();
  const location = useLocation();

  // หากยังไม่ login ให้ redirect ไปหน้า /login พร้อมเก็บ path เดิม (location)
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ถ้ามี requiredRole กำหนดไว้ และ role ของผู้ใช้ไม่ตรงกับที่กำหนด ให้ redirect กลับหน้าแรก
  if (requiredRole && currentUser.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  // ผ่านการตรวจสอบทุกข้อ แสดง children (หน้าเป้าหมาย)
  return <>{children}</>;
};

export default ProtectedRoute;