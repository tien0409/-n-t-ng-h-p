import {createContext, ReactNode, useEffect, useMemo, useState} from 'react';
import axios from 'axios';

export type UserInfo = null | {
  id?: string,
  firstName?: string,
  lastName?: string,
  email?: string,
  token?: string,
  biography? : string
}

export type AuthContextType = {
  isAuthen: boolean;
  setIsAuthen: (isAuthen: boolean) => void;
  setUserInfo: (user: UserInfo) => void;
  userInfo: UserInfo
};

type AuthProviderType = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType>({
  isAuthen: false,
  setIsAuthen: () => ({}),
  userInfo: null,
  setUserInfo: () => ({}),
});

export const AuthProvider = ({ children }: AuthProviderType) => {
  const [isAuthen, setIsAuthen] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>(null);

  useEffect(() => {
    const autoLogin = async  () => {
      const tokenStr = localStorage.getItem('token');
      if(tokenStr) {
        const res = await fetch(`${process.env.REACT_APP_API_URL_2}/spring-leaf/user/info`, {
          headers: {
            auth: tokenStr
          }
        }).then(_res => _res.json());

        if(res?.error === 0) {
          setIsAuthen(true);
          setUserInfo({
            id: res.user.id,
            email: res.user.email,
            firstName: res.user.first_name,
            lastName: res.user.last_name,
            token: tokenStr
          });
        } else {
          setIsAuthen(false);
          localStorage.removeItem('token');
        }
      } else {
        setIsAuthen(false);
      }
    };

    autoLogin();
  }, [setUserInfo, isAuthen, setIsAuthen]);

  return (
    <AuthContext.Provider value={{ userInfo, isAuthen, setIsAuthen, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
