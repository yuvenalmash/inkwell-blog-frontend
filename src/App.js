import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Homepage from './components/home/Homepage';
import Signup from './components/authentication/Signup';
import Login from './components/authentication/Login';

const App = () => (
  <div className="flex flex-col max-w-md mx-auto min-h-screen bg-slate-100 shadow-md overflow-hidden md:max-w-2xl">
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignupWrapper />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </div>
);

const SignupWrapper = () => (<Signup />);

export default App;
