// src/components/ProtectedRoute.tsx

import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

type ProtectedRouteProps = {
  allowedRoles?: ('admin' | 'user')[];
  redirectTo?: string;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  allowedRoles = ['admin', 'user'],
  redirectTo = '/login',
}) => {
  const location = useLocation();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const authUser = localStorage.getItem('authUser');
    const authRole = localStorage.getItem('authRole');

    const valid =
      !!authUser &&
      !!authRole &&
      allowedRoles.includes(authRole as 'admin' | 'user');

    setIsAuthorized(valid);
  }, [allowedRoles]);

  if (isAuthorized === null) return null;

  return isAuthorized ? (
    <Outlet />
  ) : (
    <Navigate to={redirectTo} replace state={{ from: location }} />
  );
};

export default ProtectedRoute;