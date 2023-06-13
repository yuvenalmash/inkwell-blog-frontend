import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUser } from '../../redux/slices/authenticationSlice';
import Navbar from '../navbar/Navbar';
import Recentposts from '../posts/RecentPosts';

const Homepage = () => {
  const user = useSelector(selectUser);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center bg-yellow-300 min-h-screen mx-auto gap-5">
        {user ? (
          <div className="flex flex-col">
            <p className="text-gray-900">
              Welcome,
              {' '}
              {user.username}
            </p>
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
