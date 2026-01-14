import { Navigate, Outlet } from 'react-router-dom';
import { auth_check } from './api/api';
import { useEffect } from 'react';

export default function ProtectedRoute() {
  useEffect(() => {
    auth_check();
  }, []);

  return <Outlet />;
}
