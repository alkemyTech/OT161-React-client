import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../FormStyles.css';

const RegisterForm = () => {
	return (
		<>
			<Formik
				initialValues={{
					email: '',
					password: '',
					confirmPassword: '',
				}}
				onSubmit={(values, { resetForm }) => {
					resetForm();
					console.log(values);
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
					return errors;
				}}
			>
				{({ errors, touched, handleChange, handleBlur, values }) => (
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
						<PopupExample />
						<button className='submit-btn' type='submit'>
							Log In
						</button>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default RegisterForm;

const PopupExample = () => (
	<Popup
		trigger={<p>Leer terminos y condiciones</p>}
		modal
		position='right center'
	>
		{close => (
			<div className='modal'>
				<button className='close' onClick={close}>
					&times;
				</button>
				<div className='header'> Modal Title </div>
				<div className='content'></div>
				<div className='actions'>
					<button>Aceptar</button>
					<button
						className='button'
						onClick={() => {
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
);
