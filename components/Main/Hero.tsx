"use client";
import React, { useState, useEffect } from "react";
import data from "../../data/sliderData.json";
import Slider from "../Hero/Slider";
import { GrFormNext } from "react-icons/gr";
import Booking from "../Hero/Booking";
type Props = {};

const Hero = (props: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + data.length) % data.length);
  };
  return (
    <section className="w-screen h-[80vh] relative  ">
      <Slider
        heading={data[currentSlide].heading}
        subheading={data[currentSlide].subheading}
        img={data[currentSlide].img}
      />
      <div className="container mx-auto relative h-full">
        <div className="absolute z-50 w-full h-full flex items-center justify-between">
          <button onClick={goToPrevSlide} className="cursor-pointer">
            <GrFormNext className="rotate-180 slider-btn" />
          </button>

          <button onClick={goToNextSlide}>
            <GrFormNext className="slider-btn" />
          </button>
        </div>

        <div className="absolute z-[60] left-1/2 top-5 -translate-y-1/2 flex items-center gap-3 -translate-x-1/2">
          {data.map((item) => (
            <div
              key={item.id}
              className={`w-3 h-3 rounded-full   ${
                item.id === currentSlide + 1
                  ? "bg-gray-300 border-white border-4"
                  : "bg-transparent border-gray-800 border-2"
              }`}></div>
          ))}
        </div>
        <Booking />
      </div>
    </section>
  );
};

export default Hero;
