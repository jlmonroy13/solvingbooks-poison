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
		case 'SET_SUBCHAPTERS':
			return {
				...state,
				chapters: {
					...state.chapters,
					[action.payload.number]: {
						...state.chapters[action.payload.number],
						...action.payload,
					},
				},
			};
		case 'SET_HAS_SUBCHAPTERS':
			return {
				...state,
				solutionManual: {
					...state.solutionManual,
					hasSubchapters: action.payload,
				}
			};
		case 'SET_CHAPTER_WITH_EXERCISE':
			return {
				...state,
				chapters: {
					...state.chapters,
					[action.payload.number]: {
						...state.chapters[action.payload.number],
						...action.payload,
					}
				}
			};
		case 'SET_SUBCHAPTER_INFO':
			return {
				...state,
				chapters: {
					...state.chapters,
					[action.payload.chapterId]: {
						...state.chapters[action.payload.chapterId],
						subchapters: {
							...state.chapters[action.payload.chapterId]['subchapters'],
							[action.payload.subchapter.number] : {
								...action.payload.subchapter,
							},
						},
					},
				},
			};
		default:
			return state;
	}
}
