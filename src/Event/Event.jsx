"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const events = [
  {
    day: "21",
    month: "Nov",
    title: "Workshop on AI",
    timeIndia: "06:00 pm - 07:00 pm",
    timeUK: "12:30 pm - 01:30 pm",
    timeUS: "07:00 am - 08:00 am",
    image: "https://via.placeholder.com/500x400?text=Workshop+on+AI",
  },
  {
    day: "26",
    month: "Nov",
    title: "Coding Bootcamp",
    timeIndia: "06:30 pm - 08:00 pm",
    timeUK: "01:00 pm - 02:30 pm",
    timeUS: "08:00 am - 09:30 am",
    image: "https://via.placeholder.com/500x400?text=Coding+Bootcamp",
  },
  {
    day: "28",
    month: "Nov",
    title: "React Workshop",
    timeIndia: "07:00 pm - 08:30 pm",
    timeUK: "01:30 pm - 03:00 pm",
    timeUS: "08:30 am - 10:00 am",
    image: "https://via.placeholder.com/500x400?text=React+Workshop",
  },
  {
    day: "30",
    month: "Nov",
    title: "Data Science Seminar",
    timeIndia: "05:00 pm - 06:30 pm",
    timeUK: "11:30 am - 01:00 pm",
    timeUS: "06:30 am - 08:00 am",
    image: "https://via.placeholder.com/500x400?text=Data+Science+Seminar",
  },
  {
    day: "5",
    month: "Dec",
    title: "IELTS Masterclass - Speaking",
    timeIndia: "06:30 pm - 07:30 pm",
    timeUK: "01:00 pm - 02:00 pm",
    timeUS: "08:00 am - 09:00 am",
    image: "https://via.placeholder.com/500x400?text=IELTS+Masterclass",
  },
  {
    day: "10",
    month: "Dec",
    title: "Python for Data Analysis",
    timeIndia: "06:00 pm - 07:30 pm",
    timeUK: "12:30 pm - 02:00 pm",
    timeUS: "07:00 am - 08:30 am",
    image: "https://via.placeholder.com/500x400?text=Python+for+Data+Analysis",
  },
  {
    day: "15",
    month: "Dec",
    title: "Machine Learning Basics",
    timeIndia: "06:00 pm - 08:00 pm",
    timeUK: "12:30 pm - 02:30 pm",
    timeUS: "07:00 am - 09:00 am",
    image: "https://via.placeholder.com/500x400?text=Machine+Learning+Basics",
  },
  {
    day: "20",
    month: "Dec",
    title: "Web Development Fundamentals",
    timeIndia: "05:00 pm - 06:30 pm",
    timeUK: "11:30 am - 01:00 pm",
    timeUS: "06:30 am - 08:00 am",
    image:
      "https://via.placeholder.com/500x400?text=Web+Development+Fundamentals",
  },
  {
    day: "25",
    month: "Dec",
    title: "JavaScript Deep Dive",
    timeIndia: "07:00 pm - 08:30 pm",
    timeUK: "01:30 pm - 03:00 pm",
    timeUS: "08:30 am - 10:00 am",
    image: "https://via.placeholder.com/500x400?text=JavaScript+Deep+Dive",
  },
  {
    day: "30",
    month: "Dec",
    title: "End of Year Celebration",
    timeIndia: "06:00 pm - 09:00 pm",
    timeUK: "12:30 pm - 03:30 pm",
    timeUS: "07:00 am - 10:00 am",
    image: "https://via.placeholder.com/500x400?text=End+of+Year+Celebration",
  },
];

export default function UpcomingEvents() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 200;
      const newPosition =
        direction === "left"
          ? Math.max(0, scrollPosition - scrollAmount)
          : Math.min(
              containerRef.current.scrollWidth -
                containerRef.current.clientWidth,
              scrollPosition + scrollAmount
            );
      setScrollPosition(newPosition);
      containerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setScrollPosition(
          Math.min(
            scrollPosition,
            containerRef.current.scrollWidth - containerRef.current.clientWidth
          )
        );
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [scrollPosition]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold text-center mb-12 text-[#5E2B9B]">
        Upcoming Events
      </h1>

      <div className="relative">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2"
          onClick={() => scroll("left")}
          disabled={scrollPosition === 0}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div
          ref={containerRef}
          className="flex overflow-x-hidden gap-4 mb-8 px-12"
        >
          {events.map((event, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-24 h-24 rounded-lg flex flex-col items-center justify-center cursor-pointer
                ${
                  index === activeEventIndex
                    ? "bg-[#5E2B9B] text-white"
                    : "bg-gray-100 text-gray-500"
                }`}
              onClick={() => setActiveEventIndex(index)}
            >
              <div className="text-3xl font-bold">{event.day}</div>
              <div className="text-sm">{event.month}</div>
            </div>
          ))}
        </div>

        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2"
          onClick={() => scroll("right")}
          disabled={
            containerRef.current &&
            scrollPosition >=
              containerRef.current.scrollWidth -
                containerRef.current.clientWidth
          }
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="rounded-2xl overflow-hidden shadow-lg">
        <div className="flex flex-col md:flex-row bg-white">
          <div className="w-full md:w-1/2 p-8 bg-gradient-to-r from-[#5E2B9B] to-[#9747FF] text-white">
            <div className="text-5xl font-bold mb-4">
              {events[activeEventIndex].day}
            </div>
            <div className="text-2xl mb-6">
              {events[activeEventIndex].month}
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <div className="font-medium">India</div>
                <div>{events[activeEventIndex].timeIndia}</div>
              </div>
              <div>
                <div className="font-medium">United Kingdom</div>
                <div>{events[activeEventIndex].timeUK}</div>
              </div>
              <div>
                <div className="font-medium">United States</div>
                <div>{events[activeEventIndex].timeUS}</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">
              {events[activeEventIndex].title}
            </h2>

            <button className="bg-white text-[#5E2B9B] hover:bg-gray-100 px-4 py-2 rounded">
              View Details
            </button>
          </div>

          <div className="w-full md:w-1/2 h-64 md:h-auto">
            <img
              src={events[activeEventIndex].image}
              alt={events[activeEventIndex].title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
