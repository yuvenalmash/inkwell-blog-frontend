import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './slices/authenticationSlice';
import postsReducer from './slices/postsSlice';

const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    postsSlice: postsReducer,
  },
});

export default store;
