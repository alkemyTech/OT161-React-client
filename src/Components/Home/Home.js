import React from 'react';
import Novedades from './Novedades';
import Carrousel from '../../Components/Slides/Carrousel';
import LayoutPublic from '../LayoutPublic/LayoutPublic';
import './Home.css';

const Home = () => {
	return (
		<>
			<LayoutPublic>
				{/* Este texto viene del endpoint de datos públicos */}
				<h1 className='home_title'>Somos más</h1>
				<div>
					<Carrousel />
				</div>
				<div>
					<Novedades />
				</div>
			</LayoutPublic>
		</>
	);
};

export default Home;
