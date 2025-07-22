"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Rocket,
  Dumbbell,
  Crown,
  Smartphone,
  Mail,
  Wrench,
  Flame,
  ShoppingCart,
  Link,
  MapPin,
} from "lucide-react";
import { scrollToSection } from "@/lib/utils";

// Pricing configuration by region
const regionalPricing = {
  US: {
    currency: "USD",
    symbol: "$",
    starter: 499,
    professional: 1499,
    enterprise: 2999,
  },
  CA: {
    currency: "USD",
    symbol: "$",
    starter: 499,
    professional: 1499,
    enterprise: 2999,
  },
  GB: {
    currency: "GBP",
    symbol: "£",
    starter: 399,
    professional: 1199,
    enterprise: 2399,
  },
  DE: {
    currency: "EUR",
    symbol: "€",
    starter: 449,
    professional: 1299,
    enterprise: 2699,
  },
  FR: {
    currency: "EUR",
    symbol: "€",
    starter: 449,
    professional: 1299,
    enterprise: 2699,
  },
  IT: {
    currency: "EUR",
    symbol: "€",
    starter: 449,
    professional: 1299,
    enterprise: 2699,
  },
  ES: {
    currency: "EUR",
    symbol: "€",
    starter: 449,
    professional: 1299,
    enterprise: 2699,
  },
  NL: {
    currency: "EUR",
    symbol: "€",
    starter: 449,
    professional: 1299,
    enterprise: 2699,
  },
  AE: {
    currency: "USD",
    symbol: "$",
    starter: 450,
    professional: 1300,
    enterprise: 2800,
  },
  SA: {
    currency: "USD",
    symbol: "$",
    starter: 450,
    professional: 1300,
    enterprise: 2800,
  },
  IN: {
    currency: "INR",
    symbol: "₹",
    starter: 29999,
    professional: 99999,
    enterprise: 199999,
  },
  PK: {
    currency: "INR",
    symbol: "₹",
    starter: 29999,
    professional: 99999,
    enterprise: 199999,
  },
  BD: {
    currency: "INR",
    symbol: "₹",
    starter: 29999,
    professional: 99999,
    enterprise: 199999,
  },
  LK: {
    currency: "INR",
    symbol: "₹",
    starter: 29999,
    professional: 99999,
    enterprise: 199999,
  },
  // Default fallback for other countries
  DEFAULT: {
    currency: "USD",
    symbol: "$",
    starter: 499,
    professional: 1499,
    enterprise: 2999,
  },
};

const formatPrice = (amount: number, symbol: string): string => {
  return `${symbol}${amount.toLocaleString()}`;
};

const pricingPlansTemplate = [
  {
    name: "Starter",
    priceKey: "starter" as keyof typeof regionalPricing.DEFAULT,
    duration: "one-time",
    description:
      "Perfect for personal trainers and small studios starting their digital journey",
    icon: Rocket,
    features: [
      "5-Page Professional Website",
      "Mobile Responsive Design",
      "Basic SEO Optimization",
      "Contact Forms",
      "Social Media Integration",
      "30 Days Support",
      "Basic Analytics Setup",
    ],
    popular: false,
    color: "gray",
  },
  {
    name: "Growth",
    priceKey: "professional" as keyof typeof regionalPricing.DEFAULT,
    duration: "one-time",
    description:
      "Ideal for established gyms and fitness businesses ready to scale",
    icon: Dumbbell,
    features: [
      "Custom Website Design (10+ Pages)",
      "E-commerce Integration",
      "Booking System",
      "Member Portal",
      "Advanced SEO",
      "Email Marketing Setup",
      "90 Days Support",
      "Performance Analytics",
      "Lead Generation Tools",
    ],
    popular: true,
    color: "red",
  },
  {
    name: "Premium",
    priceKey: "enterprise" as keyof typeof regionalPricing.DEFAULT,
    duration: "one-time",
    description:
      "Complete digital transformation for fitness chains and premium brands",
    icon: Crown,
    features: [
      "Custom Web Platform",
      "Mobile App Development",
      "Multi-location Support",
      "Custom Integrations",
      "Advanced Analytics",
      "Marketing Automation",
      "1 Year Premium Support",
      "Staff Training",
      "Ongoing Optimization",
    ],
    popular: false,
    color: "gold",
  },
];

const addOns = [
  { name: "Mobile App Development", price: "$8,999", icon: Smartphone },
  { name: "Advanced E-commerce", price: "$2,999", icon: ShoppingCart },
  { name: "Marketing Automation", price: "$1,999", icon: Mail },
  { name: "Custom Integrations", price: "$3,999", icon: Link },
  { name: "Monthly Maintenance", price: "$299", recurring: true, icon: Wrench },
];

export default function CleanPricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAddOns, setShowAddOns] = useState(false);
  const [userCountry, setUserCountry] = useState<string>("DEFAULT");
  const [locationLoading, setLocationLoading] = useState(true);
  const [locationDetected, setLocationDetected] = useState(false);

  // Geolocation detection
  useEffect(() => {
    const detectLocation = async () => {
      try {
        // First try to get user's IP-based location
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();

        if (data.country_code) {
          const countryCode = data.country_code.toUpperCase();
          if (regionalPricing[countryCode as keyof typeof regionalPricing]) {
            setUserCountry(countryCode);
            setLocationDetected(true);
          }
        }
      } catch (error) {
        console.log("Location detection failed, using default pricing");
      } finally {
        setLocationLoading(false);
      }
    };

    detectLocation();
  }, []);

  // Generate pricing plans with regional pricing
  const currentPricing =
    regionalPricing[userCountry as keyof typeof regionalPricing] ||
    regionalPricing.DEFAULT;

  const pricingPlans = pricingPlansTemplate.map((plan) => ({
    ...plan,
    price: formatPrice(currentPricing[plan.priceKey], currentPricing.symbol),
    currency: currentPricing.currency,
  }));

  return (
    <section
      ref={ref}
      id="pricing"
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
              Investment
            </span>
            <span className="ml-3 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Plans
            </span>
          </h2>
          <p className="font-body text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transparent pricing designed to deliver exceptional ROI for your
            fitness business
          </p>

          {/* Location-based pricing indicator */}
          {locationDetected && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-yellow-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6 backdrop-blur-sm">
              <MapPin size={16} />
              <span>
                Pricing shown in {currentPricing.currency} for your location
              </span>
            </div>
          )}

          <div className="flex items-center justify-center gap-2 font-ui text-gray-400">
            <span className="text-green-400">✓</span>
            <span>No hidden fees</span>
            <span className="mx-2">•</span>
            <span className="text-green-400">✓</span>
            <span>100% Custom work</span>
            <span className="mx-2">•</span>
            <span className="text-green-400">✓</span>
            <span>Money-back guarantee</span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative bg-gradient-to-br from-gray-900 to-black border rounded-3xl p-8 ${
                plan.popular
                  ? "border-red-500/50 shadow-2xl shadow-red-500/20 scale-105"
                  : "border-gray-800 hover:border-gray-700"
              } transition-all duration-500 hover:shadow-xl`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full font-ui text-sm font-medium shadow-lg flex items-center gap-2">
                    <Flame size={14} />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="text-5xl mb-6 text-center flex justify-center">
                <plan.icon size={48} className="text-red-500" />
              </div>

              {/* Plan Info */}
              <div className="text-center mb-8">
                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="font-display text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="font-ui text-gray-400 ml-2">
                    /{plan.duration}
                  </span>
                </div>
                <p className="font-body text-gray-300">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">✓</span>
                    <span className="font-body text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                onClick={() => scrollToSection("contact")}
                whileHover={{
                  scale: 1.02,
                  boxShadow: plan.popular
                    ? "0 20px 40px rgba(220, 38, 38, 0.3)"
                    : "0 10px 30px rgba(255, 255, 255, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-ui font-semibold text-lg transition-all duration-300 bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-500 hover:to-red-600 shadow-lg`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-700/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-6xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              30-Day Money-Back Guarantee
            </h3>
            <p className="text-gray-300 text-lg">
              We&apos;re so confident in our work that we offer a full refund if
              you&apos;re not completely satisfied with your project within 30
              days.
            </p>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12 md:mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 mb-8 text-base md:text-lg">
            Schedule a free consultation to discuss your project and get a
            custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(220, 38, 38, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 md:px-12 py-4 rounded-full font-semibold text-lg hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg w-full sm:w-auto"
            >
              Schedule Free Consultation
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("portfolio")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 md:px-12 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto"
            >
              View Our Work
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
