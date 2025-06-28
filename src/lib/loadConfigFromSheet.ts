import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { loadUsersFromSheet, SheetRow } from "@/lib/loadConfigFromSheet";

type Role = "guest" | "member" | "vip" | "admin";

export interface User {
  username: string;
  password: string;
  role: Role;
  token?: string;
  expiresAt?: string;
}

interface AuthContextType {
  currentUser: User | null;
  isLoggedIn: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  users: User[];
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const savedUsers = localStorage.getItem("users");
    const savedUser = localStorage.getItem("currentUser");
    if (savedUsers) setUsers(JSON.parse(savedUsers));
    if (savedUser) setCurrentUser(JSON.parse(savedUser));
  }, []);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);

  // ✅ โหลดผู้ใช้จาก Google Sheet (.env)
  useEffect(() => {
    async function fetchUsersFromSheet() {
      try {
        const sheetUsers: SheetRow[] = await loadUsersFromSheet();
        const now = Date.now();

        const convertedUsers: User[] = sheetUsers.map((row) => {
          const expiresMinutes = parseInt(row.expiresMinutes || "60", 10);
          const expiresAt = new Date(now + expiresMinutes * 60000).toISOString();
          return {
            username: row.id.trim().toLowerCase(),
            password: row.password,
            role: (row.role as Role) || "member",
            expiresAt,
            token: `sheet_${row.id}_${now.toString(36)}`,
          };
        });

        setUsers((prev) => {
          const existing = new Set(prev.map((u) => u.username));
          const newUsers = convertedUsers.filter((u) => !existing.has(u.username));
          if (newUsers.length > 0) {
            const merged = [...prev, ...newUsers];
            localStorage.setItem("users", JSON.stringify(merged));
            return merged;
          }
          return prev;
        });
      } catch (err) {
        console.error("❌ โหลดผู้ใช้จาก Google Sheet ล้มเหลว:", err);
      }
    }

    fetchUsersFromSheet();
  }, []);

  const login = (username: string, password: string): boolean => {
    const foundUser = users.find(
      (u) =>
        u.username === username.trim().toLowerCase() && u.password === password
    );
    if (foundUser) {
      setCurrentUser(foundUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, isLoggedIn: !!currentUser, login, logout, users }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};