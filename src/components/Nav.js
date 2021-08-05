import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="nav-container">
    <h1 className="logo">Math Magicians ✨</h1>
    <ul className="nav-bar">
      <li className="nav-item"><Link to="/" className="link">Home</Link></li>
      <li className="nav-item"><Link to="/Calculator" className="link">Calculator</Link></li>
      <li className="nav-item"><Link to="/Quote" className="link">Quote of the day</Link></li>
    </ul>
  </div>
);

export default NavBar;
