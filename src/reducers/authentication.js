const initialState = {
	isModalOpen: false,
};

export default function authenticationReducer(state = initialState, action) {
	switch (action.type) {
		case 'SET_MODAL_STATE':
			return {
				...state,
				isModalOpen: action.payload,
			};
		case 'SET_USER_LOGGED':
			return {
				...state,
				userInfo: action.payload,
			};
		default:
			return state;
	}
}
