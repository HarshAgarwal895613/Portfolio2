import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Sparkles, BookOpen, CheckCircle2, Milestone, ArrowRight } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { portfolioData } from '../data/portfolioData';

export const Education = () => {
  const { education } = portfolioData;

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
  };

  return (
    <section id="education" className="education-journey-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={cardVariants}
        >
          <span className="section-label">
            <Milestone size={14} style={{ display: 'inline', marginRight: '6px' }} />
            [ ACADEMIC_JOURNEY // 3D_ROADMAP ]
          </span>
          <h2>Educational Journey & Milestones</h2>
          <p>Chronological academic trajectory from secondary foundation and JEE Advanced qualification to AI/ML engineering.</p>
        </motion.div>

        {/* Interactive Visual 3D Journey Roadmap Track */}
        <motion.div
          className="journey-stepper-track"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={cardVariants}
        >
          <div className="journey-step-node">
            <div className="journey-node-dot">01</div>
            <div className="journey-node-info">
              <span className="journey-node-title">Class X (Secondary)</span>
              <span className="journey-node-time">2020 – 2021</span>
            </div>
          </div>

          <div className="journey-connector-line">
            <div className="journey-energy-pulse" />
            <ArrowRight size={16} className="journey-arrow-icon" />
          </div>

          <div className="journey-step-node">
            <div className="journey-node-dot">02</div>
            <div className="journey-node-info">
              <span className="journey-node-title">Class XII & JEE Adv</span>
              <span className="journey-node-time">2022 – 2023</span>
            </div>
          </div>

          <div className="journey-connector-line">
            <div className="journey-energy-pulse" />
            <ArrowRight size={16} className="journey-arrow-icon" />
          </div>

          <div className="journey-step-node active-summit">
            <div className="journey-node-dot pulse-glow">03</div>
            <div className="journey-node-info">
              <span className="journey-node-title">B.Tech CSE (AI/ML)</span>
              <span className="journey-node-time highlight-time">2025 – Present</span>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Running Block Marquee */}
        <div className="running-ticker-container" style={{ marginTop: '28px' }}>
          <div className="running-ticker-track">
            <div className="ticker-item">
              <BookOpen size={16} color="var(--secondary)" />
              <span>Stage 01: <strong>Class 10th CBSE (70.0%)</strong></span>
            </div>
            <div className="ticker-item">
              <Award size={16} color="var(--primary)" />
              <span>Stage 02: <strong>Class 12th CBSE (76.6%)</strong></span>
            </div>
            <div className="ticker-item">
              <CheckCircle2 size={16} color="var(--secondary)" />
              <span><strong>Qualified for JEE Advanced</strong></span>
            </div>
            <div className="ticker-item">
              <Sparkles size={16} color="var(--primary)" />
              <span>Stage 03: <strong>B.Tech CSE (AI/ML) — 9.24* CGPA</strong></span>
            </div>

            {/* Duplicate for seamless infinite loop */}
            <div className="ticker-item">
              <BookOpen size={16} color="var(--secondary)" />
              <span>Stage 01: <strong>Class 10th CBSE (70.0%)</strong></span>
            </div>
            <div className="ticker-item">
              <Award size={16} color="var(--primary)" />
              <span>Stage 02: <strong>Class 12th CBSE (76.6%)</strong></span>
            </div>
            <div className="ticker-item">
              <CheckCircle2 size={16} color="var(--secondary)" />
              <span><strong>Qualified for JEE Advanced</strong></span>
            </div>
            <div className="ticker-item">
              <Sparkles size={16} color="var(--primary)" />
              <span>Stage 03: <strong>B.Tech CSE (AI/ML) — 9.24* CGPA</strong></span>
            </div>
          </div>
        </div>

        {/* Education Ordered Running Card Blocks — All Equal Length & Breadth with 3D Depth */}
        <div className="edu-running-grid">
          {education.map((item, idx) => (
            <motion.div
              key={item.id}
              className="edu-motion-wrapper"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              variants={cardVariants}
              transition={{ delay: idx * 0.04 }}
            >
              <TiltCard
                className={`glass-card edu-running-card edu-stage-3d ${item.order === 3 ? 'featured-card active-summit-card' : ''}`}
                maxTilt={12}
                scale={1.03}
                elevation={20}
              >
                <div className="edu-card-glow-bar" />

                <div className="edu-card-top-bar edu-top-3d">
                  <span className="edu-step-badge">
                    MILESTONE 0{item.order} // {item.duration}
                  </span>
                  {item.highlight && (
                    <span className={`tag ${item.order === 3 ? 'tag-pink' : ''}`} style={{ fontSize: '0.72rem', padding: '2px 8px' }}>
                      <Sparkles size={11} style={{ marginRight: '4px' }} /> {item.highlight}
                    </span>
                  )}
                </div>

                <div className="edu-card-main-content edu-content-3d">
                  <span className="edu-phase-label">{item.phase}</span>
                  <h3 className="edu-degree-3d">{item.degree}</h3>
                  <p className="edu-org">{item.institution}</p>

                  {item.semester ? (
                    <div className="edu-sub-highlight edu-highlight-3d">
                      <Sparkles size={14} /> {item.semester}
                    </div>
                  ) : (
                    <div className="edu-sub-highlight-placeholder" aria-hidden="true" />
                  )}
                </div>

                <div className="edu-footer-meta edu-footer-3d">
                  <div className="edu-score-pill">
                    <Award size={16} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                    {item.score}
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)' }}>
                    <MapPin size={14} /> {item.location}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
