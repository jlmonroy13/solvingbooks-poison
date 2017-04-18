const initialState = {
	isModalOpen: false,
	isUserLogged: false,
	isAuthBtnClicked: false,
};

export default function authenticationReducer(state = initialState, action) {
	switch (action.type) {
		case 'SET_MODAL_STATE':
			return {
				...state,
				isModalOpen: action.payload,
			};
		case 'SET_IS_USER_LOGGED':
			return {
				...state,
				isUserLogged: action.payload,
			};
		case 'SET_AUTH_BUTTON_STATUS':
			return {
				...state,
				isAuthBtnClicked: action.payload,
			};
		default:
			return state;
	}
}
