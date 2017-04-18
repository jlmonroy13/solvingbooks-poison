import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ObjectUtils from './utils/object';
import { setSolutionManuals } from './actions/solutionManuals';
import { getSolutionManual, setSelections } from './actions/searcher';
import { setStatusRequestTrue } from './actions/spinner';
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

const fetchSolutionManual = (store, callback, startPosition) => {
  const { dispatch, getState } = store;
  const {
    solutionManuals,
    routing: { locationBeforeTransitions: { pathname } },
    pendingTasks,
  } = getState();
  const urlName = pathname.substring(startPosition);
  const solutionManualsArr = ObjectUtils.toArray(solutionManuals);
  const book = solutionManualsArr.filter((bookItem) => urlName === bookItem.urlName);
  if(pendingTasks === 0) dispatch(setStatusRequestTrue());

  dispatch(getSolutionManual(book[0].id, callback));
  dispatch(setSelections({
    bookName: book[0].name || '',
    chapter: '',
    subchapter: '',
    exercise: '',
  }));
};

const onEnterSearcher = store => {
  return (nextState, replace, callback) => {
    fetchSolutionManual(store, callback, 7);
  };
};

const onEnterAdminDetail = store => {
  return (nextState, replace, callback) => {
    fetchSolutionManual(store, callback, 26);
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
      onEnter={onEnterSearcher(store)}
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
      onEnter={onEnterAdminDetail(store)}
    />
    <Route
      path="*"
      component={NotFoundPage}
    />
  </Route>
);

export default routes;
