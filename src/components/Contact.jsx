import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact = () => {
  const { personal } = portfolioData;
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(formState.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)}`;
    window.open(mailtoUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <span className="section-label">
            <Terminal size={14} /> [ TRANSMISSION // CONNECT ]
          </span>
          <h2>Contact Me & Collaborate</h2>
          <p>Have an engineering opportunity, a hackathon project, or want to discuss ideas? Reach out!</p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <h3>Direct Contact Channels</h3>
            <p>
              I am open to software development internships, freelance collaborations, and project inquiries.
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="contact-label">Email (Gmail)</p>
                  <p className="contact-value">
                    <a href={personal.socialLinks.email} target="_blank" rel="noopener noreferrer">
                      {personal.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="contact-label">Mobile Number</p>
                  <p className="contact-value">
                    <a href={`tel:${personal.phone.replace(/\s+/g, '')}`}>
                      {personal.phone}
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="contact-label">Location</p>
                  <p className="contact-value">{personal.location}</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Linkedin size={22} />
                </div>
                <div>
                  <p className="contact-label">LinkedIn Profile</p>
                  <p className="contact-value">
                    <a href={personal.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      Harsh Agarwal
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="glass-card contact-form-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            transition={{ delay: 0.1 }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <CheckCircle2 size={48} color="var(--primary)" style={{ margin: '0 auto 16px' }} />
                <h3>Transmission Ready!</h3>
                <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
                  Your email client has been launched. Thank you for connecting with Harsh Agarwal!
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">// YOUR_NAME</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. Alex"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">// YOUR_EMAIL</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="e.g. user@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginTop: '16px' }}>
                  <label htmlFor="subject">// SUBJECT</label>
                  <input
                    type="text"
                    id="subject"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  />
                </div>

                <div className="form-group" style={{ marginTop: '16px' }}>
                  <label htmlFor="message">// MESSAGE_BODY</label>
                  <textarea
                    id="message"
                    required
                    placeholder="Describe your proposal or project requirements..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <div className="form-submit">
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    <Send size={18} /> Transmit Message
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
