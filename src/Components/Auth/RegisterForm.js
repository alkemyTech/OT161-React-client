import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../FormStyles.css';
import { createUser } from '../../Services/UsersHTTPService';
import showAlert from '../../shared/showAlert';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import pdf from './terminosycondiciones.pdf';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

const RegisterForm = () => {
	const [acceptedTerms, setAcceptedTerms] = useState(false);
	const history = useHistory();
	const validationSchema = Yup.object({
		name: Yup.string().required('El nombre es obligatorio'),
		email: Yup.string()
			.required('El email es obligatorio')
			.email('Escriba un correo válido'),
		password: Yup.string()
			.required('La contraseña es obligatoria')
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{6,15}$/,
				'La contraseña debe terner mínimo 6 caracteres, contener una mayúscula, un número y un carácter especial'
			),
		confirmPassword: Yup.string()
			.required('Escriba nuevamente la contraseña')
			.oneOf([Yup.ref('password')], 'Ambas contraseñas deben coincidir'),
		termsErrorMsg: Yup.boolean().test(
			'accepted-terms',
			'Los terminos y condiciones no estan aceptados',
			value => acceptedTerms
		),
	});

	async function handleSubmit({ name, email, password }, { resetForm }) {
		resetForm();
		try {
			const res = await createUser({ name, email, password });
			if (res?.request?.status === 422) {
				return showAlert({
					type: 'error',
					title: `El correo: ${email}`,
					message: 'Ya tiene una cuenta con el mismo email',
				});
			}
			showAlert({
				type: 'success',
				title: `Usuario creado correctamente`,
				message: 'Pronto seras redirigido',
			});
			setTimeout(() => {
				history.push('/auth/login');
			}, 3000);
			return;
		} catch (err) {
			console.error(err);
			showAlert({
				type: 'error',
				title: 'Ups, hubo un error',
				message: 'No has podido registrarte, intentelo mas tarde',
			});
		}
	}

	return (
		<>
			<Formik
				initialValues={{
					name: '',
					email: '',
					password: '',
					confirmPassword: '',
					termsErrorMsg: false,
				}}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				{({ errors, handleChange, handleBlur, values }) => (
					<Form className='form-container'>
						<Field
							className='input-field'
							type='text'
							name='name'
							placeholder='Nombre'
							value={values.name}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<ErrorMessage
							name='name'
							component={() => (
								<div className='error-message-form'>{errors.name}</div>
							)}
						/>
						<Field
							className='input-field'
							type='text'
							name='email'
							placeholder='Email'
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<ErrorMessage
							name='email'
							component={() => (
								<div className='error-message-form'>{errors.email}</div>
							)}
						/>
						<Field
							className='input-field'
							type='password'
							name='password'
							placeholder='Contraseña'
							value={values.password}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<ErrorMessage
							name='password'
							component={() => (
								<div className='error-message-form'>{errors.password}</div>
							)}
						/>
						<Field
							className='input-field'
							type='password'
							name='confirmPassword'
							placeholder='Confirme su contraseña'
							value={values.confirmPassword}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<ErrorMessage
							name='confirmPassword'
							component={() => (
								<div className='error-message-form'>
									{errors.confirmPassword}
								</div>
							)}
						/>

						<Popup
							trigger={
								<p className='terms-condicion-button'>
									Leer terminos y condiciones
								</p>
							}
							modal
							position='right center'
						>
							{close => (
								<div className='modal'>
									<div className='content'>
										<Document file={pdf}>
											<Page pageNumber={1} />
										</Document>
									</div>
									<div className='actions'>
										<button
											onClick={() => {
												setAcceptedTerms(true);
												close();
											}}
										>
											Aceptar
										</button>
										<button
											className='button'
											onClick={() => {
												setAcceptedTerms(false);
												close();
											}}
										>
											Cancelar
										</button>
									</div>
								</div>
							)}
						</Popup>
						<div className='error-message-form'>
							{!acceptedTerms && errors.termsErrorMsg}
						</div>

						<button className='submit-btn' type='submit'>
							Registrarse
						</button>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default RegisterForm;
