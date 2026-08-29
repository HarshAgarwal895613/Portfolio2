import React, { useState, useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const [clicked, setClicked] = useState(false);
  const [sparks, setSparks] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const dotRef = useRef(null);
  const circleRef = useRef(null);
  const animFrame = useRef();
  const mousePos = useRef({ x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 });
  const circlePos = useRef({ x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 });

  useEffect(() => {
    // Disable custom cursor on touch devices or small screens
    if (window.innerWidth <= 768 || 'ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setDisabled(true);
      return;
    }

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      }
    };

    const renderLoop = () => {
      circlePos.current.x += (mousePos.current.x - circlePos.current.x) * 0.15;
      circlePos.current.y += (mousePos.current.y - circlePos.current.y) * 0.15;

      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(calc(${circlePos.current.x}px - 50%), calc(${circlePos.current.y}px - 50%), 0)`;
      }

      animFrame.current = requestAnimationFrame(renderLoop);
    };

    const handleMouseDown = (e) => {
      setClicked(true);

      const burst = Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 360 / 12) * Math.PI / 180;
        const dist = 60 + Math.random() * 50;
        return {
          id: Date.now() + i + Math.random(),
          x: e.clientX,
          y: e.clientY,
          tx: `${Math.cos(angle) * dist}px`,
          ty: `${Math.sin(angle) * dist}px`
        };
      });

      setSparks(prev => [...prev, ...burst]);

      setTimeout(() => setClicked(false), 150);
      setTimeout(() => {
        setSparks(prev => prev.filter(s => !burst.includes(s)));
      }, 800);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isHoverable =
        target.tagName?.toLowerCase() === 'a' ||
        target.tagName?.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList?.contains('hoverable') ||
        window.getComputedStyle(target).cursor === 'pointer';

      if (circleRef.current && dotRef.current) {
        if (isHoverable) {
          circleRef.current.classList.add('hovering');
          dotRef.current.classList.add('hovering');
        } else {
          circleRef.current.classList.remove('hovering');
          dotRef.current.classList.remove('hovering');
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseover', handleMouseOver);

    animFrame.current = requestAnimationFrame(renderLoop);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseover', handleMouseOver);
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, []);

  if (disabled) return null;

  return (
    <div className="custom-cursor-container" aria-hidden="true">
      <div ref={circleRef} className="custom-cursor-circle" />
      <div ref={dotRef} className={`custom-cursor-dot ${clicked ? 'clicked' : ''}`} />
      {sparks.map(s => (
        <div
          key={s.id}
          className="spark"
          style={{
            left: `${s.x}px`,
            top: `${s.y}px`,
            '--tx': s.tx,
            '--ty': s.ty
          }}
        />
      ))}
    </div>
  );
};
