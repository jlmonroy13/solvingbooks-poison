import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import authentication from './authentication';
import admin from './admin';
import searcher from './searcher';

const rootReducer = combineReducers({
  authentication,
  admin,
  searcher,
  routing: routerReducer,
});

export default rootReducer;
