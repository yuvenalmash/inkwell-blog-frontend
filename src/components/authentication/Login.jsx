import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField, InputAdornment } from '@mui/material';
import {
  AccountCircle, Lock, Visibility, VisibilityOff,
} from '@mui/icons-material';
import {
  loginUser,
  selectStatus, selectToken,
  selectError, clearError,
} from '../../redux/slices/authenticationSlice';

const Login = (() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const [user, setUser] = useState({
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
    dispatch(loginUser({ user }));
  };

  const token = useSelector(selectToken);

  useEffect(() => {
    if (error) {
      console.log('error: ', error);
    }
  }, [error]);

  useEffect(() => {
    if (status === 'succeeded' && token) {
      navigate('/');
    }
  }, [status, token, navigate]);

  return (
    <div className="flex flex-col h-screen items-center justify-center p-5">
      <div className="flex flex-col items-center justify-center gap-2 rounded-md border border-gray-900 p-5">
        <h1 className="text-3xl font-bold text-gray-900 pb-5">Log In</h1>
        <form className="flex flex-col items-center justify-center gap-3" onSubmit={handleSubmit}>
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
                    <AccountCircle />
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
            color="primary"
            className="rounded-md"
          >
            Log In
          </Button>
        </form>
        <div className="flex flex-col items-center justify-center">
          <p className="text-red-500">{error}</p>
          <p className="text-gray-900">
            Don&apos;t have an account?
            {' '}
            <Link to="/signup" className="text-blue-500">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
});

export default Login;
