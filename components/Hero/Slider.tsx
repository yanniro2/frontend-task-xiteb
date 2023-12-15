// components/Slide.tsx
import Image from "next/image";
import React from "react";

interface SlideProps {
  heading: string;
  subheading: string;
  img: string;
}

const Slider: React.FC<SlideProps> = ({ heading, subheading, img }) => {
  return (
    <div className="w-full h-full absolute left-0 right-0 top-0 bottom-0 z-10">
      <Image
        src={img}
        alt={`Slide: ${heading}`}
        className="object-cover w-full h-full brightness-50"
        width={1000}
        height={1000}
      />
      <div className="absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2   p-3 rounded-md flex flex-col items-center justify-center drop-shadow-md">
        <h1 className="text-4xl text-white font-mono font-semibold uppercase">
          {heading}
        </h1>
        <p className="text-gray-100 capitalize tracking-wider">{subheading}</p>
      </div>
    </div>
  );
};

export default Slider;
