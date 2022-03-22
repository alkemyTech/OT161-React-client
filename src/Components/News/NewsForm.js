import React, { useState, useEffect } from 'react';
import '../../Components/FormStyles.css';
import { Formik } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import * as Yup from 'yup';

const NewsForm = () => {
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
			// console.log(res.data.data);
			res.data.data.forEach(element => {
				const category = {
					id: element.id,
					name: element.name,
				};
				// console.log(category);
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
		title: Yup.string()
			.required('El titulo es requerido')
			.min(4, 'El titulo debe tener minimo 4 caracteres'),
		content: Yup.string().required('El contenido es requerido'),
		image: Yup.mixed().required('La imagen es requerida'),
		category: Yup.string().required('La categoria es requerida'),
	});

	return (
		<Formik
			initialValues={{ title: '', content: '', image: '', category: '' }}
			validationSchema={validacionShema}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					console.log(values);
					setSubmitting(false);
				}, 400);
			}}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
				setFieldValue,
			}) => (
				<form onSubmit={handleSubmit}>
					<label htmlFor='title'>Titulo</label>
					<input
						type='text'
						name='title'
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.title}
						placeholder='Titulo'
					/>
					{touched.title && errors.title}
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
					{touched.content && errors.content}
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

					{touched.image && errors.image}
					<label htmlFor='category'>Categoria</label>
					<select
						className='select-field'
						name='category'
						value={values.category || ''}
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
					{touched.category && errors.category}

					<button type='submit' disabled={isSubmitting}>
						Submit
					</button>
				</form>
			)}
		</Formik>
	);
};

export default NewsForm;
