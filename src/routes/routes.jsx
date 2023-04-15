import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home.jsx';
import Personnal from '../pages/personnal work/personnal_work';
import Contact from '../pages/contact/contact.jsx';
import Error from '../pages/error/error.jsx';

function RoutesPath() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="personnal_work" element={<Personnal />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPath;