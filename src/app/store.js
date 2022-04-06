import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import newsReducer from '../features/news/newSlice';
import usReducer from '../features/us/usSlice';
import usersReducer from '../features/users/usersSlice';
import slidesReducer from '../features/Slides/slideSlice';
import authReducer from '../features/auth/authSlice';


export default configureStore({
	reducer: {
		counter: counterReducer,
		news: newsReducer,
		slides: slidesReducer,
		auth: authReducer,
    us: usReducer,
    users: usersReducer,
	},
});
