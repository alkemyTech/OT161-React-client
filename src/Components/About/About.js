import React, { useEffect, useState } from 'react';
import ShowTitle from '../../shared/ShowTitle';
// import Members from './Members';
import { getDataMethod } from '../../Services/publicApiService';
const About = () => {
	const [showDescription, setShowDescription] = useState('');
	const [error, setError] = useState({ text: '', valid: null });
	const errorText = 'El texto no se pudo renderizar';

	const getData = async () => {
		try {
			const data = await getDataMethod('organization');
			console.log('datos', data.data.data.short_description);
			setShowDescription(data.data.data.long_description);
		} catch (error) {
			console.log(error);
			setError({ text: errorText, valid: true });
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
			</div>

			<div>
				<h1>Miembros</h1>
				<p>Conoce a los valiosos miembros de nuestra ONG</p>
				{/* <Members /> */}
			</div>
		</section>
	);
};

export default About;
