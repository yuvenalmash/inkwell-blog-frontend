import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField, InputAdornment } from '@mui/material';
import {
  Person, Lock, Visibility, VisibilityOff, Email,
} from '@mui/icons-material';
import {
  registerUser,
  selectStatus,
  selectError,
  clearError,
} from '../../redux/slices/authenticationSlice';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    dispatch(clearError());
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
  };

  if (status === 'succeeded') {
    navigate('/');
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center p-5">
      <div className="flex flex-col items-center justify-center gap-2 rounded-md border border-gray-900 p-5">
        <h1 className="text-3xl font-bold pb-5">Register</h1>
        <form className="flex flex-col items-center justify-center gap-3" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center w-full">
            <TextField
              type="text"
              name="name"
              id="name"
              className="border border-gray-900 rounded-md w-full"
              placeholder="Name"
              value={user.name}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <TextField
              type="email"
              name="email"
              id="email"
              className="border border-gray-900 rounded-md w-full"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <TextField
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              className="border border-gray-900 rounded-md"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Button onClick={handleTogglePassword}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            className="bg-gray-900 text-white"
          >
            Register
          </Button>
        </form>
        <div className="flex flex-col items-center justify-center">
          {error && <p className="text-red-500">{error}</p>}
          <p className="text-gray-900 pt-5">
            Already have an account?
            {' '}
            <Link to="/login" className="text-blue-500 hover:underline">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Register;
