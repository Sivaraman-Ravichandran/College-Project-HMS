import React, { useState, useEffect } from 'react';
import './NewsCard.css';

const NewsSlideshow = ({ newsItems }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % newsItems.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [newsItems.length]);

  return (
    <div className="news-slideshow">
      {newsItems.map((news, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          <h2>{news.title}</h2>
          <p>{news.date}</p>
          <p>{news.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsSlideshow;
