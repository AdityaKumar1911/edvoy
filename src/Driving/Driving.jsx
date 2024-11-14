"use client";

import { useState, useRef, useEffect } from "react";
import { IconButton } from "@mui/material"; // Example with Material UI
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./Driving.css";

const imgCdnUrl = "https://via.placeholder.com/500x400?text="; // Replace with your image CDN URL

const universities = [
  {
    name: "University of Portsmouth",
    country: "United Kingdom",
    image: `${`https://strapi-assets.edvoy.com/Banner_4d6f639bd3.jpg`}`,
  },
  {
    name: "University of Brighton",
    country: "United Kingdom",
    image: `${`https://strapi-assets.edvoy.com/ff1d5b73_103f_4003_8843_3f31f6807dc0_ireland_gallery_1_a57d021b6b.jpg`}`,
  },
  {
    name: "University of Roehampton",
    country: "United Kingdom",
    image: `${`https://strapi-assets.edvoy.com/Coventry_University_1232a9d1b0.jpg`}`,
  },
  {
    name: "Coventry University",
    country: "United Kingdom",
    image: `${imgCdnUrl}Coventry+University`,
  },
  {
    name: "University of Glasgow",
    country: "United Kingdom",
    image: `${imgCdnUrl}University+of+Glasgow`,
  },
];

export default function UniversityPartnerships() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth / cardsPerView;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      const newPosition = scrollPosition + scrollAmount;

      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-[#5E2B9B]">
        Driving excellence with our university partnerships
      </h1>

      <div className="relative flex items-center">
        {/* Left Button */}
        <IconButton
          onClick={() => scroll("left")}
          disabled={scrollPosition <= 0}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg hover:bg-gray-100 z-10"
          style={{ width: "48px", height: "48px" }}
        >
          <ChevronLeftIcon />
        </IconButton>

        <div
          id="scroll-hide"
          ref={scrollContainerRef}
          className="grid grid-flow-col auto-cols-[100%] md:auto-cols-[50%] lg:auto-cols-[33.33%] overflow-x-auto overscroll-x-contain snap-x snap-mandatory hide-scrollbar"
        >
          {universities.map((university, index) => (
            <div key={index} className="snap-start p-2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={university.image}
                  alt={university.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h2 className="text-xl font-bold mb-2">{university.name}</h2>
                  <div className="flex items-center gap-2">
                    <img
                      src={`${imgCdnUrl}UK+flag`}
                      alt="UK flag"
                      className="w-6 h-4 rounded object-cover"
                    />
                    <span className="text-sm">{university.country}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <IconButton
          onClick={() => scroll("right")}
          disabled={
            scrollContainerRef.current &&
            scrollPosition >=
              scrollContainerRef.current.scrollWidth -
                scrollContainerRef.current.clientWidth
          }
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg hover:bg-gray-100 z-10"
          style={{ width: "48px", height: "48px" }}
        >
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  );
}
