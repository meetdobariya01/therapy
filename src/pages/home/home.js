import React from "react";
import "./home.css";
import Header from "../../components/header/header";
import { Container, Row, Col, Button, Accordion } from "react-bootstrap";
import { motion } from "framer-motion";
import Footer from "../../components/footer/footer";
 
const HERO_IMAGE = "/mnt/data/Screenshot 2025-11-24 173311.png";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const Home = () => {
  return (
    <div>
     {/* Header can be added here if needed */}
     <Header />
     {/* start */}
    <main className="home-nine">
      {/* SECTION 1: HERO */}
      <section className="hero-section">
        <div className="hero-bg" style={{ backgroundImage: `url("./images/home-1.jpg")` }} />
        <div className="hero-overlay" />
        <Container className="hero-inner">
          <Row className="align-items-center">
            <Col lg={7}>
              <motion.div initial="hidden" className="container" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
                <motion.h1 className="hero-title" variants={fadeUp}>
                  Heal. Release. Transform.
                </motion.h1>

                <motion.h3 className="hero-sub" variants={fadeUp}>
                  Emotional Wellness for a More Aligned You.
                </motion.h3>

                <motion.p className="hero-lead" variants={fadeUp}>
                  Experience deep inner healing and mindset transformation through <strong>EFT, NLP</strong> and intuitive therapeutic coaching.
                </motion.p>

                <motion.div className="hero-ctas" variants={fadeUp}>
                  <Button className="btn-cta primary me-3" href="/appointment">Book a Session</Button>
                  <Button className="btn-cta ghost" href="/workshops">Explore Workshops</Button>
                </motion.div>

                <motion.div className="seo-keywords text-light" variants={fadeUp}>
                  <small>SEO: EFT practitioner India • NLP coach • emotional healing therapy • book therapy session online</small>
                </motion.div>
              </motion.div>
            </Col>

            <Col lg={5} className="text-center d-none d-lg-block">
              <motion.img src={"./images/home-2.jpg"} alt="Delnaz profile" className="hero-profile" initial={{ scale: 0.98 }} animate={{ scale: 1 }} transition={{ duration: 0.9 }} />
            </Col>
          </Row>
        </Container>
      </section>

      {/* SECTION 2: FEATURED INTRO */}
      <section className="featured-intro">
        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
                <h2 className="section-heading">Featured Intro</h2>
                <p className="featured-text">
                  Welcome to a space where you can slow down, breathe, and reconnect with yourself.
                  Delnaz uses powerful, science-backed tools that help you release emotional blocks, overcome patterns,
                  and step into clarity and confidence.
                </p>
              </motion.div>
            </Col>

            <Col md={5} className="text-center mt-4 mt-md-0">
              <motion.img src="./images/delnaz.png" alt="session" className="featured-image w-50 rounded" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} />
            </Col>
          </Row>
        </Container>
      </section>

      {/* SECTION 3: WHY THERAPY */}
      <section className="why-therapy">
        <Container>
          <motion.h3 className="section-heading" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Why Therapy Matters</motion.h3>

          <Row className="g-4 mt-3">
            {[
              { title: "Emotional Healing", text: "Release stored emotional charge and reclaim inner calm." },
              { title: "Mental Clarity", text: "Create cognitive space to choose new responses." },
              { title: "Relationship Health", text: "Improve communication, boundaries and connection." },
              { title: "Resilience", text: "Build tools that sustain you through life stressors." },
            ].map((item, i) => (
              <Col md={3} sm={6} key={i}>
                <motion.div className="why-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12, duration: 0.6 }} viewport={{ once: true }}>
                  <div className="why-index">0{i + 1}</div>
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* SECTION 4: METHODS (EFT / NLP / SOMATIC) */}
      <section className="methods-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <motion.h3 className="section-heading" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>Healing Methods</motion.h3>
              <motion.p className="methods-desc" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                A blend of evidence-informed and experiential methods tailored to your needs. Sessions combine gentle somatic exercises with EFT tapping and focused NLP reframes.
              </motion.p>

              <motion.ul className="methods-list" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <li><strong>EFT (Tapping):</strong> release emotional charge through a gentle, body-based protocol.</li>
                <li><strong>NLP Repatterning:</strong> shift limiting beliefs and anchor empowering states.</li>
                <li><strong>Somatic Work:</strong> breath and movement to integrate change in the nervous system.</li>
                <li><strong>Mindset Tools:</strong> daily micro-practices to sustain growth between sessions.</li>
              </motion.ul>
            </Col>

            <Col lg={6} className="text-center mt-4 mt-lg-0">
              <motion.img src="./images/home-4.jpg" alt="methods" className="methods-image w-75" initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} />
            </Col>
          </Row>
        </Container>
      </section>

      {/* SECTION 5: PROGRAMS & PACKAGES */}
      <section className="programs-section">
        <Container>
          <motion.h3 className="section-heading" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Programs & Packages</motion.h3>

          <Row className="g-4 mt-4">
            {[
              { name: "Starter (4 sessions)", price: "₹6,000", detail: "Short program for immediate relief & practical tools." },
              { name: "Healing (8 sessions)", price: "₹14,000", detail: "Structured work for deeper pattern change." },
              { name: "Transformation (12 sessions)", price: "₹24,000", detail: "Full re-patterning with accountability & guided integration." },
            ].map((p, i) => (
              <Col md={4} key={i}>
                <motion.div className="program-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} viewport={{ once: true }}>
                  <div className="program-top">
                    <h5>{p.name}</h5>
                    <div className="program-price">{p.price}</div>
                  </div>
                  <p className="program-detail">{p.detail}</p>
                  <div className="program-actions g-3">
                    <Button className="btn-outline" href="/contact">Learn More</Button>
                    <Button className="btn-main" href="/appointment">Book</Button>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* SECTION 6: HOW IT WORKS (3 step) */}
      <section className="how-section">
        <Container>
          <motion.h3 className="section-heading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>How Sessions Work</motion.h3>
          <Row className="g-4 mt-4">
            {[
              { step: "1", title: "Discovery", desc: "Complimentary call to clarify needs & set a roadmap." },
              { step: "2", title: "Focused Sessions", desc: "EFT, NLP and somatic work to release and rewire." },
              { step: "3", title: "Integration", desc: "Between-session practices and follow-up to consolidate change." },
            ].map((s, i) => (
              <Col md={4} key={i}>
                <motion.div className="how-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} viewport={{ once: true }}>
                  <div className="how-step">{s.step}</div>
                  <h5>{s.title}</h5>
                  <p>{s.desc}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* SECTION 7: TESTIMONIALS */}
      <section className="testimonials">
        <Container>
          <motion.h3 className="section-heading" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>What Clients Love</motion.h3>

          <Row className="g-4 mt-3">
            {[
              { quote: "Safe, warm, judgement-free sessions — life changing.", who: "S., Mumbai" },
              { quote: "Calm but powerful guidance — tools I use daily.", who: "R., Bangalore" },
              { quote: "Deep emotional shifts in a short time.", who: "M., Pune" },
            ].map((t, i) => (
              <Col md={4} key={i}>
                <motion.blockquote className="testimonial-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} viewport={{ once: true }}>
                  <p>“{t.quote}”</p>
                  <cite>- {t.who}</cite>
                </motion.blockquote>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="faq">
        <Container>
          <motion.h3 className="section-heading" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Frequently Asked Questions</motion.h3>

          <Row className="justify-content-center mt-4">
            <Col lg={8}>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>How many sessions will I need?</Accordion.Header>
                  <Accordion.Body>It varies by person — many feel relief in 1–4 sessions; deeper transformation is often 8–12 sessions.</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>Are sessions online?</Accordion.Header>
                  <Accordion.Body>Yes. Most sessions are online using secure video tools. In-person sessions available by request.</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>Is EFT safe for trauma?</Accordion.Header>
                  <Accordion.Body>Yes — work is trauma-aware and paced to your nervous system. If needed, Delnaz will use stabilising techniques first.</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="final-cta">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <motion.h3 className="final-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>Ready to begin your transformation?</motion.h3>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Book a complimentary discovery call to design a plan that fits your life.</motion.p>
            </Col>

            <Col md={4} className="text-md-end mt-3 mt-md-0">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Button className="btn-cta primary me-2" href="/appointment">Book a Session</Button>
                <Button className="btn-cta ghost" href="/workshops">Explore Workshops</Button>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Floating WhatsApp */}
      <a className="whatsapp-float" href={`https://wa.me/919999999999?text=${encodeURIComponent("Hello Delnaz, I'd like to book a session.")}`} target="_blank" rel="noreferrer">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden><path d="M20.5 3.5c-1.9-1.9-4.5-3-7.5-3-5 0-9 4-9 9 0 1.6.4 3.1 1.2 4.4L1 23l6.2-1.6C9 21.8 10.5 22 12 22c5 0 9-4 9-9 0-3-1.1-5.6-3.5-7.5zM12 20c-1.3 0-2.6-.2-3.8-.6l-.3-.1-3.3.9.9-3.2-.1-.3C4.2 14.6 4 13.3 4 12 4 7.6 7.6 4 12 4c2.8 0 5.4 1.4 7 3.8C19.4 10.1 16.2 15 12 20z"/></svg>
        <span>Message</span>
      </a>

    </main>
    {/* footer */}
    <Footer/>
     
    </div>
  );
};

export default Home;
