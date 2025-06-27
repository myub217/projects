// src/components/auth/ProtectedRoute.tsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: "member" | "admin"; // ค่า default คือ "member"
}

/**
 * ProtectedRoute – ใช้ครอบเส้นทางที่ต้องมีสิทธิ์เข้าถึง (member หรือ admin)
 * จะตรวจสอบสถานะ login และบทบาทผู้ใช้ (role)
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRole = "member",
}) => {
  const { isLoggedIn, role } = useAuth();
  const location = useLocation();

  // ⛔ ยังไม่ได้เข้าสู่ระบบ → redirect ไปที่ /login และจำ path เดิม
  if (!isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // ⛔ ต้องการสิทธิ์ระดับ "admin" แต่ผู้ใช้ไม่ใช่ admin
  if (requiredRole === "admin" && role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // ⛔ ต้องการ "member" แต่ไม่มี role หรือ role ไม่ถูกต้อง
  const validRoles = ["member", "admin"];
  if (requiredRole === "member" && !validRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  // ✅ ผ่านทุกเงื่อนไข → render children ได้
  return <>{children}</>;
};

export default ProtectedRoute;