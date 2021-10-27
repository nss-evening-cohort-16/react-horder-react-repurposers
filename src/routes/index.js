import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import MyStuff from '../views/MyStuff';
import NewStuff from '../views/NewStuff';
import EditStuff from '../views/EditStuff';
import SingleStuff from '../views/SingleStuff';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path={['/', '/home']} component={Home} />
        <Route exact path="/stuff" component={MyStuff} />
        <Route exact path="/stuff/:key" component={SingleStuff} />
        <Route exact path="/new" component={NewStuff} />
        <Route exact path="/new/:key" component={EditStuff} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
  }),
};

Routes.defaultProps = { user: null };
