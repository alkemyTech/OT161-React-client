import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import PublicWebRutes from './routes/PublicWebRutes';
import BackOfficeRutes from './routes/BackOfficeRutes';
import { AnimatedSwitch } from 'react-router-transition';

function App() {
	return (
		<BrowserRouter>
			<AnimatedSwitch
				atEnter={{ opacity: 0 }}
				atLeave={{ opacity: 0 }}
				atActive={{ opacity: 1 }}
				className='switch-wrapper'
			>
				<Route>
					<PublicWebRutes />
					<BackOfficeRutes />
				</Route>
			</AnimatedSwitch>
		</BrowserRouter>
	);
}

export default App;
