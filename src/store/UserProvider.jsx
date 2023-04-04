import { useState } from 'react';
import { UserContext } from './UserContext';
import PropTypes from 'prop-types';

function UserProvider({ children }) {
  const [email, setEmail] = useState('');
  const [userCount, setUserCount] = useState(0);
  // userCount state
  //
  const userCtx = {
    email: email,
    userCount: userCount,
    setEmailinContex: setEmail,
    setUserCount,
  };

  return (
    <UserContext.Provider value={userCtx}>{children}</UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.element.isRequired,
  ]),
};
export default UserProvider;
