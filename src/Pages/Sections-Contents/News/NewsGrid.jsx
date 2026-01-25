import React from "react";
import NewsCard from "./NewsCard";
import "./news.css";
import {useNavigate}  from 'react-router-dom';

const NewsGrid = ({newsData}) => {
  const url = window.location.href;
  const isPage2 = url.includes("page2");
  const navigate = useNavigate(); 

  return (
    <section className="news-section">
      <div className="news-grid">
        {newsData.map((item) => (
          <NewsCard
            key={item.id}
            image={item.image}
            title={item.title}
            link={item.link}
          />
        ))}
      </div>
      <div className="w-full flex gap-4 bg-white  " > 
        {isPage2 && <button onClick={() => navigate("/category/news")} className=" rounded-full text-[9px] text-gray-500 " > <i className="ri-arrow-left-double-line"></i> Previous </button>}
         <button onClick={() => navigate("/category/news")}  className={`h-8 w-8 rounded-full ${!isPage2 ? "bg-amber-500 text-white" : ""} ${isPage2 ? "border border-gray-200 rounded-full" : ""} `} >1</button>
         <button onClick={() => navigate("/category/news/page2")} className={`h-8 w-8 rounded-full ${isPage2 ? "bg-amber-500 text-white" : ""} ${!isPage2 ? "border border-gray-200 rounded-full " : ""} `} >2</button>
         { !isPage2 && <button onClick={() => navigate("/category/news/page2")}   className=" rounded-full text-[9px] text-gray-500 " >Next <i className="ri-arrow-right-double-line"></i> </button>}
      </div>
    </section>
  );
};

export default NewsGrid;
