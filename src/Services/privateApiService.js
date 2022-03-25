import axios from 'axios';
const BASE_URL = 'https://ongapi.alkemy.org/api';

const privatePostRequest = async (route, token, postData) => {
    try {
        const { data } = await axios.post(`${BASE_URL}${route}`, postData, {headers: {"Authorization": token}});
        return data;
    } catch (error) {
        return error;
    }
}

export { privatePostRequest };