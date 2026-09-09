import React from 'react';
import { motion } from 'framer-motion';
import {
  SiCplusplus,
  SiC,
  SiJavascript,
  SiHtml5,
  SiReact,
  SiGit,
  SiGithub,
  SiLeetcode,
  SiArduino,
  SiFigma
} from 'react-icons/si';
import {
  FaCss3Alt,
  FaDatabase,
  FaBrain,
  FaStar,
  FaLightbulb,
  FaUsers,
  FaComments,
  FaTowerBroadcast,
  FaSliders
} from 'react-icons/fa6';
import { VscVscode } from 'react-icons/vsc';
import { TbApi, TbActivity } from 'react-icons/tb';
import { Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Official Dual-tone Python SVG Logo
const PythonLogo = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'block' }}>
    <defs>
      <linearGradient id="py-blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#387eb8" />
        <stop offset="100%" stopColor="#306998" />
      </linearGradient>
      <linearGradient id="py-yellow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffe873" />
        <stop offset="100%" stopColor="#ffd43b" />
      </linearGradient>
    </defs>
    <path
      fill="url(#py-blue-grad)"
      d="M11.914 2c-5.26 0-4.94 2.28-4.94 2.28l.008 2.36h5.052v.715H4.991S2 7.025 2 12.3c0 5.275 2.61 5.093 2.61 5.093h1.562v-2.182s-.084-2.614 2.56-2.614h4.372s2.48.045 2.48-2.424V4.48S15.994 2 11.914 2zm-1.42 1.455a.728.728 0 110 1.456.728.728 0 010-1.456z"
    />
    <path
      fill="url(#py-yellow-grad)"
      d="M12.086 22c5.26 0 4.94-2.28 4.94-2.28l-.008-2.36h-5.052v-.715h7.042S22 16.975 22 11.7c0-5.275-2.61-5.093-2.61-5.093h-1.562v2.182s.084 2.614-2.56 2.614H10.9s-2.48-.045-2.48 2.424v7.693S8.006 22 12.086 22zm1.42-1.455a.728.728 0 110-1.456.728.728 0 010 1.456z"
    />
  </svg>
);

// Map of skills to their authentic colored brand logos
const iconMap = {
  // Languages
  "C++": <SiCplusplus size={28} color="#00599C" />,
  Python: <PythonLogo size={28} />,
  C: <SiC size={28} color="#659AD2" />,
  "C Language": <SiC size={28} color="#659AD2" />,
  "JavaScript (ES6+)": <SiJavascript size={28} color="#F7DF1E" />,
  JavaScript: <SiJavascript size={28} color="#F7DF1E" />,
  SQL: <FaDatabase size={26} color="#00758F" />,

  // Tools & Platforms
  Git: <SiGit size={28} color="#F05032" />,
  GitHub: <SiGithub size={28} className="arsenal-github-icon" />,
  "Git & GitHub": <SiGit size={28} color="#F05032" />,
  "VS Code": <VscVscode size={28} color="#007ACC" />,
  "IoT Sensors": <FaTowerBroadcast size={26} color="#10B981" />,
  "Microcontroller Interfacing": <SiArduino size={28} color="#00979D" />,
  "Environmental Telemetry": <TbActivity size={28} color="#F59E0B" />,

  // Web Development
  HTML5: <SiHtml5 size={28} color="#E34F26" />,
  CSS3: <FaCss3Alt size={28} color="#1572B6" />,
  "HTML5 & CSS3": <SiHtml5 size={28} color="#E34F26" />,
  "React.js": <SiReact size={28} color="#61DAFB" />,
  React: <SiReact size={28} color="#61DAFB" />,
  "RESTful APIs": <TbApi size={28} color="#00D084" />,
  "Modern UI/UX": <SiFigma size={26} color="#F24E1E" />,

  // Soft Skills
  "Problem-Solving (50+ LeetCode solved)": <SiLeetcode size={28} color="#FFA116" />,
  "Problem-Solving and Critical Thinking": <SiLeetcode size={28} color="#FFA116" />,
  "Team Collaboration": <FaUsers size={26} color="#06B6D4" />,
  "Collaboration and Teamwork": <FaUsers size={26} color="#06B6D4" />,
  Leadership: <FaStar size={26} color="#F59E0B" />,
  "Leadership and Influence": <FaStar size={26} color="#F59E0B" />,
  "Critical Thinking": <FaBrain size={26} color="#EC4899" />,
  Communication: <FaComments size={26} color="#10B981" />
};

// Brand accent colors for dynamic hover glow
const skillBrandColors = {
  "C++": "#00599C",
  Python: "#387EB8",
  C: "#659AD2",
  "C Language": "#659AD2",
  "JavaScript (ES6+)": "#F7DF1E",
  JavaScript: "#F7DF1E",
  SQL: "#00758F",
  Git: "#F05032",
  GitHub: "#8957E5",
  "Git & GitHub": "#F05032",
  "VS Code": "#007ACC",
  "IoT Sensors": "#10B981",
  "Microcontroller Interfacing": "#00979D",
  "Environmental Telemetry": "#F59E0B",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  "HTML5 & CSS3": "#E34F26",
  "React.js": "#61DAFB",
  React: "#61DAFB",
  "RESTful APIs": "#00D084",
  "Modern UI/UX": "#F24E1E",
  "Problem-Solving (50+ LeetCode solved)": "#FFA116",
  "Problem-Solving and Critical Thinking": "#FFA116",
  "Team Collaboration": "#06B6D4",
  "Collaboration and Teamwork": "#06B6D4",
  Leadership: "#F59E0B",
  "Leadership and Influence": "#F59E0B",
  "Critical Thinking": "#EC4899",
  Communication: "#10B981"
};

export const Skills = () => {
  const { categories } = portfolioData.skills;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.25, ease: 'easeOut' }
    }
  };

  return (
    <section id="skills" className="arsenal-section">
      <div id="arsenal" style={{ position: 'absolute', top: '-80px' }} />
      <div className="container">
        
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.35 }}
        >
          <span className="section-label">
            <Terminal size={14} /> [ TECHNICAL_ARSENAL // SKILLS_MATRIX ]
          </span>
          <h2>Skills & Technologies</h2>
          <p>Proficiencies across programming languages, tools & platforms, web engineering, and problem-solving.</p>
        </motion.div>

        {/* Categorized Skills Grids */}
        {categories.map((category, catIdx) => (
          <div key={catIdx} style={{ marginBottom: catIdx < categories.length - 1 ? '44px' : '0' }}>
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.3, delay: catIdx * 0.04 }}
              className="arsenal-heading-wrap"
              style={{ textAlign: 'left', marginBottom: '18px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="pulse-dot" style={{ width: '7px', height: '7px' }} />
                <h3 className="arsenal-title" style={{ fontSize: '1.45rem', textShadow: 'none' }}>
                  {category.name}
                </h3>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginLeft: 'auto' }}>
                  // {category.skills.length} Items
                </span>
              </div>
            </motion.div>

            <motion.div
              className="arsenal-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              variants={containerVariants}
            >
              {category.skills.map((skill, sIdx) => {
                const brandColor = skillBrandColors[skill.name] || '#00f0ff';
                return (
                  <motion.div
                    key={sIdx}
                    className={`arsenal-card ${category.name === 'Soft Skills' ? 'arsenal-card-soft' : 'arsenal-card-tech'}`}
                    variants={cardVariants}
                    whileHover={{
                      scale: 1.05,
                      borderColor: brandColor,
                      boxShadow: `0 0 22px ${brandColor}40`,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="arsenal-card-icon">
                      {iconMap[skill.name] || <SiCplusplus size={28} color="#00599C" />}
                    </div>
                    <span className="arsenal-card-name">{skill.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        ))}

      </div>
    </section>
  );
};
