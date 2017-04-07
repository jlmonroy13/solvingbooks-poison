const setImageUrl = imageUrl => ({
	type: 'SET_IMAGE_URL',
	payload: imageUrl,
});

const setSolutionManuals = solutionManuals => ({
  type: 'SET_SOLUTION_MANUALS',
  payload: solutionManuals,
});

const setSolutionManual = solutionManual => ({
  type: 'SET_SOLUTION_MANUAL',
  payload: solutionManual,
});

const setSelections = obj => ({
	type: 'SET_SELECTIONS',
	payload: obj,
});


export {
	setImageUrl,
	setSolutionManuals,
  setSolutionManual,
  setSelections,
};
