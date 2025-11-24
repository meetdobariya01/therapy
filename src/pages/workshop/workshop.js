import React from "react";
import { motion } from "framer-motion";
import "./workshop.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Workshop = () => {
  return (
    <div>
      {/* Header can be added here if needed */}
      <Header />

      <div className="ws-page">
        {/* HERO SECTION */}
        <motion.section
          className="ws-hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="hero-overlay"></div>

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>Transformational Workshops</h1>

            <p>
              Empowering live workshops designed to help you release emotional
              baggage,
              <br />
              shift patterns, and activate your highest potential.
            </p>

            <motion.button className="hero-btn" whileHover={{ scale: 1.08 }}>
              Book Your Spot
            </motion.button>
          </motion.div>
        </motion.section>

        {/* WORKSHOP CARDS */}
        <section className="workshop-section">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Popular Workshops
          </motion.h2>

          <div className="workshop-grid">
            {[
              {
                title: "Emotional Detox & Release",
                img: "/images/workshops-1.jpg",
              },
              {
                title: "Inner Child Healing",
                img: "/images/workshops-2.jpg",
              },
              {
                title: "Stress Reset & Calm Mind",
                img: "/images/workshops-3.jpg",
              },
              {
                title: "Self-Worth Activation",
                img: "/images/workshops-4.jpg",
              },
              {
                title: "Manifestation & Mindset Mastery",
                img: "/images/workshops-5.jpg",
              },
            ].map((w, i) => (
              <motion.div
                className="ws-card"
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                <img src={w.img} alt="" />

                <div className="ws-card-overlay"></div>

                <h4>{w.title}</h4>
              </motion.div>
            ))}
          </div>
        </section>

        {/* INCLUDES */}
        <motion.section
          className="ws-include"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2>Included in Every Workshop</h2>

          <ul>
            <li>Guided Processes</li>
            <li>Practical Exercises</li>
            <li>Tapping + NLP Tools</li>
            <li>Worksheets & Prompts</li>
            <li>Live Q&A</li>
          </ul>

          <div className="btn-row">
            <button className="primary">Book Your Spot</button>
            <button className="secondary">Request Custom Workshop</button>
          </div>
        </motion.section>

        <p className="ws-seo">
          healing workshops India, emotional detox workshop, inner child healing
          program, mindset workshop India
        </p>
      </div>

      {/* Footer can be added here if needed */}
      <Footer />
    </div>
  );
};

export default Workshop;
