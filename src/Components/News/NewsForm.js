import React, { useState, useEffect } from 'react';
import '../../Components/FormStyles.css';
import { Formik } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import './NewsForm.css';

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
		category_id: Yup.string().required('La categoria es requerida'),
	});

	return (
		<Formik
			initialValues={{
				name: news?.name || '',
				content: news?.content || '',
				image: news?.image || '',
				category_id: news?.category_id || '',
			}}
			validationSchema={validacionShema}
			onSubmit={async values => {
				const date = new Date().toISOString();
				const method = news?.id ? 'PATCH' : 'POST';
				const id = news?.id ? `/${news.id}` : '';
				const url = news?.id
					? `https://ongapi.alkemy.org/api/news${id}`
					: 'https://ongapi.alkemy.org/api/news';
				const data = {
					name: values.name,
					content: values.content,
					image: values.image,
					category_id: Number.parseInt(values.category_id),
					created_at: date,
				};
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
						<label htmlFor='name'>Titulo</label>
						<input
							type='text'
							name='name'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.name}
							placeholder='Titulo'
						/>
						<span>{touched.name && errors.name}</span>
						<label htmlFor='content'>Contenido</label>
						<CKEditor
							editor={ClassicEditor}
							data={values.content}
							onReady={editor => {
								console.log('El editor esta listo', editor);
							}}
							onChange={(event, editor) => {
								const data = editor.getData();
								setFieldValue('content', data);
							}}
						/>
						<span>{touched.content && errors.content}</span>
						<label htmlFor='image'>Imagen</label>
						<input
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
							value={values.category_id || ''}
							onChange={handleChange}
						>
							<option value='' disabled>
								Select category
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
