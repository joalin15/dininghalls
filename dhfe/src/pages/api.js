import React, { Component } from 'react';
import {Link} from 'react-router';
//import Foods from '../../data/foods/Foods'
import '../styles/components/api.css';

class API extends Component {
  constructor() {
    super()
    this.state = {
      api: "none"
    }
  }

  render() {
    //let list = <Foods />
    console.log("this.props.children : " + this.props.children)
    return (
      <div id="content">
        <div id="api-container">
          <div id="api-container-header">
            <h1 className="api-container-header-h1">
              API
            </h1>
          </div>
          <div id="api-container-body">
            <ul id="api-container-body-list">
              <li className="api-links-li">
                <Link to="/api/foods" className="api-links">Foods</Link>
              </li>
              <li className="api-links-li">
                <Link to="/api/users" className="api-links">Users</Link>
              </li>
              <li className="api-links-li">
                <Link to="/api" className="api-links">Placeholder</Link>
              </li>
            </ul>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default API;

// <li><Link to="/api/foods" className="api-links">Foods</Link></li>
// <li><Link to="/api/users" className="api-links">Users</Link></li>
//
// <li><a href="" className="api-links" >Foods</a></li>
// <li><a href="" className="api-links" >Users</a></li>
