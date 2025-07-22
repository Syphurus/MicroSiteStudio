export interface PricingRegion {
  region: string;
  currency: string;
  symbol: string;
  starter: number;
  growth: number;
  premium: number;
  custom: string;
}

export interface ServiceTier {
  name: string;
  price: number;
  currency: string;
  symbol: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export interface TestimonialType {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  budget: string;
  message: string;
  region: string;
}

export interface GeolocationData {
  country: string;
  region: string;
  city: string;
  currency: string;
  latitude: number;
  longitude: number;
}
