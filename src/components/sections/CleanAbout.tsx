"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Trophy,
  Dumbbell,
  TrendingUp,
  Globe,
  Users,
  Rocket,
} from "lucide-react";

const CleanAbout: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: Trophy,
      value: "8+",
      label: "Years Experience",
      gradient: "from-yellow-400 to-yellow-600",
    },
    {
      icon: Dumbbell,
      value: "500+",
      label: "Fitness Websites",
      gradient: "from-red-400 to-red-600",
    },
    {
      icon: TrendingUp,
      value: "340%",
      label: "Average ROI",
      gradient: "from-green-400 to-green-600",
    },
    {
      icon: Globe,
      value: "25+",
      label: "Countries Served",
      gradient: "from-blue-400 to-blue-600",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-16 md:py-24 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-80 h-80 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 rounded-full bg-gradient-to-r from-red-500/10 to-yellow-500/10 border border-red-500/20 text-red-400 text-xs md:text-sm font-ui font-medium mb-6 md:mb-8 backdrop-blur-sm">
            <Users size={16} className="mr-2 md:mr-3" />
            About Our Agency
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 md:mb-8 px-2">
            We Create Digital Excellence
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              for Fitness Professionals
            </span>
          </h2>
          <p className="font-body text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
            Since 2016, we&apos;ve been the go-to agency for fitness brands that
            demand premium quality and results-driven websites. We don&apos;t
            just build websites – we create digital experiences that transform
            businesses.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-20">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-2xl border border-gray-800/50 backdrop-blur-sm"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center mr-4">
                <Rocket size={20} className="text-white" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-white">
                Our Story
              </h3>
            </div>
            <div className="space-y-6 font-body text-gray-300 leading-relaxed">
              <p className="text-lg">
                Founded by fitness industry veterans and design experts,
                Microsite Studio was born from a simple observation: fitness
                professionals deserved websites as powerful as their training
                programs.
              </p>
              <p className="text-lg">
                We&apos;ve since become the trusted partner for elite fitness
                brands, gym chains, and celebrity trainers who demand nothing
                but the best. Our secret? We think like fitness business owners,
                not just designers.
              </p>
              <p className="text-lg">
                Every website we create is designed to convert visitors into
                paying clients while establishing your brand as the premium
                choice in your market.
              </p>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.08, y: -8 }}
                className="relative group"
              >
                {/* Background glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500`}
                ></div>

                {/* Card content */}
                <div className="relative text-center p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700/50 backdrop-blur-sm hover:border-gray-600/70 transition-all duration-500">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center`}
                    >
                      <stat.icon size={32} className="text-white" />
                    </div>
                  </div>
                  <div
                    className={`font-display text-4xl font-bold mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>
                  <div className="font-ui text-sm text-gray-400 font-medium tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CleanAbout;
