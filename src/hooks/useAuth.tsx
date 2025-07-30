// src/hooks/useAuth.tsx
import { useContext, createContext, ReactNode, useState, useEffect } from 'react';

type UserRole = 'admin' | 'user' | null;

interface AuthContextType {
  user: string | null;
  role: UserRole;
  login: (username: string, role: UserRole) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const [role, setRole] = useState<UserRole>(null);

  useEffect(() => {
    // Restore auth state from localStorage (can be replaced with cookie/token logic)
    const storedUser = localStorage.getItem('loggedInUser');
    const storedRole = localStorage.getItem('userRole') as UserRole | null;

    if (storedUser && storedRole) {
      setUser(storedUser);
      setRole(storedRole);
    }
  }, []);

  const login = (username: string, userRole: UserRole) => {
    setUser(username);
    setRole(userRole);
    localStorage.setItem('loggedInUser', username);
    localStorage.setItem('userRole', userRole ?? '');
  };

  const logout = () => {
    setUser(null);
    setRole(null);
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('userRole');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        login,
        logout,
        isAuthenticated: !!user,
        isAdmin: role === 'admin',
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};