import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Terminal,
  Code2,
  Cpu,
  ShieldCheck,
  Activity,
  Zap,
  Globe
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Multilingual greeting cycle for global executive feel
const greetings = [
  { text: "INITIALIZING", sub: "SYSTEM_BOOT // V2.0" },
  { text: "WELCOME", sub: "EXECUTIVE PORTFOLIO" },
  { text: "नमस्ते", sub: "GREETINGS FROM INDIA" },
  { text: "BIENVENUE", sub: "INNOVATION & ENGINEERING" },
  { text: "ようこそ", sub: "AI & SYSTEMS MATRIX" },
  { text: "HARSH AGARWAL", sub: "SOFTWARE ENGINEER // AI/ML" }
];

export const WelcomeScreen = ({ onEnter }) => {
  const [greetingIdx, setGreetingIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [statusMsg, setStatusMsg] = useState("Establishing Neural Telemetry...");
  const [isReady, setIsReady] = useState(false);
  const [fps, setFps] = useState(60);

  const canvasRef = useRef(null);
  const cardRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  const { personal, about } = portfolioData;

  // 3D Canvas Visualizer Engine: Fibonacci Particle Globe + 3D Orbital Rings
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Generate 3D Fibonacci Sphere Nodes
    const numPoints = Math.min(Math.floor(window.innerWidth / 8), 160);
    const radius = Math.min(window.innerWidth, window.innerHeight) * 0.38;
    const points = [];

    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2; // y from 1 to -1
      const r = Math.sqrt(1 - y * y); // radius at y
      const theta = phi * i;

      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;

      points.push({
        origX: x * radius,
        origY: y * radius,
        origZ: z * radius,
        x: x * radius,
        y: y * radius,
        z: z * radius,
        size: Math.random() * 2 + 1.2,
        pulseSpeed: Math.random() * 0.04 + 0.02
      });
    }

    // 3D Orbital Ring Points
    const ringPoints = [];
    const ringRadius = radius * 1.35;
    const numRingPoints = 72;
    for (let i = 0; i < numRingPoints; i++) {
      const angle = (i / numRingPoints) * Math.PI * 2;
      ringPoints.push({
        origX: Math.cos(angle) * ringRadius,
        origY: 0,
        origZ: Math.sin(angle) * ringRadius,
        x: 0, y: 0, z: 0
      });
    }

    let rotX = 0.3;
    let rotY = 0;
    let rotZ = 0;
    let lastTime = performance.now();
    let frameCount = 0;
    let lastFpsUpdate = performance.now();

    const render = (time) => {
      frameCount++;
      if (time - lastFpsUpdate >= 600) {
        setFps(Math.round((frameCount * 1000) / (time - lastFpsUpdate)));
        frameCount = 0;
        lastFpsUpdate = time;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const focalLength = 650;

      // Mouse Lerp
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.05;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.05;

      // Dynamic 3D Rotation with Mouse Influence
      rotY += 0.005 + mousePos.current.x * 0.0003;
      rotX = 0.25 + mousePos.current.y * 0.0004;
      rotZ += 0.001;

      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      const cosZ = Math.cos(rotZ), sinZ = Math.sin(rotZ);

      // Rotate & project sphere points
      const projected = [];
      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // 3D Rotation Matrix Y
        let x1 = p.origX * cosY - p.origZ * sinY;
        let z1 = p.origZ * cosY + p.origX * sinY;

        // 3D Rotation Matrix X
        let y2 = p.origY * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.origY * sinX;

        // 3D Rotation Matrix Z
        let x3 = x1 * cosZ - y2 * sinZ;
        let y3 = y2 * cosZ + x1 * sinZ;

        p.x = x3;
        p.y = y3;
        p.z = z2;

        const scale = focalLength / (focalLength + z2 + radius * 1.5);
        const projX = cx + x3 * scale;
        const projY = cy + y3 * scale;
        const alpha = Math.max(0.12, Math.min(1, (z2 + radius) / (2 * radius)));

        projected.push({ p, projX, projY, scale, alpha, z: z2 });
      }

      // Draw 3D Connective Lines between nearby nodes
      ctx.lineWidth = 1;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];

          const dx = p1.p.x - p2.p.x;
          const dy = p1.p.y - p2.p.y;
          const dz = p1.p.z - p2.p.z;
          const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist3D < radius * 0.42) {
            const lineAlpha = (1 - dist3D / (radius * 0.42)) * Math.min(p1.alpha, p2.alpha) * 0.35;
            ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.projX, p1.projY);
            ctx.lineTo(p2.projX, p2.projY);
            ctx.stroke();
          }
        }
      }

      // Draw 3D Orbit Ring
      const ringProj = [];
      const ringCosTilt = Math.cos(1.1);
      const ringSinTilt = Math.sin(1.1);

      for (let i = 0; i < ringPoints.length; i++) {
        const rp = ringPoints[i];
        // Rotate in ring plane then 3D global
        const rx1 = rp.origX * cosY - rp.origZ * sinY;
        const rz1 = rp.origZ * cosY + rp.origX * sinY;
        const ry2 = rp.origY * ringCosTilt - rz1 * ringSinTilt;
        const rz2 = rz1 * ringCosTilt + rp.origY * ringSinTilt;

        const scale = focalLength / (focalLength + rz2 + radius * 1.5);
        ringProj.push({
          projX: cx + rx1 * scale,
          projY: cy + ry2 * scale,
          alpha: Math.max(0.08, Math.min(0.9, (rz2 + ringRadius) / (2 * ringRadius)))
        });
      }

      ctx.beginPath();
      for (let i = 0; i < ringProj.length; i++) {
        const pt = ringProj[i];
        if (i === 0) ctx.moveTo(pt.projX, pt.projY);
        else ctx.lineTo(pt.projX, pt.projY);
      }
      ctx.closePath();
      ctx.strokeStyle = 'rgba(255, 0, 127, 0.28)';
      ctx.stroke();

      // Render 3D Nodes with Depth Shading
      for (let i = 0; i < projected.length; i++) {
        const { projX, projY, scale, alpha, z } = projected[i];

        ctx.beginPath();
        ctx.arc(projX, projY, Math.max(1, 2.8 * scale), 0, Math.PI * 2);

        if (z > 0) {
          // Front nodes: Vibrant Cyan glow
          ctx.fillStyle = `rgba(0, 240, 255, ${alpha})`;
          ctx.shadowColor = '#00f0ff';
          ctx.shadowBlur = 10 * scale;
        } else {
          // Back nodes: Deep Magenta/Purple glow
          ctx.fillStyle = `rgba(255, 0, 127, ${alpha * 0.7})`;
          ctx.shadowColor = '#ff007f';
          ctx.shadowBlur = 4 * scale;
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Lock scroll & handle progression
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Cycle greetings
    const greetingInterval = setInterval(() => {
      setGreetingIdx((prev) => {
        if (prev < greetings.length - 1) return prev + 1;
        clearInterval(greetingInterval);
        return prev;
      });
    }, 480);

    // Boot progress
    const startTime = Date.now();
    const duration = 2800;

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentPct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(currentPct);

      if (currentPct < 25) {
        setStatusMsg("Mounting 3D Vector Geometry...");
      } else if (currentPct < 55) {
        setStatusMsg("Loading Neural Specializations (AI/ML)...");
      } else if (currentPct < 85) {
        setStatusMsg("Initializing Full-Stack Technical Arsenal...");
      } else {
        setStatusMsg("Environment Operational // 100% Ready");
        setIsReady(true);
      }

      if (currentPct >= 100) clearInterval(progressInterval);
    }, 35);

    // Mouse movement listener for 3D card tilt & canvas parallax
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const nx = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const ny = (e.clientY - innerHeight / 2) / (innerHeight / 2);

      mousePos.current.targetX = nx * 80;
      mousePos.current.targetY = ny * 80;

      if (cardRef.current) {
        const tiltX = ny * -10;
        const tiltY = nx * 12;
        cardRef.current.style.transform = `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(10px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.style.overflow = 'unset';
      clearInterval(greetingInterval);
      clearInterval(progressInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleEnter = () => {
    document.body.style.overflow = 'unset';
    if (onEnter) onEnter();
  };

  return (
    <motion.div
      className="welcome-3d-viewport"
      initial={{ opacity: 1 }}
      exit={{
        y: '-100%',
        opacity: 0.98,
        transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
      }}
    >
      {/* 3D Dynamic Particle Sphere Canvas */}
      <canvas ref={canvasRef} className="welcome-3d-canvas" />

      {/* Cyber Grid & Atmospheric Glows */}
      <div className="welcome-3d-grid" />
      <div className="welcome-3d-ambient-glow glow-cyan" />
      <div className="welcome-3d-ambient-glow glow-magenta" />

      {/* Top Professional System Telemetry Bar */}
      <header className="welcome-3d-telemetry-bar">
        <div className="telemetry-col">
          <span className="telemetry-live-dot" />
          <span className="telemetry-tag">SYSTEM ONLINE</span>
          <span className="telemetry-divider">/</span>
          <span className="telemetry-meta">HOST: HARSH_AGARWAL</span>
        </div>

        <div className="telemetry-col telemetry-center">
          <Globe size={13} className="telemetry-icon" />
          <span>LPU CSE // AI & ML SPECIALIZATION (9.24 CGPA)</span>
        </div>

        <div className="telemetry-col telemetry-right">
          <Activity size={13} className="telemetry-icon" />
          <span>RENDER: 3D_WEBGL // {fps} FPS</span>
        </div>
      </header>

      {/* Central 3D Interactive Glass Cockpit */}
      <div className="welcome-3d-stage">
        <motion.div
          ref={cardRef}
          className="welcome-3d-card"
          initial={{ scale: 0.85, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Glass Glare Highlight */}
          <div className="card-glare" />

          {/* 3D Floating Header Badge */}
          <div className="card-3d-layer card-3d-badge-row">
            <span className="badge-3d-cyber">
              <Zap size={12} style={{ color: 'var(--primary)' }} />
              <span>PORTFOLIO_V2.0 // ADVANCED_EDITION</span>
            </span>
            <span className="badge-3d-verified">
              <ShieldCheck size={13} style={{ color: '#00ff88' }} />
              <span>VERIFIED CREDENTIALS</span>
            </span>
          </div>

          {/* 3D Holographic Monogram Orb */}
          <div className="card-3d-layer emblem-3d-container">
            <div className="emblem-3d-orbit-ring" />
            <div className="emblem-3d-orbit-ring-secondary" />
            <div className="emblem-3d-core">
              <Code2 size={36} className="emblem-3d-symbol" />
            </div>
          </div>

          {/* Multilingual Dynamic Greeting */}
          <div className="card-3d-layer greeting-3d-box">
            <AnimatePresence mode="wait">
              <motion.div
                key={greetingIdx}
                initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
                transition={{ duration: 0.28 }}
                className="greeting-item-wrap"
              >
                <h1 className="greeting-3d-title">
                  {greetings[greetingIdx].text}
                  <span className="dot-pulse">_</span>
                </h1>
                <p className="greeting-3d-sub">{greetings[greetingIdx].sub}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Executive Bio & Highlights Pill Grid */}
          <div className="card-3d-layer executive-hero-info">
            <h2 className="executive-name">
              Harsh <span className="gradient-text">Agarwal</span>
            </h2>
            <p className="executive-tagline">
              <Cpu size={14} style={{ display: 'inline', marginRight: '6px', color: 'var(--primary)', verticalAlign: 'middle' }} />
              {personal.tagline}
            </p>

            {/* Quick 3D Key Metrics */}
            <div className="metrics-3d-strip">
              <div className="metric-pill">
                <strong>9.24</strong> <span>CGPA @ LPU</span>
              </div>
              <div className="metric-pill">
                <strong>AI / ML</strong> <span>Specialization</span>
              </div>
              <div className="metric-pill">
                <strong>50+</strong> <span>LeetCode Solved</span>
              </div>
              <div className="metric-pill">
                <strong>JEE Adv</strong> <span>Qualified</span>
              </div>
            </div>
          </div>

          {/* 3D Diagnostic Progress Meter */}
          <div className="card-3d-layer progress-3d-container">
            <div className="progress-3d-header">
              <span className="progress-3d-status">
                <span className="status-ping" /> {statusMsg}
              </span>
              <span className="progress-3d-pct">{progress}%</span>
            </div>
            <div className="progress-3d-track">
              <div className="progress-3d-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {/* 3D Action Buttons */}
          <div className="card-3d-layer actions-3d-row">
            <button
              onClick={handleEnter}
              className={`btn-3d-enter ${isReady ? 'ready' : ''}`}
              aria-label="Enter Portfolio"
            >
              <span className="btn-light-sweep" />
              <span className="btn-text-label">ENTER 3D PORTFOLIO</span>
              <ArrowRight size={18} className="btn-arrow-icon" />
            </button>

            <button
              onClick={handleEnter}
              className="skip-3d-btn"
            >
              Skip Intro [ESC / CLICK]
            </button>
          </div>

        </motion.div>
      </div>

      {/* Bottom Footer Telemetry */}
      <footer className="welcome-3d-footer">
        <span>INTERACTIVE 3D EXPERIENCE // DRAG MOUSE TO ROTATE ENVIRONMENT</span>
        <span>© 2026 HARSH AGARWAL. ALL RIGHTS RESERVED.</span>
      </footer>
    </motion.div>
  );
};
