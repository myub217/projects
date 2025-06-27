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
  token?: string; // optional, for future API usage
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

  // โหลดจาก localStorage ตอนเริ่มต้น
  useEffect(() => {
    let validUsers: User[] = [];
    const storedUsers = localStorage.getItem("users");

    if (storedUsers) {
      try {
        const parsedUsers: User[] = JSON.parse(storedUsers);
        const now = new Date();
        validUsers = parsedUsers.filter((u) => new Date(u.expiresAt) > now);
      } catch {
        validUsers = [];
      }
    }

    // สร้าง admin เริ่มต้นถ้าไม่พบ
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

    if (storedRole && storedUser && new Date(storedUser.expiresAt) > new Date()) {
      setRole(storedRole);
      setCurrentUser(storedUser);
      setIsLoggedIn(true);
    } else {
      localStorage.removeItem("currentUser");
      localStorage.removeItem("role");
    }
  }, []);

  // Sync users ทุกครั้งที่เปลี่ยน
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // เพิ่มผู้ใช้ใหม่
  const addUser = (
    user: Omit<User, "expiresAt"> & { expiresMinutes: number }
  ) => {
    const username = user.username.trim().toLowerCase();
    const exists = users.some(
      (u) => u.username.trim().toLowerCase() === username
    );
    if (exists) return;

    const expiresAt = new Date(Date.now() + user.expiresMinutes * 60000).toISOString();

    const newUser: User = {
      username: user.username.trim(),
      password: user.password.trim(),
      role: user.role,
      expiresAt,
    };

    setUsers((prev) => [...prev, newUser]);
  };

  // ตรวจสอบการเข้าสู่ระบบของผู้ใช้
  const validateUser = (username: string, password: string): boolean => {
    const now = new Date();

    const user = users.find(
      (u) =>
        u.username.toLowerCase() === username.toLowerCase() &&
        u.password === password &&
        new Date(u.expiresAt) > now
    );

    if (user) {
      setRole(user.role);
      setIsLoggedIn(true);
      setCurrentUser(user);
      localStorage.setItem("role", user.role);
      localStorage.setItem("currentUser", JSON.stringify(user));
      return true;
    }

    return false;
  };

  // เข้าสู่ระบบแบบระบุ role โดยตรง (ใช้ในกรณีพิเศษ เช่น admin hardcoded)
  const loginAs = (newRole: Role) => {
    setRole(newRole);
    setIsLoggedIn(true);
    setCurrentUser(null); // ไม่มี user object จริง
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