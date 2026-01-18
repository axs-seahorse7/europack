import React from 'react'
import HeroTemplate from '../../../components/HeroTemplate.jsx'
import "./services.css"
import WhyEuropackSection from './WhyEuropack.jsx'
import ServicesSection from './ServiceSection.jsx'
import NewsSection from './NewsSection.jsx'
import ContactSection from './ContactSection.jsx'


const Services = () => {
  return (
    <div>
        <HeroTemplate
        title="Our Services"
        subtitle="europack"
        backgroundImage="/images/DSC_03531-scaled.webp"
        className="hero"
      />
      <WhyEuropackSection />
      <ServicesSection />
      <NewsSection />
      <ContactSection />
    </div>
  )
}

export default Services