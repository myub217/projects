// src/context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { USERS } from "@/data/local-users";

type Role = "admin" | "user";

interface AuthUser {
  username: string;
  role: Role;
  expiresAt?: string; // ISO 8601 timestamp
}

interface AuthContextProps {
  currentUser: AuthUser | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
  login: () => false,
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);

  // โหลดข้อมูลผู้ใช้จาก localStorage เมื่อ component ถูก mount
  useEffect(() => {
    const saved = localStorage.getItem("currentUser");
    if (saved) {
      try {
        const parsed: AuthUser = JSON.parse(saved);
        // เช็ควันหมดอายุ
        if (parsed.expiresAt && new Date(parsed.expiresAt).getTime() < Date.now()) {
          localStorage.removeItem("currentUser");
        } else {
          setCurrentUser(parsed);
        }
      } catch {
        localStorage.removeItem("currentUser");
      }
    }
  }, []);

  // ฟังก์ชัน login ตรวจสอบรหัสผ่านจาก USERS
  const login = (username: string, password: string): boolean => {
    const user = USERS[username];
    if (user && user.password === password) {
      // กำหนดวันหมดอายุ 7 วันล่วงหน้า
      const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
      const newUser: AuthUser = { username, role: user.role, expiresAt };
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      setCurrentUser(newUser);
      return true;
    }
    return false;
  };

  // ฟังก์ชัน logout ลบข้อมูลผู้ใช้
  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook ใช้งาน context ได้สะดวก
export const useAuth = () => useContext(AuthContext);