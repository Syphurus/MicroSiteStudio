import { PricingRegion } from "@/types";
import { clsx, type ClassValue } from "clsx";

// Utility function for combining classes
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const PRICING_REGIONS: Record<string, PricingRegion> = {
  US: {
    region: "United States & Canada",
    currency: "USD",
    symbol: "$",
    starter: 300,
    growth: 500,
    premium: 800,
    custom: "Custom Quote",
  },
  CA: {
    region: "United States & Canada",
    currency: "USD",
    symbol: "$",
    starter: 300,
    growth: 500,
    premium: 800,
    custom: "Custom Quote",
  },
  GB: {
    region: "United Kingdom",
    currency: "GBP",
    symbol: "£",
    starter: 250,
    growth: 400,
    premium: 650,
    custom: "Custom Quote",
  },
  DE: {
    region: "Europe",
    currency: "EUR",
    symbol: "€",
    starter: 280,
    growth: 450,
    premium: 750,
    custom: "Custom Quote",
  },
  FR: {
    region: "Europe",
    currency: "EUR",
    symbol: "€",
    starter: 280,
    growth: 450,
    premium: 750,
    custom: "Custom Quote",
  },
  AE: {
    region: "Middle East",
    currency: "USD",
    symbol: "$",
    starter: 280,
    growth: 450,
    premium: 750,
    custom: "Custom Quote",
  },
  SA: {
    region: "Middle East",
    currency: "USD",
    symbol: "$",
    starter: 280,
    growth: 450,
    premium: 750,
    custom: "Custom Quote",
  },
  IN: {
    region: "India & South Asia",
    currency: "INR",
    symbol: "₹",
    starter: 20000,
    growth: 35000,
    premium: 50000,
    custom: "Custom Quote",
  },
  DEFAULT: {
    region: "Global",
    currency: "USD",
    symbol: "$",
    starter: 300,
    growth: 500,
    premium: 800,
    custom: "Custom Quote",
  },
};

export const SERVICE_FEATURES = {
  starter: [
    "Custom Single-Page Website",
    "Mobile-Responsive Design",
    "Basic SEO Optimization",
    "Contact Form Integration",
    "1 Revision Round",
    "30 Days Support",
  ],
  growth: [
    "Multi-Page Premium Website",
    "Advanced Mobile Optimization",
    "Premium SEO & Analytics",
    "Lead Generation Forms",
    "Social Media Integration",
    "3 Revision Rounds",
    "90 Days Support",
    "Performance Optimization",
  ],
  premium: [
    "Custom Luxury Website Design",
    "Advanced Animation & Interactions",
    "Premium SEO & Conversion Optimization",
    "AI Chatbot Integration",
    "Advanced Lead Generation System",
    "Social Proof & Testimonials",
    "Unlimited Revisions",
    "6 Months Priority Support",
    "Performance & Speed Optimization",
    "Custom CMS Integration",
  ],
};

export async function detectUserLocation() {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();

    return {
      country: data.country_code || "US",
      region: data.region || "",
      city: data.city || "",
      currency: data.currency || "USD",
      latitude: data.latitude || 0,
      longitude: data.longitude || 0,
    };
  } catch (error) {
    console.error("Error detecting location:", error);
    return {
      country: "US",
      region: "",
      city: "",
      currency: "USD",
      latitude: 0,
      longitude: 0,
    };
  }
}

export function getPricingForRegion(countryCode: string): PricingRegion {
  return PRICING_REGIONS[countryCode] || PRICING_REGIONS.DEFAULT;
}

export function formatPrice(
  amount: number,
  currency: string,
  symbol: string
): string {
  return `${symbol}${amount.toLocaleString()}`;
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
