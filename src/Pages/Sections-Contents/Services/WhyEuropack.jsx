const WhyEuropackSection = () => {
  return (
    <section className="why-section">
      <div className="why-container">

        {/* LEFT CONTENT */}
        <div className="why-left">
          <span className="why-pill">Why Europack?</span>

          <h2 className="why-title">
            Your trusted partner for smart,
            sustainable, and high-performance
            packaging and production solutions
          </h2>

          <h4 className="why-subtitle">What sets us apart:</h4>

          <div className="why-list">
            <ul>
              <li>Solutions tailored to your needs</li>
              <li>Proven industry expertise</li>
              <li>High-speed performance</li>
              <li>Sustainable packaging focus</li>
            </ul>

            <ul>
              <li>Compact, smart solutions</li>
              <li>End-to-end support</li>
              <li>Reliable after-sales care</li>
              <li>European quality standards</li>
            </ul>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="why-right">
          <img
            src="/images/image_1.webp" // replace with your image
            alt="Partnership"
          />
        </div>

      </div>
    </section>
  );
};

export default WhyEuropackSection;
