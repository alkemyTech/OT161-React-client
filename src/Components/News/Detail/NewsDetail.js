import React from 'react';
import PropTypes from 'prop-types';
import './NewsDetail.css';
import { useHistory } from 'react-router-dom';
export default function NewsDetail({ title, image, content }) {
	const history = useHistory();
	function handlePrevNavigtation() {
		history.goBack();
	}
	return (
		<section className='news__detail'>
			<header>
				<span onClick={handlePrevNavigtation}>
					<i className='fa-solid fa-angle-left' />
				</span>
				Novedades
			</header>
			<img src={image} alt={title} />
			<div className='news__detail--content'>
				<h1>{title}</h1>
				<div dangerouslySetInnerHTML={{ __html: content }}></div>
			</div>
		</section>
	);
}

NewsDetail.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	content: PropTypes.string,
};
