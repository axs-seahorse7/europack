import { createContext, useContext, useEffect, useState } from "react";

const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    fontScale: 1,
    letterSpacing: 0,
    lineHeight: 1.5,
    grayscale: false,
    invert: false,
    brightness: 1,
    hideImages: false,
    stopAnimations: false,
  });

  // Apply effects globally
  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty("--font-scale", settings.fontScale);
    root.style.setProperty("--letter-spacing", `${settings.letterSpacing}px`);
    root.style.setProperty("--line-height", settings.lineHeight);
    root.style.setProperty("--brightness", settings.brightness);

    root.classList.toggle("grayscale", settings.grayscale);
    root.classList.toggle("invert", settings.invert);
    root.classList.toggle("hide-images", settings.hideImages);
    root.classList.toggle("stop-animations", settings.stopAnimations);

    localStorage.setItem("accessibility", JSON.stringify(settings));
  }, [settings]);

  // Load saved settings
  useEffect(() => {
    const saved = localStorage.getItem("accessibility");
    if (saved) setSettings(JSON.parse(saved));
  }, []);

  return (
    <AccessibilityContext.Provider value={{ settings, setSettings }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => useContext(AccessibilityContext);
