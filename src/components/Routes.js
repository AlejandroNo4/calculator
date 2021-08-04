import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Calculator from './Calculator';
import Home from './Home';
import Quote from './Quote';

export default function Routes() {
  return (
    <Router>
      <div className="body">
        <nav className="nav-container">
          <h1 className="logo">Math Magicians ✨</h1>
          <ul className="nav-bar">
            <li className="nav-item">
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Calculator" className="link">
                Calculator
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Quote" className="link">
                Quote of the day
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Calculator" component={Calculator} />
          <Route exact path="/Quote" component={Quote} />
        </Switch>
      </div>
    </Router>
  );
}
