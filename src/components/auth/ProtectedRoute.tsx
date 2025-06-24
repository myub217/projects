import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("auth") === "true";
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(localStorage.getItem("auth") === "true");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  if (!isAuthenticated) {
    // หากยังไม่ได้ล็อกอิน ให้ redirect ไปหน้า login พร้อมบันทึกตำแหน่งเดิมไว้ใน state
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ถ้า authenticated แล้ว แสดง children ที่ถูกป้องกันไว้
  return <>{children}</>;
};

export default ProtectedRoute;