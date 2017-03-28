const initialState = {
	isImageReady: false,
};

export default function searcherReducer(state = initialState, action) {
	switch (action.type) {
		case 'SET_IMAGE_READY':
			return {
				...state,
				isImageReady: action.payload,
			};
		default:
			return state;
	}
}
