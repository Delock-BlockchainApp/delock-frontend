import { atom } from 'recoil';
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const authState = atom({
  key: 'authState',
  default: {
    isAuthenticated: false,
    account: "",
    role: "user", // Default role is "user"
  },
  effects_UNSTABLE: [persistAtom],
});

export const userState = atom({
  key: 'userState',
  default: {
    name: "",
    email: "",
    wallet: "",
  },
  effects_UNSTABLE: [persistAtom],
});


export const userIpfsCredentials = atom({ 
  key: 'userIpfsCredentials',
  default: {
    domain: "",
    apiKey: "",
  },
  effects_UNSTABLE: [persistAtom],
});




