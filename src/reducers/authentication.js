export default function authenticationReducer(state = {}, action) {
	switch (action.type) {
		case 'SET_MODAL_STATE':
			return {
				...state,
				isModalOpen: action.payload,
			};
		default:
			return state;
	}
}
