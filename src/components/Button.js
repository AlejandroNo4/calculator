import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, clickHandler, color, wide,
}) => {
  const style = {
    background: color,
    width: wide === true ? '50%' : '25%',
  };
  const handleClick = (name) => clickHandler(name);

  return (
    <button type="button" className="btn" style={style} onClick={() => handleClick(name)}>
      <span>{name}</span>
    </button>
  );
};

Button.defaultProps = {
  clickHandler: null,
  color: 'orange',
  wide: false,
};

Button.propTypes = {
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
  name: PropTypes.string.isRequired,
};

export default Button;
