// src/components/ProtectedRoute.tsx

import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute: React.FC = () => {
  const user = localStorage.getItem('loggedInUser')
  const role = localStorage.getItem('userRole')

  // ถ้าไม่มีข้อมูล user หรือ role → redirect ไป login
  if (!user || !role) return <Navigate to="/login" replace />

  // เฉพาะ role ที่อนุญาตเท่านั้น
  const allowedRoles = ['user', 'admin']
  if (!allowedRoles.includes(role)) return <Navigate to="/login" replace />

  return <Outlet />
}

export default ProtectedRoute