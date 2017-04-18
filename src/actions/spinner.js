import { pendingTask, begin, end } from 'react-redux-spinner';

const setStatusRequestFalse = () => ({
	type: 'SET_STATUS_REQUEST',
	payload: false,
	[ pendingTask ]: end,
});

const setStatusRequestTrue = () => ({
	type: 'SET_STATUS_REQUEST',
	payload: true,
	[ pendingTask ]: begin,
});

export {
	setStatusRequestFalse,
	setStatusRequestTrue,
};