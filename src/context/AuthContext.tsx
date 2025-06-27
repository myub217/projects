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

  // โหลดผู้ใช้และสถานะล็อกอินจาก localStorage
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

    // ถ้าไม่มี myub25217 ให้สร้าง admin เริ่มต้น
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

    // โหลดสถานะปัจจุบัน
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

    if (storedRole && storedUser) {
      setRole(storedRole);
      setCurrentUser(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  // Sync users กับ localStorage ทุกครั้งที่เปลี่ยน
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // เพิ่มผู้ใช้ใหม่
  const addUser = (
    user: Omit<User, "expiresAt"> & { expiresMinutes: number }
  ) => {
    const usernameLower = user.username.trim().toLowerCase();
    const exists = users.some(
      (u) => u.username.trim().toLowerCase() === usernameLower
    );
    if (exists) return;

    const expiresAt = new Date(
      Date.now() + user.expiresMinutes * 60000
    ).toISOString();
    const newUser: User = {
      username: user.username.trim(),
      password: user.password.trim(),
      role: user.role,
      expiresAt,
    };

    setUsers((prev) => [...prev, newUser]);
  };

  // ตรวจสอบผู้ใช้
  const validateUser = (username: string, password: string): boolean => {
    const now = new Date();
    const foundUser = users.find(
      (u) =>
        u.username.toLowerCase() === username.toLowerCase() &&
        u.password === password &&
        new Date(u.expiresAt) > now
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

  // เข้าสู่ระบบด้วย role (ใช้เฉพาะ admin เทียม)
  const loginAs = (newRole: Role) => {
    setRole(newRole);
    setIsLoggedIn(true);
    setCurrentUser(null);
    localStorage.setItem("role", newRole);
    localStorage.removeItem("currentUser");
  };

  // ออกจากระบบ
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