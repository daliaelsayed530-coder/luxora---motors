import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Home/Navbar';
import Apped from './Home/Apped';
import AllCars from './Cars/AllCars';
import Services from './Home/Services';
import About from './Home/About';
import Contact from './Home/Contact';
export default function App() {
  return (
    <div>
      <Navbar /> {/*الشريط هيظهر هنا فوق كل الصفحات وثابت ومظبوط*/}
      <Routes>
        <Route path="/" element={<Apped />} />
        <Route path="/cars" element={<AllCars />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}