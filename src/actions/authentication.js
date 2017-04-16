import { setStatusRequestFalse, setStatusRequestTrue } from './spinner';
import Alert from 'react-s-alert';

const setModalState = modalState => ({
	type: 'SET_MODAL_STATE',
	payload: modalState,
});

const setUserLogged = userInfo => ({
	type: 'SET_USER_LOGGED',
	payload: userInfo,
});

const createUser = (credentials, profile) => {
	return (dispatch, getState, getFirebase) => {
		dispatch(setStatusRequestTrue());
		console.warn(getFirebase());
		const firebase = getFirebase();
		firebase.createUser(credentials, profile)
			.then(onSuccessCreateUser)
			.catch(onErrorCreateUser);

		function onSuccessCreateUser({ username, email }) {
			const userInfo = { username, email };
			localStorage.setItem('solucionarioUser', JSON.stringify(userInfo));
			dispatch(setStatusRequestFalse());
			dispatch(setUserLogged(userInfo));
			dispatch(setModalState(false));
		}

		function onErrorCreateUser({ message }) {
			dispatch(setStatusRequestFalse());
			Alert.error(message);
		}
	};
};

const logIn = (credentials) => {
	return (dispatch, getState, getFirebase) => {
		dispatch(setStatusRequestTrue());
		console.warn(getFirebase());
		const firebase = getFirebase();
		firebase.login(credentials)
			.then(onSuccessLogIn)
			.catch(onErrorLogIn);

		function onSuccessLogIn(data) {
			console.warn(data);
			console.warn(firebase.auth());
			// const userInfo = { username, email };
			// localStorage.setItem('solucionarioUser', JSON.stringify(userInfo));
			dispatch(setStatusRequestFalse());
			// dispatch(setUserLogged(userInfo));
			dispatch(setModalState(false));
		}

		function onErrorLogIn({ message }) {
			dispatch(setStatusRequestFalse());
			Alert.error(message);
		}
	};
};


export {
	setModalState,
	createUser,
	logIn,
};
