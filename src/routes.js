import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, HomePage, NotFoundPage, SearchPage, AdminIndex } from './components';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route
      path="/libro/:bookName"
      component={SearchPage}
    />
    <Route
      path="/solving1213"
      component={AdminIndex}
    />
    <Route
      path="*"
      component={NotFoundPage}
    />
  </Route>
);
