import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, Cpu, Rotate3d } from 'lucide-react';

/**
 * AI3DCore — Interactive 3D WebGL Neural Hologram Core
 * Rendered using Three.js with full 360° mouse drag rotation,
 * pulsing neural core sphere, gyroscopic tensor rings, orbiting data satellites,
 * and holographic HUD telemetry.
 */
export const AI3DCore = ({ size = 'compact' }) => {
  const mountRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [activeMode, setActiveMode] = useState('neural'); // neural | tensor | quantum

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 320;
    let height = container.clientHeight || 320;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 48;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.borderRadius = '50%';
    container.appendChild(renderer.domElement);

    const isLightMode = () => document.documentElement.getAttribute('data-theme') === 'light';

    // 1. Central Core Sphere (Wireframe & Glowing Inner Mesh)
    const coreGeo = new THREE.IcosahedronGeometry(10, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.85
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);

    // Inner glowing solid nucleus
    const nucGeo = new THREE.SphereGeometry(6, 24, 24);
    const nucMat = new THREE.MeshBasicMaterial({
      color: 0xff007f,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const nucMesh = new THREE.Mesh(nucGeo, nucMat);
    scene.add(nucMesh);

    // 2. Gyroscopic Orbit Rings
    const ring1Geo = new THREE.TorusGeometry(15, 0.35, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.75
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    scene.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(18, 0.35, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x9d00ff,
      transparent: true,
      opacity: 0.7
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 3;
    scene.add(ring2);

    const ring3Geo = new THREE.TorusGeometry(21, 0.3, 16, 100);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0xff007f,
      transparent: true,
      opacity: 0.65
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.y = Math.PI / 4;
    scene.add(ring3);

    // 3. Orbiting Data Satellites (Floating 3D nodes)
    const satGroup = new THREE.Group();
    const satCount = 8;
    const satMeshes = [];

    for (let i = 0; i < satCount; i++) {
      const satGeo = new THREE.OctahedronGeometry(1.2, 0);
      const satMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x00f0ff : 0xff007f,
        wireframe: true
      });
      const sat = new THREE.Mesh(satGeo, satMat);
      const angle = (i / satCount) * Math.PI * 2;
      const radius = 24;
      sat.position.set(Math.cos(angle) * radius, (Math.sin(i * 2) * 6), Math.sin(angle) * radius);
      satGroup.add(sat);
      satMeshes.push(sat);
    }
    scene.add(satGroup);

    // 4. Surrounding Micro-Particle Cloud
    const partCount = 120;
    const partGeo = new THREE.BufferGeometry();
    const partPositions = new Float32Array(partCount * 3);

    for (let i = 0; i < partCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 22 + Math.random() * 12;

      partPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      partPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      partPositions[i * 3 + 2] = r * Math.cos(phi);
    }

    partGeo.setAttribute('position', new THREE.BufferAttribute(partPositions, 3));
    const partMat = new THREE.PointsMaterial({
      size: 1.4,
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    const partCloud = new THREE.Points(partGeo, partMat);
    scene.add(partCloud);

    // 5. Interactive Mouse Rotation Controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotationVelocity = { x: 0.005, y: 0.008 };

    const onMouseDown = (e) => {
      isDragging = true;
      setIsInteracting(true);
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      coreMesh.rotation.y += deltaX * 0.01;
      coreMesh.rotation.x += deltaY * 0.01;
      nucMesh.rotation.y -= deltaX * 0.01;
      satGroup.rotation.y += deltaX * 0.015;

      rotationVelocity = {
        x: deltaY * 0.003,
        y: deltaX * 0.003
      };

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
      setTimeout(() => setIsInteracting(false), 800);
    };

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 320;
      height = container.clientHeight || 320;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const domElem = renderer.domElement;
    domElem.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch support for mobile devices
    domElem.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        setIsInteracting(true);
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    });

    domElem.addEventListener('touchmove', (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;

      coreMesh.rotation.y += deltaX * 0.01;
      coreMesh.rotation.x += deltaY * 0.01;
      satGroup.rotation.y += deltaX * 0.015;

      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    });

    domElem.addEventListener('touchend', onMouseUp);
    window.addEventListener('resize', handleResize);

    // 6. Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      const light = isLightMode();

      // Theme colors
      if (light) {
        coreMat.color.setHex(0x0062ff);
        nucMat.color.setHex(0xe6006e);
        ring1Mat.color.setHex(0x0062ff);
        ring2Mat.color.setHex(0x7928ca);
        ring3Mat.color.setHex(0xe6006e);
        partMat.color.setHex(0x0062ff);
      } else {
        coreMat.color.setHex(0x00f0ff);
        nucMat.color.setHex(0xff007f);
        ring1Mat.color.setHex(0x00f0ff);
        ring2Mat.color.setHex(0x9d00ff);
        ring3Mat.color.setHex(0xff007f);
        partMat.color.setHex(0x00f0ff);
      }

      // Smooth inertia damping
      if (!isDragging) {
        coreMesh.rotation.y += rotationVelocity.y;
        coreMesh.rotation.x += rotationVelocity.x;
        rotationVelocity.x *= 0.96;
        rotationVelocity.y = rotationVelocity.y * 0.96 + 0.005 * 0.04;
      }

      // Core pulsing
      const pulse = 1 + Math.sin(elapsedTime * 2.5) * 0.06;
      coreMesh.scale.set(pulse, pulse, pulse);

      const nucPulse = 1 + Math.cos(elapsedTime * 3) * 0.1;
      nucMesh.scale.set(nucPulse, nucPulse, nucPulse);
      nucMesh.rotation.y -= 0.012;
      nucMesh.rotation.z += 0.008;

      // Gyroscopic ring rotations
      ring1.rotation.x += 0.015;
      ring1.rotation.y += 0.01;
      ring2.rotation.y += 0.012;
      ring2.rotation.z += 0.008;
      ring3.rotation.z -= 0.014;
      ring3.rotation.x -= 0.006;

      // Orbiting satellites
      satGroup.rotation.y += 0.01;
      satMeshes.forEach((sat, i) => {
        sat.rotation.x += 0.03;
        sat.rotation.y += 0.02;
        sat.position.y = Math.sin(elapsedTime * 2 + i) * 7;
      });

      // Particle cloud drift
      partCloud.rotation.y -= 0.003;
      partCloud.rotation.x += 0.002;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      domElem.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      nucGeo.dispose();
      nucMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      partGeo.dispose();
      partMat.dispose();
      satMeshes.forEach(s => {
        s.geometry.dispose();
        s.material.dispose();
      });
    };
  }, []);

  return (
    <div className={`ai-3d-core-card ${size === 'compact' ? 'core-compact' : 'core-full'}`}>
      <div className="ai-3d-core-header">
        <div className="ai-3d-core-status">
          <span className="pulse-dot" style={{ width: '8px', height: '8px' }} />
          <span className="ai-3d-status-text">
            {isInteracting ? '3D INTERACTIVE CONTROL [ACTIVE]' : '3D NEURAL TENSOR CORE [LIVE]'}
          </span>
        </div>
        <div className="ai-3d-drag-hint">
          <Rotate3d size={13} />
          <span>Click & Drag to Rotate 3D</span>
        </div>
      </div>

      <div ref={mountRef} className="ai-3d-canvas-mount" style={{ cursor: isInteracting ? 'grabbing' : 'grab' }} />

      <div className="ai-3d-core-telemetry">
        <div className="telemetry-pill">
          <Cpu size={12} />
          <span>TENSOR_PRECISION: FP16</span>
        </div>
        <div className="telemetry-pill">
          <Sparkles size={12} />
          <span>SYNAPSE_GRID: 1024 NODES</span>
        </div>
      </div>
    </div>
  );
};
