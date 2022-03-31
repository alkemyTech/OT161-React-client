import React, { useState } from 'react';
import * as yup from 'yup';
import { ErrorMessage, Formik, Field } from 'formik';
import { createContact } from '../../Services/contactService';

const ContactForm = () => {
	const [contactStatus, setContactStatus] = useState('idle');
	const formSchema = yup.object().shape({
		email: yup
			.string()
			.required('Campo requerido')
			.max(255, 'Maximo 255 caracteres'),
		name: yup
			.string()
			.min(4, 'El nombre debe contener más de 4 caracteres')
			.required('Se requiere nombre'),
		phone: yup
			.number()
			.required('Campo requerido')
			.min(8, 'Minimo 8 caracteres'),
		message: yup.string().required('Se requiere un mensaje'),
	});
	return (
		<div>
			<Formik
				initialValues={{
					name: '',
					email: '',
					phone: '',
					message: '',
				}}
				validationSchema={formSchema}
				onSubmit={async ({ email, name, phone, message }, { resetForm }) => {
					setContactStatus('loading');
					try {
						const res = await createContact({
							email,
							name,
							message,
							phone: String(phone),
						});
						if (!res.success) return setContactStatus('error');
						setContactStatus('success');
						resetForm();
					} catch (error) {
						console.error('error');
						setContactStatus('error');
					} finally {
						setTimeout(() => {
							setContactStatus('idle');
						}, 2000);
					}
				}}
			>
				{({ values, handleSubmit, handleChange, handleBlur }) => (
					<form className='form-container' onSubmit={handleSubmit}>
						<input
							className='input-field'
							name='name'
							id='name'
							type='text'
							placeholder='Name'
							value={values.name}
							onChange={handleChange}
							onBlur={handleBlur}
							required
						/>
						<ErrorMessage name='name' component='p' className='input-error' />
						<input
							className='input-field'
							name='email'
							id='email'
							type='email'
							placeholder='Email'
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
							required
						/>
						<ErrorMessage name='email' component='p' className='input-error' />

						<Field
							className='input-field'
							name='phone'
							id='phone'
							type='number'
							placeholder='Phone'
							value={values.phone}
							onChange={handleChange}
							onBlur={handleBlur}
							required
						/>
						<ErrorMessage name='phone' component='p' className='input-error' />
						<textarea
							className='input-field'
							name='message'
							id='message'
							type='text'
							placeholder='Message'
							value={values.message}
							onChange={handleChange}
							onBlur={handleBlur}
							required
						/>
						<ErrorMessage
							name='message'
							component='p'
							className='input-error'
						/>

						<button
							className='submit-btn'
							type='submit'
							disabled={contactStatus === 'loading'}
						>
							Send
						</button>
						{contactStatus === 'success' && <span>Enviado correctamente</span>}
						{contactStatus === 'error' && <span>Upps! Algo salio mal</span>}
					</form>
				)}
			</Formik>
		</div>
	);
};

export default ContactForm;
