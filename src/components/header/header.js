import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <header className="psy-header shadow-sm">
        <nav className="container d-flex justify-content-between align-items-center py-3">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="logo"
          >
            <NavLink to="/">
              <img
                src="/images/logo.png"
                alt="Clinic Logo"
                className="psy-logo"
              />
            </NavLink>
          </motion.div>

          {/* Mobile Toggle */}
          <div
            className={`menu-toggle ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Nav Menu */}
          <motion.ul
            className={`nav-menu ${open ? "active" : ""}`}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <li>
              <a href="/aboutus">About us</a>
            </li>
            <li>
              <a href="/service">Service</a>
            </li>
            <li>
              <a href="/workshop">Work Shop</a>
            </li>
            <li>
              <a href="/booking">Booking</a>
            </li>
            <li>
              <a href="/testimonials">Testimonials</a>
            </li>
            <li>
              <a href="/blog">Blogs</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>

            <motion.a
              href="#appointment"
              className="btn-book"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Appointment
            </motion.a>
          </motion.ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
