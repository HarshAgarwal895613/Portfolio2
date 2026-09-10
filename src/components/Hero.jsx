import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Download,
  FileText,
  GraduationCap,
  Code2,
  Cpu,
  Award,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero = () => {
  const { personal } = portfolioData;

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <motion.div
          className="hero-text"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {/* Status Badge */}
          <div className="anime-badge badge-placement">
            <span className="pulse-dot" />
            <span>⚡ CSE (AI & ML) // OPEN FOR PLACEMENT & INTERNSHIPS ⚡</span>
          </div>

          <h1 className="hero-title">
            Hello, I'm <span className="gradient-text">{personal.name}</span>
          </h1>

          <div className="hero-subtitle">
            I am a{' '}
            <span className="typewriter-text">
              <Typewriter
                words={personal.titles}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={65}
                deleteSpeed={35}
                delaySpeed={1500}
              />
            </span>
          </div>

          <p className="hero-description">
            {personal.bio}
          </p>

          {/* Placement Primary CTA Actions */}
          <div className="hero-actions">
            <a
              href={personal.resumePdf}
              download="Harsh_Agarwal_Resume.pdf"
              className="btn btn-primary"
            >
              <Download size={18} /> Download CV / Resume
            </a>
            <a href="#projects" className="btn btn-outline">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#cv" className="btn btn-outline">
              <FileText size={18} /> Credentials
            </a>
            <a href="#contact" className="btn btn-outline">
              <Mail size={18} /> Contact
            </a>
          </div>

          {/* Social Profiles */}
          <div className="hero-socials">
            <a
              href={personal.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-btn"
            >
              <Github size={20} />
            </a>
            <a
              href={personal.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-btn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={personal.socialLinks.email}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="social-btn"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Professional Key Highlights Strip */}
          <div className="hero-placement-telemetry">
            <div className="telemetry-item">
              <GraduationCap size={15} color="var(--primary)" />
              <span className="telemetry-label">ACADEMICS:</span>
              <span className="telemetry-val">9.24* CGPA @ LPU</span>
            </div>
            <div className="telemetry-separator" />
            <div className="telemetry-item">
              <Award size={15} color="#f59e0b" />
              <span className="telemetry-label">HONORS:</span>
              <span className="telemetry-val">Qualified for JEE Advanced</span>
            </div>
            <div className="telemetry-separator" />
            <div className="telemetry-item">
              <Code2 size={15} color="#00ff88" />
              <span className="telemetry-label">CODING:</span>
              <span className="telemetry-val">50+ LeetCode DSA</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Clean, Elegant Avatar Card */}
        <motion.div
          className="hero-avatar-wrapper"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="hero-avatar-card-clean">
            <div className="avatar-ring-clean" />
            <div className="avatar-glow-clean" />
            <div className="avatar-img-container">
              <img
                src={personal.avatar}
                alt={personal.name}
                className="hero-avatar-img"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(personal.name)}&size=300&background=0b1329&color=00f0ff&bold=true`;
                }}
              />
            </div>

            {/* Clean Credential Badges */}
            <div className="hero-badge badge-top-left">
              <GraduationCap size={14} color="var(--primary)" />
              <span>9.24* CGPA @ LPU</span>
            </div>

            <div className="hero-badge badge-top-right">
              <Award size={14} color="#f59e0b" />
              <span>Qualified for JEE Advanced</span>
            </div>

            <div className="hero-badge badge-bottom-right">
              <Cpu size={14} color="var(--secondary)" />
              <span>AI / ML Specialist</span>
            </div>

            <div className="hero-badge badge-bottom-left">
              <Code2 size={14} color="#00ff88" />
              <span>50+ LeetCode Solved</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
