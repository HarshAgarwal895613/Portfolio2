import React, { useEffect, useRef } from 'react';

/**
 * ParticleCanvas — High-Performance 3D Space & Wireframe Polyhedra Matrix
 * Renders depth-projected 3D constellations and floating rotating 3D polyhedra with mouse parallax.
 */
export const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    const particleCount = Math.min(Math.floor(window.innerWidth / 15), 90);
    const focalLength = 480;
    const depthRange = 650;

    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 3D Particle
    class Particle3D {
      constructor(width, height) {
        this.reset(width, height, true);
      }

      reset(width, height, randomZ = false) {
        this.x = (Math.random() - 0.5) * width * 1.5;
        this.y = (Math.random() - 0.5) * height * 1.5;
        this.z = randomZ ? Math.random() * depthRange - depthRange / 2 : depthRange / 2;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.vz = -(Math.random() * 0.55 + 0.25);
        this.baseRadius = Math.random() * 2.0 + 1.2;
      }

      update(width, height) {
        this.x += this.vx;
        this.y += this.vy;
        this.z += this.vz;

        if (this.z < -depthRange / 2) {
          this.reset(width, height, false);
        }
      }
    }

    // Floating 3D Octahedron Wireframe
    class Polyhedron3D {
      constructor(x, y, z, size, rotSpeedX, rotSpeedY, color) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.baseSize = size;
        this.rx = Math.random() * Math.PI;
        this.ry = Math.random() * Math.PI;
        this.rz = Math.random() * Math.PI;
        this.rotSpeedX = rotSpeedX;
        this.rotSpeedY = rotSpeedY;
        this.color = color;

        // Octahedron 6 vertices
        this.vertices = [
          [1, 0, 0], [-1, 0, 0],
          [0, 1, 0], [0, -1, 0],
          [0, 0, 1], [0, 0, -1]
        ];

        // 12 edges connecting vertices
        this.edges = [
          [0, 2], [2, 1], [1, 3], [3, 0],
          [0, 4], [2, 4], [1, 4], [3, 4],
          [0, 5], [2, 5], [1, 5], [3, 5]
        ];
      }

      update() {
        this.rx += this.rotSpeedX;
        this.ry += this.rotSpeedY;
        this.rz += this.rotSpeedX * 0.5;
      }

      draw(ctx, cx, cy, mouseX, mouseY) {
        const radX = this.rx;
        const radY = this.ry;
        const radZ = this.rz;

        // 3D rotation matrix calculations
        const cosX = Math.cos(radX), sinX = Math.sin(radX);
        const cosY = Math.cos(radY), sinY = Math.sin(radY);
        const cosZ = Math.cos(radZ), sinZ = Math.sin(radZ);

        const worldX = this.x + mouseX * (this.z / depthRange);
        const worldY = this.y + mouseY * (this.z / depthRange);
        const scale = focalLength / (focalLength + this.z + depthRange / 2);

        if (scale <= 0) return;

        const projPts = this.vertices.map(([vx, vy, vz]) => {
          const s = this.baseSize;
          let x0 = vx * s, y0 = vy * s, z0 = vz * s;

          // Rot X
          let y1 = y0 * cosX - z0 * sinX;
          let z1 = y0 * sinX + z0 * cosX;
          let x1 = x0;

          // Rot Y
          let x2 = x1 * cosY + z1 * sinY;
          let z2 = -x1 * sinY + z1 * cosY;
          let y2 = y1;

          // Rot Z
          let x3 = x2 * cosZ - y2 * sinZ;
          let y3 = x2 * sinZ + y2 * cosZ;
          let z3 = z2;

          const px = (worldX + x3) * scale + cx;
          const py = (worldY + y3) * scale + cy;

          return { px, py, pz: this.z + z3 };
        });

        // Draw 3D edges
        ctx.save();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = Math.max(1, 1.6 * scale);
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10 * scale;

        this.edges.forEach(([i, j]) => {
          const p1 = projPts[i];
          const p2 = projPts[j];
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
          ctx.stroke();
        });

        // Draw vertex nodes
        ctx.fillStyle = '#ffffff';
        projPts.forEach(pt => {
          ctx.beginPath();
          ctx.arc(pt.px, pt.py, Math.max(1.5, 2.5 * scale), 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.restore();
      }
    }

    const particles = Array.from(
      { length: particleCount },
      () => new Particle3D(canvas.width, canvas.height)
    );

    // Create 3 floating 3D polyhedra drifting in background corners
    const polyhedra = [
      new Polyhedron3D(-canvas.width * 0.35, -canvas.height * 0.25, 100, 55, 0.008, 0.012, 'rgba(0, 240, 255, 0.45)'),
      new Polyhedron3D(canvas.width * 0.38, canvas.height * 0.2, 50, 68, 0.01, -0.009, 'rgba(255, 0, 127, 0.4)'),
      new Polyhedron3D(canvas.width * 0.15, -canvas.height * 0.35, -80, 42, -0.009, 0.014, 'rgba(0, 255, 136, 0.38)')
    ];

    const handleMouseMove = (e) => {
      const nx = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const ny = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      mouseRef.current.targetX = nx * 70;
      mouseRef.current.targetY = ny * 70;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Mouse Lerp for 3D parallax
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Update & Draw 3D Polyhedra
      polyhedra.forEach(poly => {
        poly.update();
        poly.draw(ctx, cx, cy, mouseRef.current.x, mouseRef.current.y);
      });

      const projected = [];

      particles.forEach(p => {
        p.update(canvas.width, canvas.height);

        // Apply mouse tilt offset
        const px = p.x + mouseRef.current.x * (p.z / depthRange);
        const py = p.y + mouseRef.current.y * (p.z / depthRange);

        const scale = focalLength / (focalLength + p.z + depthRange / 2);
        const projX = cx + px * scale;
        const projY = cy + py * scale;
        const radius = Math.max(0.6, p.baseRadius * scale);
        const alpha = Math.max(0.1, Math.min(0.85, (depthRange / 2 - p.z) / depthRange));

        projected.push({ p, projX, projY, radius, scale, alpha, z: p.z });
      });

      // Draw 3D connecting lines with depth attenuation
      const maxDistance = 125;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];

          const dx = p1.projX - p2.projX;
          const dy = p1.projY - p2.projY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * Math.min(p1.alpha, p2.alpha) * 0.32;
            ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`;
            ctx.lineWidth = 1 * Math.min(p1.scale, p2.scale);
            ctx.beginPath();
            ctx.moveTo(p1.projX, p1.projY);
            ctx.lineTo(p2.projX, p2.projY);
            ctx.stroke();
          }
        }
      }

      // Draw 3D particle nodes
      projected.forEach(pt => {
        ctx.beginPath();
        ctx.arc(pt.projX, pt.projY, pt.radius, 0, Math.PI * 2);

        if (pt.z < 0) {
          // Front 3D particles: Glowing Cyan
          ctx.fillStyle = `rgba(0, 240, 255, ${pt.alpha})`;
          ctx.shadowColor = '#00f0ff';
          ctx.shadowBlur = 7 * pt.scale;
        } else {
          // Back 3D particles: Magenta / Neon Violet
          ctx.fillStyle = `rgba(255, 0, 127, ${pt.alpha * 0.8})`;
          ctx.shadowColor = '#ff007f';
          ctx.shadowBlur = 4 * pt.scale;
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
};

