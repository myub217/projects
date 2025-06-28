import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Role = "guest" | "member" | "vip" | "admin";

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
  activeUsers: User[];
  loginAs: (user: User) => void;
  logout: () => void;
  addUser: (user: Omit<User, "expiresAt"> & { expiresMinutes: number }) => void;
  setUserRole: (username: string, role: Role) => void;
  revokeUser: (username: string) => void;
  validateUser: (username: string, password: string) => User | null;
}

const AuthContext = createContext<AuthContextType>({
  role: "guest",
  isLoggedIn: false,
  currentUser: null,
  users: [],
  activeUsers: [],
  loginAs: () => {},
  logout: () => {},
  addUser: () => {},
  setUserRole: () => {},
  revokeUser: () => {},
  validateUser: () => null,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<Role>("guest");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const now = new Date();

    // โหลด users จาก localStorage
    let storedUsers: User[] = [];
    try {
      const raw = localStorage.getItem("users");
      storedUsers = raw ? JSON.parse(raw) : [];
    } catch {
      storedUsers = [];
    }

    // เพิ่ม default admin (ถ้ายังไม่มี)
    const defaultAdmin = {
      username: "myub25217",
      password: "22584566",
      role: "admin" as Role,
      expiresAt: "9999-12-31T23:59:59.999Z",
      token: "admin_" + Date.now().toString(36),
    };
    if (!storedUsers.some((u) => u.username === defaultAdmin.username)) {
      storedUsers.push(defaultAdmin);
    }

    setUsers(storedUsers);
    localStorage.setItem("users", JSON.stringify(storedUsers));

    // โหลด currentUser และ role
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
          logout();
        }
      }
    } catch {
      logout();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (
    user: Omit<User, "expiresAt"> & { expiresMinutes: number }
  ) => {
    const username = user.username.trim().toLowerCase();
    if (users.some((u) => u.username.toLowerCase() === username)) return;

    const expiresAt = new Date(
      Date.now() + user.expiresMinutes * 60 * 1000
    ).toISOString();

    const token =
      user.token || `t_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;

    const newUser: User = {
      ...user,
      username,
      expiresAt,
      token,
    };

    setUsers((prev) => [...prev, newUser]);
  };

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

  const loginAs = (user: User) => {
    setRole(user.role);
    setIsLoggedIn(true);
    setCurrentUser(user);
    localStorage.setItem("role", user.role);
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  const logout = () => {
    setRole("guest");
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem("role");
    localStorage.removeItem("currentUser");
  };

  const setUserRole = (username: string, newRole: Role) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.username.toLowerCase() === username.toLowerCase()
          ? { ...u, role: newRole }
          : u
      )
    );
  };

  const revokeUser = (username: string) => {
    setUsers((prev) =>
      prev.filter(
        (u) => u.username.toLowerCase() !== username.toLowerCase()
      )
    );
  };

  const activeUsers = users.filter((u) => new Date(u.expiresAt) > new Date());

  return (
    <AuthContext.Provider
      value={{
        role,
        isLoggedIn,
        currentUser,
        users,
        activeUsers,
        loginAs,
        logout,
        addUser,
        setUserRole,
        revokeUser,
        validateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};