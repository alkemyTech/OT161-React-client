import React from 'react';
import Carrousel from '../../Components/Slides/Carrousel';
import LayoutPublic from '../LayoutPublic/LayoutPublic';
import './Home.css';

const Home = () => {
	return (
		<>
			<LayoutPublic>
				{/* Este texto viene del endpoint de datos públicos */}
				<h1 className='home_title'>Somos más</h1>
				<Carrousel />
			</LayoutPublic>
		</>
	);
};

export default Home;
