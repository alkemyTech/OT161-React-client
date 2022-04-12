import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../FormStyles.css';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import pdf from './terminosycondiciones.pdf';

const RegisterForm = () => {
	const [acceptedTerms, setAcceptedTerms] = useState(false);

	return (
		<>
			<Formik
				initialValues={{
					email: '',
					password: '',
					confirmPassword: '',
					termsErrorMsg: '',
				}}
				onSubmit={(values, { resetForm }) => {
					if (acceptedTerms === true) {
						resetForm();
						console.log(values);
					} else {
						setAcceptedTerms(false);
					}
				}}
				validate={values => {
					const errors = {};
					// validate email
					if (!values.email) {
						errors.email = 'El email es obligatorio';
					} else if (
						!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
							values.email
						)
					) {
						errors.email = 'Escriba un correo válido';
					}

					// validate password
					if (!values.password) {
						errors.password = 'La contraseña es obligatoria';
					} else if (
						!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{6,15}$/.test(
							values.password
						)
					) {
						errors.password =
							'La contraseña debe terner mínimo 6 caracteres, contener una mayúscula, un número y un carácter especial';
					}

					if (!values.confirmPassword) {
						errors.confirmPassword = 'Escriba nuevamente la contraseña';
					} else if (!(values.confirmPassword === values.password)) {
						errors.confirmPassword = 'Ambas contraseñas deben coincidir';
					}

					if (acceptedTerms === false) {
						errors.termsErrorMsg =
							'Los terminos y condiciones no estan aceptados';
					}

					return errors;
				}}
			>
				{({ errors }) => (
					<Form className='form-container'>
						<Field
							className='input-field'
							type='text'
							name='email'
							placeholder='Enter email'
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
							placeholder='Enter password'
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
							placeholder='Confirm password'
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
												console.log('modal closed ');
												close();
											}}
										>
											Cancelar
										</button>
									</div>
								</div>
							)}
						</Popup>
						<div className='error-message-form'>{errors.termsErrorMsg}</div>
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
