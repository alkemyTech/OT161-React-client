
import getDataMethodPrivate, { privatePostRequest, privatePutRequest, privatePatchRequest, privateDeleteRequest } from './privateApiService'


    // Get
    const getAllUsers = async (data= null) => {
        await getDataMethodPrivate('/users', data)
    }

    // Post
    const createUser = async (data) => {
        await privatePostRequest('/users', data)
    }

    // Get {id}
    const getUser = async (id, data = null) => {
        await getDataMethodPrivate(`/users/${id}`, data)
    }

    // Put {id}
    const updateUser = async (id, data) => {
        await privatePutRequest(`/users/${id}`, data)
    }

    // Patch {id}
    const patchUser = async (id, data) => {
        await privatePatchRequest(`/users/${id}`, data)
    }

    // Delete {id}
    const removeUser = async (id, data ) => {
        await privateDeleteRequest(`/users/${id}`, data)
    }



export default {getAllUsers, createUser, getUser, updateUser, patchUser, removeUser}