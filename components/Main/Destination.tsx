"use client";
import React, { useState, useEffect } from "react";
import data from "../../data/directionData.json";
import Image from "next/image";

interface MenuItem {
  id: number;
  label: string;
  image: string;
  details: string;
}

const Destination: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(data);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(
    menuItems[0]
  ); // Set the first item as default

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value, 10);
    const selectedItem =
      menuItems.find((item) => item.id === selectedId) || null;
    setSelectedItem(selectedItem);
  };

  return (
    <section className="w-screen h-screen bg-gray-100 ">
      <div className="container mx-auto h-full flex items-center flex-col py-[2rem] ">
        <h1 className="h1 flex items-center flex-col lg:flex-row">
          Our Destinations
          <select
            onChange={handleSelectChange}
            value={selectedItem?.id}
            className="bg-transparent p-3  focus:outline-none focus:border-blue-500 font-medium text-xl font-serif border-b-gray-800 border-b-4">
            {menuItems.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </h1>

        {selectedItem && (
          <div className="w-full h-[80%] relative mt-4 lg:p-0 p-3">
            <Image
              src={selectedItem.image}
              alt={selectedItem.label}
              width={1000}
              height={1000}
              className="w-full h-full object-cover border-4 border-gray-800 rounded-lg drop-shadow"
            />

            <div className="text-gray-600 absolute lg:w-1/4 lg:h-1/2 top-1/2 right-0 backdrop-blur p-3 rounded-lg lg:-translate-x-1/2 lg:-translate-y-1/2 drop-shadow shadow-lg backdrop-brightness-50 flex flex-col justify-evenly border-4 border-white w-1/2 h-3/4 -translate-x-1/4 -translate-y-1/2">
              <h2 className="lg:text-2xl font-bold  font-mono text-white uppercase ">
                {selectedItem.label}
              </h2>
              <p className=" font-sans text-gray-300">{selectedItem.details}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Destination;
