const setUserSearch = (bookName, chapter, subchapter, exercise, date) => {
	return (dispatch, getState, getFirebase) => {
		const state = getState();
		const { firebase: { _root: { entries } } } = state;
		const _root = entries && entries[0];
		const userId = _root[1] && _root[1].uid;
		const firebase = getFirebase();
		if (userId) {
			const firebaseRef = firebase.ref(`/users/${userId}/searchLog`);
			firebaseRef.push({ bookName, chapter, subchapter, exercise, date });
		}
	};
};

export {
	setUserSearch,
};
