import React from "react";
import Header from "../../components/header/header";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import "./about.css";
import Footer from "../../components/footer/footer";
// import ProfileImg from "../../assets/delnaz.png"; // replace with your image path

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8 },
  }),
};
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const About = () => {
  const fadeUp = {
    hidden: { opacity: 1, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };
  const statsData = [
    {
      number: "23+",
      title: "Years Practice",
      text: "Supporting mental health with over 23 years of experience.",
    },
    {
      number: "2500+",
      title: "Sessions Held",
      text: "Delivered 25,000+ counseling sessions across all services.",
    },
    {
      number: "91%",
      title: "Recovery Rate",
      text: "91% of clients report significant emotional improvement.",
    },
    {
      number: "16+",
      title: "Therapists Onboard",
      text: "16 licensed professionals trained in diverse modalities.",
    },
  ];

  return (
    <div>
      {/* header */}
      <Header />

      {/* first section */}
      <section className="about-hero-section">
        <Container>
          <Row className="align-items-center">
            {/* TEXT */}
            <Col md={6} className="text-col">
              <motion.span
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="tag"
              >
                {/* Welcome to Healing Space 🌿 */}
              </motion.span>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="hero-title"
              >
                Meet Delnaz Medora
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="hero-subtitle"
              >
                Therapist • EFT Practitioner • NLP Coach • Transformation Guide
              </motion.p>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="hero-desc"
              >
                Creating a safe and supportive space where emotional healing,
                inner clarity and personal transformation become truly possible.
                Guided sessions designed to empower your emotional wellbeing and
                restore balance.
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="hero-buttons"
              >
                <a href="/appointment" className="btn primary-btn">
                  Book a Session
                </a>
                <a href="/about" className="btn secondary-btn">
                  Explore More
                </a>
              </motion.div>
            </Col>

            {/* IMAGE */}
            <Col md={6} className="image-col text-center">
              <motion.img
                src={"./images/hero-section.jpg"}
                alt="Delnaz Medora"
                className="hero-image"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            </Col>
          </Row>
        </Container>
      </section>
      {/* secound section */}

      <div className="about-section">
        <Container>
          <Row className="align-items-center about-row">
            <Col md={6} className="image-col">
              <div className="about-image-box animate-left">
                <img
                  src="https://images.pexels.com/photos/7176318/pexels-photo-7176318.jpeg"
                  alt="Therapist session"
                  className="about-main-img"
                />
              </div>
            </Col>

            <Col md={6} className="content-col animate-right">
              <span className="tag">About Unwind</span>

              <h2 className="about-title">
                Your partner in emotional wellbeing growth
              </h2>

              <p className="about-text">
                Delnaz is a certified EFT & NLP practitioner with a passion for
                empowering people to heal from within. Her approach blends
                therapeutic techniques, energy healing, and mindset
                reprogramming to create lasting transformation.
              </p>

              <p className="about-text">
                She believes healing is not just about fixing—it's about
                rediscovering who you truly are beneath stress, fear, and past
                patterns.
              </p>

              <div className="mission-box">
                <h4>Our Mission</h4>
                <ul>
                  <li>Encourage open-minded reflection</li>
                  <li>Prioritize whole-person healing</li>
                  <li>Respect diverse life experiences</li>
                  <li>Create judgment-free sessions</li>
                </ul>
              </div>

              <button className="learn-btn">Know Us More</button>
            </Col>
          </Row>
        </Container>
      </div>
      {/* third section*/}
      <section className="stats-wrapper">
        <Container>
          <Row>
            {statsData.map((stat, index) => (
              <Col key={index} md={3} sm={6} xs={12} className="mb-4">
                <motion.div
                  className="stats-card"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariant}
                >
                  <h2 className="stats-number">{stat.number}</h2>
                  <h5 className="stats-title">{stat.title}</h5>
                  <p className="stats-text">{stat.text}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* forth section */}

      <section className="about-section">
        <Container>
          <motion.h2
            className="about-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Trusted by thousands on their healing journey
          </motion.h2>

          <Row className="align-items-center mt-5">
            {/* Left Text */}
            <Col md={6} xs={12}>
              <motion.div
                className="testimonial-box"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="testimonial-text">
                  “I struggled in silence for years until therapy helped me
                  understand my emotions and rebuild broken relationships.”
                </p>
              </motion.div>
            </Col>

            {/* Image */}
            <Col md={6} xs={12} className="text-center mt-4 mt-md-0">
              <motion.img
                src="/images/therapist-girl.png"
                alt="Therapist"
                className="therapist-img"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              />
            </Col>
          </Row>

          {/* Satisfaction Box */}
          <motion.div
            className="stats-box"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h3>95%</h3>
            <p>Satisfaction Rate</p>
            <span>Most clients show progress after regular sessions.</span>
          </motion.div>

          {/* Philosophy Section */}
          <motion.div
            className="philosophy"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h4>Her Philosophy</h4>
            <p>
              When you shift your inner world, your outer world follows. Healing
              begins when you begin to understand your emotional truth and step
              into the power you already hold within.
            </p>
          </motion.div>
        </Container>
      </section>
      {/* sixth section */}

      <section className="love-wrapper">
        <Container>
          <motion.h2
            className="love-title"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            What clients love about her
          </motion.h2>

          <Row className="justify-content-center">
            <Col md={6}>
              <motion.ul
                className="love-list"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <li>✔ Safe, warm, judgement-free sessions</li>
                <li>✔ Calm but powerful guidance</li>
                <li>✔ Clear, actionable tools for daily life</li>
                <li>✔ Deep emotional shifts in a short time</li>
              </motion.ul>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* footer */}
      <Footer />
    </div>
  );
};

export default About;
