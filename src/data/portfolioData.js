// Portfolio Configuration for Harsh Agarwal — AI/ML Specialization
export const portfolioData = {
  personal: {
    name: "Harsh Agarwal",
    tagline: "Aspiring Software Engineer | AI/ML Specialist",
    animeTag: "⚡ [ CYBER_DEV // AI_ML_SPECIALIZATION // LPU_9.24_CGPA ] ⚡",
    titles: [
      "Aspiring Software Engineer",
      "Specialization in AI / ML",
      "B.Tech CSE @ LPU (9.24 CGPA)",
      "Solved 50+ Problems on LeetCode",
      "Full-Stack React & Python Developer"
    ],
    bio: "Motivated Computer Science undergraduate aiming to build a career as a Software Engineer with a specialization in Artificial Intelligence and Machine Learning. Eager to apply strong problem-solving skills, C++, Python, and a growing foundation in programming and data structures to real-world, impactful projects.",
    subhashChowk: "Subhash Chowk, Churu, Rajasthan",
    location: "Subhash Chowk, Churu, Rajasthan / LPU Phagwara, Punjab",
    email: "ha895613@gmail.com",
    phone: "+91 9602219403",
    avatar: "/assets/profile.jpg",
    resumePdf: "/assets/Harsh_Agarwal_Resume.pdf",
    resumeUrl: "/assets/Harsh_Agarwal_Resume.pdf",
    socialLinks: {
      github: "https://github.com/HarshAgarwal895613",
      linkedin: "https://www.linkedin.com/in/harsh-agarwal-0b3864381/",
      email: "https://mail.google.com/mail/?view=cm&fs=1&to=ha895613@gmail.com",
      leetcode: "https://leetcode.com"
    }
  },

  about: {
    stats: [
      { number: "9.24", label: "Current CGPA" },
      { number: "AI/ML", label: "Specialization" },
      { number: "50+", label: "LeetCode Solved" },
      { number: "JEE Adv", label: "Qualified" }
    ],
    objective: "Motivated Computer Science undergraduate aiming to build a career as a Software Engineer with a specialization in Artificial Intelligence and Machine Learning. Eager to apply strong problem-solving skills and a growing foundation in programming and data structures to real-world, impactful projects.",
    strengths: [
      "Artificial Intelligence & Machine Learning (AI/ML)",
      "Data Structures & Algorithms (DSA) — 50+ LeetCode Solved",
      "Object-Oriented Programming (C++ & C)",
      "Python Development & ML Scripts",
      "Full-Stack Web Technologies (React, HTML, CSS, JavaScript)",
      "Relational Database Management Systems (DBMS & SQL)"
    ]
  },

  skills: [
    {
      category: "Programming Languages",
      icon: "Code2",
      items: [
        {
          name: "C++",
          level: 90,
          status: "Currently Learning This Semester",
          details: "Object-oriented design, STL containers, pointers, competitive problem solving, and system efficiency.",
          highlight: "Core Language for DSA"
        },
        {
          name: "Python",
          level: 90,
          status: "Certified in Python Programming",
          details: "AI/ML script automation, data manipulation, algorithm prototyping, and backend integration.",
          highlight: "AI/ML Foundation"
        },
        {
          name: "C Language",
          level: 85,
          status: "Foundational Mastery",
          details: "Low-level memory management, pointer arithmetic, procedural programming, and algorithmic design.",
          highlight: "Systems Programming"
        }
      ]
    },
    {
      category: "Web Technologies",
      icon: "Layout",
      items: [
        {
          name: "JavaScript (ES6+)",
          level: 88,
          status: "Active Web Development",
          details: "Modern asynchronous workflows, DOM manipulation, ES6+ modules, event handling, and API consumption.",
          highlight: "Dynamic Web Apps"
        },
        {
          name: "HTML5",
          level: 95,
          status: "Semantic Markup",
          details: "Accessible structure, modern HTML5 semantic layout, media embedding, and responsive scaffolding.",
          highlight: "Web Foundation"
        },
        {
          name: "CSS3 & Modern UI",
          level: 92,
          status: "Glassmorphism & Cyber Styling",
          details: "Flexbox, CSS Grid, keyframe animations, CSS custom properties, responsive media queries, and themes.",
          highlight: "Modern Design System"
        },
        {
          name: "React.js",
          level: 88,
          status: "Certified by Infosys Springboard",
          details: "Component architecture, hooks (useState, useEffect, useRef), Framer Motion integration, and single-page apps.",
          highlight: "Full-Stack React"
        }
      ]
    },
    {
      category: "Core CS Concepts & Problem Solving",
      icon: "Cpu",
      items: [
        {
          name: "Data Structures & Algorithms (DSA)",
          level: 88,
          status: "Currently Learning This Semester",
          details: "Arrays, linked lists, stacks, queues, trees, graphs, sorting/searching algorithms, and recursion.",
          highlight: "Solved 50+ on LeetCode"
        },
        {
          name: "DBMS (Database Management)",
          level: 86,
          status: "Database Architecture",
          details: "Relational database concepts, normalization (1NF to BCNF), ER diagrams, ACID properties, and transactions.",
          highlight: "Data Consistency"
        },
        {
          name: "SQL",
          level: 88,
          status: "Query Formulation",
          details: "Complex JOIN queries, aggregations, subqueries, view creation, indexing, and schema design.",
          highlight: "Relational Queries"
        },
        {
          name: "Problem Solving",
          level: 90,
          status: "LeetCode & Competitive Coding",
          details: "Continuous practice on LeetCode with 50+ problems solved across arrays, strings, binary search, and math.",
          highlight: "50+ LeetCode Solved"
        }
      ]
    }
  ],

  projects: [
    {
      id: "smart-classroom-monitoring",
      title: "Smart Classroom Monitoring System",
      category: "AI / ML Vision Concept",
      description: "An advanced AI/ML-based computer vision application with classroom camera telemetry that intelligently detects student inattentiveness, sleeping, or mobile phone usage during lectures, automatically dispatching alert notifications to parents.",
      techStack: ["Python", "Computer Vision (OpenCV)", "AI/ML Detection", "Parent Notification Telemetry"],
      icon: "👁️",
      highlight: "AI/ML Flagship Concept",
      github: "https://github.com/HarshAgarwal895613",
      demo: "#"
    },
    {
      id: "ai-smart-humidifier",
      title: "AI-Based Smart Humidifier System",
      category: "AI / IoT / Smart Climate",
      description: "An intelligent environmental management system featuring real-time relative humidity tracking, AI adaptive moisture dispersion algorithms, multi-sensor climate telemetry, and automated threshold alerts.",
      techStack: ["Python", "AI Algorithms", "IoT Sensors", "Embedded C++", "Climate Telemetry"],
      image: "/assets/project-humidifier.jpg",
      icon: "💧",
      highlight: "IoT + AI Hardware",
      github: "https://github.com/HarshAgarwal895613",
      demo: "#"
    },
    {
      id: "authenticity-detection-device",
      title: "Authenticity Detection Device",
      category: "Hardware & Machine Learning Concept",
      description: "A specialized sensor instrument designed to analyze material spectral properties and packaging markers to determine whether a commercial product is original or duplicate before purchase.",
      techStack: ["Hardware Sensor Rig", "Machine Learning Classification", "Python", "Spectrometry Analysis"],
      icon: "🔍",
      highlight: "Consumer Protection",
      github: "https://github.com/HarshAgarwal895613",
      demo: "#"
    },
    {
      id: "fullstack-react-hub",
      title: "Full-Stack React Web Platform",
      category: "Full Stack Development",
      description: "Modern, responsive dynamic web ecosystem built with React, interactive state management, REST APIs, and database connectivity.",
      techStack: ["React.js", "JavaScript", "HTML5/CSS3", "SQL / DBMS", "Framer Motion"],
      icon: "🌐",
      highlight: "Certified Full-Stack",
      github: "https://github.com/HarshAgarwal895613",
      demo: "#"
    }
  ],

  certifications: [
    {
      id: "infosys-react",
      title: "Learning Full Stack React",
      issuer: "Infosys Springboard",
      date: "February 21, 2026",
      badge: "Full Stack Web",
      image: "/assets/certs/cert-infosys-react.png"
    },
    {
      id: "saylor-python",
      title: "CS105: Introduction to Python",
      issuer: "Saylor Academy",
      date: "February 6, 2026",
      badge: "Python Programming",
      image: "/assets/certs/cert-saylor-python.png"
    },
    {
      id: "iamneo-programming",
      title: "Computer Programming (150 Hours)",
      issuer: "iamneo / neo colab & LPU",
      date: "May 21, 2026",
      badge: "150 Hours Intensive",
      image: "/assets/certs/cert-iamneo-programming.png"
    },
    {
      id: "times-community",
      title: "Community Development Project",
      issuer: "Times Foundation (The Times of India) & LPU",
      date: "2026",
      badge: "Leadership & Social Impact",
      image: "/assets/certs/cert-times-foundation.png"
    },
    {
      id: "techveda-time",
      title: "Effective Time Management (Proctored MOOC)",
      issuer: "Tech Veda",
      date: "October 29, 2025",
      badge: "Professional Excellence",
      image: "/assets/certs/cert-techveda-time.png"
    }
  ],

  education: [
    {
      id: "btech-lpu",
      order: 1,
      degree: "B-Tech in Computer Science & Engineering (AI/ML Specialization)",
      institution: "Lovely Professional University, Phagwara, Punjab",
      duration: "2025 — 2029 (Pursuing)",
      semester: "Currently in 3rd Semester",
      score: "CGPA: 9.24",
      highlight: "Top Academic Standing",
      notes: "Took a 2-year gap (2023 – 2025) for JEE preparation; qualified JEE Advanced",
      jeeQualified: true,
      location: "Phagwara, Punjab, India",
      icon: "GraduationCap"
    },
    {
      id: "senior-secondary-12th",
      order: 2,
      degree: "Senior Secondary (Class XII) — CBSE Board",
      institution: "Lord's International School, Churu, Rajasthan",
      duration: "Completed in 2023",
      score: "Percentage: 76.6%",
      highlight: "CBSE Senior Secondary",
      location: "Churu, Rajasthan, India",
      icon: "Award"
    },
    {
      id: "secondary-10th",
      order: 3,
      degree: "Secondary Schooling (Class X) — CBSE Board",
      institution: "Lord's International School, Churu, Rajasthan",
      duration: "Completed in 2021",
      score: "Percentage: 70.0%",
      highlight: "CBSE Matriculation",
      location: "Churu, Rajasthan, India",
      icon: "BookOpen"
    }
  ],

  codingProfiles: [
    {
      platform: "GitHub",
      username: "HarshAgarwal895613",
      url: "https://github.com/HarshAgarwal895613",
      icon: "Github"
    },
    {
      platform: "LinkedIn",
      username: "harsh-agarwal-0b3864381",
      url: "https://www.linkedin.com/in/harsh-agarwal-0b3864381/",
      icon: "Linkedin"
    },
    {
      platform: "Email Contact",
      username: "ha895613@gmail.com",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=ha895613@gmail.com",
      icon: "Mail"
    }
  ]
};
