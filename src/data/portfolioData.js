// Portfolio Configuration for Harsh Agarwal — AI/ML Specialization
export const portfolioData = {
  personal: {
    name: "Harsh Agarwal",
    tagline: "Aspiring Software Engineer | AI/ML Specialist",
    animeTag: "⚡ [ SOFTWARE_ENGINEER // AI_ML_SPECIALIZATION // LPU_9.24_CGPA ] ⚡",
    titles: [
      "Aspiring Software Engineer",
      "Specialization in AI / ML",
      "B.Tech CSE @ LPU (9.24 CGPA)",
      "Solved 50+ Problems on LeetCode",
      "Full-Stack React & Python Developer"
    ],
    bio: "Motivated Computer Science undergraduate aiming to build a career as a Software Engineer with a specialization in Artificial Intelligence and Machine Learning. Eager to apply strong problem-solving skills, C++, Python, and a growing foundation in programming and data structures to real-world, impactful projects.",
    subhashChowk: "Lord's International School, Rajasthan, Churu",
    location: "Rajasthan, Churu / Phagwara, Punjab",
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
      "Python Development & AI Algorithms",
      "Web Development (HTML5, CSS3, React.js, RESTful APIs, Modern UI/UX)",
      "Tools & Platforms (Git, GitHub, VS Code, IoT Sensors, Telemetry)",
      "Relational Databases (SQL & DBMS)"
    ]
  },

  skills: {
    categories: [
      {
        name: "Languages",
        description: "Core programming and database languages",
        skills: [
          { name: "C++", level: "Core DSA", icon: "CodeBracket" },
          { name: "Python", level: "AI/ML Foundation", icon: "Python" },
          { name: "C", level: "Systems Programming", icon: "CodeBracket" },
          { name: "JavaScript (ES6+)", level: "Modern Web Logic", icon: "JavaScript" },
          { name: "SQL", level: "Relational Queries", icon: "Database" }
        ]
      },
      {
        name: "Tools & Platforms",
        description: "Development, version control, and hardware telemetry",
        skills: [
          { name: "Git", level: "Version Control", icon: "Git" },
          { name: "GitHub", level: "Collaboration & Repos", icon: "Github" },
          { name: "VS Code", level: "Primary IDE", icon: "Terminal" },
          { name: "IoT Sensors", level: "Hardware Sensing", icon: "Sensor" },
          { name: "Microcontroller Interfacing", level: "Embedded Systems", icon: "Cpu" },
          { name: "Environmental Telemetry", level: "Climate Telemetry", icon: "Activity" }
        ]
      },
      {
        name: "Web Development",
        description: "Modern frontend architectures and responsive design",
        skills: [
          { name: "HTML5", level: "Semantic Markup", icon: "HTML5" },
          { name: "CSS3", level: "Modern Design System", icon: "CSS3" },
          { name: "React.js", level: "Full-Stack React", icon: "React" },
          { name: "RESTful APIs", level: "API Integration", icon: "Server" },
          { name: "Modern UI/UX", level: "Responsive Glassmorphism", icon: "Layout" }
        ]
      },
      {
        name: "Soft Skills",
        description: "Collaborative, analytical, and leadership attributes",
        skills: [
          { name: "Problem-Solving (50+ LeetCode solved)", level: "Analytical Focus", icon: "Lightbulb" },
          { name: "Team Collaboration", level: "Peer Synergy", icon: "Team" },
          { name: "Leadership", level: "Project Ownership", icon: "Star" },
          { name: "Critical Thinking", level: "Logical Reasoning", icon: "Brain" },
          { name: "Communication", level: "Technical Discourse", icon: "Chat" }
        ]
      }
    ],

    // Flat lists for backward compatibility
    technicalSkills: [
      { name: "C++", icon: "CodeBracket", category: "Core Language for DSA" },
      { name: "Python", icon: "Python", category: "AI/ML Foundation" },
      { name: "C", icon: "CodeBracket", category: "Systems Programming" },
      { name: "JavaScript (ES6+)", icon: "JavaScript", category: "Dynamic Web Apps" },
      { name: "SQL", icon: "Database", category: "Relational Queries" },
      { name: "Git & GitHub", icon: "Git", category: "Version Control" },
      { name: "VS Code", icon: "Terminal", category: "Development Environment" },
      { name: "IoT Sensors", icon: "Sensor", category: "Hardware Interfacing" },
      { name: "Microcontroller Interfacing", icon: "Cpu", category: "Embedded Systems" },
      { name: "Environmental Telemetry", icon: "Activity", category: "Climate Monitoring" },
      { name: "HTML5 & CSS3", icon: "HTML5", category: "Web Foundation" },
      { name: "React.js", icon: "React", category: "Frontend Framework" },
      { name: "RESTful APIs", icon: "Server", category: "API Integration" },
      { name: "Modern UI/UX", icon: "Layout", category: "Design System" }
    ],
    softSkills: [
      { name: "Problem-Solving (50+ LeetCode solved)", icon: "Lightbulb" },
      { name: "Team Collaboration", icon: "Team" },
      { name: "Leadership", icon: "Star" },
      { name: "Critical Thinking", icon: "Brain" },
      { name: "Communication", icon: "Chat" }
    ]
  },

  projects: [
    {
      id: "ai-smart-humidifier",
      title: "AI-Based Smart Humidifier System",
      category: "AI / IoT / Smart Climate",
      date: "May 2026",
      description: "Developed an automated smart humidifier system for dynamic ambient climate regulation. Integrated IoT sensors and climate telemetry to monitor ambient conditions and support dynamic environmental regulation. Applied Python, Embedded C++, AI algorithms, and IoT sensing for automated humidification control.",
      techStack: ["Python", "Embedded C++", "AI Algorithms", "IoT Sensors", "Climate Telemetry"],
      bullets: [
        "Developed an automated smart humidifier system for dynamic ambient climate regulation.",
        "Integrated IoT sensors and climate telemetry to monitor ambient conditions and support dynamic environmental regulation.",
        "Applied Python, Embedded C++, AI algorithms, and IoT sensing for automated humidification control."
      ],
      image: "/assets/project-humidifier.jpg",
      icon: "💧",
      highlight: "IoT + AI Hardware",
      github: "https://github.com/HarshAgarwal895613",
      demo: "#"
    }
  ],

  training: [
    {
      id: "iamneo-programming-training",
      title: "Computer Programming (150 Hours Intensive)",
      organization: "iamneo / neoColab & LPU",
      certificateLabel: "Certificate Verified",
      date: "May 2026",
      duration: "150 Hours Intensive",
      bullets: [
        "Completed 150 hours of intensive hands-on programming training with iamneo focusing on core Data Structures and Algorithms.",
        "Solved diverse algorithmic challenges to strengthen computational logic and program execution efficiency."
      ]
    }
  ],

  certifications: [
    {
      id: "times-cdp",
      title: "Community Development Project (CDP)",
      issuer: "Times Foundation (The Times of India) & LPU",
      date: "August 2026",
      badge: "Community & Leadership",
      image: "/assets/certs/cert-times-foundation.png"
    },
    {
      id: "iamneo-programming",
      title: "Computer Programming (150 Hours Intensive)",
      issuer: "iamneo / neoColab & LPU",
      date: "May 2026",
      badge: "150 Hours Intensive",
      image: "/assets/certs/cert-iamneo-programming.png"
    },
    {
      id: "infosys-react",
      title: "Learning Full Stack React",
      issuer: "Infosys Springboard",
      date: "February 2026",
      badge: "Full Stack Web",
      image: "/assets/certs/cert-infosys-react.png"
    },
    {
      id: "saylor-python",
      title: "CS105: Introduction to Python",
      issuer: "Saylor Academy",
      date: "February 2026",
      badge: "Python Programming",
      image: "/assets/certs/cert-saylor-python.png"
    },
    {
      id: "techveda-time",
      title: "Effective Time Management (Proctored MOOC)",
      issuer: "Tech Veda",
      date: "October 2025",
      badge: "Professional Excellence",
      image: "/assets/certs/cert-techveda-time.png"
    }
  ],

  achievements: [
    {
      title: "Qualified for JEE Advanced",
      description: "Qualified for JEE Advanced following a dedicated 2-year competitive preparation.",
      icon: "Trophy",
      tag: "Competitive Exam"
    },
    {
      title: "Top Academic Standing (9.24 CGPA)",
      description: "Achieved and maintained top academic standing with a 9.24 CGPA in B.Tech CSE (AI/ML) at Lovely Professional University.",
      icon: "Award",
      tag: "Academic Excellence"
    },
    {
      title: "50+ LeetCode DSA Challenges Solved",
      description: "Solved 50+ algorithmic challenges in Data Structures & Algorithms (DSA) on LeetCode in C++ and Python.",
      icon: "CheckCircle",
      tag: "Problem Solving"
    }
  ],

  education: [
    {
      id: "btech-lpu",
      order: 1,
      degree: "Bachelor of Technology — Computer Science and Engineering (AI/ML)",
      institution: "Lovely Professional University",
      duration: "Aug' 25 – Present",
      semester: "Currently in 3rd Semester",
      score: "CGPA: 9.24",
      highlight: "Top Academic Standing",
      jeeQualified: true,
      location: "Phagwara, Punjab",
      icon: "GraduationCap"
    },
    {
      id: "senior-secondary-12th",
      order: 2,
      degree: "Senior Secondary Education (Class XII)",
      institution: "Lord's International School",
      duration: "Mar' 22 – May' 23",
      score: "Percentage: 76.6%",
      highlight: "CBSE Senior Secondary",
      location: "Rajasthan, Churu",
      icon: "Award"
    },
    {
      id: "secondary-10th",
      order: 3,
      degree: "Secondary Education (Class X)",
      institution: "Lord's International School",
      duration: "Mar' 20 – May' 21",
      score: "Percentage: 70.0%",
      highlight: "CBSE Matriculation",
      location: "Rajasthan, Churu",
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
