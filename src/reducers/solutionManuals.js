export default function searcherReducer(state = {}, action) {
	switch (action.type) {
		case 'SET_SOLUTION_MANUALS':
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
}
