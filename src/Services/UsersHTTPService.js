
import getDataMethodPrivate, { privatePostRequest, privatePutRequest, privatePatchRequest, privateDeleteRequest } from './privateApiService'


// Get
const getAllUsers = async (data = null) => {
    try {
        const response = await getDataMethodPrivate('/users', data)
        return response
    } catch (error) {
        console.error(error);
    }
}

// Post
const createUser = async (data) => {
    try {
        const response = await privatePostRequest('/users', data)
        return response
    } catch (error) {
        console.error(error);
    }
}

// Get {id}
const getUser = async (id, data = null) => {
    try {
        const response = await getDataMethodPrivate(`/users/${id}`, data)
        return response.data
    } catch (error) {
        console.error(error);
    }
}

// Put {id}
const updateUser = async (id, data) => {
    try {
        const response = await privatePutRequest(`/users/${id}`, data)
        return response
    } catch (error) {
        console.error(error);
    }
}

// Patch {id}
const patchUser = async (id, data) => {
    try {
        const response = await privatePatchRequest(`/users/${id}`, data)
        return response
    } catch (error) {
        console.error(error);
    }
}

// Delete {id}
const removeUser = async (id, data) => {
    try {
        const response = await privateDeleteRequest(`/users/${id}`, data)
        return response
    } catch (error) {
        console.error(error);
    }
}



export default { getAllUsers, createUser, getUser, updateUser, patchUser, removeUser }