import React from 'react'
import Route from 'react-router'
import App from './App'
import Users from './api/Users'
import Foods from './api/Foods'

var routes = (
    <Route path="/" component={App}>
      <Route path="/api/users" component={Users}/>
      <Route path="/api/foods" component={Foods}/>
    </Route>
);

export default routes;
