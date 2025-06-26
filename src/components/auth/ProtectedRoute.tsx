import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const location = useLocation();

  // เริ่มต้นตรวจสอบจาก localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("auth") === "true";
  });

  useEffect(() => {
    // ฟัง event เปลี่ยนแปลง localStorage (เช่น logout จาก tab อื่น)
    const handleStorageChange = () => {
      setIsAuthenticated(localStorage.getItem("auth") === "true");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // หากยังไม่ล็อกอิน ให้ redirect ไปหน้า /login พร้อมส่งตำแหน่งเดิมใน state
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // หากล็อกอินแล้ว แสดง children ตามปกติ
  return <>{children}</>;
};

export default ProtectedRoute;