import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from './redux/slices/authenticationSlice';
import Homepage from './components/home/Homepage';
import Signup from './components/authentication/Register';
import Login from './components/authentication/Login';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginUser());
  }, [dispatch]);

  return (
    <div className="flex flex-col max-w-md mx-auto min-h-screen bg-slate-100 shadow-md overflow-hidden md:max-w-2xl">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
