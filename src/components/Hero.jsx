import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Download,
  Sparkles,
  FileText,
  GraduationCap,
  Code2,
  Cpu,
  Award,
  Box,
  UserCheck
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { AI3DCore } from './AI3DCore';

export const Hero = () => {
  const { personal } = portfolioData;
  const avatarCardRef = useRef(null);
  const [active3DView, setActive3DView] = useState('avatar'); // 'avatar' | 'neuralCore'

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const handleMouseMove = (e) => {
    if (!avatarCardRef.current || active3DView !== 'avatar') return;
    const rect = avatarCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotX = (y / (rect.height / 2)) * -16;
    const rotY = (x / (rect.width / 2)) * 16;

    avatarCardRef.current.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(16px)`;
  };

  const handleMouseLeave = () => {
    if (avatarCardRef.current) {
      avatarCardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
    }
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
          <div className="anime-badge badge-3d-elevated">
            <span className="pulse-dot" />
            <span>{personal.animeTag || '⚡ SOFTWARE_ENGINEER // AI_ML_SPECIALIZATION ⚡'}</span>
          </div>

          <h1 className="hero-title text-3d-glow">
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
            <a href="#projects" className="btn btn-primary btn-3d-tactile">
              View Projects <ArrowRight size={18} />
            </a>
            <a href={personal.resumePdf} download="Harsh_Agarwal_Resume.pdf" className="btn btn-accent btn-3d-tactile">
              <Download size={18} /> Download CV
            </a>
            <a href="#cv" className="btn btn-outline btn-3d-tactile">
              <FileText size={18} /> CV Details
            </a>
            <a href="#contact" className="btn btn-outline btn-3d-tactile">
              <Sparkles size={18} /> Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a href={personal.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-3d-btn">
              <Github size={20} />
            </a>
            <a href={personal.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-3d-btn">
              <Linkedin size={20} />
            </a>
            <a href={personal.socialLinks.email} target="_blank" rel="noopener noreferrer" aria-label="Gmail" className="social-3d-btn">
              <Mail size={20} />
            </a>
          </div>

          {/* 3D AI Neural Telemetry HUD Strip */}
          <div className="hero-ai-telemetry-hud">
            <div className="ai-hud-item">
              <span className="ai-hud-dot" />
              <span className="ai-hud-label">NEURAL ENGINE:</span>
              <span className="ai-hud-value">AI / ML Specialized</span>
            </div>
            <div className="ai-hud-divider" />
            <div className="ai-hud-item">
              <span className="ai-hud-label">ACADEMICS:</span>
              <span className="ai-hud-value">9.24* CGPA @ LPU</span>
            </div>
            <div className="ai-hud-divider" />
            <div className="ai-hud-item">
              <span className="ai-hud-label">PROBLEM SOLVING:</span>
              <span className="ai-hud-value">50+ LeetCode DSA</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D Interactive Hero Hub with Avatar & 3D WebGL Neural Core */}
        <motion.div
          className="hero-avatar-wrapper"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {/* 3D Mode Selector Toggle */}
          <div className="hero-3d-mode-switcher">
            <button
              className={`hero-3d-tab ${active3DView === 'avatar' ? 'active' : ''}`}
              onClick={() => setActive3DView('avatar')}
            >
              <UserCheck size={14} /> 3D Avatar Core
            </button>
            <button
              className={`hero-3d-tab ${active3DView === 'neuralCore' ? 'active' : ''}`}
              onClick={() => setActive3DView('neuralCore')}
            >
              <Box size={14} /> 3D WebGL AI Core
            </button>
          </div>

          {active3DView === 'neuralCore' ? (
            <div className="hero-3d-webgl-wrapper">
              <AI3DCore size="compact" />
            </div>
          ) : (
            <div
              ref={avatarCardRef}
              className="hero-3d-avatar-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="avatar-ring-outer" />
              <div className="avatar-ring" />
              <div className="avatar-ring-gyro" />
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

              {/* Floating 3D Holographic Badges with Real Z-Depth */}
              <div className="hero-3d-badge badge-top-left">
                <GraduationCap size={13} style={{ color: 'var(--primary)' }} />
                <span>9.24* CGPA @ LPU</span>
              </div>

              <div className="hero-3d-badge badge-top-right">
                <Award size={13} style={{ color: '#f59e0b' }} />
                <span>Qualified for JEE Advanced</span>
              </div>

              <div className="hero-3d-badge badge-bottom-right">
                <Cpu size={13} style={{ color: '#ff007f' }} />
                <span>AI / ML Specialist</span>
              </div>

              <div className="hero-3d-badge badge-bottom-left">
                <Code2 size={13} style={{ color: '#00ff88' }} />
                <span>50+ LeetCode Solved</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
