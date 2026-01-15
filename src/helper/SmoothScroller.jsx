import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: wrapperRef.current,   // ✅ scoped
      content: wrapperRef.current,   // ✅ scoped
      duration: 1.0,
      smoothWheel: true,
      
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    lenis.on("scroll", ({ velocity }) => {
      lenis.options.wheelMultiplier = velocity < 0 ? 1.6 : 1.2;
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div ref={wrapperRef} className="lenis-wrapper">
      {children}
    </div>
  );
}
