import PropTypes from 'prop-types';

import './card.css';

function Card({ children, className }) {
  return <div className={`card ${className}`}>{children}</div>;
}
Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array.isRequired,
};
export default Card;
