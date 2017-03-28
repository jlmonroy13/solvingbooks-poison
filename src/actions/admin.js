const setChapters = chapters => ({
	type: 'SET_CHAPTERS',
	payload: chapters,
});

const setSubchapters = (chapterId, subchapters) => ({
  type: 'SET_SUBCHAPTERS',
  payload: {
    chapterId,
    subchapters,
  },
});

const setBasicInfoSolutionManual = data => ({
	type: 'SET_BASIC_INFO_SOLUTION_MANUAL',
	payload: data,
});

const setHasSubchapters = state => ({
  type: 'SET_HAS_SUBCHAPTERS',
  payload: state,
});



export {
  setChapters,
	setSubchapters,
	setBasicInfoSolutionManual,
  setHasSubchapters,
};
