import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (btnName) => clickHandler(btnName);

  return (
    <div className="panel-container">
      <div>
        <Button name="AC" clickHandler={() => handleClick('AC')} color="dark-gray" />
        <Button name="+/-" clickHandler={() => handleClick('+/-')} color="dark-gray" />
        <Button name="%" clickHandler={() => handleClick('%')} color="dark-gray" />
        <Button name="÷" clickHandler={() => handleClick('÷')} />
      </div>
      <div>
        <Button name="7" clickHandler={() => handleClick('7')} color="dark-gray" />
        <Button name="8" clickHandler={() => handleClick('8')} color="dark-gray" />
        <Button name="9" clickHandler={() => handleClick('9')} color="dark-gray" />
        <Button name="X" clickHandler={() => handleClick('x')} />
      </div>
      <div>
        <Button name="4" clickHandler={() => handleClick('4')} color="dark-gray" />
        <Button name="5" clickHandler={() => handleClick('5')} color="dark-gray" />
        <Button name="6" clickHandler={() => handleClick('6')} color="dark-gray" />
        <Button name="-" clickHandler={() => handleClick('-')} />
      </div>
      <div>
        <Button name="1" clickHandler={() => handleClick('1')} color="dark-gray" />
        <Button name="2" clickHandler={() => handleClick('2')} color="dark-gray" />
        <Button name="3" clickHandler={() => handleClick('3')} color="dark-gray" />
        <Button name="+" clickHandler={() => handleClick('+')} />
      </div>
      <div>
        <Button name="0" clickHandler={() => handleClick('0')} color="dark-gray" wide />
        <Button name="." clickHandler={() => handleClick('.')} color="dark-gray" />
        <Button name="=" clickHandler={() => handleClick('=')} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
