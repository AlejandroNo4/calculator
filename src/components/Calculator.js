import React from 'react';
import App from './App';
import NavBar from './Nav';

const Calculator = () => (
  <div className="body">
    <NavBar />
    <div className="main-container">
      <h1 className="title">Let’s do some math!</h1>
      <App />
    </div>
  </div>
);

export default Calculator;
