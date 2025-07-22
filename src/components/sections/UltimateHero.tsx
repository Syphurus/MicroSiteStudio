"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import InteractiveBackground from "@/components/ui/InteractiveBackground";
import { scrollToSection } from "@/lib/utils";

const UltimateHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Ultra-smooth parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Interactive Background with Mouse Tracking */}
      <InteractiveBackground className="absolute inset-0 bg-gradient-to-br from-luxury-black via-luxury-charcoal to-luxury-black">
        {/* Additional premium background layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-luxury-black/60" />
      </InteractiveBackground>

      {/* Main Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-20 container mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-7xl mx-auto"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="inline-flex items-center px-8 py-4 rounded-full bg-luxury-black/60 backdrop-blur-2xl border border-luxury-gold/40 text-luxury-gold text-sm font-medium mb-12 shadow-2xl"
          >
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
              className="mr-3 text-lg"
            >
              ✨
            </motion.div>
            Premium Web Design Agency for Fitness Professionals
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-3"
            >
              →
            </motion.div>
          </motion.div>

          {/* Main Headline with Enhanced Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold mb-8 leading-[0.9] tracking-tight"
          >
            <motion.div
              className="block text-luxury-white mb-4"
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 40px rgba(255,255,255,0.8)",
              }}
              transition={{ duration: 0.3 }}
            >
              Transform Your
            </motion.div>

            <motion.div
              className="block relative mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="bg-gradient-to-r from-luxury-gold via-luxury-red via-luxury-gold to-luxury-red bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  backgroundSize: "300% 200%",
                  filter: "drop-shadow(0 0 40px rgba(212, 175, 55, 0.6))",
                }}
              >
                Fitness Empire
              </motion.span>
            </motion.div>

            <motion.div
              className="block text-luxury-white"
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 40px rgba(255,255,255,0.8)",
              }}
              transition={{ duration: 0.3 }}
            >
              With Premium Design
            </motion.div>
          </motion.h1>

          {/* Enhanced Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl lg:text-3xl text-luxury-lightGray mb-16 max-w-5xl mx-auto leading-relaxed font-light"
          >
            We create{" "}
            <motion.span
              className="text-luxury-gold font-semibold relative inline-block"
              whileHover={{ scale: 1.05 }}
              animate={{
                textShadow: [
                  "0 0 20px rgba(212,175,55,0.6)",
                  "0 0 35px rgba(212,175,55,0.9)",
                  "0 0 20px rgba(212,175,55,0.6)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              premium, high-converting websites
            </motion.span>{" "}
            that generate leads, showcase expertise, and dominate the fitness
            industry with cutting-edge design and seamless user experiences.
          </motion.p>

          {/* Premium CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-luxury-gold to-luxury-red rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection("pricing")}
                className="relative w-full sm:w-auto min-w-[300px] text-lg py-6 px-10 bg-gradient-to-r from-luxury-gold to-luxury-red hover:from-luxury-gold/90 hover:to-luxury-red/90 transform transition-all duration-500 font-semibold tracking-wide"
              >
                <motion.span
                  animate={{ x: [0, 2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center justify-center"
                >
                  Get Your Premium Website
                  <motion.span
                    className="ml-3"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="w-full sm:w-auto min-w-[300px] text-lg py-6 px-10 border-2 border-luxury-gold bg-luxury-black/40 backdrop-blur-2xl hover:bg-luxury-gold hover:text-luxury-black transform transition-all duration-500 font-semibold tracking-wide"
              >
                <motion.span className="flex items-center justify-center">
                  View Portfolio
                  <motion.span
                    className="ml-3"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    🎨
                  </motion.span>
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Trust Indicators with Better Design */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {[
              {
                number: "500+",
                label: "Premium Websites",
                icon: "🚀",
                gradient: "from-blue-500/20 to-cyan-500/20",
              },
              {
                number: "98%",
                label: "Client Satisfaction",
                icon: "⭐",
                gradient: "from-yellow-500/20 to-orange-500/20",
              },
              {
                number: "24/7",
                label: "Elite Support",
                icon: "💎",
                gradient: "from-purple-500/20 to-pink-500/20",
              },
              {
                number: "25+",
                label: "Countries Served",
                icon: "🌍",
                gradient: "from-luxury-gold/20 to-luxury-red/20",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1.6 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.08,
                  y: -8,
                  rotateY: 5,
                  boxShadow: "0 30px 60px rgba(212, 175, 55, 0.4)",
                }}
                className={`bg-gradient-to-br ${stat.gradient} backdrop-blur-2xl border border-luxury-gold/30 rounded-3xl p-8 text-center transform transition-all duration-500 hover:border-luxury-gold/60 shadow-xl group cursor-pointer`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300"
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-luxury-gold mb-3"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(212,175,55,0.6)",
                      "0 0 30px rgba(212,175,55,0.9)",
                      "0 0 20px rgba(212,175,55,0.6)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.4,
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-luxury-lightGray group-hover:text-luxury-white transition-colors font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.2 }}
          className="w-8 h-14 border-2 border-luxury-gold rounded-full flex justify-center cursor-pointer backdrop-blur-2xl bg-luxury-black/20 shadow-xl"
          onClick={() => scrollToSection("about")}
        >
          <motion.div
            animate={{ y: [0, 16, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-6 bg-luxury-gold rounded-full mt-2"
          />
        </motion.div>
        <motion.p
          className="text-xs text-luxury-gold mt-4 font-medium text-center tracking-wider"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          SCROLL TO EXPLORE
        </motion.p>
      </motion.div>
    </section>
  );
};

export default UltimateHero;
