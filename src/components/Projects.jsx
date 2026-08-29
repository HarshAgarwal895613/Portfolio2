import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Cpu } from 'lucide-react';
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
          <h2>Featured Project & Innovation</h2>
          <p>Highlighting AI/ML intelligent climate telemetry and smart hardware systems.</p>
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
                  {proj.highlight && (
                    <span className="tag tag-pink" style={{ fontSize: '0.72rem' }}>
                      {proj.highlight}
                    </span>
                  )}
                </div>

                <h3>{proj.title}</h3>
                <p>{proj.description}</p>

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
