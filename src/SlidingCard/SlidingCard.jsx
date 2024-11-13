import { useState } from "react";
import { ChevronLeft, ChevronRight, PlayCircle } from "@mui/icons-material";
import { Button } from "@mui/material";
import "./SlidingCard.css";

export default function Component() {
  const [activeTab, setActiveTab] = useState("students");
  const [currentSlide, setCurrentSlide] = useState(0);

  const studentTestimonials = [
    {
      name: "JYOTISMAN",
      course: "MSc Digital Marketing, UWE Bristol",
      image: "/placeholder.svg?height=400&width=300",
      color: "bg-red-500",
    },
    {
      name: "MAANWI",
      course: "Business Analytics, University of Leeds",
      image: "/placeholder.svg?height=400&width=300",
      color: "bg-purple-500",
    },
    {
      name: "RAHUL",
      course: "MBA, University of Glasgow",
      image: "/placeholder.svg?height=400&width=300",
      color: "bg-blue-500",
    },
    {
      name: "SNEHA",
      course: "MSc Computer Science, King's College London",
      image: "/placeholder.svg?height=400&width=300",
      color: "bg-green-500",
    },
    {
      name: "ASHWIN",
      course: "PhD in Data Science, Imperial College London",
      image: "/placeholder.svg?height=400&width=300",
      color: "bg-orange-500",
    },
    {
      name: "PRIYA",
      course: "MA in Psychology, University of Birmingham",
      image: "/placeholder.svg?height=400&width=300",
      color: "bg-pink-500",
    },
    {
      name: "ANJALI",
      course: "MSc Biotechnology, University of Manchester",
      image: "/placeholder.svg?height=400&width=300",
      color: "bg-indigo-500",
    },
    {
      name: "VIKRAM",
      course: "MSc Artificial Intelligence, University of Edinburgh",
      image: "/placeholder.svg?height=400&width=300",
      color: "bg-teal-500",
    },
  ];

  const partnerTestimonials = [
    {
      name: "UNIVERSITY OF BRISTOL",
      description: "A top-ranked UK university with world-class research",
      image: "/placeholder.svg?height=400&width=300",
      color: "bg-blue-500",
    },
    {
      name: "COVENTRY UNIVERSITY",
      description: "Leading modern university with innovative courses",
      image: "/placeholder.svg?height=400&width=300",
      color: "bg-green-500",
    },
    {
      name: "UNIVERSITY OF LEEDS",
      description: "Known for excellence in teaching and research",
      image: "/placeholder.svg?height=400&width=300",
      color: "bg-yellow-500",
    },
    {
      name: "IMPERIAL COLLEGE LONDON",
      description:
        "A world-class institution with a focus on science and engineering",
      image: "/placeholder.svg?height=400&width=300",
      color: "bg-purple-500",
    },
    {
      name: "UNIVERSITY OF EDINBURGH",
      description: "Historical and globally recognized for academic excellence",
      image: "/placeholder.svg?height=400&width=300",
      color: "bg-orange-500",
    },
    {
      name: "UNIVERSITY OF MANCHESTER",
      description: "Renowned for its contributions to research and innovation",
      image: "/placeholder.svg?height=400&width=300",
      color: "bg-red-500",
    },
    {
      name: "UNIVERSITY OF GLASGOW",
      description:
        "One of the oldest and most prestigious universities in the UK",
      image: "/placeholder.svg?height=400&width=300",
      color: "bg-indigo-500",
    },
    {
      name: "KING'S COLLEGE LONDON",
      description:
        "Leading research-focused university located in the heart of London",
      image: "/placeholder.svg?height=400&width=300",
      color: "bg-teal-500",
    },
  ];

  const testimonials =
    activeTab === "students" ? studentTestimonials : partnerTestimonials;

  const cardsPerPage = 3;
  const totalSlides = Math.ceil(testimonials.length / cardsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentSlide(0);
  };

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#5D2DEF] mb-8 max-w-2xl">
            Don't just take our word. Hear it from our students & partners!
          </h2>

          <div className="flex gap-4 mb-8">
            <Button
              variant={activeTab === "students" ? "contained" : "outlined"}
              onClick={() => handleTabChange("students")}
              className={`rounded-full btn-3d ${
                activeTab === "students" ? "btn-3d-active" : ""
              }`}
            >
              Students
            </Button>
            <Button
              variant={activeTab === "partners" ? "contained" : "outlined"}
              onClick={() => handleTabChange("partners")}
              className={`rounded-full btn-3d ${
                activeTab === "partners" ? "btn-3d-active" : ""
              }`}
            >
              Partners
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-[28%] px-1 sm:px-2">
                  <div
                    className={`relative rounded-xl p-3 sm:p-4 ${testimonial.color} transform rotate-1 transition-transform hover:rotate-0 duration-300 h-full`}
                  >
                    <div className="text-white text-md sm:text-lg font-semibold mb-1 sm:mb-3">
                      {testimonial.name}
                    </div>
                    <div
                      className="relative aspect-[3/4] mb-1 sm:mb-3"
                      style={{ backgroundColor: "aliceblue" }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-lg object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                      </div>
                    </div>
                    <div className="text-white/80 text-xs sm:text-sm">
                      {activeTab === "students"
                        ? "Journey with Edvoy"
                        : "Proud Partner"}
                    </div>
                    <div className="text-white text-xs sm:text-sm mt-1">
                      {activeTab === "students"
                        ? testimonial.course
                        : testimonial.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-4">
          <Button
            onClick={prevSlide}
            variant="outlined"
            className="rounded-full btn-3d"
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </Button>
          <Button
            onClick={nextSlide}
            variant="outlined"
            className="rounded-full btn-3d"
            aria-label="Next slide"
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
