import React from 'react';
import { Route, IndexRoute } from 'react-router';
import * as firebase from 'firebase';
import { setSolutionManuals } from './actions/solutionManuals';
import { CreateSolutionManualContainer } from './containers';
import {
  App,
  HomePage,
  NotFoundPage,
  SearchPage,
  AdminIndex,
  SolutionManualDetail
} from './components';

const config = {
  apiKey: "AIzaSyCmC7Db6RYYO9WNm2laAqVJcn6U-G9MFLc",
  authDomain: "elsolucionario-6c2b9.firebaseapp.com",
  databaseURL: "https://elsolucionario-6c2b9.firebaseio.com",
  storageBucket: "elsolucionario-6c2b9.appspot.com",
  messagingSenderId: "280386060132"
}

const onEnterPage = store => {
  return () => {
    firebase.initializeApp(config);
    const { dispatch } = store;
    const solutionManualsRef = firebase.database().ref().child('solutionManuals');
    solutionManualsRef.on('value', snap => {
      dispatch(setSolutionManuals(snap.val()));
    });
  };
}

export default store => (
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
