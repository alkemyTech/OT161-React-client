import React from 'react';
import CardDashboard from './CardDashboard';
import styles from './Dashboard.module.css';

const Dashboard = () => {
	const cards = [
		{
			icon: 'fa-solid fa-laptop',
			title: 'Novedades',
			link: '/backoffice/news',
		},
		{
			icon: 'fa-solid fa-list-check',
			title: 'Actividades',
			link: '/backoffice/activities',
		},
		{
			icon: 'fa-solid fa-list-ul',
			title: 'Categorias',
			link: '/backoffice/create-category',
		},
		{
			icon: 'fa-solid fa-comments',
			title: 'Testimonios',
			link: '/backoffice/create-testimonials',
		},
		{
			icon: 'fa-solid fa-sitemap',
			title: 'Organización',
			link: '/backoffice/organization',
		},
		{
			icon: 'fa-solid fa-photo-film',
			title: 'Slides',
			link: '/backoffice/slides',
		},
		{
			icon: 'fa-solid fa-users',
			title: 'Usuarios',
			link: '/backoffice/users',
		},
		{
			icon: 'fa-solid fa-people-group',
			title: 'Miembros',
			link: '/backoffice/create-member',
		},
	];

	return (
		<div className={styles.containerDashboard}>
			{cards.map(e => {
				return (
					<CardDashboard
						key={e.title}
						icon={e.icon}
						title={e.title}
						link={e.link}
					/>
				);
			})}
		</div>
	);
};

export default Dashboard;
