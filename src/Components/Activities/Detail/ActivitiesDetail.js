import React, { useEffect, useState } from 'react';
import ShowTitle from './../../../shared/ShowTitle.js';
import './activitiesDetail.css';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Spinner from '../../../shared/Spinner.js';
import { getDataMethod } from '../../../Services/publicApiService.js';
import showAlert from '../../../shared/showAlert.js';

const ActivitiesDetail = () => {
	const [showDetail, setShowDetail] = useState('');
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const { id } = useParams();
	console.log('id', id);

	const errorInfo = {
		type: 'error',
		title: 'Ups, hubo un error',
		message:
			'No se pudieron mostrar los detalles de las actividades, intento mas tarde',
	};

	const getActivityDetail = async () => {
		try {
			const data = await getDataMethod(`activities/:${id}`);
			console.log('datos', data.data.data);
			setShowDetail(data.data.data);
		} catch (error) {
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getActivityDetail();
	}, []);

	if (error === true) {
		showAlert(errorInfo);
	}

	return (
		<section className='activitiesDetail'>
			{loading && <Spinner />}
			<ShowTitle
				patchData={{ title: showDetail.name, background: showDetail.image }}
			/>
			<p className='activitiesDetail-content'>{showDetail.description}</p>
		</section>
	);
};

export default ActivitiesDetail;
