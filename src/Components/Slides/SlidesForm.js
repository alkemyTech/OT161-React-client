import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import '../FormStyles.css';
import { createSlide, updateSlide } from '../../Services/slidesService';

const SlidesForm = props => {
	const { patchData } = props;
	const [previewImage, setPreviewImage] = useState('');

	const slideSchema = yup.object().shape({
		image: yup.string().required('Se requiere una imagen'),
		name: yup
			.string()
			.min(4, 'El nombre debe contener más de 4 caracteres')
			.required('Se requiere nombre'),
		order: yup.number().required(),
		description: yup.string().required('Se requiere una descripción'),
	});

	const handleSubmit = async (values, setSubmitting) => {
		const now = new Date().toISOString();

		const urlForUpdate = `https://ongapi.alkemy.org/api/slides${patchData?.id}`;
		const data = patchData?.id
			? { ...values, updated_at: now }
			: { ...values, created_at: now };
		const method = patchData?.id
			? updateSlide(urlForUpdate, data)
			: createSlide(data);
		try {
			const result = await method;
			console.log(result);
		} catch (error) {
			console.error(error);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<Formik
			initialValues={{
				image: patchData ? patchData.image : '',
				name: patchData ? patchData.name : '',
				order: patchData ? patchData.order : 0,
				description: patchData ? patchData.description : '',
			}}
			onSubmit={(values, { setSubmitting }) =>
				handleSubmit(values, setSubmitting)
			}
			validationSchema={slideSchema}
		>
			{({ isSubmitting, setFieldValue }) => (
				<Form className='form-container'>
					{previewImage && (
						<img className='preview-img' src={previewImage} alt='Slide' />
					)}
					<input
						className='input-field'
						type='file'
						name='image'
						onChange={e => {
							const reader = new FileReader();
							const file = e.target.files[0];
							reader.onload = () => {
								setFieldValue('image', reader.result);
								setPreviewImage(reader.result);
							};
							reader.readAsDataURL(file);
						}}
						accept='image/png, image/jpeg'
						required
					></input>
					<ErrorMessage className='input-error' name='image' component='div' />
					<Field
						className='input-field'
						type='text'
						name='name'
						placeholder='Slide Title'
						required
					/>
					<ErrorMessage className='input-error' name='name' component='div' />
					<Field
						className='input-field'
						type='number'
						name='order'
						placeholder='Slide Order'
						required
					/>
					<ErrorMessage className='input-error' name='order' component='div' />
					<CKEditor
						editor={ClassicEditor}
						onChange={(event, editor) => {
							setFieldValue('description', editor.getData());
						}}
					/>
					<ErrorMessage
						className='input-error'
						name='description'
						component='div'
					/>
					<button className='submit-btn' type='submit' disabled={isSubmitting}>
						Send
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default SlidesForm;

SlidesForm.propTypes = {
	patchData: PropTypes.shape({
		id: PropTypes.number.isRequired,
		order: PropTypes.number.isRequired,
		name: PropTypes.string,
		description: PropTypes.string,
		image: PropTypes.string,
	}),
};
