import React, { useEffect, useState } from 'react';
import { getDataMethod } from '../../Services/publicApiService';
import showAlert from '../../shared/showAlert';
import ShowTitle from '../../shared/ShowTitle';
import Spinner from '../../shared/Spinner';

const Activities = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const getData = async () => {
		try {
			const data = await getDataMethod('activities');
			console.log('datos', data.data.data);
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
		showError();
	}

	return (
		<section>
			<div>
				<ShowTitle patchData={{ title: 'Actividades' }}></ShowTitle>
			</div>
			{loading && <Spinner />}
		</section>
	);
};

export default Activities;

// function that contains showAlert error
const showError = () => {
	showAlert({
		type: 'error',
		title: 'Ups, hubo un error',
		message: 'No se pudieron mostrar las actividades, intento mas tarde',
	});
};
