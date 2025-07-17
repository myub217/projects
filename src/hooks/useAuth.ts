// ✅ src/hooks/useAuth.ts – Hook ตรวจสอบสิทธิ์ + จัดการ auth user (localStorage + auto-refresh)

import { useEffect, useState, useCallback } from 'react'

export type UserRole = 'admin' | 'staff' | 'auditor' | 'customer'

export interface AuthUser {
  id: string
  username: string
  role: UserRole
  fullName: string
  token: string
}

export const useAuth = () => {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null)

  const loadUser = useCallback(() => {
    try {
      const raw = localStorage.getItem('auth')
      if (!raw) return setAuthUser(null)
      const parsed = JSON.parse(raw)

      if (
        typeof parsed.id === 'string' &&
        typeof parsed.username === 'string' &&
        typeof parsed.role === 'string' &&
        typeof parsed.token === 'string'
      ) {
        setAuthUser(parsed)
      } else {
        setAuthUser(null)
      }
    } catch {
      setAuthUser(null)
    }
  }, [])

  useEffect(() => {
    loadUser()
    window.addEventListener('storage', loadUser)
    return () => window.removeEventListener('storage', loadUser)
  }, [loadUser])

  const login = (user: AuthUser) => {
    localStorage.setItem('auth', JSON.stringify(user))
    setAuthUser(user)
  }

  const logout = () => {
    localStorage.removeItem('auth')
    setAuthUser(null)
  }

  return {
    authUser,
    isAuthenticated: !!authUser,
    isAdmin: authUser?.role === 'admin',
    isStaff: authUser?.role === 'staff',
    isAuditor: authUser?.role === 'auditor',
    isCustomer: authUser?.role === 'customer',
    login,
    logout,
  }
}