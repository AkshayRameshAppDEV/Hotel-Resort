import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Register from './register';
import Login from './login';
import LandingPage from './landingPage';



const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
  </Switch>
)

export default Main;