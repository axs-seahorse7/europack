import React from "react";

const HeroTemplate = ({title, subtitle, backgroundImage, }) => {
  return (
    <section
      className="relative w-full h-[80vh] flex items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        boxSizing:"border-box",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-16">
        <h1 className="text-white text-6xl font-light tracking-wide">
          {title}
        </h1>
        </div>

        <div className="absolute text-[9rem] text-white opacity-20 z-10 -bottom-5 w-full flex justify-end items-baseline-last px-16 ">
            {subtitle && subtitle}
        </div>
    </section>
  );
};

export default HeroTemplate;
