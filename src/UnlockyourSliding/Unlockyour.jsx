// SliderComponent.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Unlockyour.css";

const SliderComponent = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    {
      id: 1,
      title: "Study in Canada",
      image:
        "https://strapi-assets.edvoy.com/study-abroad-dunedin-c733476393.jpg",
    },
    {
      id: 2,
      title: "Study in Ireland",
      image: "https://strapi-assets.edvoy.com/Banner_4d6f639bd3.jpg",
    },
    {
      id: 3,
      title: "Study in New Zealand",
      image:
        "https://strapi-assets.edvoy.com/ff1d5b73_103f_4003_8843_3f31f6807dc0_ireland_gallery_1_a57d021b6b.jpg",
    },
  ];

  return (
    <div className="slider-container">
      <h1>Unlock your future in top study destinations</h1>
      <div>
        <Slider {...sliderSettings}>
          {slides.map((slide) => (
            <div key={slide.id} className="slider-item">
              <img
                src={slide.image}
                alt={slide.title}
                className="slider-image"
              />
              <div className="slider-caption">{slide.title}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;
