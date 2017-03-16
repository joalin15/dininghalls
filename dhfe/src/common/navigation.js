import React, { Component } from 'react';
import {Link} from 'react-router';
import '../styles/components/navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div id="navigation">
        <div className="nav-links">
          <Link to="/about" className="nav-links-link">About</Link>
          <Link to="/menus" className="nav-links-link">Menus</Link>
          <Link to="/api" className="nav-links-link">API</Link>
        </div>
        <div className="nav-filters">
        </div>
        <div className="nav-logo">
        </div>
      </div>
    );
  }
}

export default Navigation;

// <Link to="/about" className="nav-links-link">About</Link>
// <Link to="/menus" className="nav-links-link">Dining Hall Menus</Link>

// <label class="switch">
//   <input type="checkbox">
//   <div class="slider round"></div>
// </label>
