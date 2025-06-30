import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { USERS } from "@/data/local-users"; // ✅ ใช้ path ที่ถูกต้อง

type Role = "admin" | "user";

interface AuthUser {
  username: string;
  role: Role;
  expiresAt?: string; // ISO 8601 string
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

  useEffect(() => {
    const saved = sessionStorage.getItem("currentUser");
    if (saved) {
      try {
        const parsed: AuthUser = JSON.parse(saved);
        if (
          parsed.expiresAt &&
          new Date(parsed.expiresAt).getTime() < Date.now()
        ) {
          sessionStorage.removeItem("currentUser");
        } else {
          setCurrentUser(parsed);
        }
      } catch {
        sessionStorage.removeItem("currentUser");
      }
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    const user = USERS[username];
    if (user && user.password === password) {
      const now = Date.now();
      const expiresInMinutes = 10080; // 7 วัน
      const expiresAt = new Date(now + expiresInMinutes * 60 * 1000).toISOString();

      const authUser: AuthUser = {
        username,
        role: user.role as Role,
        expiresAt,
      };

      sessionStorage.setItem("currentUser", JSON.stringify(authUser));
      setCurrentUser(authUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);