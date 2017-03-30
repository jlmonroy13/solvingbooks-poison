import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { setSolutionManuals } from './actions/solutionManuals';
import {
  App,
  HomePage,
  NotFoundPage,
  SearchPage,
} from './components';

import { CreateSolutionManualContainer, AdminIndexContainer, SolutionManualDetailContainer } from './containers';

const onEnterPage = store => {
  return (nextState, replace, callback) => {
    const { dispatch } = store;
    dispatch(setSolutionManuals(callback));
  };
};

const routes = store => (
  <Route path="/" component={App} onEnter={onEnterPage(store)}>
    <IndexRoute
      component={HomePage}
    />
    <Route
      path="/libro/:bookNameUrl"
      component={SearchPage}
    />
    <Route
      path="/solving1213"
      component={AdminIndexContainer}
    />
    <Route
      path="/solving1213/crear-solucionario"
      component={CreateSolutionManualContainer}
    />
    <Route
      path="/solving1213/solucionario/:bookNameUrl"
      component={SolutionManualDetailContainer}
    />
    <Route
      path="*"
      component={NotFoundPage}
    />
  </Route>
);

export default routes;
