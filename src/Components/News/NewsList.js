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
			<table className='table-container'>
				<tr>
					<th>Imagen</th>
					<th>Titulo</th>
					<th>Creado el</th>
					<th>Opciones</th>
				</tr>
				{newsMock.length > 0 ? (
					newsMock.map(element => {
						return (
							<tr key={element.id}>
								<td>
									<img src={element.image} alt={element.name} />
								</td>
								<td className='title'>{element.name}</td>
								<td>{element.createdAt}</td>
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
					})
				) : (
					<p>No hay novedades</p>
				)}
			</table>
		</section>
	);
};

export default NewsList;
