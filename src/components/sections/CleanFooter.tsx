"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Sparkles,
  Lock,
  Zap,
  Smartphone,
} from "lucide-react";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function CleanFooter() {
  const currentYear = new Date().getFullYear();

  // Newsletter subscription state
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatusMessage("Please enter your email address");
      setSubscriptionStatus("error");
      return;
    }

    setIsSubscribing(true);
    setSubscriptionStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubscriptionStatus("success");
        setStatusMessage(
          "🎉 Successfully subscribed! Check your email for a welcome message."
        );
        setEmail(""); // Clear the form
      } else {
        setSubscriptionStatus("error");
        setStatusMessage(
          data.error || "Failed to subscribe. Please try again."
        );
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setSubscriptionStatus("error");
      setStatusMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubscribing(false);

      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubscriptionStatus("idle");
        setStatusMessage("");
      }, 5000);
    }
  };

  const footerLinks = {
    Services: [
      { name: "Website Design", action: () => scrollToSection("services") },
      { name: "Mobile Apps", action: () => scrollToSection("services") },
      { name: "E-commerce", action: () => scrollToSection("services") },
      { name: "Digital Marketing", action: () => scrollToSection("services") },
    ],
    Company: [
      { name: "About Us", action: () => scrollToSection("about") },
      { name: "Our Work", action: () => scrollToSection("portfolio") },
      { name: "Pricing", action: () => scrollToSection("pricing") },
      { name: "Contact", action: () => scrollToSection("contact") },
    ],
    Legal: [
      {
        name: "Privacy Policy",
        action: () => (window.location.href = "/legal"),
      },
      {
        name: "Terms of Service",
        action: () => (window.location.href = "/legal"),
      },
      {
        name: "Cookie Policy",
        action: () => (window.location.href = "/legal"),
      },
      {
        name: "Refund Policy",
        action: () => (window.location.href = "/legal"),
      },
    ],
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/microsite_studio/",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/MicroSite_",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/micrositestudio/",
    },
  ];

  return (
    <footer className="bg-gradient-to-t from-black via-gray-950 to-black border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="mb-6">
              <h3 className="font-display text-2xl font-bold">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Microsite
                </span>
                <span className="ml-2 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                  Studio
                </span>
              </h3>
            </motion.div>
            <p className="font-body text-gray-300 mb-6 leading-relaxed">
              Premium web design agency specializing in fitness businesses. We
              create digital experiences that convert visitors into loyal
              clients.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-lg hover:bg-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
                    title={social.name}
                    target="_blank"
                  >
                    <IconComponent size={20} className="text-white" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(
            ([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-heading text-lg font-semibold text-white mb-6">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <motion.button
                        onClick={link.action}
                        whileHover={{ x: 5, color: "#ef4444" }}
                        className="font-ui text-gray-300 hover:text-red-400 transition-all duration-300 text-left"
                      >
                        {link.name}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          )}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-800"
        >
          <div className="max-w-md mx-auto text-center lg:text-left lg:mx-0">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Mail size={18} />
              Stay Updated
            </h4>
            <p className="text-gray-300 mb-6">
              Get the latest web design tips, fitness industry insights, and
              exclusive offers.
            </p>

            {/* Status Message */}
            {statusMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-4 p-3 rounded-lg text-sm ${
                  subscriptionStatus === "success"
                    ? "bg-green-900/50 text-green-300 border border-green-600"
                    : "bg-red-900/50 text-red-300 border border-red-600"
                }`}
              >
                {statusMessage}
              </motion.div>
            )}

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubscribing}
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <motion.button
                type="submit"
                disabled={isSubscribing}
                whileHover={
                  !isSubscribing
                    ? {
                        scale: 1.05,
                        boxShadow: "0 10px 30px rgba(220, 38, 38, 0.3)",
                      }
                    : {}
                }
                whileTap={!isSubscribing ? { scale: 0.95 } : {}}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-medium hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-red-600 disabled:hover:to-red-700"
              >
                {isSubscribing ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe
                    <Sparkles size={16} />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Microsite Studio. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <span className="flex items-center">
                <Lock size={16} className="text-green-400 mr-2" />
                SSL Secured
              </span>
              <span className="flex items-center">
                <Zap size={16} className="text-blue-400 mr-2" />
                Fast Loading
              </span>
              <span className="flex items-center">
                <Smartphone size={16} className="text-purple-400 mr-2" />
                Mobile Optimized
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 10px 30px rgba(220, 38, 38, 0.3)",
        }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-4 md:bottom-8 md:right-8 bg-gradient-to-r from-red-600 to-red-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:from-red-500 hover:to-red-600 transition-all duration-300 z-50"
        title="Scroll to top"
      >
        ↑
      </motion.button>
    </footer>
  );
}
