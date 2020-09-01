import { createContext, useContext } from 'react';

export const UserContext = createContext(null);

const useCurrentUser = () => {
  const user = useContext(UserContext);
  return user;
};

export default useCurrentUser;
