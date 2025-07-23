// src/components/ProtectedRoute.tsx
// ✅ Clean, performant route guard with role validation and redirect logic

import React, { useMemo } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const allowedRoles = ['user', 'admin'] as const
type AllowedRole = typeof allowedRoles[number]

const ProtectedRoute: React.FC = () => {
  const user = useMemo(() => {
    try {
      const stored = localStorage.getItem('loggedInUser')
      return stored ? stored.trim() : null
    } catch {
      return null
    }
  }, [])

  const role = useMemo(() => {
    try {
      const stored = localStorage.getItem('userRole')
      return stored ? stored.trim() : null
    } catch {
      return null
    }
  }, [])

  const isAuthenticated = Boolean(user)
  const isAuthorized = role && allowedRoles.includes(role as AllowedRole)

  if (!isAuthenticated || !isAuthorized) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default ProtectedRoute