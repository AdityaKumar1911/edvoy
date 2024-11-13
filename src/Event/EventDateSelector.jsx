import React from "react";
import "./EventDateSelector.css";

const EventDateSelector = ({ events, selectedDate, onDateChange }) => {
  return (
    <div className="date-selector">
      <button className="arrow-button">{"<"}</button>
      {events.map((event) => (
        <div
          key={event.date}
          className={`date-item ${
            selectedDate === event.date ? "selected" : ""
          }`}
          onClick={() => onDateChange(event.date)}
        >
          <p>{new Date(event.date).getDate()}</p>
          <p>
            {new Date(event.date).toLocaleString("default", { month: "short" })}
          </p>
        </div>
      ))}
      <button className="arrow-button">{">"}</button>
    </div>
  );
};

export default EventDateSelector;
