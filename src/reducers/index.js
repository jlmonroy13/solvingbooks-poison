import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import authentication from './authentication';
import admin from './admin';
import searcher from './searcher';
import solutionManuals from './solutionManuals';
import { pendingTasksReducer as pendingTasks } from 'react-redux-spinner';

const rootReducer = combineReducers({
  authentication,
  admin,
  searcher,
  solutionManuals,
  routing: routerReducer,
  pendingTasks,
});

export default rootReducer;
