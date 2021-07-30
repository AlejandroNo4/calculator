import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name } = props;
  const { clickHandler } = props;
  const handleClick = (name) => clickHandler(name);

  return (
    <button type="button" onClick={() => handleClick(name)}>
      <span>{name}</span>
    </button>
  );
};

Button.defaultProps = {
  clickHandler: null,
};

Button.propTypes = {
  clickHandler: PropTypes.func,
  name: PropTypes.string.isRequired,
};

export default Button;
