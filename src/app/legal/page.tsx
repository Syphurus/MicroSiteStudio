"use client";

import { motion } from "framer-motion";
import { Shield, FileText, Cookie, RefreshCw } from "lucide-react";

export default function Legal() {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            Legal Information
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your privacy and security are our top priorities. Review our
            policies below.
          </p>
        </motion.div>

        {/* Privacy Policy */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-red-500 mr-4" />
              <h2 className="text-3xl font-bold">Privacy Policy</h2>
            </div>

            <div className="space-y-6 text-gray-300">
              <p>
                At Microsite Studio, we value your privacy and are committed to
                protecting your personal information. This Privacy Policy
                outlines the types of data we collect, how we use it, and your
                rights regarding your information.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Information We Collect:
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Personal details (name, email, contact number)</li>
                  <li>Business information (company name, website URL)</li>
                  <li>Payment details (secured via third-party processors)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  How We Use Your Information:
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>To provide our services effectively</li>
                  <li>To process payments securely</li>
                  <li>To send project updates and promotional offers</li>
                  <li>To improve our services and website experience</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Data Protection:
                </h3>
                <p>
                  We implement robust security measures to protect your data
                  against unauthorized access, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Your Rights:
                </h3>
                <p>
                  You have the right to access, modify, or request deletion of
                  your personal data.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Contact Us:
                </h3>
                <p>
                  For any privacy-related inquiries, please contact us at{" "}
                  <a
                    href="mailto:studiomicrosite@gmail.com"
                    className="text-red-500 hover:text-red-400"
                  >
                    studiomicrosite@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Terms of Service */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <FileText className="w-8 h-8 text-red-500 mr-4" />
              <h2 className="text-3xl font-bold">Terms of Service</h2>
            </div>

            <div className="space-y-6 text-gray-300">
              <p>
                Welcome to Microsite Studio. By engaging with our services, you
                agree to the following Terms of Service:
              </p>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Services:
                </h3>
                <p>
                  We provide premium website development, AI automation, and
                  digital branding services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  User Obligations:
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Provide accurate information for project requirements</li>
                  <li>Make payments according to agreed terms</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Intellectual Property:
                </h3>
                <p>
                  All content created by Microsite Studio remains our
                  intellectual property until full payment is received.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Service Delivery:
                </h3>
                <p>
                  Timelines for service delivery will be outlined in the project
                  proposal.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Termination:
                </h3>
                <p>
                  We reserve the right to terminate services for breach of
                  terms.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Contact:
                </h3>
                <p>
                  For queries, reach us at{" "}
                  <a
                    href="mailto:studiomicrosite@gmail.com"
                    className="text-red-500 hover:text-red-400"
                  >
                    studiomicrosite@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Cookie Policy */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <Cookie className="w-8 h-8 text-red-500 mr-4" />
              <h2 className="text-3xl font-bold">Cookie Policy</h2>
            </div>

            <div className="space-y-6 text-gray-300">
              <p>
                Microsite Studio uses cookies to enhance user experience, gather
                analytics, and improve our website.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Types of Cookies:
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Essential Cookies: Necessary for website functionality
                  </li>
                  <li>Analytical Cookies: For performance tracking</li>
                  <li>Marketing Cookies: For targeted advertising</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Managing Cookies:
                </h3>
                <p>
                  You can manage cookie preferences through your browser
                  settings.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Consent:
                </h3>
                <p>By using our website, you consent to our use of cookies.</p>
              </div>

              <p>
                For more information, contact{" "}
                <a
                  href="mailto:studiomicrosite@gmail.com"
                  className="text-red-500 hover:text-red-400"
                >
                  studiomicrosite@gmail.com
                </a>
              </p>
            </div>
          </div>
        </motion.section>

        {/* Refund Policy */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center mb-6">
              <RefreshCw className="w-8 h-8 text-red-500 mr-4" />
              <h2 className="text-3xl font-bold">Refund Policy</h2>
            </div>

            <div className="space-y-6 text-gray-300">
              <p>
                At Microsite Studio, client satisfaction is our priority. Our
                refund policy is as follows:
              </p>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Eligibility for Refunds:
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    If project delivery fails to meet agreed specifications
                  </li>
                  <li>If services are cancelled before project commencement</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Non-Refundable Situations:
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>If substantial work has been completed</li>
                  <li>For change of mind after project initiation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Requesting a Refund:
                </h3>
                <p>
                  All refund requests must be sent via email to{" "}
                  <a
                    href="mailto:studiomicrosite@gmail.com"
                    className="text-red-500 hover:text-red-400"
                  >
                    studiomicrosite@gmail.com
                  </a>{" "}
                  within 7 days of project delivery.
                </p>
              </div>

              <p>
                We reserve the right to approve or deny refund requests based on
                the status of the project.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-medium hover:from-red-500 hover:to-red-600 transition-all duration-300"
          >
            ← Back to Home
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
