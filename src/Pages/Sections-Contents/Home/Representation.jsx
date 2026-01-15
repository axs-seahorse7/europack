import { useEffect, useRef, useState } from "react";
import { MoveRight, MoveLeft } from "lucide-react";

const slides = [
  {
    image: "/images/bk011-6.jpg",
    tag: "Supply Chain",
    title: "Stomppy",
  },
  {
    image: "/images/Supura.png",
    tag: "Quality control",
    subTag: "Product Manufacturing and Packaging",
    title: "Ishida",
  },
  {
    image: "/images/applikator-457.jpg",
    tag: "Product Manufacturing and Packaging",
    title: "All-Fill",
  },
  {
    image: "/images/metal-detectable-stationery-e1753960854827.png",
    tag: "Product Manufacturing and Packaging",
    title: "All-Fill",
  },
  {
    image: "/images/Pharma-Technolgy.png",
    tag: "Product Manufacturing and Packaging",
    title: "All-Fill",
  },
  {
    image: "/images/Granulation-line-scaled.jpg",
    tag: "Product Manufacturing and Packaging",
    title: "All-Fill",
  },
  {
    image: "/images/Fette-Compacting.png",
    tag: "Product Manufacturing and Packaging",
    title: "All-Fill",
  },
  {
    image: "/images/banner-5.png",
    tag: "Product Manufacturing and Packaging",
    title: "All-Fill",
  },
  {
    image: "/images/MAC3_degassing_2024_02-scaled.jpg",
    tag: "Product Manufacturing and Packaging",
    title: "All-Fill",
  },
  {
    image: "/images/Probat.png",
    tag: "Product Manufacturing and Packaging",
    title: "All-Fill",
  },
  {
    image: "/images/Endoline.png",
    tag: "Product Manufacturing and Packaging",
    title: "All-Fill",
  },
  {
    image: "/images/Sollas.png",
    tag: "Product Manufacturing and Packaging",
    title: "All-Fill",
  },
  {
    image: "/images/2522-2522.jpg",
    tag: "Product Manufacturing and Packaging",
    title: "All-Fill",
  },
  {
    image: "/images/hummus_pxm.jpg",
    tag: "Product Manufacturing and Packaging",
    title: "All-Fill",
  },
  {
    image: "/images/conveying_index.jpg",
    tag: "Product Manufacturing and Packaging",
    title: "All-Fill",
  },
  {
    image: "/images/Econocorp.png",
    tag: "Product Manufacturing and Packaging",
    title: "All-Fill",
  },
  {
    image: "/images/claranor-cup-sterilization-unit-300-dpi1-1200x675-1-e1753960926204.png",
    tag: "Product Manufacturing and Packaging",
    title: "All-Fill",
  },
  {
    image: "/images/lead.jpg",
    tag: "Product Manufacturing and Packaging",
    title: "All-Fill",
  },
  {
    image: "/images/thumbnail_stommpy.webp",
    tag: "Product Manufacturing and Packaging",
    title: "All-Fill",
  },
  {
    image: "/images/thumbnail_ishida.webp",
    tag: "Product Manufacturing and Packaging",
    title: "All-Fill",
  },
  {
    image: "/images/thumbnail_all_fill-1.webp",
    tag: "Product Manufacturing and Packaging",
    title: "All-Fill",
  },
  {
    image: "/images/thumbnail_ceia.webp",
    tag: "Product Manufacturing and Packaging",
    title: "All-Fill",
  },
  {
    image: "/images/thumbnail_tecma_aries.webp",
    tag: "Product Manufacturing and Packaging",
    title: "All-Fill",
  },
  {
    image: "/images/Cartoning-Maestro-c-hero.jpg",
    tag: "Product Manufacturing and Packaging",
    title: "All-Fill",
  },
  {
    image: "/images/FVFSK25_0001_VEGATRONIC-6000-DZ_Generale-_I23.jpg",
    tag: "Product Manufacturing and Packaging",
    title: "All-Fill",
  },
  {
    image: "/images/thumbnail_sig_group.webp",
    tag: "Product Manufacturing and Packaging",
    title: "All-Fill",
  },
];

export default function RepresentationsCarousel() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const total = slides.length;



  const resetAutoScroll = () => {
  clearInterval(intervalRef.current);
  intervalRef.current = setInterval(() => {
    setIndex((prev) => (prev + 1) % total);
  }, 4200);
};

  const nextSlide = () => {
  resetAutoScroll();
  setIndex((prev) => (prev + 1) % total);
};

const prevSlide = () => {
  resetAutoScroll();
  setIndex((prev) => (prev - 1 + total) % total);
};


  // Auto scroll (smooth + slow)
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 4200);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="bg-[#3a3a3a] h-[110vh] text-white py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <span className="inline-block border border-white rounded-full px-4 py-1 text-sm mb-4">
              Αντιπροσωπείες
            </span>
            <h2 className="text-4xl font-light mt-4">
              Reliable quality!
            </h2>
          </div>

          <div className="flex gap-4">
            <button className="bg-black px-5 py-2 text-sm flex items-center gap-2">
              Product Manufacturing and Packaging lines ↗
            </button>
            <button className="bg-black px-5 py-2 text-sm flex items-center gap-2">
              Quality control ↗
            </button>
            <button className="bg-black px-5 py-2 text-sm flex items-center gap-2">
              Supply Chain ↗
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
         <div
            className="flex gap-8 transition-transform duration-[1200ms] ease-out"
            style={{
              transform: `translateX(-${index * 33.5}%)`,
            }}
          >

            {slides.map((slide, i) => (
              <div
                key={i}
                className="min-w-[33%] group cursor-pointer relative bg-black rounded-lg overflow-hidden"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  loading="lazy"
                  className="w-full h-[380px] object-cover"
                />

               <div className="absolute top-20 right-20  cursor-pointer z-10">
                  <img
                    src="/images/right-arrow.png"
                    alt="arrow"
                    className="transition-transform duration-300 group-hover:-translate-y-6 group-hover:translate-x-6   opacity-0 group-hover:opacity-100"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                  <span className="inline-block border border-white rounded-full px-3 py-1 text-xs mb-2 w-fit">
                    {slide.tag}
                  </span>

                  {slide.subTag && (
                    <span className="inline-block border border-white rounded-full px-3 py-1 text-xs mb-2 w-fit">
                      {slide.subTag}
                    </span>
                  )}

                  <h3 className="text-2xl font-light">
                    {slide.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-20 flex items-center gap-4 w-[95%]">
          <div className="w-full h-[8px] bg-gray-600 relative overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-orange-500 transition-all duration-700"
              style={{
                width: `${((index + 1) / total) * 100}%`,
              }}
            />
          </div>
            <div className="absolute  flex justify-end w-[95%] pr-5 gap-5" >
                <button onClick={prevSlide} className="h-10 w-10 flex items-center justify-center !text-orange-400 rounded-full bg-white hover:!text-white duration-75 cursor-pointer transition hover:outline-none hover:bg-orange-400 ">
                    <MoveLeft />
                </button>
                <button onClick={nextSlide} className="h-10 w-10 flex items-center justify-center !text-orange-400 rounded-full bg-white hover:!text-white duration-75 cursor-pointer transition hover:outline-none hover:bg-orange-400 ">
                    <MoveRight />
                </button>
            </div>
        </div>
      </div>

      {/* Accessibility Icon Placeholder */}
      
    </section>
  );
}
