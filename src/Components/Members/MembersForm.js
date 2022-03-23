import '../FormStyles.css';
import React from 'react';
import { Formik } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const MembersForm = ({ member }) => {
	const SUPPORTED_FORMATS = /(jpg|png)/;
	function getBase64(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = error => reject(error);
		});
	}

	const validacionShema = Yup.object().shape({
		name: Yup.string()
			.required('El titulo es requerido')
			.min(4, 'El titulo debe tener minimo 4 caracteres'),
		descripcion: Yup.string().required('La descripcion es requerida'),
		image: Yup.mixed()
			.required('La imagen es requerida')
			.test('fileType', 'El formato no es correcto', image => {
				if (!SUPPORTED_FORMATS.test(image)) return false;
				return true;
			}),
		facebookUrl: Yup.string()
			.required('El campo Facebook es requerido')
			.url('La url invalida'),
		linkedinUrl: Yup.string()
			.required('El campo linkedin es requerido')
			.url('La url invalida'),
	});

	return (
		<Formik
			initialValues={{
				name: member?.name || '',
				image: member?.image || '',
				descripcion: member?.descripcion || '',
				facebookUrl: member?.facebookUrl || '',
				linkedinUrl: member?.linkedinUrl || '',
			}}
			validationSchema={validacionShema}
			onSubmit={async values => {
				console.log(values);
				// const date = new Date().toISOString();
				// const method = news?.id ? 'PATCH' : 'POST';
				// const id = news?.id ? `/${news.id}` : '';
				// const url = news?.id
				// 	? `https://ongapi.alkemy.org/api/news${id}`
				// 	: 'https://ongapi.alkemy.org/api/news';
				// const newsObj = {
				// 	name: values.name,
				// 	content: values.content,
				// 	image: values.image,
				// 	category_id: Number.parseInt(values.category_id),
				// };
				// const data = news?.id
				// 	? { ...newsObj, updated_at: date }
				// 	: { ...newsObj, created_at: date };
				// try {
				// 	const res = await axios(
				// 		{ method, url, data },
				// 		{
				// 			headers: { 'Content-Type': 'application/json' },
				// 		}
				// 	);
				// 	console.log(res);
				// } catch (err) {
				// 	console.log('Error', err);
				// }
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
						<label htmlFor='name'>Nombre</label>
						<input
							type='text'
							name='name'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.name}
							placeholder='Titulo'
						/>
						<span>{touched.name && errors.name}</span>
						<label htmlFor='image'>Imagen</label>
						<input
							type='file'
							name='image'
							accept='image/png, image/jpeg'
							onChange={async e => {
								const imageBase64 = await getBase64(e.target.files[0]);
								setFieldValue('image', imageBase64);
							}}
						/>
						<span>{touched.image && errors.image}</span>
						<label htmlFor='content'>Descripcion</label>
						<CKEditor
							editor={ClassicEditor}
							data={values.descripcion}
							onReady={editor => {
								console.log('El editor esta listo', editor);
							}}
							onChange={(event, editor) => {
								const data = editor.getData();
								setFieldValue('descripcion', data);
							}}
						/>
						<span>{touched.descripcion && errors.descripcion}</span>
						<label htmlFor='facebookUrl'>Facebook</label>
						<input
							type='text'
							name='facebookUrl'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.facebookUrl}
							placeholder='Facebook'
						/>
						<span>{touched.facebookUrl && errors.facebookUrl}</span>

						<label htmlFor='facebookUrl'>Linkedin</label>
						<input
							type='text'
							name='linkedinUrl'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.linkedinUrl}
							placeholder='Facebook'
						/>
						<span>{touched.linkedinUrl && errors.linkedinUrl}</span>

						<button type='submit'>Submit</button>
					</form>
				</section>
			)}
		</Formik>
	);
};

export default MembersForm;

MembersForm.propTypes = {
	member: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string,
		image: PropTypes.string,
		descripcion: PropTypes.string,
		facebookUrl: PropTypes.string,
		linkedinUrl: PropTypes.string,
	}),
};
