const initialState = {
	imageUrl: 'empty',
	solutionManual: {},
	bookName: '',
	chapter: '',
	subchapter: '',
	exercise: '',
};

export default function searcherReducer(state = initialState, action) {
	switch (action.type) {
		case 'SET_IMAGE_URL':
			return {
				...state,
				imageUrl: action.payload,
			};
		case 'SET_SOLUTION_MANUAL':
			return {
				...state,
				solutionManual: action.payload,
			};
		case 'SET_SELECTIONS':
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
}
