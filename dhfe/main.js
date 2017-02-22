ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "users" component = {Users} />
         <Route path = "foods" component = {Foods} />
      </Route>
   </Router>

), document.getElementById('app'))
