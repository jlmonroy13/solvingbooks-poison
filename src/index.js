/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './assets/stylesheets/main.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import { syncHistoryWithStore } from 'react-router-redux';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCmC7Db6RYYO9WNm2laAqVJcn6U-G9MFLc",
  authDomain: "elsolucionario-6c2b9.firebaseapp.com",
  databaseURL: "https://elsolucionario-6c2b9.firebaseio.com",
  storageBucket: "elsolucionario-6c2b9.appspot.com",
  messagingSenderId: "280386060132"
}
firebase.initializeApp(config);

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes(store)} store={store}/>
  </Provider>, document.getElementById('app')
);
