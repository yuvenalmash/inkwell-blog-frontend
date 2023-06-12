import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { selectUser } from '../../redux/slices/authenticationSlice';
import Navbar from '../navbar/Navbar';
import Recentposts from '../posts/RecentPosts';

const Homepage = () => {
  const user = useSelector(selectUser);

  return (
    <>
      <Navbar />
      <div className="flex flex-col h-screen gap-5 bg-cyan-700">
        <h1 className="text-3xl font-bold text-gray-900">Home</h1>
        {user ? (
          <div className="flex flex-col">
            <p className="text-gray-900">
              Welcome,
              {' '}
              {user.username}
            </p>
            {/* add post button */}
            <Button component={Link} to="/posts/new" variant="contained" color="primary">Add Post</Button>
            <Recentposts />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-900">
              You are not logged in.
            </p>
            <Link to="/login" className="text-blue-500">Log In</Link>
            <p className="text-gray-900">
              Don&apos;t have an account?
              {' '}
              <Link to="/signup" className="text-blue-500">Sign Up</Link>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Homepage;
