import React from "react";
import { motion } from "framer-motion";
import "./testimonials.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Testimonials = () => {
  return (
    <div>
      {/* Header can be added here if needed */}
      <Header />

      <div className="testimonials-wrapper">
        <motion.h1
          className="t-heading"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Clients Say
        </motion.h1>

        <motion.div
          className="t-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          <motion.div
            className="t-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="t-text">
              “Delnaz helped me break patterns I didn’t even know were holding
              me back. I feel mentally lighter and emotionally stronger.”
            </p>
            <span className="t-author">— R.S.</span>
          </motion.div>

          <motion.div
            className="t-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="t-text">
              “Her EFT sessions gave me instant relief from anxiety. I finally
              feel in control of my emotions.”
            </p>
            <span className="t-author">— N.M.</span>
          </motion.div>

          <motion.div
            className="t-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <p className="t-text">
              “Workshops with Delnaz feel like a reset button for the mind.
              Highly transformative.”
            </p>
            <span className="t-author">— A.K.</span>
          </motion.div>
        </motion.div>

        <motion.button
          className="t-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Start Your Healing Journey
        </motion.button>
      </div>

      {/* Footer can be added here if needed */}
        <Footer />
    </div>
  );
};

export default Testimonials;
