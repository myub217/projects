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

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    let validUsers: User[] = [];

    if (storedUsers) {
      try {
        const parsed: User[] = JSON.parse(storedUsers);
        const now = new Date();
        validUsers = parsed.filter((u) => new Date(u.expiresAt) > now);
      } catch {}
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

    const savedRole = localStorage.getItem("role") as Role;
    const savedUserStr = localStorage.getItem("currentUser");

    if (savedRole && savedUserStr) {
      try {
        const savedUser: User = JSON.parse(savedUserStr);
        if (new Date(savedUser.expiresAt) > new Date()) {
          setRole(savedRole);
          setCurrentUser(savedUser);
          setIsLoggedIn(true);
        }
      } catch {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("role");
      }
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

    const expiresAt = new Date(Date.now() + user.expiresMinutes * 60000).toISOString();
    const newUser: User = { ...user, username, expiresAt };
    setUsers((prev) => [...prev, newUser]);
  };

  const validateUser = (username: string, password: string): User | null => {
    const now = new Date();
    const user = users.find(
      (u) =>
        u.username.toLowerCase() === username.toLowerCase() &&
        u.password === password &&
        new Date(u.expiresAt) > now
    );
    return user || null;
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