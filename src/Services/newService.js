import getDataMethodPrivate, {
	privateDeleteRequest,
} from './privateApiService';

// metodo get
const getNews = async () => {
	try {
		const response = await getDataMethodPrivate('news');
		return response;
	} catch (error) {
		console.log(error);
	}
};

// metodo post
const postNews = async data => {
	try {
		const response = await getDataMethodPrivate('news', data);
		return response;
	} catch (error) {
		console.log(error);
	}
};

// metodo get {id}
const getNewsId = async (id, data) => {
	const response = await getDataMethodPrivate(`news/${id}`, data);
	return response;
};

// metodo put
const putNews = async (url, data) => {
	try {
		const response = await getDataMethodPrivate(url, data);
		return response;
	} catch (error) {
		console.log(error);
	}
		
}


// metodo delete
const deleteNews = async url => {
	const data = await privateDeleteRequest(url);
	return data;
};

export {
	getNews,
	postNews,
	getNewsId,
	putNews,
	deleteNews,
}

