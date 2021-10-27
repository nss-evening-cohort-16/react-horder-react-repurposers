import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import MyStuff from '../views/MyStuff';
import NewStuff from '../views/NewStuff';

export default function Routes({
  stuffObj, setStuff, setEditStuff, user,
}) {
  return (
    <div>
      <Switch>
        <Route exact path={['/', '/home']} component={Home} />
        <Route exact path="/stuff" component={MyStuff} />
        <Route
          exact
          path="/new"
          component={() => (
            <NewStuff
              stuffObj={stuffObj}
              setStuff={setStuff}
              setEditStuff={setEditStuff}
              user={user}
            />
          )}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  stuffObj: PropTypes.shape({
    itemName: PropTypes.string,
    firebaseKey: PropTypes.string,
    itemImage: PropTypes.string,
    itemDescription: PropTypes.string,
    uid: PropTypes.string,
  }),
  setStuff: PropTypes.func.isRequired,
  setEditStuff: PropTypes.func.isRequired,
  user: PropTypes.shape({
    uid: PropTypes.string,
  }),
};

Routes.defaultProps = { stuffObj: {}, user: null };
