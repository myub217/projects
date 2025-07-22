// src/components/ProtectedRoute.tsx – Route Guard with Role Validation

import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute: React.FC = () => {
  const user = localStorage.getItem('loggedInUser')?.trim()
  const role = localStorage.getItem('userRole')?.trim()

  const isAuthenticated = Boolean(user && role)
  const allowedRoles = ['user', 'admin']
  const isAuthorized = allowedRoles.includes(role || '')

  if (!isAuthenticated || !isAuthorized) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default ProtectedRoute