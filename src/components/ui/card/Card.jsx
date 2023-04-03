import PropTypes from 'prop-types';

import css from './Card.module.css';

function Card({ children, className }) {
  return <div className={`${css.card} ${className}`}>{children}</div>;
}
Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.element.isRequired,
  ]),
};
export default Card;
