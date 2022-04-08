import React from 'react';
import { Switch } from 'react-router-dom';
import ActivitiesForm from '../Components/Activities/ActivitiesForm';
import CategoriesForm from '../Components/Categories/CategoriesForm';
import NewsForm from '../Components/News/NewsForm';
import SlidesForm from '../Components/Slides/SlidesForm';
import TestimonialForm from '../Components/Testimonials/TestimonialsForm';
import UserForm from '../Components/Users/UsersForm';
import MembersForm from '../Components/Members/MembersForm';
import ProjectsForm from '../Components/Projects/ProjectsForm';
import OrganizationData from '../Components/Organization/OrganizationData';
import Dashboard from '../Components/Dashboard/Dashboard';
import HomeForms from '../Components/Home/HomeForms';
import NewsList from '../Components/News/NewsList';
import UsersList from '../Components/Users/UsersList';
import ActivitiesList from '../Components/Activities/ActivitiesList';
import SliderList from '../Components/Slides/SliderList';
import PrivateRoutes from './private.routes';
import ProtectedRoutes from './protected.routes';

const BackOfficeRutes = () => {
	return (
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
			<PrivateRoutes path='/backoffice/create-member' component={MembersForm} />
			{/* <Route path='/backoffice/members/edit' component={MembersForm} /> */}
			<PrivateRoutes
				path='/backoffice/create-project'
				component={ProjectsForm}
			/>
			<ProtectedRoutes
				path='/backoffice/organization'
				component={OrganizationData}
			/>
			<ProtectedRoutes path='/backoffice/news' component={NewsList} />
			<ProtectedRoutes
				path='/backoffice/activities'
				component={ActivitiesList}
			/>
			<ProtectedRoutes path='/backoffice/slides' component={SliderList} />
			<ProtectedRoutes path='/backoffice/users' component={UsersList} />
			<ProtectedRoutes path='/backoffice' component={Dashboard} />
		</Switch>
	);
};

export default BackOfficeRutes;
