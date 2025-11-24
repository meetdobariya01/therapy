import React from "react";
import './booking.css'
import { motion } from "framer-motion";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Booking = () => {
  return (
    <div>
      {/* header can be added here if needed */}
      <Header />

      <div className="booking-wrapper">

      {/* BACKGROUND */}
      <div className="booking-bg"></div>

      {/* floating elements */}
      <div className="floating-circle circle-1"></div>
      <div className="floating-circle circle-2"></div>

      <motion.div 
        className="booking-container"
        initial={{ opacity:0, y:40 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
      >

        <motion.h1 
          className="booking-title"
          initial={{ opacity:0, y:-20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ delay:.2 }}
        >
          Book Your Session
        </motion.h1>

        <motion.p 
          className="booking-subtitle"
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:.4 }}
        >
          Healing made simple, accessible, and seamless.
        </motion.p>

        <motion.div className="booking-features">
          {[
            "Real-time availability",
            "Instant booking confirmation",
            "Secure online payments",
            "Rescheduling options",
            "Single-session & package plans"
          ].map((item, i)=>(
            <motion.div 
              key={i} 
              className="booking-feature"
              initial={{ opacity:0, x:-30 }}
              animate={{ opacity:1, x:0 }}
              transition={{ delay:0.5 + i*0.15 }}
            >
              ✔ {item}
            </motion.div>
          ))}
        </motion.div>

        <motion.button 
          className="booking-btn"
          initial={{ scale:.9, opacity:0 }}
          animate={{ scale:1, opacity:1 }}
          whileHover={{ scale:1.04 }}
          transition={{ delay:1.2 }}
        >
          Schedule a Session Now
        </motion.button>

        <p className="seo">
          online therapy booking, EFT coach booking, NLP therapy session online, therapist payment system
        </p>

      </motion.div>
    </div>

      {/* Footer can be added here if needed */}
      <Footer />
    </div>
  );
};

export default Booking;
