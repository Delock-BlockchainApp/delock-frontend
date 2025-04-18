
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
    userId:"",
    lastLogin:"", // Default to current date and time
  },
  effects_UNSTABLE: [persistAtom],
});


export const userIpfsCredentials = atom({ 
  key: 'userIpfsCredentials',
  default: {
    domain: "",
    api_key: "",
    jwt_token: "",
    jwt_secret:""
  },
  effects_UNSTABLE: [persistAtom],
});

export const AdminState = atom({
  key: 'AdminState',
  default: {
    department_name: "",
    department_code: "",
    wallet_address: "",
    department_id:"",
    lastLogedin: "", // Default to current date and time

  },
  effects_UNSTABLE: [persistAtom],
});

export const AdmindocumentState = atom({
  key: 'AdmindocumentState',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
