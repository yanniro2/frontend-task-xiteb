// components/Header.tsx

import React from "react";


import { FaRegUser, FaHotel, FaMobileAlt } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import Link from "next/link";




const MainHeader: React.FC = () => {
  

  return (
    <section className="bg-white p-4 text-black">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center mb-4 lg:mb-0">
          <Link
            href="/"
            className="flex items-center gap-3 capitalize font-bold">
            <FaHotel className="text-xl" /> hotel
          </Link>
        </div>

        <nav className="flex flex-col lg:flex-row items-center space-y-4 lg:space-x-4 lg:space-y-0">
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
