import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBrain,
  FaDatabase,
  FaServer,
  FaStar,
  FaLightbulb,
  FaUsers,
  FaComments,
  FaGitAlt,
  FaGithub,
  FaMicrochip,
  FaTerminal,
  FaNetworkWired,
  FaTowerBroadcast,
  FaSliders
} from 'react-icons/fa6';
import { Sparkles, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Custom </> Code Symbol Icon for C++, C, etc.
const CodeBracketIcon = () => (
  <span className="arsenal-code-badge">&lt;/&gt;</span>
);

const iconMap = {
  // Languages
  "C++": <CodeBracketIcon />,
  Python: <FaPython size={28} />,
  C: <CodeBracketIcon />,
  "C Language": <CodeBracketIcon />,
  "JavaScript (ES6+)": <FaJs size={28} />,
  JavaScript: <FaJs size={28} />,
  SQL: <FaDatabase size={26} />,

  // Tools & Platforms
  Git: <FaGitAlt size={28} />,
  GitHub: <FaGithub size={28} />,
  "Git & GitHub": <FaGithub size={28} />,
  "VS Code": <FaTerminal size={26} />,
  "IoT Sensors": <FaTowerBroadcast size={26} />,
  "Microcontroller Interfacing": <FaMicrochip size={28} />,
  "Environmental Telemetry": <FaSliders size={26} />,

  // Web Development
  HTML5: <FaHtml5 size={28} />,
  CSS3: <FaCss3Alt size={28} />,
  "HTML5 & CSS3": <FaHtml5 size={28} />,
  "React.js": <FaReact size={28} />,
  React: <FaReact size={28} />,
  "RESTful APIs": <FaNetworkWired size={26} />,
  "Modern UI/UX": <Sparkles size={26} />,

  // Soft Skills
  "Problem-Solving (50+ LeetCode solved)": <FaLightbulb size={26} />,
  "Team Collaboration": <FaUsers size={26} />,
  Leadership: <FaStar size={26} />,
  "Leadership and Influence": <FaStar size={26} />,
  "Critical Thinking": <FaBrain size={26} />,
  "Problem-Solving and Critical Thinking": <FaLightbulb size={26} />,
  "Collaboration and Teamwork": <FaUsers size={26} />,
  Communication: <FaComments size={26} />
};

export const Skills = () => {
  const { categories } = portfolioData.skills;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.35, ease: 'easeOut' }
    }
  };

  return (
    <section id="skills" className="arsenal-section">
      <div id="arsenal" style={{ position: 'absolute', top: '-80px' }} />
      <div className="container">
        
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
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
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: catIdx * 0.08 }}
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
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              {category.skills.map((skill, sIdx) => (
                <motion.div
                  key={sIdx}
                  className={`arsenal-card ${category.name === 'Soft Skills' ? 'arsenal-card-soft' : 'arsenal-card-tech'}`}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    borderColor: '#00f0ff',
                    boxShadow: '0 0 24px rgba(0, 240, 255, 0.4)',
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="arsenal-card-icon">
                    {iconMap[skill.name] || <CodeBracketIcon />}
                  </div>
                  <span className="arsenal-card-name">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}

      </div>
    </section>
  );
};
