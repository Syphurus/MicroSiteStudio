"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  UserGroupIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

const Services: React.FC = () => {
  const services = [
    {
      icon: ComputerDesktopIcon,
      title: "Custom Website Design",
      description:
        "Bespoke, luxury websites tailored specifically for fitness professionals. Every design reflects your brand's strength and professionalism.",
      features: [
        "Custom UI/UX Design",
        "Brand Integration",
        "Premium Animations",
        "Conversion Optimization",
      ],
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Mobile-First Development",
      description:
        "Perfect performance across all devices. Your clients will love the seamless experience on mobile, tablet, and desktop.",
      features: [
        "Responsive Design",
        "Touch Optimized",
        "Fast Loading",
        "Progressive Web App",
      ],
    },
    {
      icon: RocketLaunchIcon,
      title: "Performance Optimization",
      description:
        "Lightning-fast websites that rank higher on Google and convert more visitors into paying clients.",
      features: [
        "Speed Optimization",
        "SEO Ready",
        "Core Web Vitals",
        "Analytics Integration",
      ],
    },
    {
      icon: ChartBarIcon,
      title: "Lead Generation System",
      description:
        "Advanced forms, booking systems, and conversion tools designed to turn website visitors into paying clients.",
      features: [
        "Smart Forms",
        "Booking Integration",
        "CRM Connection",
        "Automated Follow-ups",
      ],
    },
    {
      icon: UserGroupIcon,
      title: "Client Management Tools",
      description:
        "Integrated systems for managing client relationships, bookings, and testimonials to grow your business.",
      features: [
        "Client Portal",
        "Testimonial System",
        "Review Management",
        "Social Proof",
      ],
    },
    {
      icon: CpuChipIcon,
      title: "AI-Powered Features",
      description:
        "Cutting-edge AI chatbots and automation tools that work 24/7 to capture leads and answer client questions.",
      features: [
        "AI Chatbot",
        "Smart Recommendations",
        "Automated Responses",
        "Lead Qualification",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-luxury-gray-900">
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
            Premium Services for{" "}
            <span className="luxury-text-gradient">Fitness Professionals</span>
          </h2>
          <p className="text-xl text-luxury-gray-200 max-w-3xl mx-auto">
            We deliver everything you need to dominate your market online. From
            luxury design to advanced lead generation systems, we&apos;ve got
            your digital presence covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-luxury-black border border-luxury-gray-800 hover:border-luxury-gold/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-luxury-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-luxury-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-display font-bold text-luxury-white mb-4 group-hover:text-luxury-gold transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-luxury-gray-200 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 text-luxury-gray-300"
                  >
                    <div className="w-2 h-2 bg-luxury-gold rounded-full flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-luxury-gradient p-1 rounded-2xl max-w-4xl mx-auto">
            <div className="bg-luxury-black rounded-2xl p-12">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-luxury-white mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="text-luxury-gray-200 text-lg mb-8 max-w-2xl mx-auto">
                Join hundreds of fitness professionals who have already elevated
                their online presence with our premium web design services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    document
                      .getElementById("pricing")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-luxury-gradient text-luxury-white px-8 py-4 rounded-lg font-display font-semibold text-lg hover:shadow-luxury-shadow-lg transition-all duration-300"
                >
                  View Pricing
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    document
                      .getElementById("portfolio")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="border-2 border-luxury-gold text-luxury-gold px-8 py-4 rounded-lg font-display font-semibold text-lg hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300"
                >
                  See Examples
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
