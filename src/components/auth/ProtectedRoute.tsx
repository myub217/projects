import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

/**
 * ProtectedRoute:
 * ป้องกันไม่ให้เข้าถึง route หากยังไม่ผ่านการยืนยันตัวตน
 * รองรับการตรวจสอบ auth จาก localStorage (mock) และเตรียมพร้อมสำหรับ context หรือระบบจริง
 */

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem("auth") === "true";
  });

  // รองรับกรณี auth เปลี่ยนแปลงในระหว่างใช้งาน (optional)
  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(localStorage.getItem("auth") === "true");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;