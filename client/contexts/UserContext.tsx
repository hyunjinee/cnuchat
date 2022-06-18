import React, { createContext, ReactNode, useContext, useState } from 'react';

interface User {
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<User>({
  nickname: '',
  setNickname: () => {},
});

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [nickname, setNickname] = useState('');
  return (
    <UserContext.Provider value={{ nickname, setNickname }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const nickname = useContext(UserContext);

  if (nickname === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return nickname;
};
