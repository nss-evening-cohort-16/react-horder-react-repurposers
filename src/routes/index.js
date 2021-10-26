import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import MyStuff from '../views/MyStuff';
import NewStuff from '../views/NewStuff';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path={['/', '/home']} component={Home} />
        <Route exact path="/stuff" component={MyStuff} />
        <Route exact path="/new" component={NewStuff} />
      </Switch>
    </div>
  );
}
