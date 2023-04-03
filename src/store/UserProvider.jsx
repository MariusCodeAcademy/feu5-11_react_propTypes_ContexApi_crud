import { useState } from 'react';
import { UserContext } from './UserContext';
import PropTypes from 'prop-types';

function UserProvider({ children }) {
  const [email, setEmail] = useState('');
  // userCount state
  //
  const userCtx = {
    email: email,
    userCount: 0,
    setEmailinContex: setEmail,
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
