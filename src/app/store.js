import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import newsReducer from '../features/news/newSlice';
import slidesReducer from '../features/Slides/slideSlice';


export default configureStore({
	reducer: {
		counter: counterReducer,
		news: newsReducer,
		slides: slidesReducer,
	},
});
