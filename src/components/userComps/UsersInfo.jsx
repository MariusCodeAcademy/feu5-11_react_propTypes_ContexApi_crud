import React from 'react';
import PropTypes from 'prop-types';

function UsersInfo({ userCount }) {
  // gauti userCount is context
  // useContext
  return (
    <div>
      <h3>UsersInfo</h3>
      <p>Current user count: {userCount}</p>
      <hr />
    </div>
  );
}

UsersInfo.propTypes = {
  userCount: PropTypes.number,
};

export default UsersInfo;
