import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Data from '../components/Data';

const Main = () =>
  <main>
    <Switch>
      <Route path="/:id?" component={ Data } />
    </Switch>
  </main>;
export default Main;
