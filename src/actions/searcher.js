const setImageUrl = imageUrl => ({
	type: 'SET_IMAGE_URL',
	payload: imageUrl,
});

const setSolutionManuals = solutionManuals => ({
	type: 'SET_SOLUTION_MANUALS',
	payload: solutionManuals,
});


export {
	setImageUrl,
	setSolutionManuals,
};
