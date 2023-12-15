"use client";
import React, { useState, ChangeEvent, useEffect } from "react";
import { IoBed } from "react-icons/io5";
import { BsPersonStanding } from "react-icons/bs";
import { FaChild, FaTag } from "react-icons/fa6";
import { MdOutlineModeNight } from "react-icons/md";
import Rooms from "../Popup/Rooms";
type Props = {};

const Booking = (props: Props) => {
  const [startDate, setStartDate] = useState<string>(getTodayDate());
  const [endDate, setEndDate] = useState<string>(getTomorrowDate());
  const [numberOfNights, setNumberOfNights] = useState<number>(1);

  function getTodayDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function getTomorrowDate(): string {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const year = tomorrow.getFullYear();
    const month = (tomorrow.getMonth() + 1).toString().padStart(2, "0");
    const day = tomorrow.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const handleStartDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newStartDate = e.target.value;
    setStartDate(newStartDate);
    calculateNumberOfNights(newStartDate, endDate);
  };

  const handleEndDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newEndDate = e.target.value;
    setEndDate(newEndDate);
    calculateNumberOfNights(startDate, newEndDate);
  };

  const calculateNumberOfNights = (start: string, end: string) => {
    const startDateTime = new Date(start).getTime();
    const endDateTime = new Date(end).getTime();

    const timeDifference = endDateTime - startDateTime;
    const numberOfNights = Math.ceil(timeDifference / (1000 * 3600 * 24));

    setNumberOfNights(numberOfNights);
  };

  useEffect(() => {
    setEndDate(getTomorrowDate());
    // Calculate the number of nights initially
    calculateNumberOfNights(startDate, getTomorrowDate());
  }, [startDate]);

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
    <div className="absolute z-[60] left-1/2 bottom-0 -translate-y-1/2 gap-3 -translate-x-1/2 border-4  border-gray-800 bg-white rounded-lg drop-shadow-md w-full flex items-center justify-between">
      <div className="box-1">
        <div className="flex items-center gap-3 capitalize font-medium">
          <input
            type="date"
            id="start-date"
            name="start-date"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>
        <div className="uppercase text-white bg-gray-800 p-3 rounded-full font-semibold flex items-center gap-3">
          <div className="flex items-center gap-3">
            <span>{numberOfNights}</span>
            {numberOfNights === 1 ? (
              <>
                night <MdOutlineModeNight />
              </>
            ) : (
              <>
                nights <MdOutlineModeNight />
              </>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3 capitalize font-medium  justify-between">
          <input
            type="date"
            id="end-date"
            name="end-date"
            value={endDate}
            onChange={handleEndDateChange}
          />
        </div>
      </div>
      <div className="box-1">
        <div className="flex items-center gap-3 capitalize">
          <IoBed />
          <input
            type="number"
            value={rooms}
            onChange={handleRoomsChange}
            className="w-[2rem]"
            min={0}
          />

          <span>room</span>
        </div>
        <div className="flex items-center gap-3 capitalize">
          <BsPersonStanding />
          <input
            type="number"
            value={adults}
            min={0}
            onChange={handleAdultsChange}
            className="w-[2rem]"
          />
          <span>adult </span>
        </div>
        <div className="flex items-center gap-3 capitalize">
          <FaChild />
          <input
            type="number"
            value={children}
            onChange={handleChildrenChange}
            min={0}
            className="w-[2rem]"
          />
          <span>children </span>
        </div>
      </div>
      <div className="box-1">
        <div className="flex items-center gap-3 capitalize">
          <FaTag />
          <input
            type="text"
            name=""
            id=""
            className="w-full p-3 capitalize"
            placeholder="special code"
          />
        </div>
      </div>
      <button className="bg-gray-800 p-5 text-white uppercase font-bold font-mono ">
        search
      </button>
    </div>
  );
};

export default Booking;
