import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PublicWebRutes from './routes/PublicWebRutes';
import BackOfficeRutes from './routes/BackOfficeRutes';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route>
					<PublicWebRutes />
					<BackOfficeRutes />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
