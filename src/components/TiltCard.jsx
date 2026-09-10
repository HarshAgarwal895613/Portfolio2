import React, { useRef, useState, useCallback } from 'react';

/**
 * TiltCard — High-Performance 3D Perspective Tilt Card
 * Features realistic 3D perspective physics, multi-layer depth, dynamic inverse shadow casting, and specular holographic sheen.
 */
export const TiltCard = ({
  children,
  className = '',
  style = {},
  maxTilt = 10,
  glare = true,
  scale = 1.02,
  ...props
}) => {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    boxShadow: '0 12px 36px rgba(0, 0, 0, 0.7), 0 0 25px rgba(0, 240, 255, 0.06)',
    glareX: 50,
    glareY: 50,
    glareOpacity: 0
  });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -maxTilt;
    const rotY = ((x - centerX) / centerX) * maxTilt;

    // Dynamic 3D shadow cast in opposite direction of tilt
    const shadowX = (-rotY * 2.2).toFixed(1);
    const shadowY = (rotX * 2.2 + 18).toFixed(1);

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale}) translateZ(10px)`,
      boxShadow: `${shadowX}px ${shadowY}px 45px rgba(0, 0, 0, 0.85), 0 0 32px rgba(0, 240, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.25)`,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
      glareOpacity: 0.28
    });
  }, [maxTilt, scale]);

  const handleMouseLeave = useCallback(() => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0px)',
      boxShadow: '0 12px 36px rgba(0, 0, 0, 0.7), 0 0 25px rgba(0, 240, 255, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
      glareX: 50,
      glareY: 50,
      glareOpacity: 0
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className={`tilt-3d-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: tiltStyle.transform,
        boxShadow: tiltStyle.boxShadow,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.14s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease',
        position: 'relative',
        ...style
      }}
      {...props}
    >
      {glare && (
        <div
          className="tilt-3d-glare"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            background: `radial-gradient(circle at ${tiltStyle.glareX}% ${tiltStyle.glareY}%, rgba(0, 240, 255, ${tiltStyle.glareOpacity}) 0%, rgba(255, 0, 127, ${tiltStyle.glareOpacity * 0.4}) 40%, transparent 70%)`,
            pointerEvents: 'none',
            zIndex: 10,
            transition: 'opacity 0.2s ease'
          }}
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
};

