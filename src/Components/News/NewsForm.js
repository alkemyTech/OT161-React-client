import React, { useState, useEffect } from 'react';
import '../../Components/FormStyles.css';
import { Formik } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import './NewsForm.css';
import HeaderBackoffice from '../HeaderBackoffice/HeaderBackoffice';

/**
 *  news Form
 * @param {Object} props
 * @param {Object} [props.patchData] news data
 * @param {number} props.patchData.id news id
 * @param {string} props.patchData.name news name
 * @param {string} props.patchData.content news description
 * @param {string} props.patchData.image news image
 * @param {number} props.patchData.category_id news image
 *
 */

const NewsForm = ({ news }) => {
	const [categories, setCategories] = useState([]);
	function getBase64(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = error => reject(error);
		});
	}

	const getCategory = async () => {
		const url = 'https://ongapi.alkemy.org/api/categories';

		try {
			const res = await axios.get(url);
			console.log(res);
			res.data.data.forEach(element => {
				const category = {
					id: element.id,
					name: element.name,
				};
				setCategories(categories => [...categories, category]);
			});
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getCategory();
	}, []);

	const validacionShema = Yup.object().shape({
		name: Yup.string()
			.required('El titulo es requerido')
			.min(4, 'El titulo debe tener minimo 4 caracteres'),
		content: Yup.string().required('El contenido es requerido'),
		image: Yup.mixed().required('La imagen es requerida'),
		category_id: Yup.number().required('La categoria es requerida'),
	});

	return (
		<div>
			<HeaderBackoffice>
				<h1>Formulario de novedades</h1>
				<Formik
					initialValues={{
						name: news?.name || '',
						content: news?.content || '',
						image: news?.image || '',
						category_id: news?.category_id || '',
					}}
					validationSchema={validacionShema}
					onSubmit={async news => {
						const date = new Date().toISOString();
						const method = news?.id ? 'PATCH' : 'POST';
						const id = news?.id ? `/${news.id}` : '';
						const url = `https://ongapi.alkemy.org/api/news${id}`;

						const data = news?.id
							? { ...news, updated_at: date }
							: { ...news, created_at: date };
						try {
							const res = await axios(
								{ method, url, data },
								{
									headers: { 'Content-Type': 'application/json' },
								}
							);
							console.log(res);
						} catch (err) {
							console.log('Error', err);
						}
					}}
				>
					{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
						setFieldValue,
					}) => (
						<section className='new-section'>
							<form className='new-form' onSubmit={handleSubmit}>
								<label htmlFor='titulo'>Titulo</label>
								<input
									data-testid='titulo'
									type='text'
									name='name'
									id='titulo'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.name}
									placeholder='Titulo'
								/>

								<span>{touched.name && errors.name}</span>
								<label>Contenido</label>
								<CKEditor
									editor={ClassicEditor}
									data={values.content}
									onChange={(event, editor) => {
										const data = editor.getData();
										setFieldValue('content', data);
									}}
								/>
								<span>{touched.content && errors.content}</span>
								<label htmlFor='image'>Imagen</label>
								<input
									data-testid='image'
									type='file'
									name='image'
									accept='image/*'
									onChange={async e => {
										const imageBase64 = await getBase64(e.target.files[0]);
										setFieldValue('image', imageBase64);
									}}
								/>
								<span>{touched.image && errors.image}</span>
								<label htmlFor='category_id'>Categoria</label>
								<select
									className='select-field'
									name='category_id'
									data-testid='categoria'
									value={values.category_id || ''}
									onChange={handleChange}
								>
									<option value='' disabled>
										Selecciona categoria
									</option>
									{categories.map((el, index) => (
										<option key={index} value={el.id}>
											{el.name}
										</option>
									))}
								</select>
								<span>{touched.category_id && errors.category_id}</span>

								<button type='submit'>Submit</button>
							</form>
						</section>
					)}
				</Formik>
			</HeaderBackoffice>
		</div>
	);
};

export default NewsForm;

NewsForm.propTypes = {
	news: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string,
		content: PropTypes.string,
		image: PropTypes.string,
		category_id: PropTypes.number,
	}),
};
