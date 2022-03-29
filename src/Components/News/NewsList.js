import React from 'react';
import '../CardListStyles.css';
import { Link } from 'react-router-dom';
const NewsList = () => {
	const newsMock = [
		{
			id: 2,
			image:
				'https://e.rpp-noticias.io/normal/2022/01/25/1207263fjxxrjnwqaewpn-jpg.jpg',
			name: 'Titulo de prueba and my favorite title of my history worldly',
			createdAt: '2022-18-03',
		},
		{
			id: 1,
			image:
				'https://e.rpp-noticias.io/normal/2022/01/25/1207263fjxxrjnwqaewpn-jpg.jpg',
			name: 'Titulo de prueba',
			createdAt: '2022-18-03',
		},
		{
			id: 3,
			image:
				'https://e.rpp-noticias.io/normal/2022/01/25/1207263fjxxrjnwqaewpn-jpg.jpg',
			name: 'Titulo de prueba',
			createdAt: '2022-18-03',
		},
	];

	return (
		<section>
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
			<ul className='list-container'>
				{newsMock.length > 0 ? (
					newsMock.map(element => {
						return (
							<li className='card-info' key={element.id}>
								<img src={element.image} alt={element.name} />
								<span>{element.name}</span>
								<span>{element.createdAt}</span>
								<span className='options'>
									<button>
										<i className='fa-solid fa-pencil'></i>
									</button>
									<button>
										<i className='fa-solid fa-trash'></i>
									</button>
								</span>
							</li>
						);
					})
				) : (
					<p>No hay novedades</p>
				)}
			</ul>
		</section>
	);
};

export default NewsList;
