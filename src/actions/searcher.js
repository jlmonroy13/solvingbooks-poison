const setImageReady = imageState => ({
	type: 'SET_IMAGE_READY',
	payload: imageState,
});

const setSolutionManuals = solutionManuals => ({
	type: 'SET_SOLUTION_MANUALS',
	payload: solutionManuals,
});


export {
	setImageReady,
	setSolutionManuals,
};
