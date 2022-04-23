import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getNews } from '../../Services/newService';

const initialState = {
	news: [],
	status: 'idle',
	error: false,
};

export const getNewsData = createAsyncThunk('news/getNews', async () => {
	try {
		const response = await getNews();
		return response.data.data;
	} catch (error) {
		throw new Error('News slice error to get data');
	}
});

const newsSlice = createSlice({
	name: 'news',
	initialState,
	reducers: {},
	extraReducers: {
		[getNewsData.pending]: state => {
			state.status = 'loading';
		},
		[getNewsData.fulfilled]: (state, { payload }) => {
			state.news = payload;
			state.status = 'succeeded';
		},
		[getNewsData.rejected]: state => {
			state.error = true;
			state.status = 'failed';
		},
	},
});

export const newsSelector = state => state.news;
export default newsSlice.reducer;
