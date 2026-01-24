import React from "react";
import "./news.css";

const NewsCard = ({ image, title, link }) => {
  return (
    <div className="news-card">
      <div className="news-image">
        <img src={image} alt={title} />
      </div>

      <div className="news-content">
        <h3>{title}</h3>
        <a href={link} className="explore hover:text-amber-500">
          Explore More →
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
