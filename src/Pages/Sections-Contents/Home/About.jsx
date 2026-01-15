import React, { useRef, useEffect, useState } from "react";
import "./Styles/About.css";
import Counter from "../../../helper/Counter.jsx";

const About = () => {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // start when 20% visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    imageRef.current.style.transform = `translate(${x * 0.6}px, ${y * 0.6}px)`;
  };

  const handleMouseLeave = () => {
    imageRef.current.style.transform = `translate(0px, 0px)`;
  };

  return (
    <section className="about-container px-6" ref={sectionRef}>
      {/* Left Content */}
      <div className="about-left w-1/2">
        <span className="about-badge">About Us</span>

        <h1>
          Supply, Design and Support of <br />
          Industrial Production & Packaging Equipment
        </h1>

        <p className="about-description">
          50+ years Supporting Industrial Development <br />
          Elevating Production, Rendering Efficiency
        </p>

        <p className="about-sub">
          Elevating Production, <br />
          Rendering Efficiency
        </p>

        <button className="about-btn">
          Learn More <span>↗</span>
        </button>
      </div>

      {/* Middle Stats */}
      <div className="flex gap-2 justify-between w-1/2 py-20">

      <div className="about-stats">
        <div className="stat">
          <Counter end={50} suffix="+" active={visible} />
          <p>Years of Experience</p>
        </div>

        <div className="stat">
          <Counter end={20} suffix="+" active={visible} />
          <p>Staff</p>
        </div>

        <div className="stat">
          <Counter end={120} suffix="+" active={visible} />
          <p>Installations per year</p>
        </div>
      </div>

      {/* Right Image */}
      <div
        className="about-image-wrapper"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36"
          alt="Office"
          className="about-image"
        />
      </div>
    </div>

    </section>
  );
};

export default About;
