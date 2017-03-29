import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import authentication from './authentication';
import admin from './admin';
import searcher from './searcher';
import solutionManuals from './solutionManuals';

const rootReducer = combineReducers({
  authentication,
  admin,
  searcher,
  solutionManuals,
  routing: routerReducer,
});

export default rootReducer;
