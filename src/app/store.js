import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import usReducer from '../features/us/usSlice';
import slidesReducer from '../features/Slides/slideSlice';

export default configureStore({
	reducer: {
		counter: counterReducer,
		slides: slidesReducer,
    us: usReducer,
	},
});
