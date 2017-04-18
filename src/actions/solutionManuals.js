const onSetSolutionManuals = solutionManuals => ({
	type: 'SET_SOLUTION_MANUALS',
	payload: solutionManuals,
});

const setSolutionManuals = (callback) => {
	return (dispatch, getState, getFirebase) => {
		const firebase = getFirebase();
		const firebaseRef = firebase.ref('/solutionManualList');
		firebaseRef.on('value', snapshot => {
			const data = snapshot.val();
			dispatch(onSetSolutionManuals(data));
			callback();
		});
	};
};

export {
	setSolutionManuals,
};
