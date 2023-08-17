import { RootState } from "../store";

export const getUserInfo: (store: RootState) => TUserInfo = 
  (store) => store.auth.userInfo;
export const getIsLoggedIn: (store: RootState) => boolean = 
  (store) => store.auth.isLoggedIn;
export const getAuthIsLoading: (store: RootState) => boolean = 
  (store) => store.auth.isLoading;
export const getIsAllowedPasswordReset: (store: RootState) => boolean = 
  (store) => store.auth.allowPasswordReset;