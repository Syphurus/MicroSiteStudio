"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ChatBubbleLeftRightIcon,
  PencilIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const Process: React.FC = () => {
  const steps = [
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Discovery & Strategy",
      description:
        "We dive deep into your fitness business, target audience, and goals to create a custom strategy.",
      details: [
        "Business analysis & competitor research",
        "Target audience identification",
        "Brand positioning strategy",
        "Technical requirements planning",
      ],
      duration: "1-2 days",
    },
    {
      icon: PencilIcon,
      title: "Design & Prototyping",
      description:
        "Our design team crafts a luxury, mobile-first design that reflects your brand's strength.",
      details: [
        "Custom UI/UX design creation",
        "Mobile-responsive layouts",
        "Brand integration & styling",
        "Interactive prototype delivery",
      ],
      duration: "3-5 days",
    },
    {
      icon: CodeBracketIcon,
      title: "Development & Integration",
      description:
        "We build your website using cutting-edge technology, ensuring speed, security, and scalability.",
      details: [
        "Premium code development",
        "CMS & booking integrations",
        "Performance optimization",
        "SEO implementation",
      ],
      duration: "5-7 days",
    },
    {
      icon: CheckCircleIcon,
      title: "Testing & Quality Assurance",
      description:
        "Rigorous testing across all devices and browsers to ensure flawless performance.",
      details: [
        "Cross-browser compatibility",
        "Mobile responsiveness testing",
        "Performance optimization",
        "Security & accessibility checks",
      ],
      duration: "1-2 days",
    },
    {
      icon: RocketLaunchIcon,
      title: "Launch & Support",
      description:
        "We launch your website and provide comprehensive training and ongoing support.",
      details: [
        "Domain & hosting setup",
        "Website launch & optimization",
        "Training & documentation",
        "6 months premium support",
      ],
      duration: "1 day",
    },
  ];

  return (
    <section id="process" className="py-20 bg-luxury-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-luxury-white mb-6">
            Our Proven <span className="luxury-text-gradient">Process</span>
          </h2>
          <p className="text-xl text-luxury-gray-200 max-w-3xl mx-auto">
            From concept to launch, we follow a systematic approach that ensures
            your website exceeds expectations and delivers real results for your
            fitness business.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-20 bottom-20 w-0.5 bg-luxury-gold/30 md:transform md:-translate-x-1/2"></div>

          {/* Process Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step Number & Icon */}
                <div className="relative flex-shrink-0 mb-6 md:mb-0">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-luxury-gradient rounded-full flex items-center justify-center relative z-10">
                      <step.icon className="w-8 h-8 text-luxury-white" />
                    </div>
                    <div className="ml-4 md:hidden">
                      <div className="text-sm text-luxury-gold font-semibold">
                        Step {index + 1}
                      </div>
                      <div className="text-xs text-luxury-gray-300">
                        {step.duration}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute top-8 left-8 w-0.5 h-8 bg-luxury-gold/50 md:hidden"></div>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0
                      ? "md:ml-16 md:text-left"
                      : "md:mr-16 md:text-right"
                  }`}
                >
                  <div className="bg-luxury-gray-900 rounded-2xl p-8 border border-luxury-gray-800 hover:border-luxury-gold/50 transition-all duration-300">
                    {/* Step Info */}
                    <div
                      className={`hidden md:flex items-center mb-4 ${
                        index % 2 === 0 ? "justify-start" : "justify-end"
                      }`}
                    >
                      <div
                        className={`${
                          index % 2 === 0 ? "text-left" : "text-right"
                        }`}
                      >
                        <div className="text-sm text-luxury-gold font-semibold">
                          Step {index + 1}
                        </div>
                        <div className="text-xs text-luxury-gray-300">
                          {step.duration}
                        </div>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-display font-bold text-luxury-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-luxury-gray-200 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <ul
                      className={`space-y-2 ${
                        index % 2 === 0 ? "text-left" : "md:text-right"
                      }`}
                    >
                      {step.details.map((detail, detailIndex) => (
                        <motion.li
                          key={detailIndex}
                          initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? -20 : 20,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: index * 0.2 + detailIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                          className={`flex items-center space-x-3 text-luxury-gray-300 ${
                            index % 2 === 0
                              ? ""
                              : "md:flex-row-reverse md:space-x-reverse"
                          }`}
                        >
                          <div className="w-2 h-2 bg-luxury-gold rounded-full flex-shrink-0"></div>
                          <span className="text-sm">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-luxury-gradient p-1 rounded-2xl max-w-2xl mx-auto">
            <div className="bg-luxury-black rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold text-luxury-white mb-4">
                Total Timeline: 2-3 Weeks
              </h3>
              <p className="text-luxury-gray-200 mb-6">
                From initial consultation to website launch, we deliver premium
                results in record time without compromising on quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-luxury-gradient text-luxury-white px-6 py-3 rounded-lg font-display font-semibold hover:shadow-luxury-shadow-lg transition-all duration-300"
                >
                  Start Your Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    document
                      .getElementById("pricing")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="border-2 border-luxury-gold text-luxury-gold px-6 py-3 rounded-lg font-display font-semibold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300"
                >
                  View Pricing
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
