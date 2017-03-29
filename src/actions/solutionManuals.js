import database from '../utils/database';

const onSetSolutionManuals = solutionManuals => ({
	type: 'SET_SOLUTION_MANUALS',
	payload: solutionManuals,
});

const setSolutionManuals = (callback) => {
	return dispatch => {
		return database.once('value').then(onSuccess);

		function onSuccess(snap) {
			const data = snap.val();
			dispatch(onSetSolutionManuals(data));
			callback();
		}
	};
};


export {
	setSolutionManuals,
};
