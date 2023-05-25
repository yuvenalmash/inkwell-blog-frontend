import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { login, logout, register } from '../../api/v1/authentication';

const initialState = {
  user: null,
  status: 'idle',
  error: null,
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
    return response.data;
  },
);

export const logoutUser = createAsyncThunk(
  'users/logout',
  async () => {
    const response = await logout();
    return response.data;
  },
);

const authenticationSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
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
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(logoutUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.status = 'succeeded';
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { clearError } = authenticationSlice.actions;

export default authenticationSlice.reducer;

export const selectUser = (state) => state.authentication.user;
export const selectStatus = (state) => state.authentication.user;
export const selectError = (state) => state.authentication.user;
