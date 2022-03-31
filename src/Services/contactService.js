import { getDataMethod, publicPostRequest } from './publicApiService';
import { privatePatchRequest, privateDeleteRequest } from './privateApiService';
export async function getAllContacts() {
	try {
		const { data } = await getDataMethod('/contacts');
		return data;
	} catch (error) {
		return error;
	}
}

export async function createContact(contactData) {
	try {
		const data = await publicPostRequest('/contacts', contactData);
		return data;
	} catch (error) {
		return error;
	}
}
export async function getContactById(id) {
	try {
		const { data } = await getDataMethod('/contacts', id);
		return data;
	} catch (error) {
		return error;
	}
}
export async function updateContact(id, contactData) {
	try {
		const data = await privatePatchRequest(`/contacts/${id}`, contactData);
		return data;
	} catch (error) {
		return error;
	}
}

export async function deleteContact(id) {
	try {
		const { data } = await privateDeleteRequest({ url: `/contacts/${id}` });
		return data;
	} catch (error) {
		return error;
	}
}
