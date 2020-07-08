import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';

import Artists from './views/Artists/Artists';
import ArtistDetail from './views/ArtistDetail/ArtistDetail'
import { Home } from './views/Home';
import { NoMatch } from './views/NoMatch';

export const Routes = () => (
    <Switch>
      <Route exact path="/Home" component={Home} />
      <Route exact path="/">
        <Redirect to="/Home" />
      </Route>
      <Route exact path="/Artists" component={Artists} />
      <Route exact path="/Artist/:id" render={(props) => <ArtistDetail {...props} />} />
      <Route component={NoMatch} />
    </Switch>
  );
