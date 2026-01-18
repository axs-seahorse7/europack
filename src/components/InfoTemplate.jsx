import React from 'react'

const InfoTemplate = ({image, badge, heading, description, bgColor}) => {


  return (
        <section className={`w-full py-20 ${bgColor ? `bg-${bgColor}` : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-20 px-16 items-start">

            {/* LEFT IMAGE */}
            <div className="w-full">
            <img
                src={image}
                alt="Company history"
                className="w-full h-auto object-cover"
            />
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex flex-col gap-8">

            {/* Badge */}
            <div className="inline-flex">
                <span className="px-6 py-2 border border-black rounded-full text-sm tracking-wide">
                {badge || "About Us"}
                </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-medium leading-snug max-w-xl">
                {heading || "Our Mission & History"}
            </h2>

            {/* Description */}
            <p className="text-xl leading-relaxed text-gray-900 max-w-xl">
                {description || "Europack Industrial Solutions S.A. was established in 1990 and has since become a leading provider of industrial production and packaging equipment. Our mission is to supply high-quality machinery and offer comprehensive design and support services to optimize our clients' production processes. With a strong focus on innovation and customer satisfaction, we strive to deliver tailored solutions that meet the unique needs of each business we serve."}
            </p>

            </div>

        </div>
        </section>

  )
}

export default InfoTemplate