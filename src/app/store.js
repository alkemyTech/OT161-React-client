import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import newsReducer from '../features/news/newSlice';

export default configureStore({
	reducer: {
		counter: counterReducer,
		news: newsReducer,
	},
});
