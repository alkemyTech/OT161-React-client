import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import slidesReducer from '../features/Slides/slideSlice';
import activitiesReducer from '../features/activities/activitiesSlice';

export default configureStore({
	reducer: {
		counter: counterReducer,
		slides: slidesReducer,
		activities: activitiesReducer,
	},
});
