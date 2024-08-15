import React from 'react';
import './EventCard.css';

const EventCard = ({ event }) => {
  const isOngoing = new Date(event.date) <= new Date();
  const status = isOngoing ? 'Ongoing' : 'Upcoming';

  return (
    <div className={`event-card ${status.toLowerCase()}`} onClick={() => window.location.href = `/events/${event.title.replace(/\s+/g, '-').toLowerCase()}`}>
      <div className="image-container">
        <img src={event.image} alt={event.title} className="event-image" />
        <div className="overlay"></div>
      </div>
      <h2>{event.title}</h2>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <p>{event.description}</p>
      <span className={`event-status ${status.toLowerCase()}`}>{status}</span>
    </div>
  );
};

export default EventCard;
