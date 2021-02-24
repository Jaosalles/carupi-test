import React from 'react';

import { Switch } from 'react-router-dom';

import GamesInfo from '../pages/Games/Info';
import GamesList from '../pages/Games/List';
import Route from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={GamesList} exact path="/" />

      <Route component={GamesInfo} exact path="/games/:slug" />
    </Switch>
  );
};
export default Routes;
