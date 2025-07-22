"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import InteractiveBackground from "@/components/ui/InteractiveBackground";
import { scrollToSection } from "@/lib/utils";

const SuperEnhancedHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Interactive Background */}
      <InteractiveBackground className="absolute inset-0 bg-gradient-to-br from-luxury-black via-luxury-charcoal to-luxury-black">
        <div className="absolute inset-0" />
      </InteractiveBackground>

      {/* Main Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-20 container mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="inline-flex items-center px-8 py-4 rounded-full bg-luxury-black/50 backdrop-blur-xl border border-luxury-gold/30 text-luxury-gold text-sm font-medium mb-8 shadow-2xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="mr-3 text-lg"
            >
              ✨
            </motion.span>
            Premium Web Design Agency for Fitness Professionals
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="ml-3"
            >
              →
            </motion.span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold mb-8 leading-tight"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.span
              className="block text-luxury-white mb-4"
              whileHover={{
                textShadow: "0 0 30px rgba(255,255,255,0.8)",
                transform: "translateZ(20px)",
              }}
            >
              Transform Your
            </motion.span>
            <motion.div
              className="block relative mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <motion.span
                className="bg-gradient-to-r from-luxury-gold via-luxury-red to-luxury-gold bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  backgroundSize: "200% 200%",
                  filter: "drop-shadow(0 0 30px rgba(212, 175, 55, 0.4))",
                }}
              >
                Fitness Empire
              </motion.span>
            </motion.div>
            <motion.span
              className="block text-luxury-white"
              whileHover={{
                textShadow: "0 0 30px rgba(255,255,255,0.8)",
                transform: "translateZ(20px)",
              }}
            >
              With Luxury Websites
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-luxury-lightGray mb-12 max-w-5xl mx-auto leading-relaxed font-light"
          >
            We create{" "}
            <motion.span
              className="text-luxury-gold font-semibold relative"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 10px rgba(212,175,55,0.5)",
                    "0 0 25px rgba(212,175,55,0.8)",
                    "0 0 10px rgba(212,175,55,0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                premium, high-converting websites
              </motion.span>
            </motion.span>{" "}
            for fitness coaches, gym owners, and personal trainers that generate
            leads and showcase your expertise with cutting-edge design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 3 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection("pricing")}
                className="w-full sm:w-auto min-w-[280px] text-lg py-5 px-8 shadow-2xl hover:shadow-luxury-xl transform hover:-translate-y-3 transition-all duration-500 bg-gradient-to-r from-luxury-gold to-luxury-red hover:from-luxury-gold/90 hover:to-luxury-red/90"
              >
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center"
                >
                  Get Your Premium Website
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotateY: -3 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="w-full sm:w-auto min-w-[280px] text-lg py-5 px-8 border-2 border-luxury-gold bg-luxury-black/30 backdrop-blur-xl hover:bg-luxury-gold hover:text-luxury-black transform hover:-translate-y-3 transition-all duration-500 shadow-xl"
              >
                <motion.span className="flex items-center">
                  View Our Portfolio
                  <motion.span
                    className="ml-2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    🎨
                  </motion.span>
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              {
                number: "500+",
                label: "Websites Delivered",
                icon: "🚀",
                color: "from-blue-500/20 to-purple-500/20",
              },
              {
                number: "98%",
                label: "Client Satisfaction",
                icon: "⭐",
                color: "from-yellow-500/20 to-orange-500/20",
              },
              {
                number: "24/7",
                label: "Support Available",
                icon: "💬",
                color: "from-green-500/20 to-emerald-500/20",
              },
              {
                number: "15+",
                label: "Countries Served",
                icon: "🌍",
                color: "from-luxury-gold/20 to-luxury-red/20",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, rotateY: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.8 + index * 0.2 }}
                whileHover={{
                  scale: 1.1,
                  rotateY: 5,
                  y: -10,
                  boxShadow: "0 25px 50px rgba(212, 175, 55, 0.3)",
                }}
                className={`bg-gradient-to-br ${stat.color} backdrop-blur-xl border border-luxury-gold/20 rounded-2xl p-6 text-center transform transition-all duration-500 hover:border-luxury-gold/50 shadow-xl group`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300"
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  className="text-2xl md:text-3xl font-bold text-luxury-gold mb-2"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(212,175,55,0.5)",
                      "0 0 20px rgba(212,175,55,0.8)",
                      "0 0 10px rgba(212,175,55,0.5)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-luxury-lightGray group-hover:text-luxury-white transition-colors">
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
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.2 }}
          className="w-8 h-12 border-2 border-luxury-gold rounded-full flex justify-center cursor-pointer backdrop-blur-xl bg-luxury-black/20"
          onClick={() => scrollToSection("about")}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-4 bg-luxury-gold rounded-full mt-2"
          />
        </motion.div>
        <motion.p
          className="text-xs text-luxury-gold mt-3 font-medium text-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to explore
        </motion.p>
      </motion.div>
    </section>
  );
};

export default SuperEnhancedHero;
