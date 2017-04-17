import { setStatusRequestFalse } from '../actions/spinner';

const setImageUrl = imageUrl => ({
	type: 'SET_IMAGE_URL',
	payload: imageUrl,
});

const setSolutionManuals = solutionManuals => ({
  type: 'SET_SOLUTION_MANUALS',
  payload: solutionManuals,
});

const setSolutionManual = solutionManual => ({
  type: 'SET_SOLUTION_MANUAL',
  payload: solutionManual,
});

const setSelections = obj => ({
	type: 'SET_SELECTIONS',
	payload: obj,
});

const getSolutionManual = (solutionManualId, callback) => {
	return (dispatch, getState, getFirebase) => {
		const firebase = getFirebase();
		const firebaseRef = firebase.ref(`/solutionManuals/${solutionManualId}`);
		firebaseRef.on('value', snapshot => {
			const data = snapshot.val();
			dispatch(setSolutionManual(data));
			dispatch(setStatusRequestFalse());
			callback();
		});
	};
};

export {
	setImageUrl,
	setSolutionManuals,
  setSolutionManual,
  setSelections,
  getSolutionManual,
};