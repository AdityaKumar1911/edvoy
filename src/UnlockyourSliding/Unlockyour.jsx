"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Study in Canada",
    image:
      "https://strapi-assets.edvoy.com/University_of_Portsmouth_311f342e50.jpg",
  },
  {
    id: 2,
    name: "Study in Ireland",
    image:
      "https://strapi-assets.edvoy.com/University_of_brighton_d478adbb03.jpg",
  },
  {
    id: 3,
    name: "Study in New Zealand",
    image: "https://strapi-assets.edvoy.com/Coventry_University_1232a9d1b0.jpg",
  },
  {
    id: 4,
    name: "Study in Australia",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    name: "Study in UK",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    name: "Study in USA",
    image: "/placeholder.svg?height=400&width=600",
  },
];

export default function StudyAbroad() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const scrollToIndex = useCallback((index) => {
    if (carouselRef.current) {
      const scrollAmount = index * carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex > 0 ? prevIndex - 1 : Math.ceil(destinations.length / 3) - 1;
      scrollToIndex(newIndex);
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex < Math.ceil(destinations.length / 3) - 1 ? prevIndex + 1 : 0;
      scrollToIndex(newIndex);
      return newIndex;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      scrollToIndex(currentIndex);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex, scrollToIndex]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-purple-700 mb-8">
        Unlock your future in top study destinations
      </h1>
      <div className="relative">
        <div
          ref={carouselRef}
          className="flex overflow-x-hidden snap-x snap-mandatory"
        >
          {Array.from({ length: Math.ceil(destinations.length / 3) }).map(
            (_, groupIndex) => (
              <div
                key={groupIndex}
                className="w-full flex-shrink-0 snap-center"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {destinations
                    .slice(groupIndex * 3, groupIndex * 3 + 3)
                    .map((destination) => (
                      <div
                        key={destination.id}
                        className="relative h-64 rounded-lg overflow-hidden"
                      >
                        <img
                          src={destination.image}
                          alt={destination.name}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0  bg-opacity-40 flex items-end justify-start p-4">
                          <h2 className="text-white text-xl md:text-2xl font-semibold">
                            {destination.name}
                          </h2>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )
          )}
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Previous destinations"
        >
          <ChevronLeft className="w-6 h-6 text-purple-700" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Next destinations"
        >
          <ChevronRight className="w-6 h-6 text-purple-700" />
        </button>
      </div>
    </div>
  );
}
