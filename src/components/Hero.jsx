import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Github, Linkedin, Mail, ArrowRight, Download, Sparkles, FileText } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';
import { portfolioData } from '../data/portfolioData';

export const Hero = () => {
  const { personal } = portfolioData;

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  return (
    <section id="hero" className="hero">
      <ParticleCanvas />
      <div className="container hero-content">
        <motion.div
          className="hero-text"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="anime-badge">
            <span className="pulse-dot" />
            <span>{personal.animeTag || '⚡ SOFTWARE_ENGINEER // AI_ML_SPECIALIZATION ⚡'}</span>
          </div>

          <h1 className="hero-title">
            Hello, I'm <span className="gradient-text">{personal.name}</span>
          </h1>

          <div className="hero-subtitle">
            I am an{' '}
            <span className="typewriter-text">
              <Typewriter
                words={personal.titles}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1400}
              />
            </span>
          </div>

          <p className="hero-description">
            {personal.bio}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href={personal.resumePdf} download="Harsh_Agarwal_Resume.pdf" className="btn btn-accent">
              <Download size={18} /> Download CV
            </a>
            <a href="#cv" className="btn btn-outline">
              <FileText size={18} /> CV Details
            </a>
            <a href="#contact" className="btn btn-outline">
              <Sparkles size={18} /> Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a href={personal.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={personal.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={personal.socialLinks.email} target="_blank" rel="noopener noreferrer" aria-label="Gmail">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-avatar-wrapper"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="avatar-ring-outer" />
          <div className="avatar-ring" />
          <div className="avatar-glow" />
          <div className="avatar-img-container">
            <img
              src={personal.avatar}
              alt={personal.name}
              className="hero-avatar-img"
              loading="eager"
              decoding="async"
              onError={(e) => {
                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(personal.name)}&size=300&background=070714&color=00f0ff&bold=true`;
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
