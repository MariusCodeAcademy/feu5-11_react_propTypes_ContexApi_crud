import React from 'react';
import SingleUser from './SingleUser';
import PropTypes from 'prop-types';
import Grid from '../ui/grid/Grid';

function UsersList({ list }) {
  console.log(JSON.stringify(list[0], null, 2));
  // UsersList perduoti kiekviena objekta is masyvo i SingleUser pavadinimu 'item'
  return (
    <Grid listType="ul">
      {list.map((uObj) => (
        <SingleUser key={uObj.id} item={uObj} />
      ))}
    </Grid>
  );
}
UsersList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};
export default UsersList;
