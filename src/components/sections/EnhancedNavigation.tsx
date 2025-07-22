'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/ui/Button';
import { scrollToSection } from '@/lib/utils';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.95)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(20px)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Enable smooth scrolling for the entire document
    document.documentElement.style.scrollBehavior = 'smooth';

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);rt React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import { scrollToSection } from '@/lib/utils';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', href: 'services' },
    { name: 'Process', href: 'process' },
    { name: 'Pricing', href: 'pricing' },
    { name: 'Portfolio', href: 'portfolio' },
    { name: 'About', href: 'about' },
  ];

  return (
    <>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-700 ${
          isScrolled
            ? 'bg-luxury-black/90 backdrop-blur-xl border-b border-luxury-gold/30 shadow-luxury-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo with 3D Effect */}
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 15 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
              onClick={() => scrollToSection('hero')}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-luxury-gradient rounded-xl flex items-center justify-center shadow-glow transform transition-all duration-300 hover:shadow-glow-lg">
                  <span className="text-luxury-white font-bold text-xl font-display">M</span>
                </div>
                <div className="absolute inset-0 w-12 h-12 bg-luxury-gradient rounded-xl opacity-30 blur-lg transform translate-z-1"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-display font-bold text-luxury-white bg-gradient-to-r from-luxury-white to-luxury-gold bg-clip-text">
                  Microsite Studio
                </h1>
                <p className="text-xs text-luxury-lightGray">Premium Web Design</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  whileHover={{ 
                    y: -3, 
                    scale: 1.05,
                    textShadow: "0 0 10px rgba(212, 175, 55, 0.8)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-luxury-white hover:text-luxury-gold transition-all duration-300 font-medium group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-gradient group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              ))}
            </div>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:block"
              >
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => scrollToSection('contact')}
                  className="shadow-glow hover:shadow-glow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Get Quote
                </Button>
              </motion.div>

              {/* Mobile Menu Toggle with 3D Animation */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-3 text-luxury-white hover:text-luxury-gold transition-colors relative group"
                aria-label="Toggle mobile menu"
              >
                <div className="absolute inset-0 bg-luxury-gold/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <motion.div
                  animate={isMobileMenuOpen ? 'open' : 'closed'}
                  className="w-6 h-6 flex flex-col justify-center items-center relative z-10"
                >
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0, opacity: 1 },
                      open: { rotate: 45, y: 6, opacity: 1 }
                    }}
                    className="w-6 h-0.5 bg-current block transition-all duration-300"
                  />
                  <motion.span
                    variants={{
                      closed: { opacity: 1, x: 0 },
                      open: { opacity: 0, x: 20 }
                    }}
                    className="w-6 h-0.5 bg-current block mt-1.5 transition-all duration-300"
                  />
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0, opacity: 1 },
                      open: { rotate: -45, y: -6, opacity: 1 }
                    }}
                    className="w-6 h-0.5 bg-current block mt-1.5 transition-all duration-300"
                  />
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu with 3D Effects */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, rotateX: -90 }}
                animate={{ opacity: 1, height: 'auto', rotateX: 0 }}
                exit={{ opacity: 0, height: 0, rotateX: -90 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="lg:hidden border-t border-luxury-gold/20 bg-luxury-black/95 backdrop-blur-xl"
                style={{ transformOrigin: 'top' }}
              >
                <div className="py-6 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -30, rotateY: -30 }}
                      animate={{ opacity: 1, x: 0, rotateY: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ 
                        x: 10, 
                        backgroundColor: "rgba(212, 175, 55, 0.1)",
                        scale: 1.02
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        scrollToSection(item.href);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-6 py-4 text-luxury-white hover:text-luxury-gold rounded-lg transition-all duration-300 transform"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                  <div className="px-6 pt-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Button
                        variant="primary"
                        size="md"
                        onClick={() => {
                          scrollToSection('contact');
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full"
                      >
                        Get Quote
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-luxury-black/50 backdrop-blur-sm z-90 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
