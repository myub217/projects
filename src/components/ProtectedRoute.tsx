// src/components/ProtectedRoute.tsx
// ✅ Route guard: clean role validation, redirect logic, and memoization

import React, { useMemo } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const allowedRoles = ['user', 'admin'] as const
type AllowedRole = typeof allowedRoles[number]

const ProtectedRoute: React.FC = () => {
  const user = useMemo(() => {
    const stored = localStorage.getItem('loggedInUser')
    return stored ? stored.trim() : null
  }, [])

  const role = useMemo(() => {
    const stored = localStorage.getItem('userRole')
    return stored ? stored.trim() : null
  }, [])

  const isAuthenticated = Boolean(user)
  const isAuthorized = role && allowedRoles.includes(role as AllowedRole)

  if (!isAuthenticated || !isAuthorized) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default ProtectedRoute