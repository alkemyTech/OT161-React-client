import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ShowTitle = ({ patchData }) => {
	const [previewImage, setPreviewImage] = useState(patchData?.image || null);
    if (patchData?.image) {
        setPreviewImage(patchData?.image);
    }
	return (
		<>
			<h1>Title</h1>
			<img src='' alt='' />
            {previewImage && (
				<img
					src={previewImage}
					alt='preview'
					width={100}
					height={100}
					style={{ objectFit: 'cover' }}
				/>
			)}
		</>
	);
};

export default ShowTitle;

ShowTitle.propTypes = {
	patchData: PropTypes.shape({
		title: PropTypes.number.isRequired,
		image: PropTypes.string,
	}),
};
