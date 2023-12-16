"use client";
import React, { useState } from "react";
import data from "../../data/offersData.json";
import Image from "next/image";

type Props = {};

const Offers = (props: Props) => {
  const offersPerPage = 3; // Number of offers to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastOffer = currentPage * offersPerPage;
  const indexOfFirstOffer = indexOfLastOffer - offersPerPage;
  const currentOffers = data.offers.slice(indexOfFirstOffer, indexOfLastOffer);

  const totalPages = Math.ceil(data.offers.length / offersPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <section className="w-screen h-screen  bg-gray-100 pt-[2rem]">
      <div className="container mx-auto h-full">
        <h1 className="h1 py-[2rem]">Special Offers</h1>
        <div className="w-full h-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentOffers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white  rounded-md shadow-md w-full h-full overflow-hidden flex flex-col relative">
              <Image
                src={offer.image}
                alt={offer.title}
                width={500}
                height={500}
                className="h-1/3 w-full object-cover rounded-t-lg z-30"
              />

              {offer.membership && (
                <div className="absolute z-40 top-3 right-0  p-3 rounded-full font-semibold backdrop-blur-sm backdrop-brightness-50 text-white font-mono rounded-r-none drop-shadow-lg shadow-lg">
                  Member Exclusive
                </div>
              )}
              <div className="w-full h-2/3 flex flex-col p-3 items-start text-gray-800 ">
                <h3 className="text-xl font-bold mb-2 font-mono uppercase">
                  {offer.title}
                </h3>
                <h4 className=" mb-4 font-semibold font-serif ">
                  {offer.subtitle}
                </h4>
                <p className="text-gray-400 font-normal font-sans">
                  {offer.description}
                </p>
                <div className="p-3 flex items-start flex-col">
                  <p className="font-semibold font-mono">Offer Details:</p>
                  <ul className="list-disc pl-6 font-sans text-gray-500 font-normal">
                    <li>
                      Category: <span className="span-1">{offer.category}</span>
                    </li>
                    <li>
                      Type: <span className="span-1">{offer.offerType}</span>
                    </li>
                    <li>
                      Starting Price:
                      <span className="span-1"> ${offer.startingPrice}</span>
                    </li>
                    <li>
                      Dates: <span className="span-1">{offer.dates.start}</span>{" "}
                      to <span className="span-1">{offer.dates.end}</span>
                    </li>
                    <li>
                      Nights: <span className="span-1">{offer.nights}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" w-full flex justify-center items-center mt-[2rem] gap-5">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="font-semibold hover:underline transition-all cursor-pointer">
            Previous
          </button>
          <span className="text-gray-400 mx-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="font-semibold underline hover:text-gray-400 transition-all cursor-pointer">
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offers;
