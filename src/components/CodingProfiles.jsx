import React from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink, Globe } from 'lucide-react';
import { SiLeetcode, SiGithub, SiLinkedin } from 'react-icons/si';
import { TiltCard } from './TiltCard';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Github: <SiGithub size={26} color="#8957e5" />,
  Linkedin: <SiLinkedin size={26} color="#0a66c2" />,
  LeetCode: <SiLeetcode size={26} color="#ffa116" />,
  Code: <Code size={26} color="var(--primary)" />
};

const badgeMap = {
  Github: 'REPOSITORIES',
  Linkedin: 'NETWORK',
  LeetCode: '50+ SOLVED',
  Code: 'DSA'
};

export const CodingProfiles = () => {
  const { codingProfiles } = portfolioData;

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
  };

  return (
    <section id="coding-profiles">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={cardVariants}
        >
          <span className="section-label">
            <Globe size={14} style={{ display: 'inline', marginRight: '6px' }} />
            [ CODING_PROFILES // PLATFORMS ]
          </span>
          <h2>Online Presence & Coding Profiles</h2>
          <p>Verified coding tracks, problem-solving progress, and open-source contributions.</p>
        </motion.div>

        <div className="profiles-grid">
          {codingProfiles.map((profile, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              variants={cardVariants}
              transition={{ delay: idx * 0.05 }}
            >
              <TiltCard className="glass-card profile-card">
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', flexDirection: 'column', width: '100%', textDecoration: 'none', color: 'inherit', height: '100%' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div className="profile-icon">
                      {iconMap[profile.platform] || iconMap[profile.icon] || <Code size={26} />}
                    </div>
                    <span className="profile-status-pill">
                      {badgeMap[profile.platform] || 'VERIFIED'}
                    </span>
                  </div>

                  <div className="profile-info">
                    <h3 style={{ fontSize: '1.15rem', marginBottom: '4px' }}>{profile.platform}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>@{profile.username}</p>
                  </div>

                  <div style={{ marginTop: 'auto', paddingTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--glass-border)' }}>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>View Profile</span>
                    <ExternalLink size={14} color="var(--primary)" />
                  </div>
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
