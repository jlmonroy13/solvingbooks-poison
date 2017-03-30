import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
  App,
  HomePage,
  NotFoundPage,
  SearchPage,
  AdminIndex,
  SolutionManualDetail
} from './components';

import { CreateSolutionManualContainer } from './containers';

const onEnterPage = store => {
  return () => {
    console.warn(store);
  }
}

export default store => (
  <Route path="/" component={App} onEnter={onEnterPage(store)}>
    <IndexRoute component={HomePage}/>
    <Route
      path="/libro/:bookNameUrl"
      component={SearchPage}
    />
    <Route
      path="/solving1213"
      component={AdminIndex}
    />
    <Route
      path="/solving1213/crear-solucionario"
      component={CreateSolutionManualContainer}
    />
    <Route
      path="/solving1213/solucionario/:bookNameUrl"
      component={SolutionManualDetail}
    />
    <Route
      path="*"
      component={NotFoundPage}
    />
  </Route>
);
