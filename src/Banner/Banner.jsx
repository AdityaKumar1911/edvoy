import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Make your study-abroad dream a reality</h1>
        <p>
          From selecting the right course to your first day at the university,
          we help in every step of the journey.
        </p>
        <a href="#start" className="cta-button">
          Start your journey now
        </a>
      </div>
    </div>
  );
};

export default Banner;
