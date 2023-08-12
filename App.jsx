import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as ROUTES from './src/constants/routes';
import { Home, SignIn, SignUp } from './src/pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route path={ROUTES.BROWSE} element={<p>browse</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
