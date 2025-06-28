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

  // โหลด users จาก localStorage และสร้าง admin ที่ไม่มีวันหมดอายุเสมอ
  useEffect(() => {
    const now = new Date();
    let validUsers: User[] = [];

    try {
      const stored = localStorage.getItem("users");
      const parsed: User[] = stored ? JSON.parse(stored) : [];

      // กรอง user ที่ยังไม่หมดอายุ
      validUsers = parsed.filter((u) => new Date(u.expiresAt) > now);
    } catch {
      validUsers = [];
    }

    // ตรวจสอบว่ามี admin myub25217 อยู่หรือไม่
    const adminUsername = "myub25217";
    const adminPassword = "22584566";

    const adminExists = validUsers.some(
      (u) => u.username.toLowerCase() === adminUsername
    );

    if (!adminExists) {
      // สร้าง admin ที่ไม่มีวันหมดอายุ (expiresAt ไกลมาก)
      const expiresAt = new Date("9999-12-31T23:59:59.999Z").toISOString();

      validUsers.push({
        username: adminUsername,
        password: adminPassword,
        role: "admin",
        expiresAt,
      });
    }

    setUsers(validUsers);
    localStorage.setItem("users", JSON.stringify(validUsers));

    // คืนค่าข้อมูล session ของผู้ใช้ปัจจุบัน
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
          // ลบข้อมูลที่หมดอายุแล้ว
          localStorage.removeItem("currentUser");
          localStorage.removeItem("role");
        }
      }
    } catch {
      localStorage.removeItem("currentUser");
      localStorage.removeItem("role");
    }
  }, []);

  // อัปเดต users ลง localStorage ทุกครั้งที่เปลี่ยนแปลง
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // เพิ่มผู้ใช้ใหม่ โดยกำหนดเวลาหมดอายุเป็นนาที
  const addUser = (
    user: Omit<User, "expiresAt"> & { expiresMinutes: number }
  ) => {
    const username = user.username.trim().toLowerCase();

    // ถ้ามี username ซ้ำแล้ว ไม่เพิ่ม
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

  // ตรวจสอบ username, password และวันหมดอายุ
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

  // login action
  const loginAs = (user: User) => {
    setRole(user.role);
    setIsLoggedIn(true);
    setCurrentUser(user);
    localStorage.setItem("role", user.role);
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  // logout action
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