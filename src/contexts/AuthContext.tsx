import React, { createContext, useContext, useEffect, useState } from "react";
import bcrypt from "bcryptjs"; // ใช้ bcrypt ตรวจสอบ password
import { users } from "@/data/users";

interface AuthState {
  username: string;
  role: "admin" | "user";
}

interface AuthContextType {
  user: AuthState | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthState | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("auth");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    const record = users[username];
    if (!record) return false;

    const match = await bcrypt.compare(password, record.passwordHash);
    if (!match) return false;

    const loggedInUser = { username, role: record.role };
    setUser(loggedInUser);
    localStorage.setItem("auth", JSON.stringify(loggedInUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
        isAdmin: user?.role === "admin" || false,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};