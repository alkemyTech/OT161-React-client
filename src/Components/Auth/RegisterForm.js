import React, { useState } from 'react';
import '../FormStyles.css';

const RegisterForm = () => {
    const [initialValues, setInitialValues] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    const {email, password, confirmPassword} = initialValues
    
    const handleChange = ({target}) => {
        setInitialValues({
            ...initialValues,
            [ target.name ]: target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(initialValues);
        localStorage.setItem('token', 'tokenValueExample')
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="email" value={email} onChange={handleChange} placeholder="Enter email"></input>
            <input className="input-field" type="password" name="password" value={password} onChange={handleChange} placeholder="Enter password"></input>
            <input className="input-field" type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} placeholder="Confirm password"></input>
            <button className="submit-btn" type="submit">Register</button>
        </form>
    );
}
 
export default RegisterForm;