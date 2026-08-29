import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { personal } = portfolioData;
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} <span>{personal.name}</span>. Built with React & Vite.
        </p>

        <div className="footer-links">
          <a href={personal.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={personal.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={personal.socialLinks.email} target="_blank" rel="noopener noreferrer" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>

      <button
        className={`back-to-top ${showTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ChevronUp size={22} />
      </button>
    </footer>
  );
};
