import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './aboutus/AboutUs';
import ContactUs from './contectUs/ContactUs';
import VinSearch from './vinsearch/VinSearch';
import PersonalInfo from './PersonalInfo';
import Terms from './term/Terms';

import Footer from './footer/Footer';

// Placeholder Home component for demonstration
const Home = () => (
  <div>
    <VinSearch/>
  </div>
);

const AppRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/personal-info" element={<PersonalInfo/>} />
      <Route path="/terms" element={<Terms/>} />
      
 
    </Routes>

     <Footer/>
    </>
  );
};

export default AppRoutes;
