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
  FaGears
} from 'react-icons/fa6';
import { portfolioData } from '../data/portfolioData';

// Custom </> Code Symbol Icon for C++, C, etc.
const CodeBracketIcon = () => (
  <span className="arsenal-code-badge">&lt;/&gt;</span>
);

const technicalIconMap = {
  "C++": <CodeBracketIcon />,
  Python: <FaPython size={28} />,
  "C Language": <CodeBracketIcon />,
  JavaScript: <FaJs size={28} />,
  "JavaScript (ES6+)": <FaJs size={28} />,
  HTML5: <FaHtml5 size={28} />,
  CSS3: <FaCss3Alt size={28} />,
  "CSS3 & Modern UI": <FaCss3Alt size={28} />,
  "React.js": <FaReact size={28} />,
  React: <FaReact size={28} />,
  DSA: <FaGears size={28} />,
  "Data Structures & Algorithms (DSA)": <FaGears size={28} />,
  DBMS: <FaServer size={26} />,
  "DBMS (Database Management)": <FaServer size={26} />,
  SQL: <FaDatabase size={26} />,
  "Problem Solving": <FaBrain size={28} />
};

const softIconMap = {
  "Leadership and Influence": <FaStar size={26} />,
  "Problem-Solving and Critical Thinking": <FaLightbulb size={26} />,
  "Collaboration and Teamwork": <FaUsers size={26} />,
  Communication: <FaComments size={26} />
};

export const Skills = () => {
  const { technicalSkills, softSkills } = portfolioData.skills;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06
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
        
        {/* Section Title 1: Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="arsenal-heading-wrap"
        >
          <h2 className="arsenal-title">Technical Skills</h2>
        </motion.div>

        {/* Technical Skills Cards Grid */}
        <motion.div
          className="arsenal-grid arsenal-grid-tech"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {technicalSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="arsenal-card arsenal-card-tech"
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
                {technicalIconMap[skill.name] || <CodeBracketIcon />}
              </div>
              <span className="arsenal-card-name">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Title 2: Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="arsenal-heading-wrap soft-skills-heading-wrap"
        >
          <h2 className="arsenal-title">Soft Skills</h2>
        </motion.div>

        {/* Soft Skills Cards Grid */}
        <motion.div
          className="arsenal-grid arsenal-grid-soft"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {softSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="arsenal-card arsenal-card-soft"
              variants={cardVariants}
              whileHover={{
                scale: 1.04,
                borderColor: '#00f0ff',
                boxShadow: '0 0 24px rgba(0, 240, 255, 0.4)',
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="arsenal-card-icon">
                {softIconMap[skill.name] || <FaStar size={26} />}
              </div>
              <span className="arsenal-card-name">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
