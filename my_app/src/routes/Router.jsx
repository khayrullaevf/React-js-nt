import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Home from '../pages/Home'
import About from '../components/About'
import Login from '../components/Login'
import Register from '../components/Register'
import SingleNews from '../components/SingleNews'
import Error from '../components/Error'

const Router = () => {
  return (
    <BrowserRouter>
      {window.location.pathname !== "/login" &&
      window.location.pathname !== "/register" ? (
        <Header />
      ) : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/news/:id" element={<SingleNews />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default Router