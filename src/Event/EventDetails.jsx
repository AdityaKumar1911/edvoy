import React from "react";
import "./EventDetails.css";

const EventDetails = ({ event }) => {
  if (!event) return null;

  return (
    <div className="event-details">
      <div className="event-card purple-card">
        <p>{event.country}</p>
        <p>{event.time}</p>
        <h3>{event.title}</h3>
        <button className="view-details-btn">View Details</button>
      </div>
      <div className="event-card black-card">
        <h3>{event.title}</h3>
      </div>
    </div>
  );
};

export default EventDetails;
