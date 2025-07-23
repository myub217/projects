// src/components/ProtectedRoute.tsx
// ✅ Clean route guard with role-based access and redirect on unauthorized

import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const allowedRoles = ['user', 'admin'] as const
type AllowedRole = (typeof allowedRoles)[number]

const ProtectedRoute: React.FC = () => {
  const location = useLocation()

  let user: string | null = null
  let role: string | null = null

  try {
    user = localStorage.getItem('loggedInUser')?.trim() || null
    role = localStorage.getItem('userRole')?.trim() || null
  } catch {
    // Silent fail on localStorage access errors
  }

  const isAuthenticated = Boolean(user)
  const isAuthorized = role !== null && allowedRoles.includes(role as AllowedRole)

  if (!isAuthenticated || !isAuthorized) {
    // Preserve attempted location to redirect after login if needed
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return <Outlet />
}

export default ProtectedRoute
