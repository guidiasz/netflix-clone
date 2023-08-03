import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './src/pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<p>signin</p>} />
        <Route path="signup" element={<p>signup</p>} />
        <Route path="browse" element={<p>browse</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
