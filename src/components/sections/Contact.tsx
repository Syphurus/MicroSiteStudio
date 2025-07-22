"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import { ContactFormData } from "@/types";

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form data:", data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-luxury-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-8">
              <svg
                className="w-10 h-10 text-luxury-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-display font-bold text-luxury-white mb-6">
              Thank You!
            </h2>
            <p className="text-xl text-luxury-gray-200 mb-8">
              We&apos;ve received your request and will get back to you within
              24 hours with a custom proposal.
            </p>
            <Button variant="outline" onClick={() => setIsSubmitted(false)}>
              Send Another Message
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-luxury-black">
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-luxury-gray-200 max-w-3xl mx-auto">
            Tell us about your fitness business and we&apos;ll create a custom
            proposal designed specifically for your goals and budget.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-luxury-gray-200 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 rounded-lg bg-luxury-gray-900 border border-luxury-gray-800 text-luxury-white placeholder-luxury-gray-300 focus:border-luxury-gold focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-luxury-red text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-luxury-gray-200 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-luxury-gray-900 border border-luxury-gray-800 text-luxury-white placeholder-luxury-gray-300 focus:border-luxury-gold focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-luxury-red text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone & Company Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-luxury-gray-200 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg bg-luxury-gray-900 border border-luxury-gray-800 text-luxury-white placeholder-luxury-gray-300 focus:border-luxury-gold focus:outline-none transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-luxury-gray-200 font-medium mb-2">
                    Business Name
                  </label>
                  <input
                    {...register("company")}
                    className="w-full px-4 py-3 rounded-lg bg-luxury-gray-900 border border-luxury-gray-800 text-luxury-white placeholder-luxury-gray-300 focus:border-luxury-gold focus:outline-none transition-colors"
                    placeholder="Your gym/studio name"
                  />
                </div>
              </div>

              {/* Project Type & Budget Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-luxury-gray-200 font-medium mb-2">
                    Project Type *
                  </label>
                  <select
                    {...register("projectType", {
                      required: "Please select a project type",
                    })}
                    className="w-full px-4 py-3 rounded-lg bg-luxury-gray-900 border border-luxury-gray-800 text-luxury-white focus:border-luxury-gold focus:outline-none transition-colors"
                  >
                    <option value="">Select project type</option>
                    <option value="new-website">New Website</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="landing-page">Landing Page</option>
                    <option value="e-commerce">E-commerce Store</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                  {errors.projectType && (
                    <p className="text-luxury-red text-sm mt-1">
                      {errors.projectType.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-luxury-gray-200 font-medium mb-2">
                    Budget Range *
                  </label>
                  <select
                    {...register("budget", {
                      required: "Please select a budget range",
                    })}
                    className="w-full px-4 py-3 rounded-lg bg-luxury-gray-900 border border-luxury-gray-800 text-luxury-white focus:border-luxury-gold focus:outline-none transition-colors"
                  >
                    <option value="">Select budget</option>
                    <option value="starter">$300-500 (Starter)</option>
                    <option value="growth">$500-800 (Growth)</option>
                    <option value="premium">$800+ (Premium)</option>
                    <option value="custom">Custom Quote</option>
                  </select>
                  {errors.budget && (
                    <p className="text-luxury-red text-sm mt-1">
                      {errors.budget.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-luxury-gray-200 font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  {...register("message", {
                    required: "Please describe your project",
                  })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-luxury-gray-900 border border-luxury-gray-800 text-luxury-white placeholder-luxury-gray-300 focus:border-luxury-gold focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your fitness business, target audience, goals, and any specific features you need..."
                />
                {errors.message && (
                  <p className="text-luxury-red text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? "Sending..." : "Get Custom Proposal"}
              </Button>

              <p className="text-sm text-luxury-gray-300 text-center">
                We&apos;ll respond within 24 hours with a detailed proposal
                tailored to your needs.
              </p>
            </form>
          </motion.div>

          {/* Contact Info & Trust Signals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="bg-luxury-gray-900 rounded-2xl p-8 border border-luxury-gray-800">
              <h3 className="text-2xl font-display font-bold text-luxury-white mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-luxury-gradient rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-luxury-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-luxury-gray-200 font-medium">Email</p>
                    <p className="text-luxury-gold">
                      studiomicrosite@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-luxury-gradient rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-luxury-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-luxury-gray-200 font-medium">
                      Response Time
                    </p>
                    <p className="text-luxury-gold">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-luxury-gray-900 rounded-2xl p-8 border border-luxury-gray-800">
              <h3 className="text-2xl font-display font-bold text-luxury-white mb-6">
                Why Choose Us?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-luxury-gray-200">
                    500+ successful fitness websites delivered
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-luxury-gray-200">
                    98% client satisfaction rate
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-luxury-gray-200">
                    6 months of premium support included
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-luxury-gray-200">
                    Money-back guarantee if not satisfied
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
