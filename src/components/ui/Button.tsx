"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className,
  loading = false,
  disabled = false,
  onClick,
  type = "button",
}) => {
  const baseClasses =
    "font-display font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary:
      "bg-luxury-gradient text-luxury-white shadow-lg hover:shadow-xl transform hover:scale-105 focus:ring-luxury-gold",
    secondary:
      "bg-luxury-gray-800 text-luxury-white hover:bg-luxury-gray-900 focus:ring-luxury-gray-500",
    outline:
      "border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black focus:ring-luxury-gold",
    ghost: "text-luxury-gold hover:bg-luxury-gold/10 focus:ring-luxury-gold",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        {
          "opacity-50 cursor-not-allowed": disabled || loading,
        },
        className
      )}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
    >
      {loading ? (
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </motion.button>
  );
};

export default Button;
