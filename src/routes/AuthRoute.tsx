import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from '../recoil';

type AuthRouteProps = {
  children: ReactNode;
};

const AuthRoute = ({ children }: AuthRouteProps) => {
  const auth = useRecoilValue(authState) as { isAuthenticated: boolean };

  return auth.isAuthenticated ? children : <Navigate to="/signin" />;
};

export default AuthRoute;
