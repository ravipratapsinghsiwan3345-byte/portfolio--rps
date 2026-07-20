import React, { useEffect, useRef } from "react";

export default function AmbientBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates
    const mouse = { x: null, y: null, radius: 150 };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    // Particle class
    class Particle {
      constructor() {
        this.reset();
        // Stagger initial positions across screen
        this.x = Math.random() * width;
        this.y = Math.random() * height;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2.2 + 0.6;
        this.speedX = Math.random() * 0.2 - 0.1;
        this.speedY = Math.random() * 0.2 - 0.1;
        this.alpha = Math.random() * 0.4 + 0.2;
        this.pulseSpeed = Math.random() * 0.015 + 0.005;
        this.pulseDir = Math.random() > 0.5 ? 1 : -1;
      }

      update() {
        // Drift
        this.x += this.speedX;
        this.y += this.speedY;

        // Subtle alpha pulse
        this.alpha += this.pulseSpeed * this.pulseDir;
        if (this.alpha > 0.8) {
          this.alpha = 0.8;
          this.pulseDir = -1;
        } else if (this.alpha < 0.15) {
          this.alpha = 0.15;
          this.pulseDir = 1;
        }

        // Screen wrap
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Interaction with mouse (soft attraction/repulsion)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            // Push particles away slightly
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= (dx / distance) * force * 0.8;
            this.y -= (dy / distance) * force * 0.8;
          }
        }
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // Vary color slightly between soft blue, cyan, purple, white
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size * 2
        );
        
        // Dynamic styling to look like glowing plasma points
        let color = "168, 85, 247"; // purple
        if (this.size > 2.0) {
          color = "6, 182, 212"; // cyan
        } else if (this.size > 1.4) {
          color = "59, 130, 246"; // blue
        } else {
          color = "255, 255, 255"; // white
        }

        ctx.fillStyle = `rgba(${color}, ${this.alpha})`;
        ctx.shadowBlur = this.size * 4;
        ctx.shadowColor = `rgba(${color}, ${this.alpha * 0.6})`;
        ctx.fill();
        ctx.restore();
      }
    }

    // Set particle density based on screen size
    const particleCount = Math.min(65, Math.floor((width * height) / 22000));
    const particles = Array.from({ length: particleCount }, () => new Particle());

    // Main animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Render star/particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Dynamic Animated Canvas for starry stardust */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />

      {/* Modern slow-pulsing background mesh orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-accent-purple/10 to-accent-blue/10 blur-[130px] mix-blend-screen animate-pulse duration-[12000ms] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-br from-accent-blue/5 to-accent-cyan/10 blur-[140px] mix-blend-screen animate-pulse duration-[18000ms] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-accent-purple/5 to-accent-cyan/5 blur-[120px] mix-blend-screen animate-pulse duration-[15000ms] pointer-events-none" />
    </div>
  );
}
