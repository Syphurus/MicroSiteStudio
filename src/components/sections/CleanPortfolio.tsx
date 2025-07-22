"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { scrollToSection } from "@/lib/utils";
import Image from "next/image";

const portfolioItems = [
  {
    id: 1,
    title: "Elite Fitness Studio",
    category: "Website Design",
    description:
      "Premium website for a high-end personal training studio with booking system and member portal.",
    image: "/images/a.png",
    tags: ["Website", "Booking System", "Member Portal"],
    metrics: { conversion: "+150%", revenue: "+280%", leads: "+200%" },
  },
  {
    id: 2,
    title: "FitPro Mobile App",
    category: "Mobile App",
    description:
      "Comprehensive fitness tracking app with nutrition planning and workout programs.",
    image: "/images/b.png",
    tags: ["Mobile App", "Fitness Tracking", "Nutrition"],
    metrics: { downloads: "50K+", rating: "4.9★", retention: "85%" },
  },
  {
    id: 3,
    title: "GymChain Landing Page",
    category: "Landing Page",
    description:
      "High-converting landing page for a franchise gym chain&apos;s membership campaign.",
    image: "/images/c.jpeg",
    tags: ["Landing Page", "Conversion", "Franchise"],
    metrics: { conversion: "+300%", signups: "+250%", roi: "500%" },
  },
  {
    id: 4,
    title: "NutriShop E-commerce",
    category: "E-commerce",
    description:
      "Complete online store for fitness supplements with subscription management.",
    image: "/images/d.png",
    tags: ["E-commerce", "Supplements", "Subscriptions"],
    metrics: { sales: "+400%", orders: "+320%", retention: "+180%" },
  },
  {
    id: 5,
    title: "TrainerHub Platform",
    category: "Web Platform",
    description:
      "Comprehensive platform for fitness trainers to manage clients and programs.",
    image: "/images/e.png",
    tags: ["Platform", "Client Management", "Programs"],
    metrics: { trainers: "1K+", clients: "10K+", growth: "+250%" },
  },
  {
    id: 6,
    title: "Yoga Studio Rebrand",
    category: "Branding",
    description:
      "Complete digital rebrand and website redesign for premium yoga studio.",
    image: "/images/f.png",
    tags: ["Branding", "Website", "Premium"],
    metrics: { bookings: "+200%", revenue: "+180%", retention: "+150%" },
  },
];

const categories = [
  "All",
  "Website Design",
  "Mobile App",
  "Landing Page",
  "E-commerce",
  "Web Platform",
  "Branding",
];

export default function CleanPortfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section
      ref={ref}
      id="portfolio"
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
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Success
            </span>
            <span className="ml-3 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="font-body text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real fitness businesses that trusted us with their
            digital transformation
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-ui font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/25"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  width={600}
                  height={400}
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full font-ui text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="font-body text-gray-300 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-800 text-gray-300 px-2 py-1 rounded font-ui text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="flex justify-between items-center gap-4 mb-4 bg-black/30 rounded-lg p-3">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="text-center flex-1">
                      <div className="font-heading text-red-400 font-bold text-sm md:text-base">
                        {value}
                      </div>
                      <div className="font-ui text-gray-500 text-xs capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* View Project Button */}
                <motion.button
                  onClick={() => scrollToSection("contact")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-red-600/20 to-red-700/20 border border-red-600/30 text-red-400 py-2 rounded-lg font-ui font-medium hover:from-red-600/30 hover:to-red-700/30 hover:border-red-500/50 transition-all duration-300"
                >
                  View Project
                </motion.button>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Let&apos;s create a digital presence that drives real results for
              your fitness business.
            </p>
            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(220, 38, 38, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg"
            >
              Start Your Success Story
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
