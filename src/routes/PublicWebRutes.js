import React from 'react';
import { Route } from 'react-router-dom';
// import { AnimatedSwitch } from 'react-router-transition';
import SchoolCampaign from '../Campaigns/School/SchoolCampaign';
import ToysCampaign from '../Campaigns/Toys/ToysCampaign';
import About from '../Components/About/About';
import Activities from '../Components/Activities/Activities';
import ActivitiesDetail from '../Components/Activities/Detail/ActivitiesDetail';
import LoginForm from '../Components/Auth/LoginForm';
import RegisterForm from '../Components/Auth/RegisterForm';
import Contact from '../Components/Contact/Contact';
import Home from '../Components/Home/Home';
import NewsDetail from '../Components/News/Detail/NewsDetail';
import NewsPage from '../Components/News/NewsPage';
import PageNotFound from '../Components/Shared/PageNotFound';
import TransitionSwitch from '../shared/TransitionSwitch';
import PublicRoute from './PublicRoute';
const PublicWebRutes = () => {
	return (
		<TransitionSwitch>
			<PublicRoute path='/auth/login' component={LoginForm} />
			<PublicRoute path='/auth/register' component={RegisterForm} />
			<Route path='/actividades/:id' component={ActivitiesDetail} />
			<Route path='/novedades/:id' component={NewsDetail} />
			<Route path='/actividades' component={Activities} />
			<Route path='/school-campaign' component={SchoolCampaign} />
			<Route path='/toys-campaign' component={ToysCampaign} />
			<Route path='/novedades' component={NewsPage} />
			<Route path='/nosotros' component={About} />
			<Route path='/contact' component={Contact} />
			<Route path='/' exact component={Home} />
			<Route path='*' component={PageNotFound} />
		</TransitionSwitch>
	);
};

export default PublicWebRutes;
