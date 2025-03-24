import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from '../recoil';

type UserRouteProps = {
  children: ReactNode;
};

const UserRoute = ({ children }: UserRouteProps) => {
  const auth = useRecoilValue(authState) as { isAuthenticated: boolean };

  return auth.isAuthenticated ? children : <Navigate to="/login" />;
};

export default UserRoute;
