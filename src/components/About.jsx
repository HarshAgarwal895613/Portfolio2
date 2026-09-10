import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, Terminal, Code2, Cpu } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { about, personal } = portfolioData;

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
  };

  return (
    <section id="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={cardVariants}
          >
            <TiltCard className="glass-card about-terminal-card" maxTilt={6} scale={1.01}>
              {/* Terminal Window Title Bar */}
              <div className="about-terminal-header">
                <div className="terminal-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="terminal-title">
                  <Code2 size={13} style={{ display: 'inline', marginRight: '5px' }} />
                  dev://harsh_agarwal/profile.sys
                </div>
                <span className="terminal-status-badge">ONLINE</span>
              </div>

              <div className="about-terminal-body">
                <h3>Engineering Intelligent Systems & Web Solutions</h3>
                <p className="terminal-prompt-line">
                  <span className="prompt-sym">&gt;</span> {personal.bio}
                </p>
                <p className="terminal-prompt-line" style={{ marginTop: '12px' }}>
                  <span className="prompt-sym">&gt;</span> {about.objective}
                </p>

                {/* 3D AI Telemetry Metadata Grid */}
                <div className="terminal-ai-telemetry-box">
                  <div className="ai-telemetry-row">
                    <span className="telemetry-key">SPECIALIZATION:</span>
                    <span className="telemetry-val">Artificial Intelligence & Machine Learning (AI/ML)</span>
                  </div>
                  <div className="ai-telemetry-row">
                    <span className="telemetry-key">PROBLEM_SOLVING:</span>
                    <span className="telemetry-val">50+ LeetCode DSA Solved // C++ & Python</span>
                  </div>
                  <div className="ai-telemetry-row">
                    <span className="telemetry-key">APPLIED_SYSTEMS:</span>
                    <span className="telemetry-val">IoT Smart Climate Telemetry, React.js & Algorithms</span>
                  </div>
                </div>

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
              </div>
            </TiltCard>
          </motion.div>

          <motion.div
            className="about-stats"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={cardVariants}
          >
            {about.stats.map((stat, idx) => (
              <TiltCard key={idx} className="glass-card stat-box stat-box-3d" maxTilt={10} scale={1.04}>
                <div className="stat-glow-orb" />
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </TiltCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

