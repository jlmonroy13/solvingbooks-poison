import { setStatusRequestFalse, setStatusRequestTrue } from './spinner';
import Alert from 'react-s-alert';

const setModalState = modalState => ({
	type: 'SET_MODAL_STATE',
	payload: modalState,
});

const setIsUserLogged = (status) => ({
	type: 'SET_IS_USER_LOGGED',
	payload: status,
});

const createUser = (credentials, profile) => {
	return (dispatch, getState, getFirebase) => {
		dispatch(setStatusRequestTrue());
		const firebase = getFirebase();
		firebase.createUser(credentials, profile)
			.then(onSuccessCreateUser)
			.catch(onErrorCreateUser);

		function onSuccessCreateUser() {
			dispatch(setStatusRequestFalse());
			dispatch(setModalState(false));
		}

		function onErrorCreateUser({ message }) {
			dispatch(setStatusRequestFalse());
			Alert.error(message);
		}
	};
};

const authFirebaseListener = () => {
	return (dispatch, getState, getFirebase) => {
		const firebase = getFirebase();
		firebase.auth().onAuthStateChanged(firebaseUser => {
			if(firebaseUser) {
				dispatch(setIsUserLogged(true));
			} else {
				dispatch(setIsUserLogged(false));
			}
		});
	};
};

const logIn = (credentials) => {
	return (dispatch, getState, getFirebase) => {
		dispatch(setStatusRequestTrue());
		const firebase = getFirebase();
		firebase.login(credentials)
			.then(onSuccessLogIn)
			.catch(onErrorLogIn);

		function onSuccessLogIn() {
			dispatch(setStatusRequestFalse());
			dispatch(setModalState(false));
		}

		function onErrorLogIn({ message }) {
			dispatch(setStatusRequestFalse());
			Alert.error(message);
		}
	};
};

const logOut = () => {
	return (dispatch, getState, getFirebase) => {
		const firebase = getFirebase();
		firebase.logout();
	};
};

export {
	setModalState,
	createUser,
	logIn,
	logOut,
	authFirebaseListener,
};
