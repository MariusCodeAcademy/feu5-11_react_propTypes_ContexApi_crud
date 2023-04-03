import css from './Button.module.css';
import PropTypes from 'prop-types';

function Button({ className, onClick, children }) {
  return (
    <button onClick={onClick} className={[css.btn, className].join(' ')}>
      {children}
    </button>
  );
}
// validuoti propsus - propTypes
Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
};
export default Button;
