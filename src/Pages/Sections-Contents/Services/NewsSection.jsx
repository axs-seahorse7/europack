import { useRef } from "react";
import NewsCard from "./NewsCard";

const newsData = [
  {
    date: "29-May-2025",
    title: "Alexandros Paraskevaidis",
    image: "/images/founder.webp",
  },
  {
    date: "26-Jun-2025",
    title: "Σπύρος Παπασωτηρίου",
    image: "/images/about_mission_section_img_02_jpg.webp",
  },
  {
    date: "26-Jun-2025",
    title: "EUROPACK INDUSTRIAL SOLUTIONS 50 ΧΡΟΝΙΑ ΛΕΙΤΟΥΡΓΙΑΣ",
    image: "/images/portfolio_img1_jpg.webp",
  },
  {
    date: "29-Jul-2025",
    title: "Europack: Μισός αιώνας καινοτομίας στην βιομηχανική παραγωγή",
    image: "/images/Syskevasia_2018_40yrs-scaled-e1753782734767.jpg",
  },
];

const NewsSection = () => {
  return (
    <section className="news-section">
      <div className="news-container">

        {/* HEADER */}
        <div className="news-header">
          <div>
            <span className="news-pill">Our News</span>
            <h2 className="news-title">Our latest news and insights.</h2>
          </div>

          <a href="#" className="news-cta">
            Explore More <span>↗</span>
          </a>
        </div>

        {/* GRID */}
        <div className="news-grid">
          {newsData.map((item, index) => (
            <NewsCard key={index} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewsSection;
