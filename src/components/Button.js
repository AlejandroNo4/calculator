import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name }) => (
  <button type="button">
    <span>{name}</span>
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
