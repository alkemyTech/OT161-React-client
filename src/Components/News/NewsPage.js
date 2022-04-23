import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './NewsPage.css';
import ShowTitle from '../../shared/ShowTitle';
import { getNews } from '../../Services/newService';
import Spinner from '../../shared/Spinner';
import LayoutPublic from '../LayoutPublic/LayoutPublic';
import CustomReactPlayer from '../../shared/VideoPlayer/CustomVideoPlayer';
import NewCard from './NewCard';
export default function NewsPage() {
	const [news, setNews] = useState([]);
	const [newsStatus, setNewsStatus] = useState('idle');

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
			<section className='news'>
				<ShowTitle patchData={{ title: 'Novedades' }} />
				<section className='news__container'>
					{newsStatus === 'loading' && <Spinner />}
					{newsStatus === 'error' && (
						<p>Ups! Algo salio mal, estamos trabajando en ello 👨‍💻</p>
					)}
					{newsStatus === 'success' &&
						news.map(({ image, created_at: createdAt, name, id }) => (
							<NewCard key={id} newData={{ image, createdAt, name, id }} />
						))}
				</section>

				<section className='news__video'>
					<header>Ultimo evento</header>
					<CustomReactPlayer url='https://www.youtube.com/watch?v=4YnSk1gI_Oo' />
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
