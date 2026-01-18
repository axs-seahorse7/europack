import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // 🛑 SAFETY CHECK
    if (!wrapperRef.current || !contentRef.current) return;

    const lenis = new Lenis({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      duration: 0.8,
      smoothWheel: true,
      wheelMultiplier: 2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
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
      <div ref={contentRef} className="lenis-content">
        {children}
      </div>
    </div>
  );
}
