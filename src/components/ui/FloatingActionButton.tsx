"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingActionButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const contactOptions = [
    {
      label: "Call Now",
      icon: "📞",
      action: () => window.open("tel:+1234567890"),
      color: "from-green-500 to-green-600",
    },
    {
      label: "WhatsApp",
      icon: "💬",
      action: () => window.open("https://wa.me/1234567890"),
      color: "from-green-400 to-green-500",
    },
    {
      label: "Email",
      icon: "✉️",
      action: () => window.open("mailto:studiomicrosite@gmail.com"),
      color: "from-blue-500 to-blue-600",
    },
    {
      label: "Contact Form",
      icon: "📝",
      action: () =>
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" }),
      color: "from-luxury-gold to-luxury-red",
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          className="fixed bottom-8 right-8 z-50"
        >
          {/* Contact Options */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-16 right-0 space-y-3"
              >
                {contactOptions.map((option, index) => (
                  <motion.button
                    key={option.label}
                    initial={{ opacity: 0, x: 20, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 20, scale: 0.8 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={option.action}
                    className={`flex items-center space-x-3 bg-gradient-to-r ${option.color} text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group`}
                  >
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-lg"
                    >
                      {option.icon}
                    </motion.span>
                    <span className="font-medium text-sm whitespace-nowrap group-hover:text-gray-100">
                      {option.label}
                    </span>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main FAB */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="relative w-16 h-16 bg-gradient-to-r from-luxury-gold to-luxury-red rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-2xl text-white transition-all duration-300"
            style={{
              background: isExpanded
                ? "linear-gradient(45deg, #dc143c, #d4af37)"
                : "linear-gradient(45deg, #d4af37, #dc143c)",
            }}
          >
            <motion.div
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {isExpanded ? "✕" : "💬"}
            </motion.div>

            {/* Pulse Animation */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 0, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-luxury-gold to-luxury-red"
            />

            {/* Notification Badge */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-bold"
            >
              !
            </motion.div>
          </motion.button>

          {/* Helper Text */}
          <AnimatePresence>
            {!isExpanded && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-luxury-charcoal text-luxury-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg border border-luxury-gold/20"
              >
                <div className="relative">
                  Need Help? Click Here!
                  <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 w-0 h-0 border-l-4 border-l-luxury-charcoal border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingActionButton;
