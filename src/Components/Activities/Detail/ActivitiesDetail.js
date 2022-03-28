import React from 'react';
import Title from '../'; // Falta enlazar al componente de Titulo
import './activitiesDetail.css';
import PropTypes from 'prop-types';

const ActivitiesDetail = ({ title, backgroundImage = null, content }) => {
	
    return (
		<section className='activitiesDetail'>
			<Title title={title} background-image={backgroundImage} />
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