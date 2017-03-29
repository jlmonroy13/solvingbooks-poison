const initialState = {
	imageUrl: 'empty',
};

export default function searcherReducer(state = initialState, action) {
	switch (action.type) {
		case 'SET_IMAGE_URL':
			return {
				...state,
				imageUrl: action.payload,
			};
		default:
			return state;
	}
}
