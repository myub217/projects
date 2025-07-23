// src/hooks/useAuth.ts
// ✅ Custom hook สำหรับจัดการสถานะผู้ใช้ที่เข้าสู่ระบบ ใช้คู่กับ ProtectedRoute และระบบ role-based

import { useCallback, useEffect, useState } from 'react'

interface AuthState {
  isAuthenticated: boolean
  username: string | null
  role: 'admin' | 'user' | null
}

export function useAuth(): {
  auth: AuthState
  login: (username: string, role?: 'admin' | 'user') => void
  logout: () => void
} {
  const [auth, setAuth] = useState<AuthState>({
    isAuthenticated: false,
    username: null,
    role: null,
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const storedUser = localStorage.getItem('loggedInUser')?.trim() || null
    const storedRole = (localStorage.getItem('userRole')?.trim() ?? 'user') as 'admin' | 'user'

    if (storedUser) {
      setAuth({
        isAuthenticated: true,
        username: storedUser,
        role: storedRole,
      })
    }
  }, [])

  const login = useCallback((username: string, role: 'admin' | 'user' = 'user') => {
    if (typeof window === 'undefined') return

    localStorage.setItem('loggedInUser', username.trim())
    localStorage.setItem('userRole', role)
    setAuth({
      isAuthenticated: true,
      username: username.trim(),
      role,
    })
  }, [])

  const logout = useCallback(() => {
    if (typeof window === 'undefined') return

    localStorage.removeItem('loggedInUser')
    localStorage.removeItem('userRole')
    setAuth({
      isAuthenticated: false,
      username: null,
      role: null,
    })
  }, [])

  return { auth, login, logout }
}
