import React from 'react';
import PropTypes from 'prop-types';

const RenderHTML = ({ textHTML }) => {
	return <div dangerouslySetInnerHTML={{ __html: { textHTML } }} />;
};

export default RenderHTML;

RenderHTML.propTypes = {
	textHTML: PropTypes.string,
};
