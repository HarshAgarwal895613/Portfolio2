import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Terminal, Code2, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const greetings = [
  { text: "Hello", lang: "English" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "Bonjour", lang: "French" },
  { text: "Hola", lang: "Spanish" },
  { text: "こんにちは", lang: "Japanese" },
  { text: "Welcome", lang: "System Ready" }
];

export const WelcomeScreen = ({ onEnter }) => {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing Core Modules...");
  const [isReady, setIsReady] = useState(false);

  const { personal } = portfolioData;

  useEffect(() => {
    // Lock scroll during welcome slide
    document.body.style.overflow = 'hidden';

    // Cycle greetings
    const greetingInterval = setInterval(() => {
      setGreetingIndex((prev) => {
        if (prev < greetings.length - 1) {
          return prev + 1;
        }
        clearInterval(greetingInterval);
        return prev;
      });
    }, 450);

    // Progress bar and status progression
    const startTime = Date.now();
    const duration = 2800; // 2.8 seconds total boot sequence

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(currentProgress);

      if (currentProgress < 30) {
        setStatusText("Loading Technical Arsenal...");
      } else if (currentProgress < 65) {
        setStatusText("Initializing AI/ML Modules...");
      } else if (currentProgress < 95) {
        setStatusText("Configuring Interactive Environment...");
      } else {
        setStatusText("System Online & Ready");
        setIsReady(true);
      }

      if (currentProgress >= 100) {
        clearInterval(progressInterval);
      }
    }, 40);

    return () => {
      document.body.style.overflow = 'unset';
      clearInterval(greetingInterval);
      clearInterval(progressInterval);
    };
  }, []);

  const handleEnter = () => {
    document.body.style.overflow = 'unset';
    if (onEnter) onEnter();
  };

  return (
    <motion.div
      className="welcome-slide-overlay"
      initial={{ opacity: 1, y: 0 }}
      exit={{
        y: '-100%',
        opacity: 0.95,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
    >
      {/* Background Cyber Grid and Radial Glows */}
      <div className="welcome-bg-grid" />
      <div className="welcome-glow welcome-glow-cyan" />
      <div className="welcome-glow welcome-glow-pink" />
      <div className="welcome-glow welcome-glow-center" />

      {/* Floating Cyber Particle Orbs */}
      <div className="welcome-particle particle-1" />
      <div className="welcome-particle particle-2" />
      <div className="welcome-particle particle-3" />
      <div className="welcome-particle particle-4" />

      <div className="welcome-content-container">
        
        {/* System Terminal Header Badge */}
        <motion.div
          className="welcome-sys-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="pulse-dot" />
          <Terminal size={13} style={{ display: 'inline', margin: '0 4px' }} />
          <span>[ SYSTEM // PORTFOLIO_INITIALIZATION ]</span>
        </motion.div>

        {/* Central Glowing Cyber Emblem */}
        <motion.div
          className="welcome-emblem-wrapper"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="welcome-emblem-ring-outer" />
          <div className="welcome-emblem-ring-inner" />
          <div className="welcome-emblem-core">
            <Code2 size={40} className="welcome-emblem-icon" />
          </div>
        </motion.div>

        {/* Animated Greeting Title */}
        <div className="welcome-greeting-box">
          <AnimatePresence mode="wait">
            <motion.h1
              key={greetingIndex}
              className="welcome-greeting-text"
              initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
              transition={{ duration: 0.3 }}
            >
              {greetings[greetingIndex].text}
              <span className="welcome-dot">.</span>
            </motion.h1>
          </AnimatePresence>
          <span className="welcome-greeting-sub">
            {greetings[greetingIndex].lang}
          </span>
        </div>

        {/* Name & Persona Introduction */}
        <motion.div
          className="welcome-profile-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="welcome-name">
            I'm <span className="gradient-text">{personal.name}</span>
          </h2>
          <p className="welcome-tagline">
            <Cpu size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle', color: 'var(--primary)' }} />
            {personal.tagline || 'Aspiring Software Engineer | AI/ML Specialist'}
          </p>
        </motion.div>

        {/* Loading Progress & System Diagnostic */}
        <motion.div
          className="welcome-progress-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="welcome-progress-meta">
            <span className="welcome-status-msg">
              <span className="status-blink-dot" /> {statusText}
            </span>
            <span className="welcome-progress-pct">{progress}%</span>
          </div>

          <div className="welcome-progress-bar-track">
            <motion.div
              className="welcome-progress-bar-fill"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
        </motion.div>

        {/* Interactive Enter Portfolio Button */}
        <motion.div
          className="welcome-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <button
            onClick={handleEnter}
            className={`btn welcome-enter-btn ${isReady ? 'ready' : ''}`}
            aria-label="Enter Portfolio"
          >
            <span>Enter Portfolio</span>
            <ArrowRight size={18} className="enter-btn-arrow" />
            <div className="btn-glow-layer" />
          </button>

          <button
            onClick={handleEnter}
            className="welcome-skip-link"
          >
            Skip Intro →
          </button>
        </motion.div>

      </div>
    </motion.div>
  );
};
