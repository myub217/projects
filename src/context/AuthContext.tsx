// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Role = "guest" | "member" | "admin";

export interface User {
  username: string;
  password: string;
  role: Role;
  expiresAt: string; // ISO string
}

interface AuthContextType {
  role: Role;
  isLoggedIn: boolean;
  currentUser: User | null;
  users: User[];
  loginAs: (role: Role) => void;
  logout: () => void;
  addUser: (user: Omit<User, "expiresAt"> & { expiresMinutes: number }) => void;
  validateUser: (username: string, password: string) => boolean;
}

const AuthContext = createContext<AuthContextType>({
  role: "guest",
  isLoggedIn: false,
  currentUser: null,
  users: [],
  loginAs: () => {},
  logout: () => {},
  addUser: () => {},
  validateUser: () => false,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<Role>("guest");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  // โหลดข้อมูลจาก localStorage ตอน mount
  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    let validUsers: User[] = [];

    if (storedUsers) {
      try {
        const parsedUsers: User[] = JSON.parse(storedUsers);
        const now = new Date();
        validUsers = parsedUsers.filter((u) => new Date(u.expiresAt) > now);
      } catch {
        validUsers = [];
      }
    }

    // สร้าง admin ถ้าไม่มี
    const adminExists = validUsers.some((u) => u.username === "admin");
    if (!adminExists) {
      const expiresAt = new Date();
      expiresAt.setFullYear(expiresAt.getFullYear() + 10);
      validUsers.push({
        username: "admin",
        password: "25217",
        role: "admin",
        expiresAt: expiresAt.toISOString(),
      });
    }

    setUsers(validUsers);
    localStorage.setItem("users", JSON.stringify(validUsers));

    const storedRole = localStorage.getItem("role") as Role | null;
    const storedUserStr = localStorage.getItem("currentUser");
    let storedUser: User | null = null;

    if (storedUserStr) {
      try {
        storedUser = JSON.parse(storedUserStr);
      } catch {
        storedUser = null;
      }
    }

    if (storedRole && storedRole !== "guest" && storedUser) {
      setRole(storedRole);
      setIsLoggedIn(true);
      setCurrentUser(storedUser);
    }
  }, []);

  // เก็บ users ทุกครั้งที่มีการเปลี่ยนแปลง
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // เพิ่ม user ใหม่ (ถ้า username ซ้ำจะไม่เพิ่ม)
  const addUser = (user: Omit<User, "expiresAt"> & { expiresMinutes: number }) => {
    const exists = users.some((u) => u.username === user.username);
    if (exists) return;

    const expiresAt = new Date(Date.now() + user.expiresMinutes * 60000).toISOString();
    const newUser: User = { ...user, expiresAt };
    setUsers((prev) => [...prev, newUser]);
  };

  // ตรวจสอบ user และ login
  const validateUser = (username: string, password: string): boolean => {
    const now = new Date();
    const foundUser = users.find(
      (u) => u.username === username && u.password === password && new Date(u.expiresAt) > now
    );

    if (foundUser) {
      setRole(foundUser.role);
      setIsLoggedIn(true);
      setCurrentUser(foundUser);
      localStorage.setItem("role", foundUser.role);
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      return true;
    }

    return false;
  };

  // loginAs สำหรับใช้ล็อกอินแบบ role โดยไม่ต้อง user/pass (ถ้าจำเป็น)
  const loginAs = (newRole: Role) => {
    setRole(newRole);
    setIsLoggedIn(true);
    setCurrentUser(null);
    localStorage.setItem("role", newRole);
    localStorage.removeItem("currentUser");
  };

  // Logout ล้างข้อมูล
  const logout = () => {
    setRole("guest");
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem("role");
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider
      value={{ role, isLoggedIn, currentUser, users, loginAs, logout, addUser, validateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};