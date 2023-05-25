import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUser } from '../../redux/slices/authenticationSlice';

const Homepage = () => {
  const user = useSelector(selectUser);

  return (
    <div className="flex flex-col h-screen items-center justify-center gap-5">
      <h1 className="text-3xl font-bold text-gray-900">Home</h1>
      {user ? (
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-900">
            Welcome,
            {' '}
            {user.name}
          </p>
          <Link to="/logout" className="text-blue-500">Log Out</Link>
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
  );
};

export default Homepage;
