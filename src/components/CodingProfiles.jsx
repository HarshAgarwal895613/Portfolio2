import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Github: <Github size={24} />,
  Linkedin: <Linkedin size={24} />,
  Code: <Code size={24} />,
  Terminal: <Terminal size={24} />
};

export const CodingProfiles = () => {
  const { codingProfiles } = portfolioData;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="coding-profiles">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <span className="section-label">// Coding Ecosystem</span>
          <h2>Online Presence & Profiles</h2>
          <p>Explore my problem-solving tracks, repositories, and developer platforms.</p>
        </motion.div>

        <div className="profiles-grid">
          {codingProfiles.map((profile, idx) => (
            <motion.a
              key={idx}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card profile-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="profile-icon">
                {iconMap[profile.icon] || <Code size={24} />}
              </div>
              <div className="profile-info">
                <h3>{profile.platform}</h3>
                <p>@{profile.username}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
