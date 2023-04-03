import PropTypes from 'prop-types';

function UserAside({ email }) {
  return (
    <aside>
      <h2>Users info</h2>
      <h3>Logged in user email: {email}</h3>
    </aside>
  );
}
UserAside.propTypes = {
  email: PropTypes.string,
};
export default UserAside;
