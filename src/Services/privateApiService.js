import axios from 'axios';
const BASE_URL = 'https://ongapi.alkemy.org/api';

/**
 * Function to generate a POST request
 * @param {string} route  Endpoint's route. Example: "/testimonials"
 * @param {string} token Object with the post data
 * @param {Object} patchData Object with the post data
 * @returns {Promise}
 */
 async function privatePatchRequest(route, token, patchData) {
	try {
		const {data} = await axios.patch(`${BASE_URL}${route}`, patchData, {headers: {"Authorization": token}});
        return data
	} catch (error) {
		return error
	}
}

export { privatePatchRequest };
