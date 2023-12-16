"use client";
import React, { useState } from "react";
import Data from "../../data/experienceData.json";
import Image from "next/image";

interface Offer {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  img: string;
}

const Experience = () => {
  const [hoveredOffer, setHoveredOffer] = useState<number | null>(null);

  const handleMouseEnter = (offerId: number) => {
    setHoveredOffer(offerId);
  };

  const handleMouseLeave = () => {
    setHoveredOffer(null);
  };

  return (
    <section className="w-screen h-screen flex items-start justify-center flex-col bg-white transition-all mb-[3rem]">
      <div className="container mx-auto">
        <div className="flex items-center justify-center flex-col">
          <h1 className="h1">Wonderful stays await</h1>
          <span className="font-serif text-gray-400 ">
            Indulge in a cozy getaway with our exclusive offers.
          </span>
        </div>

        <div className="w-full h-[80vh] grid grid-cols-3 grid-rows-2 gap-5 pt-[2rem] group p-3 lg:p-0">
          {Data.offers.map((offer) => (
            <div
              key={offer.id}
              className="relative w-auto h-auto group cursor-pointer"
              onMouseEnter={() => handleMouseEnter(offer.id)}
              onMouseLeave={handleMouseLeave}>
              <Image
                src={offer.img}
                alt={offer.title}
                className="w-full h-full object-cover rounded-md absolute z-40 left-0 right-0 top-0 bottom-0 brightness-50"
                width={1000}
                height={1000}
              />
              <h3 className="lg:text-xl font-bold text-white z-50 text-center font-mono absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
                {offer.title}
              </h3>
              <div
                className={`flex w-full h-full z-50 items-center justify-center flex-col group-hover:backdrop-blur-sm top-0 left-0 right-0 bottom-0 absolute rounded-lg transition-all ${
                  hoveredOffer === offer.id ? "visible" : "hidden"
                }`}>
                <h3 className="lg:text-xl font-bold text-white z-50 text-center font-mono">
                  {offer.title}
                </h3>
                <h4 className="text-gray-200 z-50 font-serif text-center">
                  {offer.subtitle}
                </h4>
                <p className="z-50 text-center font-sans text-gray-50 p-3 hidden lg:visible">
                  {offer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
