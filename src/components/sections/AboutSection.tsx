"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 10]);

  // Team members data
  const teamMembers = [
    {
      name: "Alexander Stone",
      role: "Founder & Creative Director",
      bio: "15+ years creating luxury digital experiences for Fortune 500 companies and elite fitness brands.",
      image: "/api/placeholder/400/400",
      specialties: ["UX Strategy", "Creative Direction", "Brand Development"],
      achievements: "Led design for 5 fitness unicorns",
    },
    {
      name: "Sophia Chen",
      role: "Lead Developer",
      bio: "Full-stack architect specializing in high-performance, conversion-optimized fitness websites.",
      image: "/api/placeholder/400/400",
      specialties: [
        "React/Next.js",
        "Performance Optimization",
        "Conversion Funnels",
      ],
      achievements: "2.3x average conversion increase",
    },
    {
      name: "Marcus Rivera",
      role: "Fitness Industry Expert",
      bio: "Former gym chain owner turned digital strategist. Deep understanding of fitness business needs.",
      image: "/api/placeholder/400/400",
      specialties: ["Business Strategy", "Market Analysis", "ROI Optimization"],
      achievements: "Scaled 3 fitness brands to 7-figures",
    },
  ];

  const companyStats = [
    { label: "Years of Excellence", value: "8+", icon: "🏆" },
    { label: "Fitness Websites Delivered", value: "500+", icon: "💪" },
    { label: "Average ROI Increase", value: "340%", icon: "📈" },
    { label: "Countries Worldwide", value: "25+", icon: "🌍" },
    { label: "Team Members", value: "15", icon: "👥" },
    { label: "Awards Won", value: "12", icon: "🥇" },
  ];

  const milestones = [
    {
      year: "2016",
      title: "Founded Microsite Studio",
      description:
        "Started with a vision to revolutionize fitness industry websites",
      icon: "🚀",
    },
    {
      year: "2018",
      title: "First Major Breakthrough",
      description: "Designed award-winning website for international gym chain",
      icon: "🏅",
    },
    {
      year: "2020",
      title: "Global Expansion",
      description:
        "Expanded to serve fitness professionals across 15 countries",
      icon: "🌍",
    },
    {
      year: "2022",
      title: "AI Integration Pioneer",
      description:
        "First to integrate AI chatbots and automated lead capture in fitness sites",
      icon: "🤖",
    },
    {
      year: "2024",
      title: "Industry Leader",
      description:
        "Recognized as the premium choice for elite fitness brands worldwide",
      icon: "👑",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-32 bg-gradient-to-b from-luxury-black via-luxury-charcoal to-luxury-black overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-luxury-gold rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-luxury-red rounded-full blur-3xl opacity-30" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-luxury-gold/10 border border-luxury-gold/30 text-luxury-gold text-sm font-medium mb-8"
          >
            <span className="mr-2">✨</span>
            About Our Premium Agency
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-luxury-white mb-8"
          >
            Crafting Digital
            <span className="block bg-gradient-to-r from-luxury-gold via-luxury-red to-luxury-gold bg-clip-text text-transparent">
              Masterpieces
            </span>
            <span className="block">for Fitness Elite</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-luxury-lightGray max-w-4xl mx-auto leading-relaxed"
          >
            We&apos;re not just web designers—we&apos;re fitness industry
            specialists who understand what drives conversions, builds trust,
            and creates lasting relationships between fitness professionals and
            their clients.
          </motion.p>
        </motion.div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div whileHover={{ scale: 1.02 }} className="relative">
              <motion.div
                style={{ rotateX }}
                className="relative bg-gradient-to-br from-luxury-gold/20 to-luxury-red/20 rounded-3xl p-8 backdrop-blur-lg border border-luxury-gold/30"
              >
                <h3 className="text-3xl font-display font-bold text-luxury-white mb-6">
                  Our Story
                </h3>
                <p className="text-luxury-lightGray text-lg leading-relaxed mb-6">
                  Founded in 2016 by fitness industry veterans and design
                  experts, Microsite Studio was born from a simple observation:
                  fitness professionals deserved websites as powerful as their
                  training programs.
                </p>
                <p className="text-luxury-lightGray text-lg leading-relaxed mb-6">
                  We&apos;ve since become the go-to agency for elite fitness
                  brands, gym chains, and celebrity trainers who demand nothing
                  but the best. Our secret? We think like fitness business
                  owners, not just designers.
                </p>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="inline-flex items-center text-luxury-gold font-semibold"
                >
                  Learn more about our process
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Company Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {companyStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, rotateY: -90 }}
                  animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    backgroundColor: "rgba(212, 175, 55, 0.1)",
                  }}
                  className="bg-luxury-charcoal/50 backdrop-blur-lg border border-luxury-gold/20 rounded-2xl p-6 text-center hover:border-luxury-gold/50 transition-all duration-500"
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
                    className="text-3xl mb-3"
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div
                    className="text-3xl font-bold text-luxury-gold mb-2"
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
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-luxury-lightGray">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-32"
        >
          <h3 className="text-4xl font-display font-bold text-luxury-white text-center mb-16">
            Our Journey to Excellence
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 2, delay: 1.2 }}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-luxury-gold via-luxury-red to-luxury-gold h-full origin-top"
            />

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.4 + index * 0.2 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                    }`}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        rotateY: index % 2 === 0 ? -5 : 5,
                      }}
                      className="bg-luxury-charcoal/70 backdrop-blur-lg border border-luxury-gold/30 rounded-2xl p-6 hover:border-luxury-gold/60 transition-all duration-500"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div className="text-2xl font-bold text-luxury-gold mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="text-xl font-semibold text-luxury-white mb-3">
                        {milestone.title}
                      </h4>
                      <p className="text-luxury-lightGray">
                        {milestone.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Timeline Point */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.6 + index * 0.2 }}
                    whileHover={{ scale: 1.5, rotate: 180 }}
                    className="relative z-10 w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center text-2xl border-4 border-luxury-black shadow-glow"
                  >
                    {milestone.icon}
                  </motion.div>

                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <h3 className="text-4xl font-display font-bold text-luxury-white text-center mb-16">
            Meet the Masterminds
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50, rotateY: -30 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: 2 + index * 0.2 }}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(212, 175, 55, 0.3)",
                }}
                className="bg-luxury-charcoal/50 backdrop-blur-lg border border-luxury-gold/20 rounded-3xl p-8 text-center hover:border-luxury-gold/50 transition-all duration-500 group"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotateZ: 5 }}
                  className="relative mb-6"
                >
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-luxury-gold to-luxury-red p-1">
                    <div className="w-full h-full rounded-full bg-luxury-charcoal flex items-center justify-center text-4xl">
                      👤
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-2 border-2 border-luxury-gold/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </motion.div>

                <h4 className="text-2xl font-semibold text-luxury-white mb-2">
                  {member.name}
                </h4>
                <div className="text-luxury-gold font-medium mb-4">
                  {member.role}
                </div>
                <p className="text-luxury-lightGray text-sm mb-6 leading-relaxed">
                  {member.bio}
                </p>

                <div className="space-y-3">
                  <div className="text-xs text-luxury-gold font-semibold">
                    SPECIALTIES
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-3 py-1 bg-luxury-gold/10 border border-luxury-gold/30 rounded-full text-xs text-luxury-gold"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <motion.div
                    className="text-xs text-luxury-lightGray mt-4 font-medium"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🏆 {member.achievements}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="text-center mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-gradient-to-r from-luxury-gold/20 to-luxury-red/20 backdrop-blur-lg border border-luxury-gold/30 rounded-3xl p-8 max-w-2xl"
          >
            <h4 className="text-2xl font-semibold text-luxury-white mb-4">
              Ready to Join Our Success Stories?
            </h4>
            <p className="text-luxury-lightGray mb-6">
              Let&apos;s create a website that transforms your fitness business
              and sets you apart from the competition.
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(212, 175, 55, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-luxury-gold text-luxury-black px-8 py-3 rounded-full font-semibold hover:bg-luxury-gold/90 transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
