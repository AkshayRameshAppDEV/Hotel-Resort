import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Register from './register';
import Login from './login';
import LandingPage from './landingPage';


/* This page has all the routes defined
if you want to add a new page in your components directory 
  1. First import the new page on top
  2. Add Route to new page in between Switch tags.
*/
const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
  </Switch>
)

export default Main;