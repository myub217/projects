// src/components/ProtectedRoute.tsx
// ✅ Secure route guard with role-based access, localStorage validation, and redirect handling

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
  } catch (e) {
    console.error('🔐 Error accessing localStorage:', e)
    user = null
    role = null
  }

  const isAuthenticated = Boolean(user)
  const isAuthorized = role !== null && allowedRoles.includes(role as AllowedRole)

  if (!isAuthenticated || !isAuthorized) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  return <Outlet />
}

export default ProtectedRoute
