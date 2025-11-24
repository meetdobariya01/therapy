import React from "react";
import { motion } from "framer-motion";
import "./service.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Service = () => {
  return (
    <div>
      {/* Hero Section */}
      <Header />

      <div className="services-page">
        {/* HERO */}
        <motion.section
          className="services-hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="services-hero-overlay"></div>

          <motion.div
            className="services-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>Therapeutic Services</h1>
            <p>
              Personalized transformation experiences designed for deep inner
              healing.
            </p>
          </motion.div>
        </motion.section>

        {/* SERVICES GRID */}
        <section className="services-wrapper">
          {[
            {
              title: "Therapeutic Coaching",
              desc: "Deep, personalised sessions designed to help you navigate emotional overwhelm, anxiety, self-worth issues, life transitions, and mental fatigue.",
              img: "/images/service-1.jpg",
              bullets: [
                "Emotional Clarity",
                "Pattern Awareness",
                "Inner Calm & Grounding",
                "Healthy Mindset Shifts",
              ],
              btn: "Book a 1:1 Session",
            },

            {
              title: "EFT Tapping Sessions",
              desc: "A gentle mind-body technique to release emotional stress, fear & subconscious blocks.",
              img: "/images/service-2.jpg",
              bullets: [
                "Anxiety",
                "Emotional overwhelm",
                "Phobias + fears",
                "Overthinking",
              ],
              btn: "Start EFT with Delnaz",
            },

            {
              title: "NLP Breakthrough Coaching",
              desc: "Rewire limiting beliefs + shift mental patterns that hold you back.",
              img: "/images/service-3.jpg",
              bullets: [
                "Belief reprogramming",
                "Behavioural reframing",
                "Language pattern correction",
                "Goal alignment",
              ],
              btn: "Explore NLP Coaching",
            },

            {
              title: "Group Healing Circles",
              desc: "Guided emotional processing spaces built around deep connection and shared healing.",
              img: "/images/service-4.jpg",
              bullets: [
                "Corporates",
                "Families",
                "Women’s circles",
                "Community groups",
              ],
              btn: "View Group Programs",
            },
          ].map((srv, i) => (
            <motion.div
              className="service-card"
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <img src={srv.img} alt="" className="srv-img" />
              <div className="srv-overlay"></div>

              <div className="srv-content">
                <h3>{srv.title}</h3>
                <p>{srv.desc}</p>

                <ul className="srv-list">
                  {srv.bullets.map((x, ii) => (
                    <li key={ii}>• {x}</li>
                  ))}
                </ul>

                <button className="srv-btn">{srv.btn}</button>
              </div>
            </motion.div>
          ))}
        </section>

        {/* SEO */}
        <p className="services-seo">
          EFT sessions online, NLP sessions online, emotional wellness
          workshops, group therapy programs India
        </p>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Service;
