// components/Header.tsx
"use client";
import React, { useState } from "react";
import {
  FaRegUser,
  FaHotel,
  FaMobileAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import Link from "next/link";

const MainHeader: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section className="bg-white p-4 text-gray-800 font-serif relative">
      <div className="container mx-auto flex  lg:flex-row items-center justify-between">
        <div className="w-full flex items-center  lg:mb-0 justify-between lg:w-auto">
          <Link
            href="/"
            className="flex items-center gap-3 capitalize font-bold cursor-pointer">
            <FaHotel className="text-xl" /> hotel
          </Link>

          <button
            className="text-gray-800 focus:outline-none lg:hidden"
            onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center  z-[2000] justify-evenly ">
            <button
              className="absolute top-3 right-3"
              onClick={toggleMobileMenu}>
              <IoMdCloseCircle />
            </button>
            <div
              className="w-screen h-screen absolute z-[2010] "
              onClick={toggleMobileMenu}></div>

            <Link href="/signin" className="link-3">
              <FaRegUser /> Sign in
            </Link>
            <Link href="/signin" className="link-3">
              join now
            </Link>
            <Link href="/signin" className="link-3">
              find reservation
            </Link>
            <Link href="/signin" className="link-3">
              <FaEarthAfrica />
              english
            </Link>
            <Link href="/signin" className="link-3">
              SGD
            </Link>
            <Link href="/signin" className="link-3">
              <FaMobileAlt />
            </Link>
          </nav>
        )}

        {/* Desktop Menu */}
        <nav className="hidden lg:flex lg:flex-row items-center space-y-4 lg:space-x-4 lg:space-y-0">
          <Link href="/signin" className="link-1">
            <FaRegUser /> Sign in
          </Link>
          <Link href="/signin" className="link-1">
            join now
          </Link>
          <Link href="/signin" className="link-1">
            find reservation
          </Link>
          <Link href="/signin" className="link-1">
            <FaEarthAfrica />
            english
          </Link>
          <Link href="/signin" className="link-1">
            SGD
          </Link>
          <Link href="/signin" className="link-1">
            <FaMobileAlt />
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default MainHeader;
