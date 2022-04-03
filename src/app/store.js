import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import slidesReducer from '../features/Slides/slideSlice';

export default configureStore({
	reducer: {
		counter: counterReducer,
		slides: slidesReducer,
	},
});
