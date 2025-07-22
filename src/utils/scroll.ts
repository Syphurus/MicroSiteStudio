export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const navHeight = 80; // Height of the navigation bar
    const elementPosition = element.offsetTop - navHeight;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
