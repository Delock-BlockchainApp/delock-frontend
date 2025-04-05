// hooks/useAuth.ts
import { useRecoilValue } from 'recoil';
import { authState } from '../recoil';

export const useAuth = () => {
  return useRecoilValue(authState);
};
