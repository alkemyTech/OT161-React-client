import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './headerPublic.css';
import logo from '../../../assets/LOGO-SOMOS MAS.png';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../features/auth/authSlice';
const HeaderPublic = () => {
	const { isAuthenticated } = useSelector(authSelector);
	window.onload = () => {
		const hamburger = document.querySelector('.hamburger');
		const navBarLinks = document.querySelector('.nav-bar-links');

		hamburger.addEventListener('click', () => {
			hamburger.classList.toggle('active');
			navBarLinks.classList.toggle('active');
		});

		document.querySelectorAll('.nav-link').forEach(n =>
			n.addEventListener('click', () => {
				hamburger.classList.remove('active');
				navBarLinks.classList.remove('active');
			})
		);
	};

	const [login, setLogin] = useState(false);

	if (localStorage.getItem('login') === true) {
		setLogin(true);
	}

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

				{login ? <></> : <></>}
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
