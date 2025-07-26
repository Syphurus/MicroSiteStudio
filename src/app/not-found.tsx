"use client";

import { motion } from "framer-motion";
import { Search, ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-8xl font-bold text-transparent bg-gradient-to-r from-red-600 to-red-400 bg-clip-text mb-4"
          >
            404
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Search className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>

          <p className="text-gray-400 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>

          <div className="space-y-4">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-6 rounded-lg font-medium hover:from-red-500 hover:to-red-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Home size={18} />
                Back to Home
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.history.back()}
              className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ArrowLeft size={18} />
              Go Back
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
