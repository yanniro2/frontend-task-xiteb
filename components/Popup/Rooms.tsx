"use client";
import React, { useState } from "react";
import { BsPersonStanding } from "react-icons/bs";
import { FaChild, FaTag } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
const RoomBooking: React.FC = () => {
  const [rooms, setRooms] = useState<number>(1);
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);

  const handleRoomsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRooms = parseInt(e.target.value, 10) || 1;
    setRooms(newRooms);
    updateAdultsAndChildren(newRooms);
  };

  const handleAdultsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAdults = parseInt(e.target.value, 10) || 0;
    setAdults(newAdults);
    updateRooms(newAdults);
  };

  const handleChildrenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChildren = parseInt(e.target.value, 10) || 0;
    setChildren(newChildren);
    updateRooms(adults, newChildren);
  };

  const updateAdultsAndChildren = (newRooms: number) => {
    // Your logic to determine the number of adults and children based on rooms
    // For example, you can consider 2 adults per room and 1 child per room
    const newAdults = newRooms * 2;
    const newChildren = newRooms;
    setAdults(newAdults);
    setChildren(newChildren);
  };

  const updateRooms = (numAdults: number, numChildren: number = 0) => {
    // Your logic to determine the number of rooms needed based on adults and children
    // For example, you can consider 2 adults or 1 child per room
    const totalPeople = numAdults + numChildren;
    const newRooms = Math.ceil(totalPeople / 2);
    setRooms(newRooms);
  };

  return (
    <div className="box-1">
      <div className="flex items-center gap-3 capitalize">
        <IoBed />
        <input type="number" value={rooms} onChange={handleRoomsChange} />

        <span>room</span>
      </div>
      <div className="flex items-center gap-3 capitalize">
        <BsPersonStanding />
        <input type="number" value={adults} onChange={handleAdultsChange} />
        <span>adult </span>
      </div>
      <div className="flex items-center gap-3 capitalize">
        <FaChild />
        <input type="number" value={children} onChange={handleChildrenChange} />
        <span>children </span>
      </div>
    </div>
  );
};

export default RoomBooking;
