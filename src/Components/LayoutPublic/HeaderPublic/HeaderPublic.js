import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './headerPublic.css';
import logo from '../../../assets/LOGO-SOMOS MAS.png';
const HeaderPublic = () => {
	const [hambar, setHambar] = useState(false);
	const showHambar = () => setHambar(!hambar);


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

return(
	<>
 	<nav className='nav-bar'>
 				<Link className='nav-bar-logo' to='/'>
 					<img src={logo} alt='Somos Mas'></img>
 				</Link>
 				<ul className={hambar? 'nav-bar-links active':'nav-bar-links'}>
 					{links.map((li, index) => {
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
 				<div className='hamburger' onClick={showHambar}>
 					<span className='hamburger-bar'></span>
 					<span className='hamburger-bar'></span>
 					<span className='hamburger-bar'></span>
 				</div>
 			</nav>
 		</>
)

};

export default HeaderPublic;
