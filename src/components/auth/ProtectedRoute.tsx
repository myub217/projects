// src/components/auth/ProtectedRoute.tsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: "member" | "admin"; // ค่า default เป็น member
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRole = "member",
}) => {
  const { isLoggedIn, role } = useAuth();
  const location = useLocation();

  // ❌ ยังไม่เข้าสู่ระบบ → ไปหน้า login พร้อมเก็บตำแหน่งที่มาด้วย
  if (!isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // ❌ ผู้ใช้ทั่วไปแต่พยายามเข้าหน้า admin
  if (requiredRole === "admin" && role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // ❌ ไม่ใช่ member หรือ admin (ไม่ควรเกิด ถ้าไม่มี role เลย)
  if (requiredRole === "member" && role !== "member" && role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // ✅ ผ่านทุกเงื่อนไข แสดงเนื้อหาด้านใน
  return <>{children}</>;
};

export default ProtectedRoute;