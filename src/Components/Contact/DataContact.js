import React from 'react';
import ShowTitle from '../../shared/ShowTitle';
import PropTypes from 'prop-types';

const Contact = ({
	titleContact,
	facebook,
	linkedin,
	instagram,
	twitter,
	address,
	phone,
}) => {
	return (
		<section>
			<div>
				<ShowTitle patchData={{ title: titleContact }} />
			</div>
			<div>
				<ul>
					<li>{address}</li>
					<li>{phone}</li>
					<li>{facebook}</li>
					<li>{linkedin}</li>
					<li>{instagram}</li>
					<li>{twitter}</li>
				</ul>
			</div>
		</section>
	);
};

export default Contact;

Contact.propTypes = {
	titleContact: PropTypes.string,
	address: PropTypes.string,
	phone: PropTypes.string,
	linkedin: PropTypes.string,
	facebook: PropTypes.string,
	instagram: PropTypes.string,
	twitter: PropTypes.string,
};
