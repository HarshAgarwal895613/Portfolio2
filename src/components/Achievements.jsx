import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, CheckCircle, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Trophy: <Trophy size={24} />,
  Award: <Award size={24} />,
  CheckCircle: <CheckCircle size={24} />,
  Star: <Star size={24} />
};

export const Achievements = () => {
  const { achievements } = portfolioData;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="achievements">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <span className="section-label">// Honors & Milestones</span>
          <h2>Key Achievements</h2>
          <p>Notable accomplishments throughout my academic and development journey.</p>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              className="glass-card achievement-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="achievement-icon-box">
                {iconMap[item.icon] || <Star size={24} />}
              </div>
              <div className="achievement-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
