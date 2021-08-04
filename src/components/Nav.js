import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Calculator">Calculator</Link></li>
      <li><Link to="/Quote">Quote of the day</Link></li>
    </ul>
  </div>
);

export default NavBar;
