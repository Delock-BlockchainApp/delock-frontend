import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from '../recoil';

type AuthRouteProps = {
  children: ReactNode;
  adminOnly?: boolean;
};

const AuthRoute = ({ children, adminOnly = false }: AuthRouteProps) => {
  const auth = useRecoilValue(authState) as { isAuthenticated: boolean; role?: string };
  const location = useLocation();

  if (!auth.isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  if (adminOnly && auth.role !== "admin") {
    return <Navigate to="/404" replace />;
  }

  return <>{children}</>;
};

export default AuthRoute;
