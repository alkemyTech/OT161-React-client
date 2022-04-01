import React from 'react';
import ShowTitle from './../../../shared/ShowTitle.js';
import './activitiesDetail.css';
import PropTypes from 'prop-types';


const ActivitiesDetail = ({ title, backgroundImage = null, content }) => {
	
    return (
		<section className='activitiesDetail'>
			<ShowTitle title={title} background-image={backgroundImage} />
			<p className='activitiesDetail-content'>{content}</p>
		</section>
	);
};

export default ActivitiesDetail;

ActivitiesDetail.propTypes = {
	title: PropTypes.string,
	backgroundImage: PropTypes.string,
	content: PropTypes.string,
};