import axios from 'axios';
const BASE_URL = 'https://ongapi.alkemy.org/api';

const privateDeleteRequest = async ({ url }) => {
	const headers = { ...tokenFromLocalStorage() };
	try {
		const res = await axios.delete(`${BASE_URL}${url}`, headers);
		console.log(res);
		return res;
	} catch (err) {
		console.log(err);
	}
};

export { privateDeleteRequest };
