import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Homepage from './components/home/Homepage';
import Signup from './components/authentication/Signup';
import Login from './components/authentication/Login';
import NewPost from './components/posts/NewPost';

const App = () => (
  <div className="flex flex-col mx-auto min-h-screen bg-slate-200 shadow-md overflow-hidden">
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignupWrapper />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts/new" element={<NewPost />} />
        <Route path="/posts/:id" element={<h1>Post</h1>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  </div>
);

const SignupWrapper = () => (<Signup />);

export default App;
