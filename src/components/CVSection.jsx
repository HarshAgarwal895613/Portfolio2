import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, GraduationCap, CheckCircle2, Sparkles, Eye, X, Cpu, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const CVSection = () => {
  const { personal } = portfolioData;
  const [showPreview, setShowPreview] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="cv" className="cv-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <span className="section-label">[ CURRICULUM_VITAE // OFFICIAL_DOCUMENT ]</span>
          <h2>Curriculum Vitae</h2>
          <p>Download or examine my official verified CV with comprehensive academic records and project interests.</p>
        </motion.div>

        <motion.div
          className="glass-card cv-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <div className="cv-icon">
            <FileText size={36} />
          </div>

          <h3>{personal.name} — Official Resume</h3>
          <p>
            B.Tech Computer Science Engineering (AI/ML Specialization) @ Lovely Professional University. Experienced with C++, Python, Data Structures & Algorithms, Full-Stack React, and DBMS.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '32px' }}>
            <span className="tag">
              <GraduationCap size={14} style={{ marginRight: '6px' }} /> 9.24 CGPA @ LPU (3rd Sem)
            </span>
            <span className="tag tag-pink">
              <Sparkles size={14} style={{ marginRight: '6px' }} /> AI/ML Specialization
            </span>
            <span className="tag">
              <CheckCircle2 size={14} style={{ marginRight: '6px' }} /> 50+ LeetCode Solved
            </span>
            <span className="tag tag-pink">
              <CheckCircle2 size={14} style={{ marginRight: '6px' }} /> Qualified for JEE Advanced
            </span>
          </div>

          <div className="cv-actions">
            <a
              href={personal.resumePdf}
              download="Harsh_Agarwal_Resume.pdf"
              className="btn btn-primary"
            >
              <Download size={18} /> Download CV (PDF)
            </a>

            <button
              className="btn btn-accent"
              onClick={() => setShowPreview(true)}
            >
              <Eye size={18} /> Instant CV Viewer
            </button>

            <a
              href="#skills"
              className="btn btn-outline"
              style={{
                borderColor: 'rgba(0, 240, 255, 0.4)',
                color: 'var(--primary)',
                background: 'rgba(0, 240, 255, 0.06)'
              }}
            >
              <Cpu size={18} /> Arsenal Direct Reach <ArrowRight size={16} />
            </a>

            <a
              href={personal.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <ExternalLink size={18} /> Open in Tab
            </a>
          </div>
        </motion.div>

        {/* Embedded PDF Viewer Modal */}
        {showPreview && (
          <div className="modal-backdrop" onClick={() => setShowPreview(false)}>
            <div
              className="modal-content"
              style={{ width: '92vw', maxWidth: '1000px', height: '90vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setShowPreview(false)}
                aria-label="Close CV Viewer"
              >
                <X size={20} />
              </button>
              <iframe
                src={`${personal.resumePdf}#toolbar=1`}
                title="Harsh Agarwal CV Preview"
                style={{ width: '100%', height: '100%', border: 'none' }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
