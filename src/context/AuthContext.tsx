// src/context/AuthContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Role = "guest" | "member" | "admin";

export interface User {
  username: string;
  password: string;
  role: Role;
  expiresAt: string; // ISO string
  token?: string;
}

interface AuthContextType {
  role: Role;
  isLoggedIn: boolean;
  currentUser: User | null;
  users: User[];
  loginAs: (user: User) => void;
  logout: () => void;
  addUser: (user: Omit<User, "expiresAt"> & { expiresMinutes: number }) => void;
  validateUser: (username: string, password: string) => User | null;
}

const AuthContext = createContext<AuthContextType>({
  role: "guest",
  isLoggedIn: false,
  currentUser: null,
  users: [],
  loginAs: () => {},
  logout: () => {},
  addUser: () => {},
  validateUser: () => null,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<Role>("guest");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  // 🔁 โหลดจาก localStorage และเพิ่ม fallback admin (ถ้าไม่มี)
  useEffect(() => {
    let validUsers: User[] = [];
    const now = new Date();

    try {
      const stored = localStorage.getItem("users");
      const parsed: User[] = stored ? JSON.parse(stored) : [];

      validUsers = parsed.filter((u) => new Date(u.expiresAt) > now);
    } catch {
      validUsers = [];
    }

    const adminExists = validUsers.some(
      (u) => u.username.toLowerCase() === "myub25217"
    );

    if (!adminExists) {
      const expiresAt = new Date();
      expiresAt.setFullYear(expiresAt.getFullYear() + 10);

      validUsers.push({
        username: "myub25217",
        password: "25217",
        role: "admin",
        expiresAt: expiresAt.toISOString(),
      });
    }

    setUsers(validUsers);
    localStorage.setItem("users", JSON.stringify(validUsers));

    // 🔐 Restore login session
    try {
      const savedUserStr = localStorage.getItem("currentUser");
      const savedRole = localStorage.getItem("role") as Role | null;

      if (savedUserStr && savedRole) {
        const savedUser: User = JSON.parse(savedUserStr);

        if (new Date(savedUser.expiresAt) > now) {
          setCurrentUser(savedUser);
          setRole(savedRole);
          setIsLoggedIn(true);
        } else {
          localStorage.removeItem("currentUser");
          localStorage.removeItem("role");
        }
      }
    } catch {
      localStorage.removeItem("currentUser");
      localStorage.removeItem("role");
    }
  }, []);

  // 💾 อัปเดต users ทุกครั้งที่เปลี่ยน
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // ➕ เพิ่มผู้ใช้ใหม่
  const addUser = (
    user: Omit<User, "expiresAt"> & { expiresMinutes: number }
  ) => {
    const username = user.username.trim().toLowerCase();

    if (users.some((u) => u.username.toLowerCase() === username)) return;

    const expiresAt = new Date(
      Date.now() + user.expiresMinutes * 60 * 1000
    ).toISOString();

    const newUser: User = {
      ...user,
      username,
      expiresAt,
    };

    setUsers((prev) => [...prev, newUser]);
  };

  // ✅ ตรวจสอบ user & password
  const validateUser = (username: string, password: string): User | null => {
    const now = new Date();
    return (
      users.find(
        (u) =>
          u.username.toLowerCase() === username.toLowerCase() &&
          u.password === password &&
          new Date(u.expiresAt) > now
      ) || null
    );
  };

  // 🔐 Login action
  const loginAs = (user: User) => {
    setRole(user.role);
    setIsLoggedIn(true);
    setCurrentUser(user);
    localStorage.setItem("role", user.role);
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  // 🚪 Logout action
  const logout = () => {
    setRole("guest");
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem("role");
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider
      value={{
        role,
        isLoggedIn,
        currentUser,
        users,
        loginAs,
        logout,
        addUser,
        validateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};