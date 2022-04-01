import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import usReducer from '../features/us/usSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    us: usReducer,
  },
});
