import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code, Terminal, ExternalLink, Sparkles, Activity } from 'lucide-react';
import { SiLeetcode, SiGithub, SiLinkedin } from 'react-icons/si';
import { TiltCard } from './TiltCard';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Github: <SiGithub size={28} color="#8957e5" />,
  Linkedin: <SiLinkedin size={28} color="#0a66c2" />,
  LeetCode: <SiLeetcode size={28} color="#ffa116" />,
  Code: <Code size={28} color="#00f0ff" />,
  Terminal: <Terminal size={28} color="#00ff88" />
};

const badgeMap = {
  Github: 'ACTIVE REPOSITORIES',
  Linkedin: 'PROFESSIONAL NETWORK',
  LeetCode: '50+ PROBLEMS SOLVED',
  Code: 'ALGORITHMS & DATA STRUCTURES'
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
            <Activity size={14} style={{ display: 'inline', marginRight: '6px' }} />
            [ CODING_ECOSYSTEM // TELEMETRY_NODES ]
          </span>
          <h2>Online Presence & Profiles</h2>
          <p>Explore my algorithmic problem-solving tracks, open-source repositories, and verified engineering credentials.</p>
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
              <TiltCard className="glass-card profile-card profile-frame-3d" maxTilt={14} scale={1.035} elevation={16}>
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-link-3d"
                  style={{ display: 'flex', flexDirection: 'column', width: '100%', textDecoration: 'none', color: 'inherit', height: '100%' }}
                >
                  <div className="profile-header-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div className="profile-icon profile-icon-3d">
                      {iconMap[profile.platform] || iconMap[profile.icon] || <Code size={28} />}
                    </div>
                    <span className="profile-status-pill">
                      <Sparkles size={11} style={{ marginRight: '4px' }} />
                      {badgeMap[profile.platform] || 'VERIFIED'}
                    </span>
                  </div>

                  <div className="profile-info profile-info-3d">
                    <h3 className="profile-platform-title">{profile.platform}</h3>
                    <p className="profile-handle">@{profile.username}</p>
                  </div>

                  <div className="profile-footer-3d" style={{ marginTop: 'auto', paddingTop: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--glass-border)' }}>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Launch Node</span>
                    <ExternalLink size={15} color="var(--primary)" />
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
