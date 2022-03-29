// todos son metodos privados

import getDataMethodPrivate, {
	privateDeleteRequest,
} from './privateApiService';

// metodo get

const getActivity = async () => {
	const data = await getDataMethodPrivate('activity');
	return data;
};

// metodo post

const postActivity = async data => {};

// metodo path

// metodo delete

const deleteActivity = async url => {
	const data = await privateDeleteRequest(url);
	return data;
};

// metodo put
