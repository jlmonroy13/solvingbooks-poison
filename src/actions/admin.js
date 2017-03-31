const setChapters = chapters => ({
	type: 'SET_CHAPTERS',
	payload: chapters,
});

const setSubchapters = chapter => ({
  type: 'SET_SUBCHAPTERS',
  payload: chapter,
});

const setBasicInfoSolutionManual = data => ({
	type: 'SET_BASIC_INFO_SOLUTION_MANUAL',
	payload: data,
});

const setHasSubchapters = state => ({
  type: 'SET_HAS_SUBCHAPTERS',
  payload: state,
});

const setChapterWithExercises = chapter => ({
  type: 'SET_CHAPTER_WITH_EXERCISE',
  payload: chapter,
});

const setSubchapterInfo = (subchapter, chapterId) => ({
  type: 'SET_SUBCHAPTER_INFO',
  payload: {
    subchapter,
    chapterId,
  },
});


export {
  setChapters,
	setSubchapters,
	setBasicInfoSolutionManual,
  setHasSubchapters,
  setChapterWithExercises,
  setSubchapterInfo,
};
