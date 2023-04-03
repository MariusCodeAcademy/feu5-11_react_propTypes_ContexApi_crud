import PropTypes from 'prop-types';
import css from './grid.module.css';

// apjuosiantis elementas suteikiantis papildomu stiliaus ar funkciju dalyku
function Grid({ cols, children, listType = 'div' }) {
  const inlineStyleObj = {
    // color: 'tomato',
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
  };

  const listTypeClass = listType !== 'div' ? css.unlisted : '';

  const ElementType = listType;

  return (
    <ElementType
      style={inlineStyleObj}
      className={[css.grid, listTypeClass].join(' ')}
    >
      {children}
    </ElementType>
  );
}

Grid.propTypes = {
  cols: PropTypes.number,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  listType: PropTypes.oneOf(['ul', 'ol', 'div']),
};

export default Grid;
