import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import About from './components/About';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/signin" component={SignIn}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
