import React, { useEffect, useRef } from 'react';

const NeuralNetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let mouseX = width / 2; // Default center
    let mouseY = height / 2;
    let scrollY = window.scrollY;
    let targetScrollY = scrollY;
    let isMouseMoving = false;
    let mouseTimeout: any;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseMoving = true;
      
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        isMouseMoving = false;
      }, 2000);
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    canvas.width = width;
    canvas.height = height;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseSize: number;
      color: string;
      angle: number;
      speed: number;
    }

    let particles: Particle[] = [];
    
    // Aesthetic configuration
    const COLORS = ['#7c3aed', '#8b5cf6', '#ec4899', '#6366f1']; // Violet, Light Violet, Pink, Indigo
    const CONNECTION_COLOR = '124, 58, 237'; // RGB for Violet

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(130, (width * height) / 9000); // Increased density
      
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 2 + 2; // Larger particles for visibility
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 1.5, // Faster base velocity
          vy: (Math.random() - 0.5) * 1.5,
          size: size,
          baseSize: size,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          angle: Math.random() * Math.PI * 2, // For pulsation phase
          speed: 0.02 + Math.random() * 0.03, // Pulsation speed
        });
      }
    };

    initParticles();

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Scroll physics
      const scrollDiff = targetScrollY - scrollY;
      scrollY += scrollDiff * 0.1;
      const scrollVelocity = scrollDiff * 0.05;

      // Update and Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Pulsating size effect for "living" feel
        p.angle += p.speed;
        p.size = p.baseSize + Math.sin(p.angle) * 0.5;

        // Apply velocities
        p.x += p.vx;
        p.y += p.vy - scrollVelocity;

        // Mouse Interaction
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const mouseRadius = 250;

        if (dist < mouseRadius) {
          const force = (mouseRadius - dist) / mouseRadius;
          const angle = Math.atan2(dy, dx);
          
          // Attraction + Swirl
          const moveX = Math.cos(angle) * force * 2;
          const moveY = Math.sin(angle) * force * 2;
          
          p.x += moveX * 0.5;
          p.y += moveY * 0.5;
        }

        // Boundary Wrapping (Continuous Building feel)
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Draw Particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx2 = p.x - p2.x;
          const dy2 = p.y - p2.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          const maxDist = 180; // Longer connections

          if (dist2 < maxDist) {
            ctx.beginPath();
            // Visibility: Higher base opacity
            const opacity = 0.5 * (1 - dist2 / maxDist);
            ctx.strokeStyle = `rgba(${CONNECTION_COLOR}, ${opacity})`;
            ctx.lineWidth = 1.5 * (1 - dist2 / maxDist); // Variable line width
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(mouseTimeout);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 bg-light dark:bg-dark pointer-events-none" />;
};

export default NeuralNetworkBackground;