"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Clock, Rocket } from "lucide-react";

export default function CleanContact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          budget: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "studiomicrosite@gmail.com",
      description: "Get in touch for project inquiries",
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "< 2 Hours",
      description: "Quick response guaranteed",
    },
  ];

  const services = [
    "Website Design",
    "Mobile App Development",
    "E-commerce Solutions",
    "Landing Pages",
    "Digital Marketing",
    "Branding & Design",
    "Other",
  ];

  const budgetRanges = [
    "$2,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $20,000",
    "$20,000 - $50,000",
    "$50,000+",
  ];

  return (
    <section
      ref={ref}
      id="contact"
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
              Let&apos;s
            </span>
            <span className="ml-3 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="font-body text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your fitness business? Let&apos;s discuss your
            project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8"
          >
            <h3 className="font-heading text-2xl font-bold text-white mb-6">
              Start Your Project
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block font-ui text-gray-300 text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Company and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Company/Gym Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors duration-300"
                    placeholder="FitPro Gym"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Service and Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Service Needed *
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors duration-300"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{
                  scale: isSubmitting ? 1 : 1.02,
                  boxShadow: isSubmitting
                    ? ""
                    : "0 20px 40px rgba(220, 38, 38, 0.3)",
                }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? "bg-gray-600 cursor-not-allowed"
                    : submitStatus === "success"
                    ? "bg-green-600 hover:bg-green-700"
                    : submitStatus === "error"
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600"
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : submitStatus === "success" ? (
                  <>✅ Message Sent!</>
                ) : submitStatus === "error" ? (
                  <>❌ Failed to Send</>
                ) : (
                  <>
                    Send Message
                    <Rocket size={20} />
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-900/20 border border-green-700/30 rounded-lg p-4 text-green-400 text-center"
                >
                  🎉 Thank you! Your message has been sent successfully.
                  We&apos;ll get back to you within 24 hours.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-900/20 border border-red-700/30 rounded-lg p-4 text-red-400 text-center"
                >
                  ⚠️ Sorry, there was an error sending your message. Please try
                  again or email us directly at studiomicrosite@gmail.com
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-300 text-lg mb-8">
                Whether you&apos;re ready to start your project or just want to
                learn more about our services, we&apos;re here to help.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="text-3xl mb-3 flex justify-start">
                    <info.icon size={32} className="text-red-500" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {info.title}
                  </h4>
                  <p className="text-red-400 font-medium mb-1">
                    {info.details}
                  </p>
                  <p className="text-gray-400 text-sm">{info.description}</p>
                </motion.div>
              ))}
            </div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6"
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Questions?
              </h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-red-400 mr-3">Q:</span>
                  <div>
                    <p className="text-gray-300 text-sm">
                      How long does a typical project take?
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      Most projects are completed within 4-8 weeks.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-red-400 mr-3">Q:</span>
                  <div>
                    <p className="text-gray-300 text-sm">
                      Do you work with international clients?
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      Yes, we serve clients worldwide with 24/7 support.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-red-400 mr-3">Q:</span>
                  <div>
                    <p className="text-gray-300 text-sm">
                      What&apos;s included in ongoing maintenance?
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      Updates, security monitoring, and technical support.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
