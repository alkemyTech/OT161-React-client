import { getDataMethod, publicPostRequest } from './publicApiService';
import { privatePatchRequest, privateDeleteRequest } from './privateApiService';
export async function getAllTestimonials() {
	try {
		const { data } = await getDataMethod(
			process.env.REACT_APP_TESTIMONIAL_END_POINT
		);
		return data;
	} catch (error) {
		return error;
	}
}

export async function createTestimonial(contactData) {
	try {
		const data = await publicPostRequest(
			process.env.REACT_APP_TESTIMONIAL_END_POINT,
			contactData
		);
		return data;
	} catch (error) {
		return error;
	}
}
export async function getTestimonialById(id) {
	try {
		const { data } = await getDataMethod(
			process.env.REACT_APP_TESTIMONIAL_END_POINT,
			id
		);
		return data;
	} catch (error) {
		return error;
	}
}
export async function updateTestimonial(id, contactData) {
	try {
		const data = await privatePatchRequest(
			`${process.env.REACT_APP_TESTIMONIAL_END_POINT}/${id}`,
			contactData
		);
		return data;
	} catch (error) {
		return error;
	}
}

export async function deleteTestimonial(id) {
	try {
		const { data } = await privateDeleteRequest({
			url: `${process.env.REACT_APP_TESTIMONIAL_END_POINT}/${id}`,
		});
		return data;
	} catch (error) {
		return error;
	}
}
