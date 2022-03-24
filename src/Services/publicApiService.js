import axios from 'axios';
const BASE_URL = 'https://ongapi.alkemy.org/api';

/**
 * Function to generate a POST request
 * @param {string} route  Endpoint's route. Example: "/testimonials"
 * @param {Object} data Object with the post data
 */
async function publicPostRequest(route, postData) {
	try {
		const {data} = await axios.post(`${BASE_URL}${route}`, postData);
        return data
	} catch (error) {
		return error
	}
}

export { publicPostRequest };
