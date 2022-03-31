import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ActivitiesForm from './Components/Activities/ActivitiesForm';
import CategoriesForm from './Components/Categories/CategoriesForm';
import NewsForm from './Components/News/NewsForm';
import SlidesForm from './Components/Slides/SlidesForm';
import TestimonialForm from './Components/Testimonials/TestimonialsForm';
import UserForm from './Components/Users/UsersForm';
import SchoolCampaign from './Campaigns/School/SchoolCampaign';
import ToysCampaign from './Campaigns/Toys/ToysCampaign';
import MembersForm from './Components/Members/MembersForm';
import ProjectsForm from './Components/Projects/ProjectsForm';
import RegisterForm from './Components/Auth/RegisterForm';
import OrganizationData from './Components/Organization/OrganizationData';
import Dashboard from './Components/Dashboard/Dashboard';
import NewsDetail from './Components/News/Detail/NewsDetail';
import NewsPage from './Components/News/NewsPage';
import HomeForms from './Components/Home/HomeForms';
import Activities from './Components/Activities/Activities';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import NewsList from './Components/News/NewsList';
import UsersList from './Components/Users/UsersList';

function App() {
	return (
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Home} />
          <Route path='/actividades' component={Activities} />
          <Route path="/auth/register" component={RegisterForm} />
					<Route path='/create-activity' component={ActivitiesForm} />
					<Route path='/create-category' component={CategoriesForm} />
					<Route path='/backoffice/organization/edit' component={HomeForms} />
					<Route path='/backoffice/news' component={NewsList} />
					<Route path='/backoffice/users' component={UsersList} />
					<Route path='/backoffice/create-news' component={NewsForm} />
					<Route path='/backoffice/create-slide' component={SlidesForm} />
					<Route path='/create-testimonials' component={TestimonialForm} />
					<Route path='/backoffice/organization' component={OrganizationData} />
					<Route path='/contact' component={Contact} />
					<Route path='/backoffice' component={Dashboard} />
					<Route path='/create-user' component={UserForm} />
					<Route path='/create-member' component={MembersForm} />
					<Route path='/backoffice/members/edit' component={MembersForm} />
					<Route path='/create-project' component={ProjectsForm} />
					<Route path='/school-campaign' component={SchoolCampaign} />
					<Route path='/toys-campaign' component={ToysCampaign} />
					<Route path='/novedades/:id' component={NewsDetail} />
					<Route path='/novedades' component={NewsPage} />
					<Route path='/nosotros' component={About} />
				</Switch>
			</BrowserRouter>
	);
}

export default App;
