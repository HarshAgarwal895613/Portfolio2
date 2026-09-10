import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * AINeuralBackground — State-of-the-Art WebGL 3D AI Neural Matrix
 * Built with Three.js for hardware-accelerated 60fps 3D rendering.
 * Features:
 * - 3D Neural Particle Cloud & Synaptic Lattice with Depth-Z dynamics
 * - Floating 3D Polyhedra: Icosahedron, Torus Knot, Octahedron, Dodecahedron, Tetrahedron & Cyber Cubes
 * - 3D Scroll-Driven Camera Depth Travel & Perspective Parallax
 * - Interactive 3D Cursor Parallax & Synaptic Burst Waves
 * - Dual-Theme Adaptive Lighting (Neon Cyberpunk Dark & Royal Sapphire Light)
 */
export const AINeuralBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 1200);
    camera.position.z = 90;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.pointerEvents = 'none';
    container.appendChild(renderer.domElement);

    const isLightMode = () => document.documentElement.getAttribute('data-theme') === 'light';

    // 2. 3D Neural Synaptic Particle Lattice
    const particleCount = Math.min(Math.floor(width / 2.6), 480);
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const velocities = [];

    for (let i = 0; i < particleCount; i++) {
      const px = (Math.random() - 0.5) * 190;
      const py = (Math.random() - 0.5) * 150;
      const pz = (Math.random() - 0.5) * 120;

      positions[i * 3] = px;
      positions[i * 3 + 1] = py;
      positions[i * 3 + 2] = pz;

      originalPositions[i * 3] = px;
      originalPositions[i * 3 + 1] = py;
      originalPositions[i * 3 + 2] = pz;

      velocities.push({
        x: (Math.random() - 0.5) * 0.05,
        y: (Math.random() - 0.5) * 0.05,
        z: (Math.random() - 0.5) * 0.04
      });
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Custom Glowing Radial Particle Texture
    const createParticleTexture = () => {
      const pCanvas = document.createElement('canvas');
      pCanvas.width = 64;
      pCanvas.height = 64;
      const pCtx = pCanvas.getContext('2d');
      const grad = pCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.3, 'rgba(0, 240, 255, 0.85)');
      grad.addColorStop(0.7, 'rgba(0, 240, 255, 0.25)');
      grad.addColorStop(1, 'rgba(0, 240, 255, 0)');
      pCtx.fillStyle = grad;
      pCtx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(pCanvas);
    };

    const particleTexture = createParticleTexture();

    const particleMat = new THREE.PointsMaterial({
      size: 2.4,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0x00f0ff
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 3. Dynamic Synaptic 3D Connections
    const maxLineConnections = 420;
    const linePositions = new Float32Array(maxLineConnections * 6);
    const lineColors = new Float32Array(maxLineConnections * 6);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
    lineGeo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage));

    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const lineSystem = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lineSystem);

    // 4. Floating 3D Polyhedra Fleet (Distributed in 3D Space)
    const polyhedraGroup = new THREE.Group();

    // Mesh 1: Icosahedron (Top Left)
    const icoGeo = new THREE.IcosahedronGeometry(15, 1);
    const icoMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true, transparent: true, opacity: 0.28 });
    const icosahedron = new THREE.Mesh(icoGeo, icoMat);
    icosahedron.position.set(-52, 28, -25);
    polyhedraGroup.add(icosahedron);

    // Mesh 2: Torus Knot (Top Right)
    const torusGeo = new THREE.TorusKnotGeometry(11, 2.8, 80, 16);
    const torusMat = new THREE.MeshBasicMaterial({ color: 0xff007f, wireframe: true, transparent: true, opacity: 0.24 });
    const torusKnot = new THREE.Mesh(torusGeo, torusMat);
    torusKnot.position.set(54, 32, -30);
    polyhedraGroup.add(torusKnot);

    // Mesh 3: Octahedron (Bottom Right)
    const octaGeo = new THREE.OctahedronGeometry(13, 1);
    const octaMat = new THREE.MeshBasicMaterial({ color: 0x9d00ff, wireframe: true, transparent: true, opacity: 0.26 });
    const octahedron = new THREE.Mesh(octaGeo, octaMat);
    octahedron.position.set(45, -38, -20);
    polyhedraGroup.add(octahedron);

    // Mesh 4: Dodecahedron (Bottom Left)
    const dodecaGeo = new THREE.DodecahedronGeometry(14, 0);
    const dodecaMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true, transparent: true, opacity: 0.22 });
    const dodecahedron = new THREE.Mesh(dodecaGeo, dodecaMat);
    dodecahedron.position.set(-48, -42, -18);
    polyhedraGroup.add(dodecahedron);

    // Mesh 5: Cyber Data Cube (Center Deep Z)
    const boxGeo = new THREE.BoxGeometry(16, 16, 16);
    const boxMat = new THREE.MeshBasicMaterial({ color: 0x00ff88, wireframe: true, transparent: true, opacity: 0.2 });
    const cyberCube = new THREE.Mesh(boxGeo, boxMat);
    cyberCube.position.set(0, -65, -35);
    polyhedraGroup.add(cyberCube);

    // Mesh 6: Tetrahedron (Floating Mid Right)
    const tetraGeo = new THREE.TetrahedronGeometry(12, 0);
    const tetraMat = new THREE.MeshBasicMaterial({ color: 0xffb800, wireframe: true, transparent: true, opacity: 0.24 });
    const tetrahedron = new THREE.Mesh(tetraGeo, tetraMat);
    tetrahedron.position.set(58, -8, -15);
    polyhedraGroup.add(tetrahedron);

    scene.add(polyhedraGroup);

    // 5. Mouse Parallax & Scroll Depth Controller
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollProgress = 0;

    const handleMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        scrollProgress = window.scrollY / totalHeight;
      }
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // 6. Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      const light = isLightMode();

      // Adaptive Theme Colors
      if (light) {
        particleMat.color.setHex(0x0062ff);
        icoMat.color.setHex(0x0062ff);
        torusMat.color.setHex(0xe6006e);
        octaMat.color.setHex(0x7928ca);
        dodecaMat.color.setHex(0x0062ff);
        boxMat.color.setHex(0x10b981);
        tetraMat.color.setHex(0xf59e0b);
        icoMat.opacity = 0.24;
        torusMat.opacity = 0.2;
        octaMat.opacity = 0.22;
        dodecaMat.opacity = 0.2;
        boxMat.opacity = 0.18;
        tetraMat.opacity = 0.2;
      } else {
        particleMat.color.setHex(0x00f0ff);
        icoMat.color.setHex(0x00f0ff);
        torusMat.color.setHex(0xff007f);
        octaMat.color.setHex(0x9d00ff);
        dodecaMat.color.setHex(0x00f0ff);
        boxMat.color.setHex(0x00ff88);
        tetraMat.color.setHex(0xffb800);
        icoMat.opacity = 0.3;
        torusMat.opacity = 0.25;
        octaMat.opacity = 0.28;
        dodecaMat.opacity = 0.25;
        boxMat.opacity = 0.22;
        tetraMat.opacity = 0.26;
      }

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      // 3D Scroll Depth Camera Flight
      const scrollYOffset = scrollProgress * 50;
      const scrollZOffset = Math.sin(scrollProgress * Math.PI) * 15;

      camera.position.x = mouse.x * 14;
      camera.position.y = mouse.y * 12 - scrollYOffset;
      camera.position.z = 90 - scrollZOffset;
      camera.lookAt(0, -scrollYOffset * 0.8, 0);

      // Polyhedra 3D Rotations
      icosahedron.rotation.x += 0.007;
      icosahedron.rotation.y += 0.01;

      torusKnot.rotation.x -= 0.009;
      torusKnot.rotation.y += 0.008;

      octahedron.rotation.x += 0.008;
      octahedron.rotation.z -= 0.01;

      dodecahedron.rotation.y += 0.009;
      dodecahedron.rotation.z += 0.007;

      cyberCube.rotation.x += 0.006;
      cyberCube.rotation.y += 0.006;

      tetrahedron.rotation.x -= 0.01;
      tetrahedron.rotation.y -= 0.008;

      // Polyhedra floating hover
      icosahedron.position.y = 28 + Math.sin(elapsedTime * 1.2) * 4;
      torusKnot.position.y = 32 + Math.cos(elapsedTime * 1.4) * 4.5;
      octahedron.position.y = -38 + Math.sin(elapsedTime * 1.5 + 1) * 4;
      dodecahedron.position.y = -42 + Math.cos(elapsedTime * 1.1 + 2) * 4;

      // Update Particle Positions
      const posAttr = particleGeo.attributes.position;
      const posArr = posAttr.array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        posArr[i3] += velocities[i].x;
        posArr[i3 + 1] += velocities[i].y;
        posArr[i3 + 2] += velocities[i].z;

        // Boundary rebound
        if (Math.abs(posArr[i3]) > 95) velocities[i].x *= -1;
        if (Math.abs(posArr[i3 + 1]) > 75) velocities[i].y *= -1;
        if (Math.abs(posArr[i3 + 2]) > 60) velocities[i].z *= -1;
      }
      posAttr.needsUpdate = true;

      // Update 3D Synaptic Connections
      let lineIdx = 0;
      const linePosArr = lineGeo.attributes.position.array;
      const lineColArr = lineGeo.attributes.color.array;
      const maxDistance = 24;

      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const i3 = i * 3;
          const j3 = j * 3;

          const dx = posArr[i3] - posArr[j3];
          const dy = posArr[i3 + 1] - posArr[j3 + 1];
          const dz = posArr[i3 + 2] - posArr[j3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance && lineIdx < maxLineConnections) {
            const idx6 = lineIdx * 6;

            linePosArr[idx6] = posArr[i3];
            linePosArr[idx6 + 1] = posArr[i3 + 1];
            linePosArr[idx6 + 2] = posArr[i3 + 2];

            linePosArr[idx6 + 3] = posArr[j3];
            linePosArr[idx6 + 4] = posArr[j3 + 1];
            linePosArr[idx6 + 5] = posArr[j3 + 2];

            const alpha = (1 - dist / maxDistance) * (light ? 0.45 : 0.65);

            const r = light ? 0.0 : 0.0;
            const g = light ? 0.38 : 0.94;
            const b = light ? 1.0 : 1.0;

            lineColArr[idx6] = r * alpha;
            lineColArr[idx6 + 1] = g * alpha;
            lineColArr[idx6 + 2] = b * alpha;

            lineColArr[idx6 + 3] = r * alpha;
            lineColArr[idx6 + 4] = g * alpha;
            lineColArr[idx6 + 5] = b * alpha;

            lineIdx++;
          }
        }
      }

      lineGeo.setDrawRange(0, lineIdx * 2);
      lineGeo.attributes.position.needsUpdate = true;
      lineGeo.attributes.color.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      octaGeo.dispose();
      octaMat.dispose();
      dodecaGeo.dispose();
      dodecaMat.dispose();
      boxGeo.dispose();
      boxMat.dispose();
      tetraGeo.dispose();
      tetraMat.dispose();
    };
  }, []);

  return (
    <div className="global-ai-background-container" aria-hidden="true">
      <div ref={mountRef} className="global-ai-three-canvas" />
      <div className="global-ai-grid-overlay" />
      <div className="global-ai-ambient-orb orb-primary" />
      <div className="global-ai-ambient-orb orb-secondary" />
      <div className="global-ai-ambient-orb orb-accent" />
    </div>
  );
};
