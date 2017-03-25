import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import authentication from './authentication';
import admin from './admin';

const rootReducer = combineReducers({
  authentication,
  admin,
  routing: routerReducer,
});

export default rootReducer;
