import { UserContext } from './UserContext';
import PropTypes from 'prop-types';

function UserProvider({ children }) {
  //
  const userCtx = {
    email: '',
    userCount: 0,
  };

  return (
    <UserContext.Provider value={'buble gum'}>{children}</UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.element.isRequired,
  ]),
};
export default UserProvider;
