import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import authentication from './authentication';
import admin from './admin';
import searcher from './searcher';
import solutionManuals from './solutionManuals';
import { pendingTasksReducer as pendingTasks } from 'react-redux-spinner';
import { firebaseStateReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
	firebase: firebaseStateReducer,
  authentication,
  admin,
  searcher,
  solutionManuals,
  routing: routerReducer,
  pendingTasks,
});

export default rootReducer;
