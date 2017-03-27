const setChapters = chapters => ({
	type: 'SET_CHAPTERS',
	payload: chapters,
});

const setBasicInfoSolutionManual = data => ({
	type: 'SET_BASIC_INFO_SOLUTION_MANUAL',
	payload: data,
});


export {
	setChapters,
	setBasicInfoSolutionManual,
};
