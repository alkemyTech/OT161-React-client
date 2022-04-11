import React, { useEffect, useState } from 'react';
import { getDataMethod } from '../../Services/publicApiService';
import ContactForm from './ContactForm';
import DataContact from './DataContact';
import ShowTitle from '../../shared/ShowTitle';
import contactImage from '../../assets/image-contact.png';

const Contact = () => {
	const [dataContact, setDataContact] = useState([]);
	const contactONG = async () => {
		const data = await getDataMethod('organization');
		setDataContact(data.data.data);
	};

	useEffect(() => {
		contactONG();
	}, []);

	return (
		<div className='contact_container'>
			<div className='contact_showtitle'>
				<ShowTitle
					patchData={{ title: 'Contacte con nosotros', image: contactImage }}
				/>
			</div>
			<ContactForm />
			{dataContact && (
				<DataContact
					key={dataContact.id}
					address={dataContact.address}
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
