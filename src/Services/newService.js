
import getDataMethodPrivate, {privateDeleteRequest, privatePutRequest, privatePostRequest, privatePatchRequest

} from './privateApiService';

// metodo get
const getNews = async () => {
	try {
		const response = await getDataMethodPrivate(
			process.env.REACT_APP_NEWS_END_POINT
		);
		return response;
	} catch (error) {
		console.log(error);
	}
};

// metodo post
const postNews = async data => {
	try {
		const response = await privatePostRequest(
			process.env.REACT_APP_NEWS_END_POINT,
			data
		);
		return response;
	} catch (error) {
		console.log(error);
	}
};

// metodo get {id}
const getNewsId = async (id, data) => {
	try {
		const response = await getDataMethodPrivate(
			`${process.env.REACT_APP_NEWS_END_POINT}/${id}`,
			data
		);
		return response;
	} catch (error) {
		console.log(error);
	}
};

// metodo put
const putNews = async (id, data) => {
	try {
		const response = await privatePutRequest(
			`${process.env.REACT_APP_NEWS_END_POINT}/${id}`,
			data
		);
		return response;
	} catch (error) {
		console.log(error);
	}
}


// metodo delete
const deleteNews = async (id, data) => {
	try {
		const response = await privateDeleteRequest(
			`${process.env.REACT_APP_NEWS_END_POINT}/${id}`,
			data
		);
		return response;
	} catch (error) {
		console.log(error);
	}
};

// metodo patch
const patchNews = async (id, data) => {
	try {
		const response = await privatePatchRequest(
			`${process.env.REACT_APP_NEWS_END_POINT}/${id}`,
			data
		);
		return response;
	} catch (error) {
		console.log(error);
	}
};

export {
	getNews,
	postNews,
	getNewsId,
	putNews,
	deleteNews,
	patchNews
}
