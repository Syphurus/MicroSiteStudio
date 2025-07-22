"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { scrollToSection } from "@/lib/utils";

const CleanHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20 md:pt-0"
    >
      {/* Interactive Parallax Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />

        {/* Mouse-interactive floating elements */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-red-600/20 to-orange-600/20 blur-3xl"
          style={{
            left: `${mousePosition.x * 2}%`,
            top: `${mousePosition.y * 1.5}%`,
            transform: `translate(-50%, -50%)`,
          }}
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-red-500/15 to-red-700/15 blur-2xl"
          style={{
            right: `${mousePosition.x * 1.5}%`,
            bottom: `${mousePosition.y * 1.2}%`,
            transform: `translate(50%, 50%)`,
          }}
          animate={{
            scale: [1, 0.7, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-orange-500/10 to-red-600/10 blur-xl"
          style={{
            left: `${50 + mousePosition.x * 0.8}%`,
            top: `${30 + mousePosition.y * 0.6}%`,
            transform: `translate(-50%, -50%)`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Parallax accent lines that follow mouse */}
        <motion.div
          className="absolute w-2 h-32 bg-gradient-to-b from-red-500 to-transparent opacity-60"
          style={{
            left: `${50 + mousePosition.x * 0.3}px`,
            top: `${100 + mousePosition.y * 0.2}px`,
          }}
        />
        <motion.div
          className="absolute w-32 h-2 bg-gradient-to-r from-red-500 to-transparent opacity-60"
          style={{
            right: `${50 + mousePosition.x * 0.2}px`,
            bottom: `${150 + mousePosition.y * 0.1}px`,
          }}
        />

        {/* Interactive grid pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${
              mousePosition.y * 0.1
            }px)`,
          }}
        >
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </motion.div>

        {/* More visible floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-400/40 rounded-full"
            style={{
              left: `${15 + i * 8 + mousePosition.x * 0.1}%`,
              top: `${25 + i * 6 + mousePosition.y * 0.08}%`,
            }}
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-4 md:px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 rounded-full bg-red-600/10 border border-red-600/30 text-red-400 text-xs md:text-sm font-ui mb-6 md:mb-8"
          >
            Premium Web Design for Fitness Professionals
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-display text-display-xl text-white mb-4 md:mb-6"
          >
            Transform Your
            <span className="block bg-gradient-to-r from-red-500 via-red-600 to-orange-500 bg-clip-text text-transparent mt-1 md:mt-2">
              Fitness Business
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="font-body text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto px-2"
          >
            We create stunning, high-converting websites for fitness coaches,
            gym owners, and personal trainers that generate leads and showcase
            your expertise.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-16"
          >
            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(220, 38, 38, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="font-ui bg-gradient-to-r from-red-600 to-red-700 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-xl w-full sm:w-auto"
            >
              Start Your Project
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("portfolio")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-ui bg-transparent border-2 border-white text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto"
            >
              View Our Work
            </motion.button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "2.5x", label: "Average ROI Increase" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">
                  {stat.number}
                </div>
                <div className="font-body text-gray-400 text-xs md:text-sm lg:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CleanHero;
