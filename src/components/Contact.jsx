import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Building2 } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { portfolioData } from '../data/portfolioData';

export const Contact = () => {
  const { personal } = portfolioData;
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(formState.subject || 'Portfolio Inquiry / Job Opportunity')}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)}`;
    window.open(mailtoUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
  };

  return (
    <section id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={cardVariants}
        >
          <span className="section-label">
            <Mail size={14} style={{ display: 'inline', marginRight: '6px' }} />
            [ GET_IN_TOUCH // CONTACT_ME ]
          </span>
          <h2>Contact & Communication</h2>
          <p>Open for software engineering opportunities, campus placement, internships, and technical collaborations.</p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={cardVariants}
          >
            <TiltCard className="contact-info">
              <h3>Direct Contact Channels</h3>
              <p>
                Feel free to reach out via email or phone for placement discussions, interviews, and engineering queries.
              </p>

              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="contact-label">Email Address</p>
                    <a href={`mailto:${personal.email}`} className="contact-value">
                      {personal.email}
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="contact-label">Phone</p>
                    <a href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`} className="contact-value">
                      {personal.phone}
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="contact-label">Locations</p>
                    <p className="contact-value" style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                      {personal.location}
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <p className="contact-label">University / Institution</p>
                    <p className="contact-value" style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                      {personal.subhashChowk}
                    </p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={cardVariants}
            transition={{ delay: 0.04 }}
          >
            <TiltCard className="glass-card contact-form-wrapper">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <CheckCircle2 size={48} color="var(--primary)" style={{ margin: '0 auto 16px' }} />
                  <h3>Message Ready!</h3>
                  <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
                    Your email client has been launched. Thank you for connecting with Harsh Agarwal!
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="e.g. Recruiter / Hiring Manager"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="e.g. recruiter@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group" style={{ marginTop: '16px' }}>
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      required
                      placeholder="Job Opportunity / Interview Invitation"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    />
                  </div>

                  <div className="form-group" style={{ marginTop: '16px' }}>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      required
                      placeholder="Write your message or inquiry..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>

                  <div className="form-submit">
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                      <Send size={18} /> Send Message
                    </button>
                  </div>
                </form>
              )}
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
