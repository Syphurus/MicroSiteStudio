"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface MediaBackgroundProps {
  children: React.ReactNode;
  overlay?: boolean;
  parallax?: boolean;
  className?: string;
}

const MediaBackground: React.FC<MediaBackgroundProps> = ({
  children,
  overlay = true,
  parallax = true,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    parallax ? ["0%", "-30%"] : ["0%", "0%"]
  );

  return (
    <section
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Background Video/Image Container */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        {/* Simulated Video Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-black via-luxury-charcoal to-luxury-black">
          {/* Animated Geometric Patterns */}
          <div className="absolute inset-0 opacity-30">
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-luxury-gold/20 rounded-full"
            />
            <motion.div
              animate={{
                rotate: -360,
                scale: [1, 0.8, 1],
              }}
              transition={{
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-luxury-red/20 rounded-full"
            />
            <motion.div
              animate={{
                rotate: 180,
                scale: [1, 1.3, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-luxury-gold/10 rounded-full"
            />
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-luxury-gold rounded-full opacity-40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 10 + 5,
                  delay: Math.random() * 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Gradient Mesh Animation */}
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 opacity-20"
            style={{
              background: `
                radial-gradient(circle at 20% 80%, rgba(212,175,55,0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(220,20,60,0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(212,175,55,0.2) 0%, transparent 50%)
              `,
              backgroundSize: "100% 100%",
            }}
          />
        </div>
      </motion.div>

      {/* Overlay */}
      {overlay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-luxury-black/70 via-luxury-black/50 to-luxury-black/70 backdrop-blur-[1px]"
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default MediaBackground;
