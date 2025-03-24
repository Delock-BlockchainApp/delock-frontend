import React from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from '../state/authState';

const UserRoute = ({ children }) => {
  const { isAuthenticated } = useRecoilValue(authState);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default UserRoute;
