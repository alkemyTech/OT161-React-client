import axios from 'axios';
const BASE_URL = 'https://ongapi.alkemy.org/api';

const privatePostRequest = async (route, postData) => {
    const headers = {...tokenFromLocalStorage()}
    try {
        const { data } = await axios.post(`${BASE_URL}${route}`, postData, headers);
        return data;
    } catch (error) {
        return error;
    }
}

export { privatePostRequest };