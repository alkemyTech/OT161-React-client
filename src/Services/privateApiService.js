import axios from 'axios';
const BASE_URL = 'https://ongapi.alkemy.org/api';


export const privatePostRequest = async (route, postData) => {
    const headers = {...tokenFromLocalStorage()}
    try {
        const { data } = await axios.post(`${BASE_URL}${route}`, postData, headers);
        return data;
    } catch (error) {
        return error;
    }
}

export const privatePutRequest = async ({ url, putData }) => {
	const headers = { ...tokenFromLocalStorage() };
	try {
		const res = await axios.put(`${BASE_URL}${url}`, putData, headers);
		return res;
	} catch (err) {
		console.log(err);
	}
};

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

const getDataMethodPrivate = async (sector, id = null) => {
	const headers = { ...tokenFromLocalStorage() };
	if (sector !== "auth") {
	  try {
		const result = await axios.get(
		  id
			? `https://ongapi.alkemy.org/api/${sector}/${id}`
			: `https://ongapi.alkemy.org/api/${sector}`,
		  headers
		);
		console.log(result);
		return result;
	  } catch (error) {
		console.error(error);
	  }
	} else {
	  try {
		const result = await axios.get(`https://ongapi.alkemy.org/auth/me`, {
		  headers,
		});
		console.log(result);
		return result;
	  } catch (error) {
		console.error(error);
	  }
	}
  };
  
  export default getDataMethodPrivate;
  

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
