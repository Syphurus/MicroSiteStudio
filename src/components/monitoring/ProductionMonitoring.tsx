"use client";

import { useEffect } from "react";

// Simple Analytics tracking
export function Analytics() {
  useEffect(() => {
    // Google Analytics 4
    if (process.env.NEXT_PUBLIC_GA_ID && typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
      script.async = true;
      document.head.appendChild(script);

      // Add gtag function to window safely
      const w = window as unknown as Record<string, unknown>;
      w.dataLayer = w.dataLayer || [];
      w.gtag = function (...args: unknown[]) {
        const dataLayer = w.dataLayer as unknown[];
        dataLayer.push(args);
      };

      const gtag = w.gtag as (...args: unknown[]) => void;
      gtag("js", new Date());
      gtag("config", process.env.NEXT_PUBLIC_GA_ID);
    }
  }, []);

  return null;
}

// Web Vitals monitoring (simplified)
export function WebVitals() {
  useEffect(() => {
    if (
      process.env.NODE_ENV === "production" &&
      typeof window !== "undefined"
    ) {
      // Simple performance logging
      window.addEventListener("load", () => {
        const loadTime = performance.now();
        console.log("Page load time:", loadTime);
      });
    }
  }, []);

  return null;
}

// Error boundary for production
export function ErrorReporting() {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (process.env.NODE_ENV === "production") {
        console.error("Production error:", event.error);
        // Send to error reporting service
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (process.env.NODE_ENV === "production") {
        console.error("Unhandled promise rejection:", event.reason);
        // Send to error reporting service
      }
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener(
        "unhandledrejection",
        handleUnhandledRejection
      );
    };
  }, []);

  return null;
}
