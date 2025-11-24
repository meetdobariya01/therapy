import React from "react";
import { motion } from "framer-motion";
import "./contact.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Contact = () => {
  return (
    <div>
      {/* Header can be added here if needed */}
      <Header />

      <div className="contact-wrapper">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="contact-heading"
        >
          <h1 className="lux-heading">Let’s Connect</h1>
          <p className="lux-sub">
            Have a question or need guidance choosing the right session?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="contact-card"
        >
          <ul className="contact-list">
            <li>
              Email:{" "}
              <a href="mailto:support@delnazmedora.com" className="mail-link">
                support@delnazmedora.com
              </a>
            </li>

            <li>
              Instagram:{" "}
              <a
                href="https://instagram.com/delnazmedora"
                target="_blank"
                rel="noopener noreferrer"
                className="insta-link"
              >
                @delnazmedora
              </a>
            </li>

            <li>
              Phone / WhatsApp: <span>(+91) — optional</span>
            </li>
          </ul>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="cta-btn"
            onClick={() => {
              window.location.href = "tel:+91XXXXXXXXXX";
            }}
          >
            Contact Now
          </motion.button>
        </motion.div>
      </div>

      {/* Footer can be added here if needed */}
      <Footer />
    </div>
  );
};

export default Contact;
