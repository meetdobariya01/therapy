import React from 'react'
import Header from '../../components/header/header';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "./blog.css";
import Footer from '../../components/footer/footer';

const longArticles = [
  {
    id: "eft",
    title: "How EFT Helps With Anxiety",
    long:
      `Emotional Freedom Techniques (EFT), commonly called "tapping", combines cognitive
processing with gentle somatic stimulation by tapping meridian points on the face and body.
This simple practice can reduce cortisol and rapidly down-regulate the nervous system when
used consistently. Use EFT during an acute spike of anxiety (before or during an event),
and as a daily micro-routine to rewire entrenched responses over weeks and months.

How to use it (detailed):
1. Notice and name — identify the feeling and rate it 0–10.
2. Setup — tap the karate-chop point and say a setup sentence that accepts the feeling.
3. Sequence — tap the eyebrow, side of eye, under eye, under nose, chin, collarbone, under arm, top of head while saying a short reminder phrase.
4. Re-check — breathe, then re-rate intensity and repeat if necessary.

Practical tips:
• Combine with 4-4-6 breathing when intensity is >7.
• Keep a small log of triggers + intensity to identify patterns.
• For chronic anxiety, pair EFT with talk therapy, sleep hygiene, and light physical activity.`,
  },
  {
    id: "inner-child",
    title: "Signs Your Inner Child Needs Healing",
    long:
      `The concept of the inner child helps us access early unmet needs and patterns that still shape
adult life. Symptoms are often subtle and can be mistaken for personality or temperament.
Common signs include: sudden shame or rage outbursts, repeated relational patterns that echo childhood,
people-pleasing, or an intense fear of abandonment.

How to start healing:
• Naming practice: notice a reaction, then pause and say, \"That is my younger self frightened right now.\"
• Journaling: write a letter to your child-self and one back as the wise caregiver.
• Small experiments: practice boundary-setting in low-risk situations to build muscle memory.

Safety note: inner-child work can surface memories and emotions. Work with a trained therapist if
you notice re-traumatization, dissociation, or prolonged destabilization.`,
  },
  {
    id: "mindset-rituals",
    title: "Daily Mindset Rituals for Calm",
    long:
      `Small regular rituals change baseline neurochemistry. The goal is not to fix every emotion but to provide
reliable cues to the nervous system that it's safe and capable. A practical daily template:

Morning (6-10 minutes)
• 1–2 min diaphragmatic breathing (4-4-6 pattern).
• 2 min gratitude naming (three specific things).
• 1–2 min intention setting (launch with a short phrase).

Midday micro-reset (30–90 seconds)
• Anchor breath (inhale 4, exhale 6), scan body, notice tension.
• One small action: drink water, step outside, stretch.

Evening wind-down (15–30 minutes)
• Dim lights, gentle movement (yoga/soft stretching).
• Short journal prompt: \"What went well? What did I handle differently?\"
• Minimal blue light before bed, keep bedtime routine consistent.

Consistency beats intensity — start 2–3 minutes daily and expand only when it feels sustainable.`,
  },
  {
    id: "nlp",
    title: "How NLP Rewires Your Beliefs",
    long:
      `Neuro-Linguistic Programming (NLP) connects language patterns, sensory experience, and behavior.
Its techniques (anchoring, reframing, pattern interrupt) give practical ways to create new internal
associations. For example, an anchor pairs a physical cue (pressing two fingers) with a recalled resource state
(confidence). After repetition, the cue reliably evokes the new state.

Step-by-step anchor practice:
1. Choose a vivid memory of confidence or calm.
2. Engage all senses: sights, sounds, body sensations.
3. Set the physical anchor at peak intensity.
4. Repeat 3–5 times across days until the anchor reliably triggers the state.

Reframing beliefs:
• Notice categorical phrases (“I always fail”).
• Generate evidence against the belief and craft a balanced frame: “Sometimes I struggle, and I can learn.”
• Use small behavioral experiments to test the new frame.`,
  },
  {
    id: "triggers",
    title: "Understanding Emotional Triggers",
    long:
      `Emotional triggers are learned shortcuts — they are efficient, not moral failures. Once we understand the trigger
chain (cue → body response → thought → behavior), we can insert a new response. The Three-Step Response Model:

1. Notice — label the felt sense (\"heat in my chest\") without judgment.
2. Name — give it an emotion word (fear, shame, anger).
3. Choose — pick a steadying action (breath, step back, script a boundary).

Practice: keep a short trigger log (when, what happened, body sensations, action taken). Over time you will see smaller reactivity and greater choice.`,
  },
];

const specialties = [
  {
    title: "Anxiety disorders",
    desc: "Evidence-based approaches to reduce panic, generalized anxiety, and social anxiety symptoms.",
  },
  {
    title: "Relationship healing",
    desc: "Repair communication patterns and build secure connection using somatic & attachment-informed tools.",
  },
  {
    title: "Trauma-informed care",
    desc: "Gentle protocols for early trauma—stabilization, grounding, and integration practices.",
  },
  {
    title: "Mindset & performance",
    desc: "Combining NLP and cognitive tools to improve focus, confidence, and flow.",
  },
];

const Blog = () => {
     const container = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
  };
  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const screenshotPath = "/mnt/data/Screenshot 2025-11-25 110503.png";
  return (
    <div>
        {/* header */}
        <Header/>
        {/* first section */}
         <div className="healing-long-page">
      {/* Hero / top band (image left, big heading across) */}
      <header className="hero-band">
        <div className="hero-inner container-fluid">
          <div className="left-avatars d-none d-md-flex flex-column align-items-center">
            {/* sample circular avatars showing as a vertical stack like screenshot */}
            <img alt="av1" src={"./images/home-1.jpg"} className="avatar-thumb mb-3" />
            <img alt="av2" src={"./images/home-2.jpg"} className="avatar-thumb mb-3" />
            <img alt="av3" src={"./images/home-3.jpg"}className="avatar-thumb mb-3" />
            <img alt="av4" src={"./images/home-4.jpg"} className="avatar-thumb" />
          </div>

          <div className="hero-main row gx-0">
            <div className="col-md-5 hero-photo-col">
              {/* large portrait / hero image */}
              <motion.div
                initial={{ scale: 1.02 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="hero-photo-wrap"
              >
                <img src={"./images/home-1.jpg"} alt="hero" className="hero-photo" />
              </motion.div>
            </div>

            <div className="col-md-7 hero-text-col d-flex align-items-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="hero-copy"
              >
                <h1 className="hero-title">
                  Range of specialties to meet <br /> your specific needs.
                </h1>
                <p className="hero-sub">
                  Practical therapy, somatic tools, and mindset coaching — all blended to support lasting change.
                </p>

                <div className="mt-4">
                  <Button href="#specialties" className="me-2 btn-lg primary-cta">Explore specialties</Button>
                  <Button href="#blog" className="btn-lg outline-cta">Explore the Blog</Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* Specialties horizontal cards row (rounded white cards like screenshot) */}
      <section id="specialties" className="specialties-section py-5">
        <Container fluid className="container-xl">
          <motion.div initial="hidden" whileInView="show" variants={container} className="specialties-inner">
            <div className="d-flex overflow-auto gap-4 specialties-scroll py-3">
              {specialties.map((s, i) => (
                <motion.div key={i} variants={item} className="special-card-wrap">
                  <Card className="special-card">
                    <Card.Body>
                      <h5 className="spec-title">{s.title}</h5>
                      <p className="spec-desc">{s.desc}</p>
                    </Card.Body>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Long articles section (two-column on desktop) */}
      <section id="blog" className="articles-section py-5">
        <Container>
          <Row>
            <Col lg={8}>
              <motion.div initial="hidden" whileInView="show" variants={container}>
                {longArticles.map((a, idx) => (
                  <motion.article key={a.id} className="article-card mb-4" variants={item}>
                    <Card className="p-3 h-100">
                      <Card.Body>
                        <h3 className="article-h3">{a.title}</h3>
                        <p className="article-long">{a.long}</p>
                      </Card.Body>
                    </Card>
                  </motion.article>
                ))}
              </motion.div>
            </Col>

            <Col lg={4} className="d-none d-lg-block">
              <aside className="sticky-aside">
                <div className="aside-card p-3 mb-4">
                  <h5>Quick Tools</h5>
                  <ul className="tools-list">
                    <li>3-step grounding (breath, sense, label)</li>
                    <li>2-min EFT micro-routine</li>
                    <li>Daily 5-minute mindset practice</li>
                    <li>Weekly reparenting journaling prompt</li>
                  </ul>
                </div>

                <div className="aside-card p-3">
                  <h5>Book a Session</h5>
                  <p className="mb-3 small">
                    If you'd like personalized help, book a focused 50-minute session to start working
                    on a specific pattern or trigger.
                  </p>
                  <Button className="w-100 booking-btn">Book a Session</Button>
                </div>
              </aside>
            </Col>
          </Row>
        </Container>
      </section>

      {/* footer */}
      <Footer/>
    </div>
    </div>
  )
}

export default Blog;