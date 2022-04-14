import React, { useEffect } from 'react';
import '../CardListStyles.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsData, newsSelector } from '../../features/news/newSlice';
import Spinner from '../../shared/Spinner';
import showAlert from '../../shared/showAlert';
import HeaderBackoffice from '../HeaderBackoffice/HeaderBackoffice';
const NewsList = () => {
	const dispatch = useDispatch();
	const news = useSelector(newsSelector);

	const newsStatus = useSelector(states => states.news);

	console.log(news);

	useEffect(() => {
		if (newsStatus.status === 'idle') {
			dispatch(getNewsData());
		}
	}, [newsStatus, dispatch]);

	if (newsStatus.status === 'failed') {
		showAlert({
			type: 'error',
			title: 'Ups, hubo un error',
			message: 'No fue posible mostrar las novedades, intentelo mas tarde',
		});
	}

	return (
		<section>
			<HeaderBackoffice>
				<header className='news-header'>
					<h1>Listado de Novedades</h1>
					<Link
						to='/backoffice/create-news'
						className='primary-button'
						role='button'
					>
						Crear novedad
					</Link>
				</header>
				<table className='table-container'>
					<tr>
						<th>Imagen</th>
						<th>Titulo</th>
						<th>Creado el</th>
						<th>Opciones</th>
					</tr>
					{newsStatus.status === 'loading' && <Spinner />}
					{newsStatus.status === 'succeeded' &&
						news.news.data.map(element => {
							return (
								<tr key={element.id}>
									<td>
										<img src={element.image} alt={element.name} />
									</td>
									<td className='title'>{element.name}</td>
									<td>{element.created_at}</td>
									<td className='options'>
										<button>
											<i className='fa-solid fa-pencil'></i>
										</button>
										<button>
											<i className='fa-solid fa-trash'></i>
										</button>
									</td>
								</tr>
							);
						})}
				</table>
			</HeaderBackoffice>
		</section>
	);
};

export default NewsList;
