"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Button from "@/components/ui/Button";
import { scrollToSection } from "@/lib/utils";

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.95)"]
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(20px)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Enable smooth scrolling for the entire document
    document.documentElement.style.scrollBehavior = "smooth";

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const menuItems = [
    { label: "Home", href: "hero" },
    { label: "About", href: "about" },
    { label: "Services", href: "services" },
    { label: "Portfolio", href: "portfolio" },
    { label: "Process", href: "process" },
    { label: "Pricing", href: "pricing" },
    { label: "Contact", href: "contact" },
  ];

  const handleMenuClick = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <motion.nav
      style={{
        backgroundColor: navBackground,
        backdropFilter: backdropBlur,
      }}
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b border-luxury-gold/10"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
            }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection("hero")}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
              className="w-10 h-10 bg-gradient-to-br from-luxury-gold to-luxury-red rounded-lg flex items-center justify-center shadow-glow"
            >
              <span className="text-luxury-black font-bold text-lg">M</span>
            </motion.div>
            <div className="hidden sm:block">
              <div className="text-xl font-display font-bold text-luxury-white">
                Microsite Studio
              </div>
              <div className="text-xs text-luxury-gold -mt-1">
                Premium Web Design
              </div>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -2,
                  color: "#D4AF37",
                  textShadow: "0 0 10px rgba(212, 175, 55, 0.5)",
                }}
                onClick={() => handleMenuClick(item.href)}
                className="text-luxury-white hover:text-luxury-gold transition-all duration-300 font-medium relative group"
              >
                {item.label}
                <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-luxury-gold to-luxury-red group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Button
                variant="primary"
                size="sm"
                onClick={() => scrollToSection("pricing")}
                className="shadow-glow hover:shadow-glow-lg transition-all duration-300"
              >
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 rounded-lg bg-luxury-gold/10 border border-luxury-gold/30 flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              className="relative w-6 h-6"
            >
              <motion.span
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 8 : 0,
                }}
                className="absolute top-1 left-0 w-6 h-0.5 bg-luxury-gold origin-center transition-all duration-300"
              />
              <motion.span
                animate={{
                  opacity: isOpen ? 0 : 1,
                }}
                className="absolute top-3 left-0 w-6 h-0.5 bg-luxury-gold transition-all duration-300"
              />
              <motion.span
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -8 : 0,
                }}
                className="absolute top-5 left-0 w-6 h-0.5 bg-luxury-gold origin-center transition-all duration-300"
              />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-luxury-black/95 backdrop-blur-xl border-t border-luxury-gold/20"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="space-y-4">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      x: 10,
                      color: "#D4AF37",
                    }}
                    onClick={() => handleMenuClick(item.href)}
                    className="block w-full text-left text-luxury-white hover:text-luxury-gold transition-all duration-300 py-3 text-lg font-medium"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4 border-t border-luxury-gold/20"
                >
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      scrollToSection("pricing");
                      setIsOpen(false);
                    }}
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default EnhancedNavigation;
