import React from 'react';
import {
  BrowserRouter  as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Home from '../Routes/Home';
import Tv from '../Routes/Tv';
import Search from '../Routes/Search';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/tv" component={Tv} />
      <Route path="/search" component={Search} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);