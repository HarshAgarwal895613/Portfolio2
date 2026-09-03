import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Sparkles, BookOpen, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  GraduationCap: <GraduationCap size={22} />,
  Award: <Award size={22} />,
  BookOpen: <BookOpen size={22} />
};

export const Education = () => {
  const { education } = portfolioData;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="education">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <span className="section-label">[ ACADEMIC_PATH // RUNNING_BLOCKS ]</span>
          <h2>Education & Academic Milestones</h2>
          <p>Educational trajectory in chronological order with certified scores and achievements.</p>
        </motion.div>

        {/* Dynamic Running Block Marquee */}
        <div className="running-ticker-container">
          <div className="running-ticker-track">
            <div className="ticker-item">
              <Sparkles size={16} color="var(--primary)" />
              <span>B.Tech CSE (AI/ML) @ LPU: <strong>9.24 CGPA (Aug' 25 – Present)</strong></span>
            </div>
            <div className="ticker-item">
              <CheckCircle2 size={16} color="var(--secondary)" />
              <span>Qualified for: <strong>JEE Advanced</strong></span>
            </div>
            <div className="ticker-item">
              <Award size={16} color="var(--primary)" />
              <span>Class 12th CBSE: <strong>76.6% (Mar' 22 – May' 23)</strong></span>
            </div>
            <div className="ticker-item">
              <BookOpen size={16} color="var(--secondary)" />
              <span>Class 10th CBSE: <strong>70.0% (Mar' 20 – May' 21)</strong></span>
            </div>

            {/* Duplicate for seamless infinite loop */}
            <div className="ticker-item">
              <Sparkles size={16} color="var(--primary)" />
              <span>B.Tech CSE (AI/ML) @ LPU: <strong>9.24 CGPA (Aug' 25 – Present)</strong></span>
            </div>
            <div className="ticker-item">
              <CheckCircle2 size={16} color="var(--secondary)" />
              <span>Qualified for: <strong>JEE Advanced</strong></span>
            </div>
            <div className="ticker-item">
              <Award size={16} color="var(--primary)" />
              <span>Class 12th CBSE: <strong>76.6% (Mar' 22 – May' 23)</strong></span>
            </div>
            <div className="ticker-item">
              <BookOpen size={16} color="var(--secondary)" />
              <span>Class 10th CBSE: <strong>70.0% (Mar' 20 – May' 21)</strong></span>
            </div>
          </div>
        </div>

        {/* Education Ordered Running Card Blocks */}
        <div className="edu-running-grid">
          {education.map((item, idx) => (
            <motion.div
              key={item.id}
              className={`glass-card edu-running-card ${idx === 0 ? 'featured-card' : ''}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              transition={{ delay: idx * 0.15 }}
            >
              <div className="edu-card-glow-bar" />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <span className="edu-step-badge">
                  STAGE 0{item.order} // {item.duration}
                </span>
                {item.highlight && (
                  <span className="tag tag-pink" style={{ fontSize: '0.72rem', padding: '2px 8px' }}>
                    <Sparkles size={11} style={{ marginRight: '4px' }} /> {item.highlight}
                  </span>
                )}
              </div>

              <h3>{item.degree}</h3>
              <p className="edu-org">{item.institution}</p>

              {item.semester && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '8px' }}>
                  <Sparkles size={14} /> {item.semester}
                </div>
              )}

              <div className="edu-footer-meta">
                <div className="edu-score-pill">
                  <Award size={16} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                  {item.score}
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)' }}>
                  <MapPin size={14} /> {item.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
