import { useEffect, useRef, useState } from "react";

const Counter = ({ end, suffix = "", duration = 1500, active }) => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    cancelAnimationFrame(rafRef.current);

    if (!active) {
      // hide first, then reset
      setVisible(false);

      const t = setTimeout(() => {
        setValue(0);
      }, 300); // match fade-out duration

      return () => clearTimeout(t);
    }

    // when becoming active
    setVisible(true);

    let startTime = null;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);

      setValue(Math.floor(progress * end));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafRef.current);
  }, [active, end, duration]);

  return (
    <h2
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
      }}
    >
      {value}
      {value === end && suffix}
    </h2>
  );
};

export default Counter;
