import React, { useEffect, useState } from 'react';

/**
 * CleanBackground — Clean, Professional, Placement-Ready Modern Background
 * Simple, elegant, lightweight, and distraction-free:
 * - Subtle interactive cursor radial glow
 * - Minimal clean tech dot-grid overlay
 * - Soft ambient background glow orbs for depth
 * - High-contrast & perfectly balanced for both Dark & Light themes
 */
export const AINeuralBackground = () => {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="clean-bg-wrapper" aria-hidden="true">
      {/* Interactive Subtle Cursor Spotlight */}
      <div
        className="clean-bg-spotlight"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`
        }}
      />

      {/* Clean Minimal Tech Grid Overlay */}
      <div className="clean-bg-grid" />

      {/* Soft Ambient Depth Glows */}
      <div className="clean-bg-ambient ambient-top-left" />
      <div className="clean-bg-ambient ambient-bottom-right" />
    </div>
  );
};
