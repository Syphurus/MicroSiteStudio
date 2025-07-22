"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { scrollToSection } from "@/lib/utils";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-black">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-hero-gradient"></div>
      <div className="absolute inset-0 bg-luxury-black/20"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-luxury-gold/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-luxury-gold/10 border border-luxury-gold/30 text-luxury-gold text-sm font-medium mb-8"
          >
            ✨ Premium Web Design Agency for Fitness Professionals
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-luxury-white mb-6 leading-tight"
          >
            Transform Your{" "}
            <span className="luxury-text-gradient">Fitness Business</span>
            <br />
            With Premium Websites
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-luxury-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We create luxury, high-converting websites for fitness coaches, gym
            owners, and personal trainers that generate leads and showcase your
            expertise.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("pricing")}
              className="w-full sm:w-auto min-w-[200px]"
            >
              Get Your Website
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("portfolio")}
              className="w-full sm:w-auto min-w-[200px]"
            >
              View Our Work
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center text-luxury-gray-300"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-luxury-gold">500+</div>
              <div className="text-sm">Websites Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-luxury-gold">98%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-luxury-gold">24/7</div>
              <div className="text-sm">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-luxury-gold">15+</div>
              <div className="text-sm">Countries Served</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-luxury-gold rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-luxury-gold rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
