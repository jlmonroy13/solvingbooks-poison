import { setStatusRequestFalse, setStatusRequestTrue } from './spinner';

const onSetSolutionManuals = solutionManuals => ({
	type: 'SET_SOLUTION_MANUALS',
	payload: solutionManuals,
});

const setSolutionManuals = (callback) => {
	return (dispatch, getState, getFirebase) => {
		dispatch(setStatusRequestTrue());
		const firebase = getFirebase();
		const firebaseRef = firebase.ref('/solutionManuals');
		firebaseRef.once('value').then(onSuccess);

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
};
