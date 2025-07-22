"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Palette,
  Target,
  Smartphone,
  TrendingUp,
  Zap,
  Rocket,
  ShoppingCart,
  Settings,
} from "lucide-react";
import { scrollToSection } from "@/lib/utils";

const services = [
  {
    title: "Website Design",
    description:
      "Premium custom websites that convert visitors into paying clients with stunning visuals and seamless user experience.",
    features: [
      "Custom Design",
      "Mobile Responsive",
      "Fast Loading",
      "SEO Optimized",
    ],
    icon: Palette,
    gradient: "from-red-500 to-orange-500",
    bgColor: "red-500/10",
  },
  {
    title: "Landing Pages",
    description:
      "High-converting landing pages specifically designed for fitness campaigns, product launches, and lead generation.",
    features: [
      "A/B Testing",
      "Conversion Optimization",
      "Lead Capture",
      "Analytics Integration",
    ],
    icon: Target,
    gradient: "from-yellow-500 to-red-500",
    bgColor: "yellow-500/10",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Complete online stores for selling fitness programs, supplements, merchandise, and digital products.",
    features: [
      "Payment Processing",
      "Inventory Management",
      "Digital Downloads",
      "Subscription Plans",
    ],
    icon: ShoppingCart,
    gradient: "from-orange-500 to-red-600",
    bgColor: "orange-500/10",
  },
  {
    title: "Mobile Apps",
    description:
      "Custom fitness apps for workout tracking, nutrition planning, and client management with seamless functionality.",
    features: [
      "Cross-Platform",
      "Push Notifications",
      "User Profiles",
      "Progress Tracking",
    ],
    icon: Smartphone,
    gradient: "from-red-600 to-yellow-500",
    bgColor: "red-600/10",
  },
  {
    title: "Digital Marketing",
    description:
      "Complete digital marketing strategies to grow your fitness business and attract high-value clients.",
    features: [
      "Social Media Marketing",
      "Google Ads",
      "Email Marketing",
      "Content Creation",
    ],
    icon: TrendingUp,
    gradient: "from-yellow-400 to-orange-500",
    bgColor: "yellow-400/10",
  },
  {
    title: "Maintenance & Support",
    description:
      "24/7 technical support and regular updates to keep your website performing at its peak.",
    features: [
      "Regular Updates",
      "Security Monitoring",
      "Performance Optimization",
      "Technical Support",
    ],
    icon: Settings,
    gradient: "from-orange-600 to-red-500",
    bgColor: "orange-600/10",
  },
];

export default function CleanServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="services"
      className="py-16 md:py-24 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-80 h-80 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 rounded-full bg-gradient-to-r from-red-500/10 to-yellow-500/10 border border-red-500/20 text-red-400 text-xs md:text-sm font-ui font-medium mb-6 md:mb-8 backdrop-blur-sm">
            <Zap size={16} className="mr-2 md:mr-3" />
            Our Services
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 px-2">
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Premium
            </span>
            <span className="ml-2 md:ml-3 bg-gradient-to-r from-red-400 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="font-body text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
            Comprehensive digital solutions designed specifically for fitness
            professionals who demand excellence. From stunning websites to
            powerful marketing tools, we&apos;ve got everything you need to
            dominate your market.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Background glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500`}
              ></div>

              {/* Service Card */}
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-gray-600/70 transition-all duration-500 h-full">
                {/* Icon and Title */}
                <div className="flex items-center mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {service.title}
                  </h3>
                </div>

                <p className="font-body text-gray-300 mb-8 leading-relaxed text-lg">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: index * 0.15 + featureIndex * 0.1,
                      }}
                      className="flex items-center font-ui text-gray-400"
                    >
                      <div
                        className={`w-6 h-6 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center mr-3 flex-shrink-0`}
                      >
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Bottom accent */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} rounded-b-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="relative">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-yellow-600/20 rounded-3xl blur-xl"></div>

            {/* CTA Card */}
            <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700/50 rounded-3xl p-12 max-w-5xl mx-auto backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-center justify-center mb-8 gap-6">
                <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 blur-sm opacity-50"></div>
                  {/* Main icon container */}
                  <div className="relative w-full h-full rounded-full bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center shadow-xl border border-white/30">
                    <Rocket size={32} className="text-white" />
                  </div>
                </div>
                <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center md:text-left">
                  Ready to Transform Your Fitness Business?
                </h3>
              </div>

              <p className="font-body text-gray-300 mb-10 text-xl leading-relaxed max-w-3xl mx-auto">
                Let&apos;s discuss your project and create a digital presence
                that converts prospects into loyal clients. Our expert team is
                ready to bring your vision to life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={() => scrollToSection("contact")}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(220, 38, 38, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-red-600 to-yellow-600 text-white px-10 py-4 rounded-full font-ui font-semibold text-lg hover:from-red-500 hover:to-yellow-500 transition-all duration-300 shadow-lg"
                >
                  Start Your Project
                </motion.button>

                <motion.button
                  onClick={() => scrollToSection("portfolio")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-600 text-white px-10 py-4 rounded-full font-ui font-semibold text-lg hover:border-red-500 hover:text-red-400 transition-all duration-300"
                >
                  View Our Work
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
