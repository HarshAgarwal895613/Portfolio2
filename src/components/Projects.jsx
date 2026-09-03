import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles, CheckCircle2, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Projects = () => {
  const { projects } = portfolioData;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <span className="section-label">[ FEATURED_SYSTEM // AI_IOT_PROJECT ]</span>
          <h2>Featured Projects & Innovations</h2>
          <p>Highlighting AI/ML intelligent climate telemetry, automated regulation, and hardware sensing.</p>
        </motion.div>

        <div className="projects-grid" style={projects.length === 1 ? { maxWidth: '750px', margin: '0 auto' } : {}}>
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              className="glass-card project-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              transition={{ delay: idx * 0.1 }}
            >
              {proj.image ? (
                <div className="project-image-container">
                  <img src={proj.image} alt={proj.title} loading="lazy" />
                </div>
              ) : (
                <div className="project-header-bar">
                  <span>{proj.icon}</span>
                </div>
              )}

              <div className="project-body">
                <div className="project-tag-row">
                  <span className="tag">
                    <Sparkles size={12} style={{ marginRight: '4px' }} /> {proj.category}
                  </span>
                  {proj.date && (
                    <span className="tag" style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                      <Calendar size={12} style={{ marginRight: '4px' }} /> {proj.date}
                    </span>
                  )}
                  {proj.highlight && (
                    <span className="tag tag-pink" style={{ fontSize: '0.72rem' }}>
                      {proj.highlight}
                    </span>
                  )}
                </div>

                <h3>{proj.title}</h3>
                
                {proj.bullets && proj.bullets.length > 0 ? (
                  <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 16px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {proj.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        <CheckCircle2 size={15} color="var(--primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{proj.description}</p>
                )}

                <div className="project-tech">
                  {proj.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="tag tag-pink">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                      style={{ padding: '8px 18px', fontSize: '0.88rem' }}
                    >
                      <Github size={16} /> GitHub Code
                    </a>
                  )}
                  {proj.demo && proj.demo !== '#' && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ padding: '8px 18px', fontSize: '0.88rem' }}
                    >
                      <ExternalLink size={16} /> Live Preview
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
