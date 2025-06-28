import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: "member" | "vip" | "admin";
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRole,
}) => {
  const { currentUser } = useAuth();
  const location = useLocation();

  // ✅ 1. ยังไม่ล็อกอิน → ส่งไป login พร้อม state ที่มาจากเส้นทางเดิม
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ✅ 2. ถ้ากำหนด requiredRole และ role ของ user ไม่ตรง → กลับหน้าแรก
  if (requiredRole && currentUser.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  // ✅ 3. เข้าถึงได้ → แสดงเนื้อหาที่อยู่ภายใน
  return <>{children}</>;
};

export default ProtectedRoute;