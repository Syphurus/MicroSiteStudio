import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        luxury: {
          black: "#000000",
          deepBlack: "#0A0A0A",
          charcoal: "#1A1A1A",
          darkGray: "#2A2A2A",
          gray: "#3A3A3A",
          lightGray: "#6B7280",
          white: "#FFFFFF",
          offWhite: "#F8F9FA",
          gold: {
            50: "#FFFBEB",
            100: "#FEF3C7",
            200: "#FCD34D",
            300: "#F59E0B",
            400: "#D97706",
            500: "#B45309",
            600: "#92400E",
            700: "#78350F",
            800: "#451A03",
            900: "#1C0701",
            DEFAULT: "#D4AF37",
            light: "#F4E09A",
            dark: "#B8941F",
          },
          red: {
            50: "#FEF2F2",
            100: "#FEE2E2",
            200: "#FECACA",
            300: "#FCA5A5",
            400: "#F87171",
            500: "#EF4444",
            600: "#DC2626",
            700: "#B91C1C",
            800: "#991B1B",
            900: "#7F1D1D",
            DEFAULT: "#DC2626",
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-down": "slideDown 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.4s ease-out forwards",
        "rotate-slow": "rotateSlow 20s linear infinite",
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite alternate",
        "gradient-x": "gradient-x 3s ease infinite",
        "gradient-y": "gradient-y 3s ease infinite",
        "gradient-xy": "gradient-xy 3s ease infinite",
        tilt: "tilt 10s infinite linear",
        "bounce-slow": "bounce 3s infinite",
        "pulse-slow": "pulse 3s infinite",
        shimmer: "shimmer 2s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        rotateSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowPulse: {
          "0%": { boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(212, 175, 55, 0.8)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "gradient-y": {
          "0%, 100%": { backgroundPosition: "50% 0%" },
          "50%": { backgroundPosition: "50% 100%" },
        },
        "gradient-xy": {
          "0%, 100%": { backgroundPosition: "0% 0%" },
          "25%": { backgroundPosition: "100% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
          "75%": { backgroundPosition: "0% 100%" },
        },
        tilt: {
          "0%, 50%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(1deg)" },
          "75%": { transform: "rotate(-1deg)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      backgroundImage: {
        "luxury-gradient":
          "linear-gradient(135deg, #000000 0%, #1A1A1A 25%, #D4AF37 50%, #DC2626 75%, #000000 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #F4E09A 0%, #D4AF37 50%, #B8941F 100%)",
        "red-gradient":
          "linear-gradient(135deg, #FCA5A5 0%, #DC2626 50%, #991B1B 100%)",
        "hero-gradient":
          "radial-gradient(ellipse at center, rgba(212,175,55,0.1) 0%, rgba(0,0,0,0.9) 70%)",
        "mesh-gradient":
          "radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      perspective: {
        "1000": "1000px",
        "1500": "1500px",
        "2000": "2000px",
      },
      zIndex: {
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
      },
      boxShadow: {
        luxury: "0 25px 50px -12px rgba(212, 175, 55, 0.25)",
        "luxury-lg": "0 35px 60px -12px rgba(212, 175, 55, 0.4)",
        "luxury-xl": "0 45px 80px -12px rgba(212, 175, 55, 0.6)",
        glow: "0 0 20px rgba(212, 175, 55, 0.5)",
        "glow-lg": "0 0 40px rgba(212, 175, 55, 0.7)",
        "inner-glow": "inset 0 2px 4px 0 rgba(212, 175, 55, 0.2)",
        dark: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        "dark-lg": "0 35px 60px -12px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};

export default config;
