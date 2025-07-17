// src/components/ProtectedRoute.tsx

import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute: React.FC = () => {
  const user = localStorage.getItem('loggedInUser')
  const role = localStorage.getItem('userRole')

  if (!user || !role) {
    return <Navigate to="/login" replace />
  }

  // อนุญาตเฉพาะ role 'user' หรือ 'admin'
  if (role !== 'user' && role !== 'admin') {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default ProtectedRoute