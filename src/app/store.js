import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import usReducer from '../features/us/usReducer';
import usersReducer from '../features/users/usersSlice';
import slidesReducer from '../features/Slides/slideSlice';

export default configureStore({
	reducer: {
		counter: counterReducer,
		slides: slidesReducer,
		us: usReducer,
		users: usersReducer,
	},
});
