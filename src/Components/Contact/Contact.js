import React from 'react';
import ContactForm from './ContactForm';
import LayoutPublic from '../LayoutPublic/LayoutPublic';
import ShowTitle from '../../shared/ShowTitle';
import contactImage from '../../assets/image-contact.png';

const Contact = () => {
	return (
		<>
			<LayoutPublic>
				<div className='contact_container'>
					<div className='contact_showtitle'>
						<ShowTitle
							patchData={{
								title: 'Contacte con nosotros',
								image: contactImage,
							}}
						/>
					</div>
					<ContactForm />
				</div>
			</LayoutPublic>
		</>
	);
};

export default Contact;
