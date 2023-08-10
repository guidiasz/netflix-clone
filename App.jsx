import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './src/pages/Home';
import * as ROUTES from './src/constants/routes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SIGN_IN} element={<p>signin</p>} />
        <Route path={ROUTES.SIGN_UP} element={<p>signup</p>} />
        <Route path={ROUTES.BROWSE} element={<p>browse</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
