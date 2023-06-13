import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  TextField, Button, Typography, Box,
} from '@mui/material';
import Navbar from '../navbar/Navbar';
import { addNewPost, selectPostsStatus } from '../../redux/slices/postsSlice';
import { selectUser } from '../../redux/slices/authenticationSlice';

const NewPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector(selectPostsStatus);
  // const error = useSelector(selectError);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { id: userId } = useSelector(selectUser);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSavePost = () => {
    const slug = title.toLowerCase().split(' ').join('-');
    dispatch(addNewPost({
      title, content, slug, userId,
    }));
  };

  useEffect(() => {
    if (status === 'succeeded') {
      console.log('status: ', status);
      navigate('/');
    }
  }, [status, navigate]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-5 p-5">
        <Typography variant="h4" component="div">
          New Post
        </Typography>
        <Box className="flex flex-col gap-5 w-1/2">
          <TextField
            label="Title"
            variant="outlined"
            value={title}
            onChange={handleTitleChange}
          />
          <TextField
            label="Content"
            variant="outlined"
            multiline
            rows={10}
            value={content}
            onChange={handleContentChange}
          />
          <Button variant="contained" color="primary" onClick={handleSavePost}>Save Post</Button>
        </Box>
      </div>
    </>
  );
};

export default NewPost;
