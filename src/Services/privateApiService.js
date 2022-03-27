import axios from 'axios';
const BASE_URL = 'https://ongapi.alkemy.org/api';

export const privateDeleteRequest = async ({ url }) => {
	const headers = { ...tokenFromLocalStorage() };
	try {
		const res = await axios.delete(`${BASE_URL}${url}`, headers);
		console.log(res);
		return res;
	} catch (err) {
		console.log(err);
	}
};

/**
 * Function to generate a POST request
 * @param {string} route  Endpoint's route. Example: "/testimonials"
 * @param {Object} patchData Object with the post data
 * @returns {Promise}
 */
export async function privatePatchRequest(route, patchData) {
	const headers = { ...tokenFromLocalStorage() };
	try {
		const { data } = await axios.patch(
			`${BASE_URL}${route}`,
			patchData,
			headers
		);
		return data;
	} catch (error) {
		return error;
	}
}

function tokenFromLocalStorage() {
	const noTokenValue = {
		undefined: undefined,
		null: null,
	};
	const token = window.localStorage.getItem('token');
	if (!token || !noTokenValue[token]) {
		console.log('No token in local storage');
		return null;
	}
	return {
		Authorization: `Bearer ${token}`,
	};
}
