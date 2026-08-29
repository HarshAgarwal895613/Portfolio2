import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Eye, CheckCircle2 } from 'lucide-react';
import { ImageModal } from './ImageModal';
import { portfolioData } from '../data/portfolioData';

export const Certifications = () => {
  const { certifications } = portfolioData;
  const [selectedImage, setSelectedImage] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="certificates">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <span className="section-label">[ VERIFIED_CREDENTIALS // PROOF ]</span>
          <h2>Certificates & Honors</h2>
          <p>Verified professional certifications in Full-Stack React, Python, Programming, and Leadership.</p>
        </motion.div>

        <div className="certs-grid">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              className="glass-card cert-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              transition={{ delay: idx * 0.1 }}
            >
              <div
                className="cert-image-wrapper"
                onClick={() => setSelectedImage(cert.image)}
                title="Click to zoom certificate"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                />
                <div className="cert-image-overlay">
                  <Eye size={22} /> Click to Examine
                </div>
              </div>

              <div className="cert-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <span className="tag tag-pink" style={{ fontSize: '0.72rem', padding: '2px 8px' }}>
                    {cert.badge}
                  </span>
                </div>
                <h3>{cert.title}</h3>
                <div className="cert-meta-row">
                  <p className="cert-date">{cert.date}</p>
                  <span style={{ fontSize: '0.85rem', color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle2 size={14} /> Verified
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      </div>
    </section>
  );
};
