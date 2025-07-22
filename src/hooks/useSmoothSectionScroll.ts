"use client";

import { useEffect } from "react";

export const useSmoothSectionScroll = () => {
  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const sections = [
      "hero",
      "about",
      "services",
      "portfolio",
      "pricing",
      "contact",
    ];

    const getCurrentSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = 0; i < sections.length; i++) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            return i;
          }
        }
      }
      return 0;
    };

    const scrollToSection = (sectionIndex: number) => {
      const element = document.getElementById(sections[sectionIndex]);
      if (element) {
        isScrolling = true;
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        setTimeout(() => {
          isScrolling = false;
        }, 1000);
      }
    };

    const handleScroll = () => {
      if (isScrolling) return;

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        const currentSection = getCurrentSection();
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        const currentElement = document.getElementById(
          sections[currentSection]
        );

        if (currentElement) {
          const rect = currentElement.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementHeight = rect.height;
          const elementCenter = elementTop + elementHeight / 2;

          // If we're more than 30% away from the center, snap to the closest section
          const distanceFromCenter = Math.abs(scrollPosition - elementCenter);
          const threshold = elementHeight * 0.3;

          if (distanceFromCenter > threshold) {
            if (scrollPosition < elementCenter && currentSection > 0) {
              // Scroll to previous section
              scrollToSection(currentSection - 1);
            } else if (
              scrollPosition > elementCenter &&
              currentSection < sections.length - 1
            ) {
              // Scroll to next section
              scrollToSection(currentSection + 1);
            } else {
              // Snap to current section
              scrollToSection(currentSection);
            }
          }
        }
      }, 150);
    };

    // Add wheel event for more responsive scrolling
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      const currentSection = getCurrentSection();
      const delta = e.deltaY;

      if (Math.abs(delta) > 50) {
        // Only trigger on significant scroll
        if (delta > 0 && currentSection < sections.length - 1) {
          // Scrolling down
          e.preventDefault();
          scrollToSection(currentSection + 1);
        } else if (delta < 0 && currentSection > 0) {
          // Scrolling up
          e.preventDefault();
          scrollToSection(currentSection - 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, []);
};

export default useSmoothSectionScroll;
