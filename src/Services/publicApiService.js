import axios from 'axios';
const BASE_URL = 'https://ongapi.alkemy.org/api';

/**
 * Function to generate a POST request
 * @param {string} route  Endpoint's route. Example: "/testimonials"
 * @param {Object} postData Object with the post data
 */
async function publicPostRequest(route, postData) {
	try {
		const { data } = await axios.post(`${BASE_URL}${route}`, postData);
		return data;
	} catch (error) {
		return error;
	}
}

export async function createContact(data){
	try {
		const res = await publicPostRequest("/contacts", data)
	return res
	} catch (error) {
		return error
	}
}

const getDataMethod = async (sector, id = null, data = null) => {
	if (sector !== 'auth') {
		try {
			const result = await axios.get(
				id
					? `https://ongapi.alkemy.org/api/${sector}/${id}`
					: `https://ongapi.alkemy.org/api/${sector}`,
				data
			);
			console.log(result);
			return result;
		} catch (error) {
			console.error(error);
		}
	} else {
		try {
			const result = await axios.get(`https://ongapi.alkemy.org/auth/me`, data);
			console.log(result);
			return result;
		} catch (error) {
			console.error(error);
		}
	}
};

export { publicPostRequest, getDataMethod };
