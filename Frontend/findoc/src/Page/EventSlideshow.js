// EventSlideshow.jsx
import React, { useState, useEffect } from "react";
import "./EventSlideshow.css";

const EventSlideshow = ({ events }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % events.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [events.length]);

  return (
    <div className="event-slideshow">
      {events.map((event, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <img src={event.image} alt={event.title} className="slide-image" />
          <div className="slide-info">
            <h2>{event.title}</h2>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventSlideshow;
