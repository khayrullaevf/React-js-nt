import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../Home'
import About from '../About';
import Login from '../Login';
import Register from '../Register';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router