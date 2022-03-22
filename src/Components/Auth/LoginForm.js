import { Formik } from 'formik';
import React from 'react';
import '../FormStyles.css';

const LoginForm = () => {
	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
				confirmPassword: '',
			}}
            onSubmit={() => {
                console.log('Enviado')
            }}
		>
			{({handleChange, handleSubmit, values}) => {
				<form className='form-container' onSubmit={handleSubmit}>
					<input
						className='input-field'
						type='text'
						name='email'
						value={values.name}
						onChange={handleChange}
						placeholder='Enter email'
					></input>
					<input
						className='input-field'
						type='text'
						name='password'
						value={values.password}
						onChange={handleChange}
						placeholder='Enter password'
					></input>
					<button className='submit-btn' type='submit'>
						Log In
					</button>
				</form>;
			}}
		</Formik>
	);
};

export default LoginForm;
