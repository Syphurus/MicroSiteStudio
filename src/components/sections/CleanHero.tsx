"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { scrollToSection } from "@/lib/utils";

const CleanHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-luxury-black via-luxury-charcoal to-luxury-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-luxury-gold/10 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 0.9, 1],
          }}
          transition={{
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-luxury-red/10 rounded-full"
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-luxury-gold/10 border border-luxury-gold/30 text-luxury-gold text-sm font-medium mb-8"
          >
            <span className="mr-2">⚡</span>
            Premium Web Design for Fitness Professionals
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Transform Your
            <span className="block bg-gradient-to-r from-luxury-gold to-luxury-red bg-clip-text text-transparent">
              Fitness Business
            </span>
            with Premium Websites
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-luxury-lightGray mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We create stunning, high-converting websites for fitness coaches,
            gym owners, and personal trainers that generate leads and showcase
            your expertise.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("pricing")}
              className="bg-gradient-to-r from-luxury-gold to-luxury-red text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
            >
              <span>🚀</span>
              <span>Get Your Website</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("portfolio")}
              className="border-2 border-luxury-gold text-luxury-gold px-8 py-4 rounded-full font-semibold text-lg hover:bg-luxury-gold hover:text-black transition-all duration-300 flex items-center space-x-2"
            >
              <span>🎨</span>
              <span>View Portfolio</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: "500+", label: "Websites Created", icon: "🌐" },
              { number: "98%", label: "Client Satisfaction", icon: "⭐" },
              { number: "24/7", label: "Support", icon: "💬" },
              { number: "15+", label: "Countries", icon: "🌍" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-4 rounded-xl bg-luxury-charcoal/50 backdrop-blur-sm border border-luxury-gold/20 hover:border-luxury-gold/40 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-luxury-gold mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-luxury-lightGray">
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
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection("about")}
          className="w-6 h-10 border-2 border-luxury-gold rounded-full flex justify-center cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-luxury-gold rounded-full mt-2"
          />
        </motion.div>
        <p className="text-xs text-luxury-gold mt-2 text-center">Scroll</p>
      </motion.div>
    </section>
  );
};

export default CleanHero;
