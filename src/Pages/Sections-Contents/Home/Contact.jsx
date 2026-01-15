import {useRef, useState} from "react";

const Contact = () => {
    const imageRef = useRef(null);
    const [fill, setfill] = useState("#f58522");

    const isMouseEntered = () => {
      setfill("#ffffff");
    }
  
    const handleMouseMove = (e) => {
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    imageRef.current.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  };

  const handleMouseLeave = () => {
    imageRef.current.style.transform = `translate(0px, 0px)`;
  };
  return (
    <section className="relative w-full h-[350px] ">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-200" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-between px-14">
        {/* Left text */}
        <h2 className="text-white text-7xl font-light">
          Contact us!
        </h2>

        {/* Arrow */}
        <div 
        onMouseMove={handleMouseMove}
        onMouseLeave={()=>{handleMouseLeave(); setfill("#f58522")}}
        onMouseEnter={isMouseEntered}
        className="flex items-center cursor-pointer"
        >
          <svg ref={imageRef} className="hover:text-white"  xmlns="http://www.w3.org/2000/svg" height="248px" viewBox="0 -960 960 960" width="248px" fill= {fill}><path d="m202-160-42-42 498-498H364v-60h396v396h-60v-294L202-160Z"/></svg>
        </div>
      </div>
    </section>
  );
};

export default Contact;
