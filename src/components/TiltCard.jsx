import React, { useRef, useState, useCallback } from 'react';

/**
 * TiltCard — High-Performance 3D Perspective Tilt Card
 * Gives any component an executive, interactive 3D physics tilt with specular glare & depth.
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

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale}) translateZ(8px)`,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
      glareOpacity: 0.22
    });
  }, [maxTilt, scale]);

  const handleMouseLeave = useCallback(() => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0px)',
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
        transformStyle: 'preserve-3d',
        transition: 'transform 0.16s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease',
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
            background: `radial-gradient(circle at ${tiltStyle.glareX}% ${tiltStyle.glareY}%, rgba(255, 255, 255, ${tiltStyle.glareOpacity}) 0%, transparent 65%)`,
            pointerEvents: 'none',
            zIndex: 10,
            transition: 'opacity 0.25s ease'
          }}
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
};
