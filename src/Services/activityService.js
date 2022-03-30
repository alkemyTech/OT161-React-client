// todos son metodos privados

import getDataMethodPrivate, {
	privateDeleteRequest,
	privatePatchRequest,
	privatePostRequest,
	privatePutRequest,
} from './privateApiService';

// metodo get

const showActivity = async () => {
	try {
		const response = await getDataMethodPrivate('activity');
		return response;
	} catch (error) {
		console.log(error);
	}
};

// metodo post

const createActivity = async data => {
	try {
		const response = await privatePostRequest('activity', data);
		return response;
	} catch (error) {
		console.log(error);
	}
};

// metodo path

const updateActivity = async (url, data) => {
	try {
		const response = await privatePatchRequest(url, data);
		return response;
	} catch (error) {
		console.log(error);
	}
};

// metodo delete

const deleteActivity = async url => {
	try {
		const response = await privateDeleteRequest(url);
		return response;
	} catch (error) {
		console.log(error);
	}
};

// metodo put

const updateAllActivity = async (url, data) => {
	try {
		const response = await privatePutRequest(url, data);
		return response;
	} catch (error) {
		console.log(error);
	}
};

export {
	showActivity,
	createActivity,
	updateActivity,
	updateAllActivity,
	deleteActivity,
};
