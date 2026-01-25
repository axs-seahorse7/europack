import React from 'react'
import  HeroSection from '../../../components/HeroTemplate.jsx';
import NewsGrid from './NewsGrid.jsx';
import "./news.css"
import Contact from '../Home/Contact.jsx';

export const News = () => {
   const newsData = [
    {
      id: 1,
      title: "GROWTH OVER 10% AGAIN THIS YEAR, DRIVEN BY YOGURT, COFFEE AND PHARMACEUTICAL SECTOR",
      image: "/images/News/DSC_0324-scaled.jpg",
      link: "/αναπτυξη-ανω-του-10-και-φετοσ-με-ωθηση-απ",
    },
    {
        id: 2,
        title: "Damavand strengthens production capabilities with new aseptic carton filling machine from SIG",
        image: "/images/News/0126_2025_Damavand_TomatoProducts_PR_00_RGB_final.png",
        link: "/η-damavand-υπερδιπλασιάζει-την-παραγωγική-τη",
    },
    {
      id: 3,
      title:
        "SIG presents the SIG Terra packaging portfolio",
        image: "/images/News/sig-terra-alu-free-full-barrier-multi-serve-rgb.jpg",
        link: "/η-sig-παρουσιάζει-τις-συσκευασίες-sig-terra-alu-free",
    },
    {
        id: 4,
        title:
        "The industry at a crossroads",
        image: "/images/News/Screenshot-2025-08-19-161546_1-e1755610859630.png",
      link: "/η-βιομηχανία-σε-κρίσιμο-σταυροδρόμι",
    },
    {
        id: 5,
        title:
        "ΜΕΒΓΑΛ",
        image: "/images/News/Picture1.png",
      link: "/μεβγαλ",
    },
        {
            id: 6,
            title:
            "Europack: Μισός αιώνας καινοτομίας στην βιομηχανική παραγωγή και συσκευασία",
            image: "/images/News/Syskevasia_2018_40yrs-scaled-e1753782734767.jpg",
            link: "/europack-μισός-αιώνας-καινοτομίας-στην-βιομη",
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
