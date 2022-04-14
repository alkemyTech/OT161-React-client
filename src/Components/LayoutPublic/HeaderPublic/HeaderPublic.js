import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './headerPublic.css';
import logo from '../../../assets/LOGO-SOMOS MAS.png';
import handleHamburgerBar from './handleHamburgerBar';

const HeaderPublic = () => {
	const [loginIn, setLoginIn] = useState(false);

	useEffect(() => {
		if (localStorage.getItem('token')) {
			setLoginIn(true);
		}
	}, [loginIn]);

	handleHamburgerBar();

	const handleSessionClose = () => {
		localStorage.removeItem('token');
		setLoginIn(false);
	};

	const links = [
		{ text: 'INICIO', link: '/' },
		{ text: 'NOSOTROS', link: '/nosotros' },
		{ text: 'CONTACTO', link: '/contact' },
		{ text: 'Campaña en Escuela', link: '/school-campaign' },
		{ text: 'Campaña de Juguetes', link: '/toys-campaign' },
	];

	return (
		<>
			<nav className='nav-bar'>
				<Link className='nav-bar-logo' to='/'>
					<img src={logo} alt='Somos Mas'></img>
				</Link>
				<ul className='nav-bar-links'>
					{links.map((li, index) => {
						if (isAuthenticated & (li.link === '/contact')) return null;
						return (
							<li key={`${li.text}${index}`} className='nav-link'>
								<NavLink
									className={({ isActive }) =>
										isActive ? 'nav-link__active' : ''
									}
									to={li.link}
								>
									{li.text}
								</NavLink>
							</li>
						);
					})}
				</ul>

				{loginIn ? (
					<>
						<button
							className='cerrar-Seccion-button'
							onClick={handleSessionClose}
						>
							Cerrar Session
						</button>
					</>
				) : (
					<div className='login-register-box'>
						<Link to={'/auth/login'}>
							<button className='login-button'>Login</button>
						</Link>
						<Link to={'/auth/register'}>
							<button className='register-button'>Registrarse</button>
						</Link>
					</div>
				)}
				<div className='hamburger'>
					<span className='hamburger-bar'></span>
					<span className='hamburger-bar'></span>
					<span className='hamburger-bar'></span>
				</div>
			</nav>
		</>
	);
};

export default HeaderPublic;
