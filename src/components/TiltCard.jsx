import React, { useRef, useState, useCallback } from 'react';

/**
 * TiltCard — High-Performance 3D Perspective Physics Card
 * Features realistic 3D perspective physics, multi-layer depth pop-outs,
 * dynamic inverse shadow casting, and specular holographic sheen.
 */
export const TiltCard = ({
  children,
  className = '',
  style = {},
  maxTilt = 12,
  glare = true,
  scale = 1.025,
  elevation = 14,
  ...props
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [tiltStyle, setTiltStyle] = useState({
    transform: 'perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    boxShadow: '',
    glareX: 50,
    glareY: 50,
    glareOpacity: 0
  });

  const isLightMode = () => {
    if (typeof document === 'undefined') return false;
    return document.documentElement.getAttribute('data-theme') === 'light';
  };

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
    const shadowY = (rotX * 2.2 + elevation).toFixed(1);

    const light = isLightMode();
    const shadowStr = light
      ? `${shadowX}px ${shadowY}px 38px rgba(12, 21, 46, 0.14), 0 0 24px rgba(0, 98, 255, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.95), inset 0 0 0 1px rgba(0, 98, 255, 0.15)`
      : `${shadowX}px ${shadowY}px 48px rgba(0, 0, 0, 0.9), 0 0 36px rgba(0, 240, 255, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 0 0 1px rgba(0, 240, 255, 0.35)`;

    setIsHovered(true);
    setTiltStyle({
      transform: `perspective(1100px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale}) translateZ(${elevation}px)`,
      boxShadow: shadowStr,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
      glareOpacity: light ? 0.25 : 0.32
    });
  }, [maxTilt, scale, elevation]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTiltStyle({
      transform: 'perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0px)',
      boxShadow: '',
      glareX: 50,
      glareY: 50,
      glareOpacity: 0
    });
  }, []);

  const light = isLightMode();
  const glareColor1 = light ? 'rgba(0, 98, 255, ' : 'rgba(0, 240, 255, ';
  const glareColor2 = light ? 'rgba(230, 0, 110, ' : 'rgba(255, 0, 127, ';

  return (
    <div
      ref={cardRef}
      className={`tilt-3d-card ${className} ${isHovered ? 'tilt-3d-active' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: tiltStyle.transform,
        ...(isHovered && tiltStyle.boxShadow ? { boxShadow: tiltStyle.boxShadow } : {}),
        transformStyle: 'preserve-3d',
        transition: 'transform 0.14s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s ease',
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
            background: `radial-gradient(circle at ${tiltStyle.glareX}% ${tiltStyle.glareY}%, ${glareColor1}${tiltStyle.glareOpacity}) 0%, ${glareColor2}${tiltStyle.glareOpacity * 0.45}) 45%, transparent 72%)`,
            pointerEvents: 'none',
            zIndex: 10,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.2s ease'
          }}
          aria-hidden="true"
        />
      )}
      <div className="tilt-3d-content" style={{ transformStyle: 'preserve-3d', width: '100%', height: '100%' }}>
        {children}
      </div>
    </div>
  );
};
