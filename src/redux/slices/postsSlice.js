import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { createPost, deletePost, getPosts } from '../../api/v1/postsRequests';

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
};

export const fetchPosts = createAsyncThunk(
  'postsSlice/fetchPosts',
  async () => {
    const response = await getPosts();
    return response;
  },
);

export const addNewPost = createAsyncThunk(
  'postsSlice/addNewPost',
  async (post) => {
    const response = await createPost(post);
    return response.data;
  },
);

export const removePost = createAsyncThunk(
  'postsSlice/removePost',
  async (postId) => {
    const response = await deletePost(postId);
    return response.data;
  },
);

const postsSlice = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(addNewPost.pending, (state) => {
        console.log('pending');
        state.status = 'loading';
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.push(action.payload);
      })
      .addCase(addNewPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(removePost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removePost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = state.posts.filter((post) => post.id !== action.payload.id);
      })
      .addCase(removePost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { clearError } = postsSlice.actions;

export default postsSlice.reducer;

export const selectAllPosts = (state) => state.postsSlice.posts;
export const selectUserPosts = (state) => (
  state.posts.filter((post) => post.user_id === state.authentication.user.id)
);
export const selectPostById = (state, postId) => (
  state.posts.find((post) => post.id === postId)
);
export const selectPostsStatus = (state) => state.status;
