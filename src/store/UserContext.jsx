import { createContext } from 'react';

export const UserContext = createContext({
  email: '',
  userCount: 0,
});
