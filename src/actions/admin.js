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

const setChapterWithExercises = (chapter) => ({
  type: 'SET_CHAPTER_WITH_EXERCISE',
  payload: chapter,
});

const setExerciseSubchapter = (exercise, chapterId, subchapterId) => ({
  type: 'SET_EXERCISE_SUBCHAPTER',
  payload: {
    exercise,
    chapterId,
    subchapterId,
  },
});



export {
  setChapters,
	setSubchapters,
	setBasicInfoSolutionManual,
  setHasSubchapters,
  setChapterWithExercises,
  setExerciseSubchapter,
};
