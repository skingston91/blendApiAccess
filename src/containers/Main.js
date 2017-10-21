import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Data from '../components/Data';
import UnknownPage from '../components/Pages/404Page';

const Main = () =>
  <main>
    <Switch>
      <Route path="/:id?" component={ Data } />
      <Route component={ UnknownPage } />
    </Switch>
  </main>;
export default Main;
