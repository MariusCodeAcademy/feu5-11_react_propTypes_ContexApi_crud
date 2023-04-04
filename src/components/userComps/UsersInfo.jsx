import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from '../../store/UserContext';

function UsersInfo({ userCount }) {
  // gauti userCount is context
  // useContext
  const userCtx = useContext(UserContext);
  return (
    <div>
      <h3>UsersInfo</h3>
      <p>Current user count: {userCtx.userCount}</p>
      <hr />
    </div>
  );
}

UsersInfo.propTypes = {
  userCount: PropTypes.number,
};

export default UsersInfo;
