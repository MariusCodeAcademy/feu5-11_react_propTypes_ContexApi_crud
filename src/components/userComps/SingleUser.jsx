import React from 'react';
import PropTypes from 'prop-types';
import Card from './../ui/card/Card';
import Button from '../ui/button/Button';

function SingleUser({ item }) {
  // priimti ir validuoti props.item
  // validuoti ji su shape isitikinti kad jis turi
  // id, email, firstName, gender, height, eyeColor, age
  // sugeneruoti reiksmes korteleje
  return (
    <li>
      <Card>
        <h2>{item.firstName}</h2>
        <p>{item.email}</p>
        <p>{item.age}</p>
        <Button>Login user</Button>
      </Card>
    </li>
  );
}

SingleUser.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    eyeColor: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
};

export default SingleUser;
