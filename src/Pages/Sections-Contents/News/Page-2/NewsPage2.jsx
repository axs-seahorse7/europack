import React from 'react'
import HeroTemplate from '../../../../components/HeroTemplate'
import NewsGrid from '../NewsGrid'
import Contact from '../../Home/Contact.jsx';

const NewsPage2 = () => {

     const newsData = [
    {
      id: 1,
      title: "EUROPACK INDUSTRIAL SOLUTIONS 50 ΧΡΟΝΙΑ ΛΕΙΤΟΥΡΓΙΑΣ",
      image: "/images/portfolio_img1_jpg.webp",
      link: "/europack-industrial-solutions-50-xronia-leitoyrgias",
    },
    {
        id: 2,
        title: "Σπύρος Παπασωτηρίου",
        image: "/images/about_mission_section_img_02_jpg.webp",
      link: "/spyros-papasotiriou",
    },
    {
      id: 3,
      title:
        "Alexandros Paraskevaidis",
        image: "/images/founder.webp",
        link: "/alexandros-paraskevaidis",
    },
   
  ];

  return (
    <div>
        <HeroTemplate
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

export default NewsPage2