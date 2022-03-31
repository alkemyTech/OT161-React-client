import React from 'react';
import PropTypes from 'prop-types';
import './NewsPage.css';
import { Link, useHistory } from 'react-router-dom';
import ShowTitle from '../../shared/ShowTitle';
export default function NewsPage({ news }) {
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
				<ShowTitle patchData={{ title: 'Novedades' }} />
			</header>
			<section className='news__container'>
				{news.map(({ image, created_at: createdAt, name, id }) => (
					<Link to={`/novedades/${id}`} className='news__card' key={id}>
						<img src={image} alt='' />
						<span>{new Date(createdAt).toLocaleDateString()}</span>
						<div className='news__card--title'>{name}</div>
					</Link>
				))}
			</section>
		</section>
	);
}

NewsPage.propTypes = {
	news: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			createAt: PropTypes.string,
			image: PropTypes.string,
		})
	).isRequired,
};
NewsPage.defaultProps = {
	news: [],
};
