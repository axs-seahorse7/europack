import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const snapScroll = () => {
  ScrollTrigger.create({
    snap: {
      snapTo: 1 / (document.querySelectorAll(".section").length - 1),
      duration: { min: 0.4, max: 1 },
      delay: 0.1,
      ease: "power2.out", // 🔥 braking effect
    },
  });
};
