"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface InteractiveBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({
  children,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animations for mouse following
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Transform mouse position to element movements
  const x1 = useTransform(mouseXSpring, [0, dimensions.width], [-50, 50]);
  const y1 = useTransform(mouseYSpring, [0, dimensions.height], [-50, 50]);
  const x2 = useTransform(mouseXSpring, [0, dimensions.width], [50, -50]);
  const y2 = useTransform(mouseYSpring, [0, dimensions.height], [50, -50]);
  const x3 = useTransform(mouseXSpring, [0, dimensions.width], [-30, 30]);
  const y3 = useTransform(mouseYSpring, [0, dimensions.height], [-30, 30]);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("resize", updateDimensions);
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary Gradient Orb */}
        <motion.div
          style={{ x: x1, y: y1 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 opacity-20"
        >
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            }}
            className="w-full h-full bg-gradient-radial from-luxury-gold/40 via-luxury-gold/20 to-transparent rounded-full blur-3xl"
          />
        </motion.div>

        {/* Secondary Gradient Orb */}
        <motion.div
          style={{ x: x2, y: y2 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 opacity-25"
        >
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 0.8, 1],
            }}
            transition={{
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            }}
            className="w-full h-full bg-gradient-radial from-luxury-red/40 via-luxury-red/20 to-transparent rounded-full blur-3xl"
          />
        </motion.div>

        {/* Tertiary Accent Orb */}
        <motion.div
          style={{ x: x3, y: y3 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-15"
        >
          <motion.div
            animate={{
              rotate: 180,
              scale: [1, 1.3, 1],
            }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            }}
            className="w-full h-full bg-gradient-radial from-luxury-gold/30 via-luxury-red/20 to-transparent rounded-full blur-2xl"
          />
        </motion.div>

        {/* Geometric Grid Pattern */}
        <motion.div
          style={{
            x: useTransform(mouseXSpring, [0, dimensions.width], [-20, 20]),
          }}
          className="absolute inset-0 opacity-5"
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(212,175,55,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(212,175,55,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-luxury-gold rounded-full opacity-40"
              style={{
                left: `${i * 8.33 + 10}%`,
                top: `${Math.sin(i) * 30 + 50}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4 + i * 0.5,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Animated Mesh Overlay */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 opacity-10"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(212,175,55,0.2) 0%, transparent 40%),
              radial-gradient(circle at 80% 20%, rgba(220,20,60,0.2) 0%, transparent 40%),
              radial-gradient(circle at 40% 40%, rgba(212,175,55,0.1) 0%, transparent 40%)
            `,
            backgroundSize: "300% 300%",
          }}
        />

        {/* Subtle Noise Texture */}
        <div
          className="absolute inset-0 opacity-5 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default InteractiveBackground;
