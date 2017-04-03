import database from '../utils/database';
import { pendingTask, begin, end } from 'react-redux-spinner';

const setStatusRequestFalse = () => ({
	type: 'SET_STATUS_REQUEST',
	payload: false,
	[ pendingTask ]: end,
});

const setStatusRequestTrue = () => ({
	type: 'SET_STATUS_REQUEST',
	payload: true,
	[ pendingTask ]: begin,
});

const onSetSolutionManuals = solutionManuals => ({
	type: 'SET_SOLUTION_MANUALS',
	payload: solutionManuals,
});

const setSolutionManuals = (callback) => {
	return dispatch => {
		dispatch(setStatusRequestTrue());
		database.once('value').then(onSuccess);

		function onSuccess(snap) {
			dispatch(setStatusRequestFalse());
			const data = snap.val();
			dispatch(onSetSolutionManuals(data));
			callback();
		}
	};
};


export {
	setSolutionManuals,
	setStatusRequestFalse,
	setStatusRequestTrue,
};
