// src/components/ProtectedRoute.tsx
// ✅ Clean route guard with role-based access and redirect on unauthorized

import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const allowedRoles = ['user', 'admin'] as const
type AllowedRole = typeof allowedRoles[number]

const ProtectedRoute: React.FC = () => {
  let user: string | null = null
  let role: string | null = null

  try {
    user = localStorage.getItem('loggedInUser')?.trim() || null
    role = localStorage.getItem('userRole')?.trim() || null
  } catch {
    // Ignore localStorage errors silently
  }

  const isAuthenticated = Boolean(user)
  const isAuthorized = role !== null && allowedRoles.includes(role as AllowedRole)

  if (!isAuthenticated || !isAuthorized) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default ProtectedRoute