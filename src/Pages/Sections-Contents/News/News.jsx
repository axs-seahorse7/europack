import React from 'react'
import  HeroSection from '../../../components/HeroTemplate.jsx';
import NewsGrid from './NewsGrid.jsx';
import "./news.css"
import Contact from '../Home/Contact.jsx';

export const News = () => {
   const newsData = [
    {
      id: 1,
      title: "SIG presents the SIG Terra packaging portfolio",
      image: "/images/News/DSC_0324-scaled.jpg",
      link: "/αναπτυξη-ανω-του-10-και-φετοσ-με-ωθηση-απ",
    },
    {
        id: 2,
        title: "The industry at a crossroads",
        image: "/images/News/0126_2025_Damavand_TomatoProducts_PR_00_RGB_final.png",
      link: "#",
    },
    {
      id: 3,
      title:
        "Growth over 10% again this year, driven by yogurt, coffee and pharmaceutical sector",
        image: "/images/News/sig-terra-alu-free-full-barrier-multi-serve-rgb.jpg",
        link: "#",
    },
    {
        id: 4,
        title:
        "Damavand strengthens production capabilities with new aseptic carton filling machine",
        image: "/images/News/Screenshot-2025-08-19-161546_1-e1755610859630.png",
      link: "#",
    },
    {
        id: 5,
        title:
        "Damavand strengthens production capabilities with new aseptic carton filling machine",
        image: "/images/News/Picture1.png",
      link: "#",
    },
        {
            id: 6,
            title:
            "Damavand strengthens production capabilities with new aseptic carton filling machine",
            image: "/images/News/Syskevasia_2018_40yrs-scaled-e1753782734767.jpg",
        link: "#",
        },
  ];
  return (
    <div>
        <HeroSection
        title="News"
        subtitle="europack"
        backgroundImage="/images/News/news_background.webp"
        className="hero"
         />
         <NewsGrid newsData={newsData} />
         <Contact />
    </div>
  )
}
