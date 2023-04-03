import React from 'react';
import SingleUser from './SingleUser';
import PropTypes from 'prop-types';
import Grid from '../ui/grid/Grid';

function UsersList({ list, onLogin }) {
  // console.log(JSON.stringify(list[0], null, 2));
  // UsersList perduoti kiekviena objekta is masyvo i SingleUser pavadinimu 'item'
  return (
    <Grid cols={2} listType="ul">
      {list.map((uObj) => (
        <SingleUser key={uObj.id} item={uObj} onLogin={onLogin} />
      ))}
    </Grid>
  );
}
UsersList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  onLogin: PropTypes.func,
};
export default UsersList;
