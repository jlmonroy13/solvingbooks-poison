import { setStatusRequestFalse } from '../actions/spinner';
// import ObjectUtils from '../utils/object';
// import ArrayUtils from '../utils/array';

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

const setNumberOfSearches = number => ({
	type: 'SET_NUMBER_OF_SEARCHES',
	payload: number,
});

const addNumberOfSearches = () => {
	return (dispatch, getState) => {
		let { searcher: { numberOfsearches } } = getState();
		numberOfsearches += 1;
		localStorage.setItem('counter', numberOfsearches);
		dispatch(setNumberOfSearches(numberOfsearches));
	};
};

const getSolutionManual = (solutionManualId, callback) => {
	return (dispatch, getState, getFirebase) => {
		const firebase = getFirebase();
		const firebaseRef = firebase.ref(`/solutionManuals/${solutionManualId}`);
		firebaseRef.on('value', snapshot => {
			const data = snapshot.val();
			dispatch(setSolutionManual(data));
			dispatch(setStatusRequestFalse());
			callback();
		});
		// const firebaseRef2 = firebase.ref(`/solutionManuals/`);
		// firebaseRef2.on('value', snapshot => {
		// 	const data2 = snapshot.val();
		// 	const dataArr = ObjectUtils.toArray(data2);
		// 	const newArray = dataArr.map((manual) => {
		// 		const chapters = manual.chapters;
		// 		if(manual.hasSubchapters) {
		// 			var withSubchapters = chapters.map((chapter) => {
		// 				const newSubchapters = chapter.subchapters.map((sub) => {
		// 					const newSubExer = sub.exercises.map((subEx) => {
		// 						const newExer2 = subEx.imageUrl ? { imageUrl: subEx.imageUrl, authorId: 'JEToAR1VQySEaj2sY80FdbeoHWI2', id: '-KgeFTp44ka-BRVLK5Nm', authorImage: 'https://firebasestorage.googleapis.com/v0/b/elsolucionario-6c2b9.appspot.com/o/elsolucionario-avatar.jpg?alt=media&token=6ca80b2b-4b09-4cdc-a0bd-6110c8ddc094', authorName: 'ElSolucionario.io' } : '';
		// 						const answersObj2 = { '-KgeFTp44ka-BRVLK5Nm': newExer2 };
		// 						const newObj2 = newExer2 === '' ? { number: subEx.number } : { number: subEx.number, answers: answersObj2};
		// 						return newObj2;
		// 					});
		// 					return { ...sub, exercises: newSubExer };
		// 				});
		// 				return { ...chapter, subchapters: newSubchapters };
		// 			});
		// 			return { ...manual, chapters: withSubchapters };
		// 		} else {
		// 			var newChap = chapters.map((chapter) => {
		// 				const exercises = chapter.exercises || [];
		// 				const newExers = exercises.map((exer) => {
		// 					const newExer = exer.imageUrl ? { imageUrl: exer.imageUrl, authorId: 'JEToAR1VQySEaj2sY80FdbeoHWI2', id: '-KgeFTp44ka-BRVLK5Nm', authorImage: 'https://firebasestorage.googleapis.com/v0/b/elsolucionario-6c2b9.appspot.com/o/elsolucionario-avatar.jpg?alt=media&token=6ca80b2b-4b09-4cdc-a0bd-6110c8ddc094', authorName: 'ElSolucionario.io' } : '';
		// 					const answersObj = { '-KgeFTp44ka-BRVLK5Nm': newExer };
		// 					const newObj = newExer === '' ? { number: exer.number } : { number: exer.number, answers: answersObj};
		// 					return newObj;
		// 				});
		// 				return { ...chapter, exercises: newExers };
		// 			});
		// 			return { ...manual, chapters: newChap };
		// 		}
		// 	});

		// 	const newDataBase = ArrayUtils.toObject(newArray);
		// 	const firebaseRef5 = firebase.ref(`/solutionManualsComunity`);
		// 	firebaseRef5.set(newDataBase);
		// });
	};
};

export {
	setImageUrl,
	setSolutionManuals,
  setSolutionManual,
  setSelections,
  getSolutionManual,
  addNumberOfSearches,
};