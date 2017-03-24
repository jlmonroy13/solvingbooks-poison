import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, HomePage, NotFoundPage, SearchPage } from './components';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route
      path="/:bookName"
      component={SearchPage}
    />
    <Route
      path="*"
      component={NotFoundPage}
    />
  </Route>
);
