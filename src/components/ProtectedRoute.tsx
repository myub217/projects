// src/components/ProtectedRoute.tsx
// ✅ Route guard with clear role validation, redirect, and memoization

import React, { useMemo } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const allowedRoles = ['user', 'admin'] as const
type AllowedRole = typeof allowedRoles[number]

const ProtectedRoute: React.FC = () => {
  const user = useMemo(() => localStorage.getItem('loggedInUser')?.trim(), [])
  const role = useMemo(() => localStorage.getItem('userRole')?.trim(), [])

  const isAuthenticated = !!user
  const isAuthorized = (role && allowedRoles.includes(role as AllowedRole)) ?? false

  if (!isAuthenticated || !isAuthorized) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default ProtectedRoute