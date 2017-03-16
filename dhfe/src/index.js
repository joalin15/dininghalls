import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import ReactDOM from 'react-dom';
import App from './App';
import Menus from './pages/menus/menus'
import About from './pages/about'
import API from './pages/api'
import Foods from './data/foods/Foods'
import Users from './data/users/Users'
import './styles/base/base.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Menus}/>
      <Route path="about" component={About}/>
      <Route path="menus" component={Menus}/>
      <Route path="api" component={API}>
        <Route path="/api/foods" component={Foods}/>
        <Route path="/api/users" component={Users}/>
      </Route>
    </Route>
  </Router>
  , document.getElementById('root')
);
