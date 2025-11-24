import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/home';
import About from './pages/about/about';
import Booking from './pages/booking/booking';
import Contact from './pages/contact/contact';
import Testimonials from './pages/testimonials/testimonials';
import Workshop from './pages/workshop/workshop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Router basename="/">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/workshop" element={<Workshop />} />
       {/* <Route path="*" element={<Error/>} /> */}
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
