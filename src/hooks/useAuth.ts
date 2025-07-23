// src/hooks/useAuth.ts
// ✅ Custom hook สำหรับจัดการสถานะผู้ใช้ที่เข้าสู่ระบบ พร้อมใช้งานกับ ProtectedRoute

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

    const storedUser = localStorage.getItem('loggedInUser')
    const storedRole = localStorage.getItem('userRole') as 'admin' | 'user' | null

    if (storedUser) {
      setAuth({
        isAuthenticated: true,
        username: storedUser,
        role: storedRole === 'admin' || storedRole === 'user' ? storedRole : 'user',
      })
    }
  }, [])

  const login = useCallback((username: string, role: 'admin' | 'user' = 'user') => {
    if (typeof window === 'undefined') return

    localStorage.setItem('loggedInUser', username)
    localStorage.setItem('userRole', role)
    setAuth({
      isAuthenticated: true,
      username,
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
