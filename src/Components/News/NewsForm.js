import React, { useState, useEffect } from 'react';
import '../../Components/FormStyles.css';
import { Formik } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

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

	return (
		<Formik
			initialValues={{ title: '', content: '', image: '', category: '' }}
			//   validate={(values) => {
			//     const errors = {};
			//     if (!values.email) {
			//       errors.email = "Required";
			//     } else if (
			//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
			//     ) {
			//       errors.email = "Invalid email address";
			//     }
			//     return errors;
			//   }}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
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
					{/* {errors.email && touched.email && errors.email} */}
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

					{/* {errors.password && touched.password && errors.password} */}
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
							<option key={index}>{el.name}</option>
						))}
					</select>

					<button type='submit' disabled={isSubmitting}>
						Submit
					</button>
				</form>
			)}
		</Formik>
	);
};

export default NewsForm;
