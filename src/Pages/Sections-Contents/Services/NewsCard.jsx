import { useRef } from "react";

const NewsCard = ({ item }) => {
  const imgRef = useRef(null);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

    // micro movement (0.2–0.4px feel)
    imgRef.current.style.transform = `
      translate(${x * 20}px, ${y * 20}px) scale(1.03)
    `;
  };

  const resetMove = () => {
    imgRef.current.style.transform = "translate(0,0) scale(1)";
  };

  return (
    <div className="news-card relative">
      <div
        className="news-image-wrapper"
        onMouseMove={handleMove}
        onMouseLeave={resetMove}
      >
        <img ref={imgRef} src={item.image} alt={item.title} />
      </div>

      <span className="news-date"><i className="ri-calendar-schedule-line text-orange-400 mr-1"> </i> { item.date}</span>

      <h3 className="news-card-title ">{item.title}</h3>

      <a href="#" className="news-link">
        Explore More <span>↗</span>
      </a>
    </div>
  );
};
export default NewsCard;