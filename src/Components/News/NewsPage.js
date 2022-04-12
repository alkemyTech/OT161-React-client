import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './NewsPage.css';
import { Link, useHistory } from 'react-router-dom';
import ShowTitle from '../../shared/ShowTitle';
import { getNews } from '../../Services/newService';
import Spinner from '../../shared/Spinner';
import LayoutPublic from '../LayoutPublic/LayoutPublic';
export default function NewsPage() {
	const [news, setNews] = useState([]);
	const [newsStatus, setNewsStatus] = useState('idle');
	const history = useHistory();
	function handlePrevNavigtation() {
		history.goBack();
	}
	useEffect(() => {
		async function fetchNews() {
			setNewsStatus('loading');
			try {
				const { data } = await getNews();
				if (!data.success) return setNewsStatus('error');
				setNews(data.data);
				setNewsStatus('success');
			} catch (error) {
				console.error(error);
				setNewsStatus('error');
			}
		}
		fetchNews();
	}, []);

	return (
		<LayoutPublic>
		<section className='news__detail'>
			<header>
				<span onClick={handlePrevNavigtation}>
					<i className='fa-solid fa-angle-left' />
				</span>
				<ShowTitle patchData={{ title: 'Novedades' }} />
			</header>
			<section className='news__container'>
				{newsStatus === 'loading' && <Spinner />}
				{newsStatus === 'error' && (
					<p>Ups! Algo salio mal, estamos trabajando en ello 👨‍💻</p>
				)}
				{newsStatus === 'success' &&
					news.map(({ image, created_at: createdAt, name, id }) => (
						<Link to={`/novedades/${id}`} className='news__card' key={id}>
							<img src={image} alt='' />
							<span>{new Date(createdAt).toLocaleDateString()}</span>
							<div className='news__card--title'>{name}</div>
						</Link>
					))}
			</section>
		</section>
		</LayoutPublic>
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
