import axios from 'axios';
const BASE_URL = 'https://ongapi.alkemy.org/api';

const privatePutRequest = async ({ url, putData }) => {
	const headers = { ...tokenFromLocalStorage() };
	try {
		const res = await axios.put(`${BASE_URL}${url}`, putData, headers);
		return res;
	} catch (err) {
		console.log(err);
	}
};

export { privatePutRequest };
