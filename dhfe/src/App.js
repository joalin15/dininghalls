import React, { Component } from 'react';
import './App.css';
import {Router, browserHistory} from 'react-router'
import routes from './routes'
import './index.css';

class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>{routes}</Router>
    );
  }
}

export default App;
