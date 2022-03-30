
import getDataMethodPrivate, { privatePostRequest, privatePutRequest, privatePatchRequest, privateDeleteRequest } from './privateApiService'


// Get
const getAllUsers = async (data = null) => {
    try {
        await getDataMethodPrivate('/users', data)
    } catch (error) {
        console.error(error);
    }
}

// Post
const createUser = async (data) => {
    try {
        await privatePostRequest('/users', data)
    } catch (error) {
        console.error(error);
    }
}

// Get {id}
const getUser = async (id, data = null) => {
    try {
        await getDataMethodPrivate(`/users/${id}`, data)
    } catch (error) {
        console.error(error);
    }
}

// Put {id}
const updateUser = async (id, data) => {
    try {
        await privatePutRequest(`/users/${id}`, data)
    } catch (error) {
        console.error(error);
    }
}

// Patch {id}
const patchUser = async (id, data) => {
    try {
        await privatePatchRequest(`/users/${id}`, data)
    } catch (error) {
        console.error(error);
    }
}

// Delete {id}
const removeUser = async (id, data) => {
    try {
        await privateDeleteRequest(`/users/${id}`, data)
    } catch (error) {
        console.error(error);
    }
}



export default { getAllUsers, createUser, getUser, updateUser, patchUser, removeUser }