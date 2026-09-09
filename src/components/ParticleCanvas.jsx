import React, { useEffect, useRef } from 'react';

export const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    const particleCount = Math.min(Math.floor(window.innerWidth / 16), 85);
    const focalLength = 450;
    const depthRange = 600;

    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle3D {
      constructor(width, height) {
        this.reset(width, height, true);
      }

      reset(width, height, randomZ = false) {
        this.x = (Math.random() - 0.5) * width * 1.4;
        this.y = (Math.random() - 0.5) * height * 1.4;
        this.z = randomZ ? Math.random() * depthRange - depthRange / 2 : depthRange / 2;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.vz = -(Math.random() * 0.5 + 0.2); // drifting forward in 3D
        this.baseRadius = Math.random() * 1.8 + 1.2;
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

    const particles = Array.from(
      { length: particleCount },
      () => new Particle3D(canvas.width, canvas.height)
    );

    const handleMouseMove = (e) => {
      const nx = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const ny = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      mouseRef.current.targetX = nx * 60;
      mouseRef.current.targetY = ny * 60;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Mouse Lerp for 3D parallax
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

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
      const maxDistance = 120;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];

          const dx = p1.projX - p2.projX;
          const dy = p1.projY - p2.projY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * Math.min(p1.alpha, p2.alpha) * 0.35;
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
          // Closer / Front 3D particles: Glowing Cyan
          ctx.fillStyle = `rgba(0, 240, 255, ${pt.alpha})`;
          ctx.shadowColor = '#00f0ff';
          ctx.shadowBlur = 6 * pt.scale;
        } else {
          // Deeper 3D particles: Magenta / Indigo
          ctx.fillStyle = `rgba(255, 0, 127, ${pt.alpha * 0.75})`;
          ctx.shadowColor = '#ff007f';
          ctx.shadowBlur = 3 * pt.scale;
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
