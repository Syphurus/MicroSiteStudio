"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { scrollToSection } from "@/lib/utils";
import Link from "next/link";

const CleanNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.95)"]
  );

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Pricing", id: "pricing" },
    { name: "Contact", id: "contact" },
  ];

  const handleMenuClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false); // Close mobile menu after click
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.nav
        style={{ backgroundColor }}
        className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 py-4 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="text-white text-xl lg:text-2xl font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              onClick={() => (window.location.href = "/")}
              className="focus:outline-none"
              aria-label="Go to homepage"
            >
            <Link href="/" className="focus:outline-none" aria-label="Go to homepage">
                <span className="bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
                    Microsite Studio
                </span>
            </Link>
            </button>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className="text-white/90 hover:text-white font-medium text-sm tracking-wide transition-all duration-300 relative group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <motion.button
            onClick={() => handleMenuClick("contact")}
            className="hidden lg:block bg-gradient-to-r from-red-500 via-red-600 to-pink-600 hover:from-red-600 hover:via-red-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 shadow-xl hover:shadow-red-500/40"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="lg:hidden text-white p-3 rounded-full hover:bg-white/10 transition-colors duration-200 relative z-50 min-w-[48px] min-h-[48px] flex items-center justify-center"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <motion.span
                animate={
                  isMenuOpen
                    ? {
                        rotate: 45,
                        y: 0,
                        transformOrigin: "center",
                      }
                    : {
                        rotate: 0,
                        y: -8,
                        transformOrigin: "center",
                      }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute w-6 h-0.5 bg-white rounded-full"
              />
              <motion.span
                animate={
                  isMenuOpen
                    ? {
                        opacity: 0,
                        scale: 0,
                      }
                    : {
                        opacity: 1,
                        scale: 1,
                      }
                }
                transition={{ duration: 0.2 }}
                className="absolute w-6 h-0.5 bg-white rounded-full"
              />
              <motion.span
                animate={
                  isMenuOpen
                    ? {
                        rotate: -45,
                        y: 0,
                        transformOrigin: "center",
                      }
                    : {
                        rotate: 0,
                        y: 8,
                        transformOrigin: "center",
                      }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute w-6 h-0.5 bg-white rounded-full"
              />
            </div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-[81px] left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-b border-white/10 lg:hidden overflow-hidden"
          >
            <motion.div
              className="px-4 py-6 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className="block w-full text-left text-white/90 hover:text-white font-medium py-4 px-6 rounded-2xl hover:bg-gradient-to-r hover:from-white/5 hover:to-white/10 transition-all duration-300 border border-transparent hover:border-white/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.button
                onClick={() => handleMenuClick("contact")}
                className="w-full mt-6 bg-gradient-to-r from-red-500 via-red-600 to-pink-600 hover:from-red-600 hover:via-red-700 hover:to-pink-700 text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-300 shadow-xl hover:shadow-red-500/40"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CleanNavigation;
