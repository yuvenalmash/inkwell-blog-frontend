import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { login, register } from '../../api/v1/authentication';

const initialState = {
  user: null,
  status: 'idle',
  error: null,
  token: null,
};

export const registerUser = createAsyncThunk(
  'users/register',
  async (user) => {
    const response = await register(user);
    return response.data;
  },
);

export const loginUser = createAsyncThunk(
  'users/login',
  async (user) => {
    const response = await login(user);
    const { user: userData, token } = response;
    return { ...userData, token };
  },
);

export const logoutUser = createAction('users/logout');

const authenticationSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(logoutUser, (state) => {
        state.status = 'succeeded';
        state.user = null;
        state.token = null;
      });
  },
});

export const { clearError } = authenticationSlice.actions;

export default authenticationSlice.reducer;

export const selectUser = (state) => state.authentication.user;
export const selectStatus = (state) => state.authentication.status;
export const selectError = (state) => state.authentication.error;
export const selectToken = (state) => state.authentication.token;
