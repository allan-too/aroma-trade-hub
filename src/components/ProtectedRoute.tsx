
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { UserRole } from '../types/auth';
import { Spinner } from './ui/spinner';

interface ProtectedRouteProps {
  allowedRoles?: UserRole[];
  redirectPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  allowedRoles,
  redirectPath = '/login',
}) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner className="h-8 w-8" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Redirect based on role if they don't have permission
    const redirectBasedOnRole = () => {
      switch (user.role) {
        case 'buyer':
          return '/marketplace';
        case 'seller':
          return '/seller/dashboard';
        case 'admin':
          return '/admin/dashboard';
        default:
          return '/';
      }
    };

    return <Navigate to={redirectBasedOnRole()} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
