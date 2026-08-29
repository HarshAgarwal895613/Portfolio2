import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const { experience } = portfolioData;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <span className="section-label">// Experience</span>
          <h2>Milestones & Roles</h2>
          <p>Key professional, academic, and practical project experiences.</p>
        </motion.div>

        <div className="timeline">
          {experience.map((item, idx) => (
            <motion.div
              key={idx}
              className="timeline-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ delay: idx * 0.15 }}
            >
              <div className="timeline-dot" />
              <div className="glass-card timeline-card">
                <span className="timeline-year">{item.duration}</span>
                <h3>{item.role}</h3>
                <p className="timeline-org">{item.organization}</p>
                <p className="timeline-desc">{item.description}</p>

                <div className="timeline-badges">
                  {item.badges.map((b, bIdx) => (
                    <span key={bIdx} className="tag">
                      <Briefcase size={12} style={{ marginRight: '4px' }} /> {b}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
