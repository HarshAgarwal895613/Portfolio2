import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Cpu, CheckCircle2, ChevronRight, Sparkles, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Code2: <Code2 size={22} />,
  Layout: <Layout size={22} />,
  Cpu: <Cpu size={22} />
};

export const Skills = () => {
  const { skills } = portfolioData;
  const [selectedSkill, setSelectedSkill] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const handleSkillClick = (skillName) => {
    setSelectedSkill(prev => (prev === skillName ? null : skillName));
  };

  return (
    <section id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <span className="section-label">[ TECH_MATRIX // INTERACTIVE_BLOCKS ]</span>
          <h2>Technical Skills & Arsenal</h2>
          <p>Click on any skill block to inspect specific proficiencies, practical usage, and problem-solving milestones.</p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((cat, idx) => (
            <motion.div
              key={idx}
              className="glass-card skill-category-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  {iconMap[cat.icon] || <Code2 size={22} />}
                </div>
                <div>
                  <h3>{cat.category}</h3>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Interactive Blocks</span>
                </div>
              </div>

              <div className="skill-list">
                {cat.items.map((skill, sIdx) => {
                  const isSelected = selectedSkill === skill.name;
                  return (
                    <div
                      key={sIdx}
                      className={`clickable-skill-item ${isSelected ? 'active' : ''}`}
                      onClick={() => handleSkillClick(skill.name)}
                      title="Click to toggle details"
                    >
                      <div className="skill-info">
                        <div className="skill-info-name">
                          <span>{skill.name}</span>
                          {skill.highlight && (
                            <span className="skill-highlight-tag">{skill.highlight}</span>
                          )}
                        </div>
                        <span className="mono" style={{ color: 'var(--primary)', fontSize: '0.85rem' }}>
                          {skill.level}%
                        </span>
                      </div>

                      <div className="skill-progress-bar">
                        <motion.div
                          className="skill-progress-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                        />
                      </div>

                      {/* Clickable Expanded Details Block */}
                      {isSelected ? (
                        <div className="skill-expanded-details">
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary)', fontWeight: '600', marginBottom: '4px' }}>
                            <Sparkles size={13} /> {skill.status}
                          </div>
                          <p>{skill.details}</p>
                        </div>
                      ) : (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: '4px', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                          Click to inspect <ChevronRight size={12} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
