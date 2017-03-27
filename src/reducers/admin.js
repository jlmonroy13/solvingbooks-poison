const initialState = {
	chapters: {},
	solutionManual: {
		name: '',
		urlName: '',
		hasSubchapters: false,
		chapters: {},
	},
};

export default function adminReducer(state = initialState, action) {
	switch (action.type) {
		case 'SET_BASIC_INFO_SOLUTION_MANUAL':
			return {
				...state,
				solutionManual: {
					...state.solutionManual,
					...action.payload,
				}
			};
		case 'SET_CHAPTERS':
			return {
				...state,
				chapters: {
					...state.chapters,
					...action.payload,
				},
			};	
		default:
			return state;
	}
}
