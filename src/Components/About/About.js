import React, { useEffect, useState } from 'react';
import ShowTitle from '../../shared/ShowTitle';
import Members from './Members';
import { getDataMethod } from '../../Services/publicApiService';
import showAlert from '../../shared/showAlert';
import Spinner from '../../shared/Spinner';
import SocialNetworks from './SocialNetworks';

const About = () => {
	const [showDescription, setShowDescription] = useState('');
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState({ text: '', valid: null });
	const errorText = 'El texto no se pudo renderizar';

	const getData = async () => {
		try {
			const data = await getDataMethod('organization');
			console.log('datos', data.data.data.short_description);
			setShowDescription(data.data.data.long_description);
		} catch (error) {
			console.log(error);
			showAlert({ type: 'error', title: 'Error', message: errorText });
			setError({ text: errorText, valid: true });
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<section>
			<ShowTitle patchData={{ title: 'Nosotros' }}></ShowTitle>
			<div>
				<h3>Sobre Nosotros</h3>
				{error.valid && <p>{error.text}</p>}
				<div
					dangerouslySetInnerHTML={{ __html: `<p>${showDescription}</p>` }}
				></div>
				{loading && <Spinner />}
			</div>

			<div>
				<h1>Miembros</h1>
				<p>Conoce a los valiosos miembros de nuestra ONG</p>
				<Members />
			</div>
			<div>
				<SocialNetworks />
			</div>
		</section>
	);
};

export default About;
