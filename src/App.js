import React from 'react';
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
import LoginForm from './Components/Auth/LoginForm';
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
import ActivitiesList from './Components/Activities/ActivitiesList';
import SliderList from './Components/Slides/SliderList';
import ActivitiesDetail from './Components/Activities/Detail/ActivitiesDetail';
import PrivateRoutes from './routes/private.routes';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<PrivateRoutes
					path='/backoffice/activities/create'
					component={ActivitiesForm}
				/>
				<PrivateRoutes
					path='/backoffice/create-category'
					component={CategoriesForm}
				/>
				<PrivateRoutes path='/backoffice/create-news' component={NewsForm} />
				<PrivateRoutes path='/backoffice/create-slide' component={SlidesForm} />
				<PrivateRoutes
					path='/backoffice/create-testimonials'
					component={TestimonialForm}
				/>
				<PrivateRoutes
					path='/backoffice/organization/edit'
					component={HomeForms}
				/>
				<PrivateRoutes path='/backoffice/create-users' component={UserForm} />
				<PrivateRoutes
					path='/backoffice/create-member'
					component={MembersForm}
				/>
				{/* <Route path='/backoffice/members/edit' component={MembersForm} /> */}
				<PrivateRoutes
					path='/backoffice/create-project'
					component={ProjectsForm}
				/>
				<Route path='/backoffice/organization' component={OrganizationData} />
				<Route path='/backoffice/news' component={NewsList} />
				<Route path='/backoffice/activities' component={ActivitiesList} />
				<Route path='/backoffice/slides' component={SliderList} />
				<Route path='/backoffice/users' component={UsersList} />
				<Route path='/backoffice' component={Dashboard} />
				<Route path='/auth/register' component={RegisterForm} />
				<Route path='/auth/login' component={LoginForm} />
				<Route path='/actividades/:id' component={ActivitiesDetail} />
				<Route path='/novedades/:id' component={NewsDetail} />
				<Route path='/actividades' component={Activities} />
				<Route path='/school-campaign' component={SchoolCampaign} />
				<Route path='/toys-campaign' component={ToysCampaign} />
				<Route path='/novedades' component={NewsPage} />
				<Route path='/nosotros' component={About} />
				<Route path='/contact' component={Contact} />
				<Route path='/' exact component={Home} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
