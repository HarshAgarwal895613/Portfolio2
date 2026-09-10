import React, { useEffect, useRef } from 'react';

/**
 * AINeuralBackground — Global 3D AI Neural Matrix & Synaptic Synapse Engine
 * Renders depth-projected 3D neural graph, traveling synaptic action potentials,
 * floating 3D tensor polyhedra, and AI mathematical telemetry with mouse parallax.
 */
export const AINeuralBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, active: false });

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

    const focalLength = 520;
    const depthRange = 800;
    const nodeCount = Math.min(Math.floor(window.innerWidth / 16), 85);

    // AI Mathematical & Neural Symbols that drift through 3D space
    const aiSymbols = [
      '∇L', 'σ(z)', 'w_ij', 'ReLU', 'f(x)', 'λ', 'ReLU', 'W·x+b',
      'Loss: 0.002', 'softmax', 'Epoch 100', '9.24* CGPA', 'AI/ML'
    ];

    // 3D Neural Node Class
    class NeuralNode3D {
      constructor(width, height) {
        this.reset(width, height, true);
      }

      reset(width, height, randomZ = false) {
        this.x = (Math.random() - 0.5) * width * 1.6;
        this.y = (Math.random() - 0.5) * height * 1.6;
        this.z = randomZ ? Math.random() * depthRange - depthRange / 2 : depthRange / 2;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.vz = -(Math.random() * 0.45 + 0.2);
        this.baseRadius = Math.random() * 2.2 + 1.4;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.isSpecial = Math.random() > 0.85;
        this.symbol = this.isSpecial ? aiSymbols[Math.floor(Math.random() * aiSymbols.length)] : null;
      }

      update(width, height) {
        this.x += this.vx;
        this.y += this.vy;
        this.z += this.vz;
        this.pulsePhase += 0.04;

        if (this.z < -depthRange / 2) {
          this.reset(width, height, false);
        }
      }
    }

    // Floating 3D AI Tensor Wireframe Polyhedron
    class TensorPolyhedron3D {
      constructor(x, y, z, size, rotSpeedX, rotSpeedY, type = 'octahedron') {
        this.x = x;
        this.y = y;
        this.z = z;
        this.baseSize = size;
        this.rx = Math.random() * Math.PI;
        this.ry = Math.random() * Math.PI;
        this.rz = Math.random() * Math.PI;
        this.rotSpeedX = rotSpeedX;
        this.rotSpeedY = rotSpeedY;
        this.type = type;

        if (type === 'cube') {
          this.vertices = [
            [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
            [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
          ];
          this.edges = [
            [0, 1], [1, 2], [2, 3], [3, 0],
            [4, 5], [5, 6], [6, 7], [7, 4],
            [0, 4], [1, 5], [2, 6], [3, 7]
          ];
        } else {
          // Octahedron
          this.vertices = [
            [1, 0, 0], [-1, 0, 0],
            [0, 1, 0], [0, -1, 0],
            [0, 0, 1], [0, 0, -1]
          ];
          this.edges = [
            [0, 2], [2, 1], [1, 3], [3, 0],
            [0, 4], [2, 4], [1, 4], [3, 4],
            [0, 5], [2, 5], [1, 5], [3, 5]
          ];
        }
      }

      update() {
        this.rx += this.rotSpeedX;
        this.ry += this.rotSpeedY;
        this.rz += this.rotSpeedX * 0.4;
      }

      draw(ctx, cx, cy, mouseX, mouseY, light) {
        const cosX = Math.cos(this.rx), sinX = Math.sin(this.rx);
        const cosY = Math.cos(this.ry), sinY = Math.sin(this.ry);
        const cosZ = Math.cos(this.rz), sinZ = Math.sin(this.rz);

        const worldX = this.x + mouseX * (this.z / depthRange);
        const worldY = this.y + mouseY * (this.z / depthRange);
        const scale = focalLength / (focalLength + this.z + depthRange / 2);

        if (scale <= 0) return;

        const projPts = this.vertices.map(([vx, vy, vz]) => {
          const s = this.baseSize;
          let x0 = vx * s, y0 = vy * s, z0 = vz * s;

          let y1 = y0 * cosX - z0 * sinX;
          let z1 = y0 * sinX + z0 * cosX;
          let x1 = x0;

          let x2 = x1 * cosY + z1 * sinY;
          let z2 = -x1 * sinY + z1 * cosY;
          let y2 = y1;

          let x3 = x2 * cosZ - y2 * sinZ;
          let y3 = x2 * sinZ + y2 * cosZ;
          let z3 = z2;

          const px = (worldX + x3) * scale + cx;
          const py = (worldY + y3) * scale + cy;

          return { px, py, pz: this.z + z3 };
        });

        ctx.save();
        const strokeColor = light ? 'rgba(0, 98, 255, 0.28)' : 'rgba(0, 240, 255, 0.35)';
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = Math.max(1, 1.4 * scale);
        ctx.shadowColor = light ? '#0062ff' : '#00f0ff';
        ctx.shadowBlur = 8 * scale;

        this.edges.forEach(([i, j]) => {
          const p1 = projPts[i];
          const p2 = projPts[j];
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
          ctx.stroke();
        });

        // Vertex points
        ctx.fillStyle = light ? '#0062ff' : '#ffffff';
        projPts.forEach(pt => {
          ctx.beginPath();
          ctx.arc(pt.px, pt.py, Math.max(1.5, 2.2 * scale), 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.restore();
      }
    }

    // Synaptic Action Potential Pulse (Energy travel along axons)
    class SynapticPulse {
      constructor(fromIdx, toIdx) {
        this.fromIdx = fromIdx;
        this.toIdx = toIdx;
        this.progress = 0;
        this.speed = Math.random() * 0.02 + 0.015;
        this.alive = true;
      }

      update() {
        this.progress += this.speed;
        if (this.progress >= 1) this.alive = false;
      }
    }

    const nodes = Array.from(
      { length: nodeCount },
      () => new NeuralNode3D(canvas.width, canvas.height)
    );

    const polyhedra = [
      new TensorPolyhedron3D(-canvas.width * 0.36, -canvas.height * 0.28, 120, 60, 0.007, 0.01, 'octahedron'),
      new TensorPolyhedron3D(canvas.width * 0.38, canvas.height * 0.24, 60, 70, 0.008, -0.008, 'cube'),
      new TensorPolyhedron3D(canvas.width * 0.22, -canvas.height * 0.36, -60, 48, -0.009, 0.012, 'octahedron')
    ];

    let pulses = [];

    const handleMouseMove = (e) => {
      const nx = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const ny = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      mouseRef.current.targetX = nx * 80;
      mouseRef.current.targetY = ny * 80;
      mouseRef.current.active = true;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const isLightMode = () => document.documentElement.getAttribute('data-theme') === 'light';

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const light = isLightMode();

      // Mouse Lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Draw Polyhedra
      polyhedra.forEach(poly => {
        poly.update();
        poly.draw(ctx, cx, cy, mouseRef.current.x, mouseRef.current.y, light);
      });

      // Project Neural Nodes
      const projected = [];
      nodes.forEach((node, idx) => {
        node.update(canvas.width, canvas.height);

        const px = node.x + mouseRef.current.x * (node.z / depthRange);
        const py = node.y + mouseRef.current.y * (node.z / depthRange);

        const scale = focalLength / (focalLength + node.z + depthRange / 2);
        const projX = cx + px * scale;
        const projY = cy + py * scale;
        const radius = Math.max(0.7, node.baseRadius * scale * (1 + 0.15 * Math.sin(node.pulsePhase)));
        const alpha = Math.max(0.12, Math.min(0.9, (depthRange / 2 - node.z) / depthRange));

        projected.push({ node, idx, projX, projY, radius, scale, alpha, z: node.z });
      });

      // Draw Synaptic Connective Axons & Spawn Action Potentials
      const maxDistance = 135;
      const connections = [];

      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];

          const dx = p1.projX - p2.projX;
          const dy = p1.projY - p2.projY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            connections.push({ i, j, p1, p2, dist });
            const lineAlpha = (1 - dist / maxDistance) * Math.min(p1.alpha, p2.alpha) * (light ? 0.38 : 0.32);

            ctx.strokeStyle = light
              ? `rgba(0, 98, 255, ${lineAlpha})`
              : `rgba(0, 240, 255, ${lineAlpha})`;
            ctx.lineWidth = Math.max(0.6, 1.2 * Math.min(p1.scale, p2.scale));

            ctx.beginPath();
            ctx.moveTo(p1.projX, p1.projY);
            ctx.lineTo(p2.projX, p2.projY);
            ctx.stroke();

            // Randomly spawn synaptic firing pulses
            if (Math.random() < 0.0018 && pulses.length < 18) {
              pulses.push(new SynapticPulse(i, j));
            }
          }
        }
      }

      // Update & Draw Synaptic Action Potential Pulses
      pulses.forEach(pulse => {
        pulse.update();
        const p1 = projected[pulse.fromIdx];
        const p2 = projected[pulse.toIdx];

        if (p1 && p2) {
          const curX = p1.projX + (p2.projX - p1.projX) * pulse.progress;
          const curY = p1.projY + (p2.projY - p1.projY) * pulse.progress;
          const pulseScale = (p1.scale + p2.scale) * 0.5;

          ctx.beginPath();
          ctx.arc(curX, curY, Math.max(1.8, 3.2 * pulseScale), 0, Math.PI * 2);
          ctx.fillStyle = light ? '#e6006e' : '#ffffff';
          ctx.shadowColor = light ? '#e6006e' : '#00f0ff';
          ctx.shadowBlur = 10 * pulseScale;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      pulses = pulses.filter(p => p.alive);

      // Render 3D Neural Nodes & AI Floating Symbols
      projected.forEach(pt => {
        ctx.beginPath();
        ctx.arc(pt.projX, pt.projY, pt.radius, 0, Math.PI * 2);

        if (pt.z < 0) {
          // Foreground neurons
          ctx.fillStyle = light
            ? `rgba(0, 98, 255, ${pt.alpha * 0.95})`
            : `rgba(0, 240, 255, ${pt.alpha})`;
          ctx.shadowColor = light ? '#0062ff' : '#00f0ff';
          ctx.shadowBlur = (light ? 5 : 8) * pt.scale;
        } else {
          // Background neurons
          ctx.fillStyle = light
            ? `rgba(230, 0, 110, ${pt.alpha * 0.75})`
            : `rgba(255, 0, 127, ${pt.alpha * 0.75})`;
          ctx.shadowColor = light ? '#e6006e' : '#ff007f';
          ctx.shadowBlur = (light ? 3 : 5) * pt.scale;
        }

        ctx.fill();
        ctx.shadowBlur = 0;

        // Render AI floating mathematical notation
        if (pt.node.symbol && pt.scale > 0.65) {
          ctx.save();
          ctx.font = `${Math.max(9, Math.round(11 * pt.scale))}px 'Fira Code', monospace`;
          ctx.fillStyle = light
            ? `rgba(0, 98, 255, ${pt.alpha * 0.65})`
            : `rgba(0, 240, 255, ${pt.alpha * 0.7})`;
          ctx.fillText(pt.node.symbol, pt.projX + 8, pt.projY - 6);
          ctx.restore();
        }
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="global-ai-background-container" aria-hidden="true">
      <canvas ref={canvasRef} className="global-ai-canvas" />
      <div className="global-ai-grid-overlay" />
      <div className="global-ai-ambient-orb orb-primary" />
      <div className="global-ai-ambient-orb orb-secondary" />
    </div>
  );
};
