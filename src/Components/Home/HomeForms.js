import React, { useState } from 'react';
import { ErrorMessage, Formik } from 'formik';
import axios from 'axios';

const HomeForms = () => {
	const [image, setImage] = useState('');

	// function getBase64(file) {
	// 	return new Promise((resolve, reject) => {
	// 	  const reader = new FileReader();
	// 	  reader.readAsDataURL(file);
	// 	  reader.onload = () => resolve(reader.result);
	// 	  reader.onerror = (error) => reject(error);
	// 	});
	//   }

	const toBase64 = archivos => {
		Array.from(archivos).forEach(archivo => {
			const reader = new FileReader();
			reader.readAsDataURL(archivo);
			reader.onload = function () {
				let auxiliarArr = [];
				const base64 = reader.result;
				// console.log(base64);
				auxiliarArr = base64.split(',');
				setImage(auxiliarArr[1]);
				// console.log(auxiliarArr[1]);
			};
		});
	};
	return (
		<div>
			<Formik
				initialValues={{
					textSlide: '',
					slideImage: '',
				}}
				validate={valores => {
					const errors = {};
					if (!valores.textSlide) {
						errors.textSlide = (
							<div>
								<p>Por favor inserte un título</p>
							</div>
						);
					}
					// else if (valores.textSlide.length > 20) {
					// 	errors.textSlide = (
					// 		<div>
					// 			<p>El titulo no puede contener más de 20 caracteres</p>
					// 		</div>
					// 	);
					// }

					// if (!valores.slideImage) {
					// 	errors.slideImage = (
					// 		<div>
					// 			<p>Please insert a Image</p>
					// 		</div>
					// 	);
					// }

					return errors;
				}}
				onSubmit={async ({ textSlide }, { resetForm }) => {
					resetForm();
					// console.log('El choclo de base 64:', image);
					// console.log(valores);
					console.log({ textSlide, image });
					try {
						// no se si esta es la ruta
						await axios.post('https://ongapi.alkemy.org/api/slides', {
							name: textSlide,
							image: image,
						});
					} catch (err) {
						console.log(err);
					}
				}}
			>
				{({ values, errors, handleSubmit, handleChange, handleBlur }) => (
					<form className="form-container" onSubmit={handleSubmit}>
						<input
							className="input-field"
							type="text"
							name="textSlide"
							value={values.textSlide}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="textSlide"
						/>
						<ErrorMessage
							name="textSlide"
							component={() => <p>{errors.textSlide}</p>}
						/>
						<input
							className="input-field"
							type="file"
							id="slideImage"
							name="slideImage"
							// value={values.slideImage}
							onChange={e => toBase64(e.target.files)}
							placeholder="Write some slideImage"
						/>
						{image && (
							<img
								src={image}
								alt="No se pudo mostrar la imagen"
								style={{ width: '300px' }}
							/>
						)}

						<ErrorMessage
							name="slideImage"
							component={() => <p>{errors.slideImage}</p>}
						/>
						<button className="submit-btn" type="submit">
							Send
						</button>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default HomeForms;
