import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Welcome} />
  </Switch>
);

export default Routes;
