import React from 'react';
import HeaderPublic from './HeaderPublic/HeaderPublic';
import FooterPublic from './FooterPublic/FooterPublic';
import PropTypes from 'prop-types';
const LayoutPublic = ({ children }) => {
	return (
		<main>
			<HeaderPublic />
			<section>
                {children}
            </section>
			<FooterPublic />
		</main>
	);
};

export default LayoutPublic;

LayoutPublic.propTypes = {
	children: PropTypes.any,
};
