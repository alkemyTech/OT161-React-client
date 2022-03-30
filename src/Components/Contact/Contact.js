import React, { useEffect, useState } from 'react';
import { getDataMethod } from '../../Services/publicApiService';
import DataContact from './DataContact';

const Contact = () => {
	const [dataContact, setDataContact] = useState([]);
	const contactONG = async () => {
		const data = await getDataMethod('organization');
		console.log('data:', data.data.data);
		setDataContact(data.data.data);
	};

	useEffect(() => {
		contactONG();
	}, []);

	return (
		<div>
			{dataContact && (
				<DataContact
					key={dataContact.id}
					facebook={dataContact.facebook_url}
					linkedin={dataContact.linkedin_url}
					instagram={dataContact.instagram_url}
					twitter={dataContact.twitter_url}
				/>
			)}
		</div>
	);
};

export default Contact;
