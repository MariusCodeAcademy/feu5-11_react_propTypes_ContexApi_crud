import React from 'react';
import SingleUser from './SingleUser';
import PropTypes from 'prop-types';

function UsersList({ list }) {
  // UsersList perduoti kiekviena objekta is masyvo i SingleUser pavadinimu 'item'
  return (
    <ul>
      {list.map((uObj) => (
        <SingleUser key={uObj.id} />
      ))}
    </ul>
  );
}
UsersList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};
export default UsersList;
