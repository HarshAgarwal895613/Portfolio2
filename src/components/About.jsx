import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { about, personal } = portfolioData;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <span className="section-label">
            <Terminal size={14} /> [ ABOUT_DEV // PROFILE ]
          </span>
          <h2>Background & Journey</h2>
          <p>Get to know my engineering path, academic focus, and development mindset.</p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <h3>Engineering Intelligent Systems & Web Solutions</h3>
            <p>{personal.bio}</p>
            <p>{about.objective}</p>

            <div className="strengths-container">
              <h4 className="strengths-title">
                <Sparkles size={16} style={{ display: 'inline', marginRight: '6px' }} />
                Core Capabilities & Focus:
              </h4>
              <div className="strengths-pills">
                {about.strengths.map((str, idx) => (
                  <span key={idx} className="tag">
                    <CheckCircle2 size={13} style={{ marginRight: '6px' }} /> {str}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            {about.stats.map((stat, idx) => (
              <div key={idx} className="glass-card stat-box">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
