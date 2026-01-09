import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      smoothWheel: true,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    lenis.on("scroll", ({ velocity }) => {
      // velocity < 0 = scrolling up
      if (velocity < 0) {
        lenis.options.wheelMultiplier = 1.6; // 🚀 faster up
      } else {
        lenis.options.wheelMultiplier = 1.2; // normal down
      }
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return children;
}
