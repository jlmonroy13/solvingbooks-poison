import {createStore, compose, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCmC7Db6RYYO9WNm2laAqVJcn6U-G9MFLc",
  authDomain: "elsolucionario-6c2b9.firebaseapp.com",
  databaseURL: "https://elsolucionario-6c2b9.firebaseio.com",
  storageBucket: "elsolucionario-6c2b9.appspot.com",
  messagingSenderId: "280386060132"
};

// react-redux-firebase options
const config = {
  userProfile: 'users', // firebase root where user profiles are stored
  enableLogging: false, // enable/disable Firebase's database logging
};

function configureStoreProd(initialState) {
  const middlewares = [
    thunk.withExtraArgument(getFirebase),
  ];

  return createStore(rootReducer, initialState, compose(
    reactReduxFirebase(firebaseConfig, config),
    applyMiddleware(...middlewares)
    )
  );
}

function configureStoreDev(initialState) {
  const logger = createLogger();
  const middlewares = [
    reduxImmutableStateInvariant({ ignore: ['firebase']}),
    thunk.withExtraArgument(getFirebase),
    logger,
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(rootReducer, initialState, composeEnhancers(
    reactReduxFirebase(firebaseConfig, config),
    applyMiddleware(...middlewares)
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
