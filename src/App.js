import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/home/Homepage';

function App() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-gray-100 min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
