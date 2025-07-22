// Add to tailwind config for better gradients
export const gradientConfig = {
  "gradient-radial":
    "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
  "gradient-conic":
    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
  "gradient-luxury":
    "linear-gradient(135deg, #D4AF37 0%, #DC143C 50%, #D4AF37 100%)",
  "gradient-mesh":
    "radial-gradient(circle at 20% 80%, rgba(212,175,55,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(220,20,60,0.3) 0%, transparent 50%)",
};

// Mouse tracking utilities
export const getMousePosition = (e: MouseEvent, container: HTMLElement) => {
  const rect = container.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
};

export const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
