import React from 'react';
import { Link } from 'react-router-dom';
import '../CardListStyles.css';

const UsersList = () => {
	const usersMock = [
		{ id: 2, name: 'Titulo de prueba', email: 'example@example.com' },
		{ id: 1, name: 'Titulo de prueba', email: 'example@example.com' },
		{ id: 3, name: 'Titulo de prueba', email: 'example@example.com' },
	];

	return (
		<section>
			<header className='news-header'>
				<h1>Listado Usuarios</h1>
				<Link
					to='/backoffice/create-users'
					className='primary-button'
					role='button'
				>
					Crear Usuario
				</Link>
			</header>
			<table className='table-container'>
				<tr>
					<th>Name</th>
					<th>Email</th>
				</tr>
				{usersMock.length > 0 ? (
					usersMock.map(element => {
						return (
							<tr key={element.id}>
								<td className='title'>{element.name}</td>
								<td className='title'>{element.email}</td>
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
					<p>No hay Usuarios</p>
				)}
			</table>
		</section>
	);
};

export default UsersList;
