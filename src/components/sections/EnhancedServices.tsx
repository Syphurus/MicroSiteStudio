"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const EnhancedServices: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const services = [
    {
      icon: "🎨",
      title: "Custom Website Design",
      description:
        "Bespoke, luxury websites tailored specifically for fitness professionals. Every design reflects your brand's strength and professionalism.",
      features: [
        "Custom UI/UX Design",
        "Brand Integration",
        "Premium Animations",
        "Conversion Optimization",
      ],
      color: "from-luxury-gold to-luxury-red",
      delay: 0.2,
    },
    {
      icon: "📱",
      title: "Mobile-First Development",
      description:
        "Perfect performance across all devices. Your clients will love the seamless experience on mobile, tablet, and desktop.",
      features: [
        "Responsive Design",
        "Touch Optimized",
        "Fast Loading",
        "Progressive Web App",
      ],
      color: "from-luxury-red to-luxury-gold",
      delay: 0.4,
    },
    {
      icon: "🚀",
      title: "Performance Optimization",
      description:
        "Lightning-fast websites that rank higher on Google and convert more visitors into paying clients.",
      features: [
        "Speed Optimization",
        "SEO Ready",
        "Core Web Vitals",
        "Analytics Integration",
      ],
      color: "from-luxury-gold to-luxury-red",
      delay: 0.6,
    },
    {
      icon: "📊",
      title: "Lead Generation System",
      description:
        "Advanced forms, booking systems, and conversion tools designed to turn website visitors into paying clients.",
      features: [
        "Smart Forms",
        "Booking Integration",
        "CRM Connection",
        "Automated Follow-ups",
      ],
      color: "from-luxury-red to-luxury-gold",
      delay: 0.8,
    },
    {
      icon: "👥",
      title: "Client Management Tools",
      description:
        "Integrated systems for managing client relationships, bookings, and testimonials to grow your business.",
      features: [
        "Client Portal",
        "Testimonial System",
        "Review Management",
        "Social Proof",
      ],
      color: "from-luxury-gold to-luxury-red",
      delay: 1.0,
    },
    {
      icon: "🤖",
      title: "AI-Powered Features",
      description:
        "Cutting-edge AI chatbots and automation tools that work 24/7 to capture leads and answer client questions.",
      features: [
        "AI Chatbot",
        "Smart Recommendations",
        "Automated Responses",
        "Lead Qualification",
      ],
      color: "from-luxury-red to-luxury-gold",
      delay: 1.2,
    },
  ];

  // Floating background elements
  const FloatingShape = ({
    delay,
    duration,
    x,
    y: yPos,
    size,
    rotate,
  }: {
    delay: number;
    duration: number;
    x: string;
    y: string;
    size: string;
    rotate: number;
  }) => (
    <motion.div
      className={`absolute ${size} bg-luxury-gold/10 rounded-3xl blur-sm`}
      style={{ left: x, top: yPos }}
      animate={{
        y: [0, -30, 0],
        x: [0, 20, 0],
        rotate: [rotate, rotate + 180, rotate + 360],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative py-32 bg-gradient-to-b from-luxury-black via-luxury-charcoal to-luxury-black overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <FloatingShape
            delay={0}
            duration={15}
            x="5%"
            y="10%"
            size="w-32 h-32"
            rotate={0}
          />
          <FloatingShape
            delay={3}
            duration={12}
            x="85%"
            y="20%"
            size="w-24 h-24"
            rotate={45}
          />
          <FloatingShape
            delay={6}
            duration={18}
            x="15%"
            y="60%"
            size="w-28 h-28"
            rotate={90}
          />
          <FloatingShape
            delay={9}
            duration={14}
            x="75%"
            y="70%"
            size="w-20 h-20"
            rotate={135}
          />
          <FloatingShape
            delay={2}
            duration={16}
            x="50%"
            y="85%"
            size="w-36 h-36"
            rotate={180}
          />
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
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="mr-2"
            >
              ⚡
            </motion.span>
            Premium Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-luxury-white mb-8"
          >
            Cutting-Edge Solutions
            <span className="block bg-gradient-to-r from-luxury-gold via-luxury-red to-luxury-gold bg-clip-text text-transparent">
              For Fitness Excellence
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-luxury-lightGray max-w-4xl mx-auto leading-relaxed"
          >
            From stunning design to powerful automation, we deliver
            comprehensive solutions that transform fitness businesses and drive
            exponential growth.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: service.delay }}
              whileHover={{
                y: -15,
                rotateY: 8,
                scale: 1.02,
                boxShadow: "0 30px 60px rgba(212, 175, 55, 0.3)",
              }}
              className="relative group"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Gradient Background */}
              <motion.div
                whileHover={{ scale: 1.05, opacity: 0.8 }}
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 rounded-3xl blur-xl group-hover:opacity-40 transition-opacity duration-500`}
              />

              {/* Main Card */}
              <div className="relative bg-luxury-charcoal/70 backdrop-blur-lg border border-luxury-gold/20 rounded-3xl p-8 hover:border-luxury-gold/60 transition-all duration-500 h-full">
                {/* Service Icon */}
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    textShadow: "0 0 20px rgba(212, 175, 55, 0.8)",
                  }}
                  className="text-6xl mb-6 inline-block"
                  style={{
                    filter: "drop-shadow(0 0 10px rgba(212, 175, 55, 0.5))",
                  }}
                >
                  {service.icon}
                </motion.div>

                {/* Service Title */}
                <motion.h3
                  className="text-2xl font-semibold text-luxury-white mb-4 group-hover:text-luxury-gold transition-colors duration-500"
                  whileHover={{ scale: 1.05 }}
                >
                  {service.title}
                </motion.h3>

                {/* Service Description */}
                <p className="text-luxury-lightGray mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: service.delay + 0.2 + featureIndex * 0.1,
                      }}
                      whileHover={{ x: 10, color: "#D4AF37" }}
                      className="flex items-center text-sm text-luxury-lightGray hover:text-luxury-gold transition-all duration-300"
                    >
                      <motion.span
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: featureIndex * 0.5,
                        }}
                        className="w-2 h-2 bg-luxury-gold rounded-full mr-3 inline-block"
                      />
                      {feature}
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effects */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-luxury-gold/10 to-transparent rounded-3xl pointer-events-none"
                />

                {/* Service Number */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-4 right-4 w-8 h-8 bg-luxury-gold/20 rounded-full flex items-center justify-center text-luxury-gold text-sm font-bold border border-luxury-gold/30"
                >
                  {index + 1}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mb-20"
        >
          <h3 className="text-3xl font-display font-bold text-luxury-white mb-12">
            Our Integrated Workflow
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            {[
              { step: 1, title: "Design", icon: "🎨" },
              { step: 2, title: "Develop", icon: "⚙️" },
              { step: 3, title: "Optimize", icon: "🚀" },
              { step: 4, title: "Launch", icon: "🎯" },
            ].map((step, index) => (
              <React.Fragment key={step.step}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.7 + index * 0.2 }}
                  whileHover={{
                    scale: 1.1,
                    rotateY: 10,
                    boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)",
                  }}
                  className="flex flex-col items-center p-6 bg-luxury-charcoal/50 backdrop-blur-lg border border-luxury-gold/20 rounded-2xl hover:border-luxury-gold/60 transition-all duration-500"
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
                    className="text-4xl mb-3"
                  >
                    {step.icon}
                  </motion.div>
                  <div className="text-2xl font-bold text-luxury-gold mb-2">
                    {step.step}
                  </div>
                  <div className="text-luxury-white font-semibold">
                    {step.title}
                  </div>
                </motion.div>

                {index < 3 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 2 + index * 0.2 }}
                    className="hidden md:block w-16 h-1 bg-gradient-to-r from-luxury-gold to-luxury-red rounded-full"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block bg-gradient-to-r from-luxury-gold/10 to-luxury-red/10 backdrop-blur-lg border border-luxury-gold/30 rounded-3xl p-12 max-w-4xl"
          >
            <h3 className="text-3xl font-display font-bold text-luxury-white mb-6">
              Ready to Transform Your Fitness Business?
            </h3>
            <p className="text-xl text-luxury-lightGray mb-8">
              Let&apos;s discuss how our premium services can elevate your brand
              and skyrocket your conversions.
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(212, 175, 55, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-luxury-gold text-luxury-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-luxury-gold/90 transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Get Started Today →
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedServices;
