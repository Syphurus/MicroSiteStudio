"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import {
  detectUserLocation,
  getPricingForRegion,
  formatPrice,
  SERVICE_FEATURES,
} from "@/lib/utils";
import { PricingRegion, ServiceTier } from "@/types";

const Pricing: React.FC = () => {
  const [currentRegion, setCurrentRegion] = useState<PricingRegion | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPricing = async () => {
      try {
        const location = await detectUserLocation();
        const pricing = getPricingForRegion(location.country);
        setCurrentRegion(pricing);
      } catch (error) {
        console.error("Error loading pricing:", error);
        setCurrentRegion(getPricingForRegion("DEFAULT"));
      } finally {
        setLoading(false);
      }
    };

    loadPricing();
  }, []);

  if (loading || !currentRegion) {
    return (
      <section id="pricing" className="py-20 bg-luxury-black">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-luxury-gray-800 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-luxury-gray-800 rounded w-96 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  const services: ServiceTier[] = [
    {
      name: "Starter Package",
      price: currentRegion.starter,
      currency: currentRegion.currency,
      symbol: currentRegion.symbol,
      features: SERVICE_FEATURES.starter,
      cta: "Get Started",
    },
    {
      name: "Growth Package",
      price: currentRegion.growth,
      currency: currentRegion.currency,
      symbol: currentRegion.symbol,
      features: SERVICE_FEATURES.growth,
      popular: true,
      cta: "Most Popular",
    },
    {
      name: "Premium Package",
      price: currentRegion.premium,
      currency: currentRegion.currency,
      symbol: currentRegion.symbol,
      features: SERVICE_FEATURES.premium,
      cta: "Go Premium",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-luxury-black">
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
            Transparent Pricing for{" "}
            <span className="luxury-text-gradient">{currentRegion.region}</span>
          </h2>
          <p className="text-xl text-luxury-gray-200 max-w-3xl mx-auto">
            Choose the perfect package for your fitness business. All prices
            include premium design, mobile optimization, and ongoing support.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:transform hover:scale-105 ${
                service.popular
                  ? "border-luxury-gold bg-luxury-gradient shadow-luxury-shadow-lg"
                  : "border-luxury-gray-800 bg-luxury-gray-900 hover:border-luxury-gold/50"
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-luxury-gold text-luxury-black px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Package Name */}
              <h3
                className={`text-2xl font-display font-bold mb-4 ${
                  service.popular ? "text-luxury-white" : "text-luxury-white"
                }`}
              >
                {service.name}
              </h3>

              {/* Price */}
              <div className="mb-8">
                <div
                  className={`text-5xl font-bold mb-2 ${
                    service.popular ? "text-luxury-white" : "text-luxury-gold"
                  }`}
                >
                  {formatPrice(service.price, service.currency, service.symbol)}
                </div>
                <div
                  className={`text-sm ${
                    service.popular
                      ? "text-luxury-gray-200"
                      : "text-luxury-gray-300"
                  }`}
                >
                  One-time payment • No monthly fees
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={`flex items-start space-x-3 ${
                      service.popular
                        ? "text-luxury-white"
                        : "text-luxury-gray-200"
                    }`}
                  >
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        service.popular
                          ? "text-luxury-white"
                          : "text-luxury-gold"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={service.popular ? "secondary" : "primary"}
                size="lg"
                className="w-full"
                onClick={() => {
                  // Scroll to contact form or open modal
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {service.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-luxury-gray-900 rounded-2xl p-8 border border-luxury-gold/30">
            <h3 className="text-2xl font-display font-bold text-luxury-white mb-4">
              Need Something Custom?
            </h3>
            <p className="text-luxury-gray-200 mb-6">
              Have a unique project in mind? Let&apos;s discuss your specific
              requirements and create a custom solution that perfectly fits your
              needs.
            </p>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Request Custom Quote
            </Button>
          </div>
        </motion.div>

        {/* Location Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-sm text-luxury-gray-300">
            💡 Prices automatically adjusted for {currentRegion.region} • All
            major payment methods accepted
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
