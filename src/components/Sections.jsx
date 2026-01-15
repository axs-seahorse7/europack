import { useEffect, useState } from "react";

export default function Section({
  color = "#000",
  bgImage,
  overlay = true,
  children,
}) {
  const [currentBg, setCurrentBg] = useState(bgImage);

  // Smooth background swap
  useEffect(() => {
    if (bgImage) {
      setCurrentBg(bgImage);
    }
  }, [bgImage]);

  return (
    <section
      className="relative w-full overflow-hidden section"
      style={{ backgroundColor: color,}}
    >
      {/* Background image layer */}
      {currentBg && (
        <div
          className="
            absolute inset-0
            bg-cover bg-center bg-no-repeat
            transition-opacity duration-700 ease-out
          "
          
        />
      )}

      {/* Optional dark overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black/40" />
      )}

      {/* Content */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </section>
  );
}
