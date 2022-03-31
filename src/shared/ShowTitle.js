import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ShowTitle = ({ patchData }) => {
	const [previewImage, setPreviewImage] = useState(patchData?.image || null);
	if (patchData?.image) {
		setPreviewImage(patchData?.image);
	}
	return (
		<>
			<h1>{patchData.title}</h1>
			<img
				src={previewImage}
				alt='preview'
				width={100}
				height={100}
				style={{ objectFit: 'cover' }}
			/>
		</>
	);
};

export default ShowTitle;

ShowTitle.propTypes = {
	patchData: PropTypes.shape({
		title: PropTypes.string.isRequired,
		image: PropTypes.string,
	}),
};
