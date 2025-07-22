"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import { scrollToSection } from "@/lib/utils";

const EnhancedHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  // 3D floating elements
  const FloatingElement = ({
    delay,
    duration,
    x,
    y: yPos,
    size,
    color,
  }: {
    delay: number;
    duration: number;
    x: string;
    y: string;
    size: string;
    color: string;
  }) => (
    <motion.div
      className={`absolute ${size} ${color} rounded-full blur-lg opacity-30`}
      style={{ left: x, top: yPos }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );

  // Particle system
  const particles = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 5,
  }));

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-luxury-black via-luxury-charcoal to-luxury-black"
    >
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-mesh-gradient animate-gradient-xy"></div>
      </div>

      {/* 3D Floating Elements */}
      <FloatingElement
        delay={0}
        duration={8}
        x="10%"
        y="20%"
        size="w-32 h-32"
        color="bg-luxury-gold"
      />
      <FloatingElement
        delay={2}
        duration={12}
        x="80%"
        y="30%"
        size="w-24 h-24"
        color="bg-luxury-red"
      />
      <FloatingElement
        delay={4}
        duration={10}
        x="20%"
        y="70%"
        size="w-20 h-20"
        color="bg-luxury-gold"
      />
      <FloatingElement
        delay={1}
        duration={15}
        x="70%"
        y="80%"
        size="w-28 h-28"
        color="bg-luxury-red"
      />
      <FloatingElement
        delay={3}
        duration={9}
        x="90%"
        y="60%"
        size="w-16 h-16"
        color="bg-luxury-gold"
      />

      {/* Particle System */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-luxury-gold rounded-full opacity-60"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 container mx-auto px-6 text-center"
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
            whileHover={{ scale: 1.05, rotateY: 10 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-luxury-gold/10 border border-luxury-gold/30 text-luxury-gold text-sm font-medium mb-8 backdrop-blur-lg shadow-glow"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="mr-2"
            >
              ✨
            </motion.span>
            Premium Web Design Agency for Fitness Professionals
          </motion.div>

          {/* Main Headline with 3D Text Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 50, rotateX: -30 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-tight"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.span
              className="block text-luxury-white"
              whileHover={{
                textShadow: "0 0 30px rgba(255,255,255,0.8)",
                transform: "translateZ(20px)",
              }}
            >
              Transform Your
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-luxury-gold via-luxury-red to-luxury-gold bg-clip-text text-transparent animate-gradient-x"
              whileHover={{
                scale: 1.05,
                transform: "translateZ(30px)",
              }}
              style={{
                backgroundSize: "200% 200%",
                filter: "drop-shadow(0 0 20px rgba(212, 175, 55, 0.5))",
              }}
            >
              Fitness Empire
            </motion.span>
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

          {/* Animated Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-luxury-lightGray mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            We create{" "}
            <motion.span
              className="text-luxury-gold font-semibold"
              animate={{
                textShadow: [
                  "0 0 10px rgba(212,175,55,0.5)",
                  "0 0 20px rgba(212,175,55,0.8)",
                  "0 0 10px rgba(212,175,55,0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              premium, high-converting websites
            </motion.span>{" "}
            for fitness coaches, gym owners, and personal trainers that generate
            leads and showcase your expertise with cutting-edge design.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection("pricing")}
                className="w-full sm:w-auto min-w-[250px] text-lg py-4 shadow-glow-lg hover:shadow-luxury-xl transform hover:-translate-y-2 transition-all duration-500"
              >
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Get Your Premium Website →
                </motion.span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotateY: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="w-full sm:w-auto min-w-[250px] text-lg py-4 border-2 border-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transform hover:-translate-y-2 transition-all duration-500"
              >
                View Portfolio
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Trust Indicators with 3D Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { number: "500+", label: "Websites Delivered", icon: "🚀" },
              { number: "98%", label: "Client Satisfaction", icon: "⭐" },
              { number: "24/7", label: "Support Available", icon: "💬" },
              { number: "15+", label: "Countries Served", icon: "🌍" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 1.8 + index * 0.2 }}
                whileHover={{
                  scale: 1.1,
                  rotateY: 10,
                  backgroundColor: "rgba(212, 175, 55, 0.1)",
                  boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)",
                }}
                className="bg-luxury-charcoal/50 backdrop-blur-lg border border-luxury-gold/20 rounded-2xl p-6 text-center transform transition-all duration-500 hover:border-luxury-gold/50"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  className="text-2xl mb-2"
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
                <div className="text-sm text-luxury-lightGray">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.2 }}
          className="w-8 h-12 border-2 border-luxury-gold rounded-full flex justify-center cursor-pointer"
          onClick={() => scrollToSection("services")}
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-4 bg-luxury-gold rounded-full mt-2"
          />
        </motion.div>
        <motion.p
          className="text-xs text-luxury-gold mt-2 font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to explore
        </motion.p>
      </motion.div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-luxury-gold/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-luxury-red/10 rounded-full"
        />
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-luxury-gold/5 rounded-full"
        />
      </div>
    </section>
  );
};

export default EnhancedHero;
