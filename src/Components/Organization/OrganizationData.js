import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './backofficeOrganization.css';
import { Link } from 'react-router-dom';
function OrganizationData() {
	const [organization, setOrganization] = useState({});
	const [statusData, setStatusData] = useState('idle');

	async function fetchOrganization() {
		setStatusData('loading');
		try {
			const { data } = await axios.get(
				'https://ongapi.alkemy.org/api/organization'
			);
			if (!data.success) return setStatusData('error');
			setOrganization(data.data);
			setStatusData('success');
		} catch (error) {
			setStatusData('error');
			console.error(error);
		}
	}
	useEffect(() => {
		fetchOrganization();
	}, []);

	return (
		<section className='backoffice_organization'>
			<header className='header'>Datos actuales de la organización</header>
			<div className='backoffice_organization--data '>
				{statusData === 'success' && (
					<>
						<img src={organization.logo} alt={organization.name} width={200} />
						<div>
							<h1>{organization.name}</h1>
							<p>{organization.short_description}</p>
						</div>
					</>
				)}
				{statusData === 'error' && <h1>Upps! Algo salio mal</h1>}
				{statusData === 'loading' && <div className='loader' />}
			</div>
			<div className='backoffice_organization--button'>
				<Link className='submit-btn' to='/backoffice/organization-edit'>
					Editar datos
				</Link>
			</div>
		</section>
	);
}

export default OrganizationData;
