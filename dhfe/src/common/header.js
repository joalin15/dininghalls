import React, { Component } from 'react';
import {Link} from 'react-router';

import '../styles/components/header.css';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <Link to="/" className="header-link">
          <h1 className="header-h1">RESIDENTIAL DINING</h1>
        </Link>
      </div>
    );
  }
}

export default Header;
