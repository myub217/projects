// src/hooks/AuthProvider.tsx
import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';

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

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [role, setRole] = useState<UserRole>(null);

  useEffect(() => {
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
        isAuthenticated: Boolean(user),
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