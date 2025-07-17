// src/components/ProtectedRoute.tsx

import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

type Role = 'admin' | 'user'

type ProtectedRouteProps = {
  allowedRoles?: Role[]
  redirectTo?: string
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  allowedRoles = ['admin', 'user'],
  redirectTo = '/login',
}) => {
  const location = useLocation()
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const authRole = localStorage.getItem('authRole') as Role | null

    const valid = !!token && !!authRole && allowedRoles.includes(authRole)
    setIsAuthorized(valid)
  }, [allowedRoles])

  if (isAuthorized === null) return null

  return isAuthorized ? (
    <Outlet />
  ) : (
    <Navigate to={redirectTo} replace state={{ from: location }} />
  )
}

export default ProtectedRoute