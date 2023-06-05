import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Homepage from './components/home/Homepage';
import Signup from './components/authentication/Signup';
import Login from './components/authentication/Login';

const App = () => (

  <div className="bg-slate-100 min-h-screen">
    <div className="flex flex-col max-w-lg mx-auto min-h-screen bg-slate-200 shadow-md overflow-hidden md:max-w-4xl">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<SignupWrapper />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  </div>
);

const SignupWrapper = () => (<Signup />);

export default App;
