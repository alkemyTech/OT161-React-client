import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DataSidebarBackoffice } from './DataSidebarBackoffice';
import './SidebarBackoffice.css';

const SidebarBackoffice = () => {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);
	console.log(sidebar);

	return (
		<div>
			<div className='backoffice_sidebar'>
				<div className='backoffice_menu-bars' onClick={showSidebar}>
					<i className='fa-solid fa-bars' />
				</div>
			</div>
			<nav
				className={
					sidebar ? 'backoffice_nav-menu active' : 'backoffice_nav-menu'
				}
			>
				<ul onClick={showSidebar} className='backoffice_nav-menu--items'>
					<li className='backoffice_sidebar-toggle'>
						<div className='backoffice_menu-bars'>
							<i className='fa-solid fa-xmark'></i>
						</div>
					</li>
					<li className='backoffice_sidebar--title'>Somos más</li>
					{DataSidebarBackoffice.map((e, i) => {
						return (
							<li key={i} className='backoffice_data--items'>
								<Link to={e.link}>
									<i className={e.icon} />
									<span>{e.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default SidebarBackoffice;
