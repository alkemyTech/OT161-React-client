import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import slidesReducer from '../features/Slides/slideSlice';
import authReducer from '../features/auth/authSlice';

export default configureStore({
	reducer: {
		counter: counterReducer,
		slides: slidesReducer,
		auth: authReducer,
	},
});
