import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDataMethod } from '../../Services/publicApiService';
import showAlert from '../../shared/showAlert';
import ShowTitle from '../../shared/ShowTitle';
import Spinner from '../../shared/Spinner';

const Activities = () => {
	const [activitiesData, setActivitiesData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const errorInfo = {
		type: 'error',
		title: 'Ups, hubo un error',
		message: 'No se pudieron mostrar las actividades, intento mas tarde',
	};

	const getData = async () => {
		try {
			const data = await getDataMethod('activities');
			console.log('datos', data.data.data);
			setActivitiesData(data.data.data);
		} catch (error) {
			console.log(error);
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	if (error === true) {
		showAlert(errorInfo);
	}

	return (
		<section>
			<div>
				<ShowTitle patchData={{ title: 'Actividades' }}></ShowTitle>
			</div>
			{loading && <Spinner />}
			{activitiesData.map(el => (
				<div key={el.id}>
					<img src={el.image} alt={el.name} width='100px' height='100px'></img>
					<p>{el.name}</p>
					<Link to={`/actividades/${el.id}`}>
						<button>Detalles</button>
					</Link>
				</div>
			))}
		</section>
	);
};

export default Activities;
