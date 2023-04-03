import PropTypes from 'prop-types';
import UsersInfo from './UsersInfo';

function UserAside({ email, userCount }) {
  return (
    <aside>
      <h2>Users info</h2>
      <h3>Logged in user email: {email}</h3>

      <UsersInfo userCount={userCount} />
    </aside>
  );
}
UserAside.propTypes = {
  email: PropTypes.string,
  userCount: PropTypes.number,
};
export default UserAside;
