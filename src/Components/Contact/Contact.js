import React, { useEffect, useState } from 'react';
import { getDataMethod } from '../../Services/publicApiService';
import ContactForm from './ContactForm';
import LayoutPublic from '../LayoutPublic/LayoutPublic';
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
		<>
		<LayoutPublic>
			<div className='contact_container'>
			<div className='contact_showtitle'>
				<ShowTitle
					patchData={{ title: 'Contacte con nosotros', image: contactImage }}
				/>
			</div>
			<ContactForm />
		</LayoutPublic>
		</>
	);
};

export default Contact;
