// components/Header.tsx

import React from "react";
import headerData from "../../data/headerData.json";
import Image from "next/image";

interface MenuItem {
  id: number;
  label: string;
  url: string;
}

interface UserData {
  name: string;
  avatar: string;
}

interface HeaderData {
  logo: string;
  menuItems: MenuItem[];
  user: UserData;
}

const Header: React.FC = () => {
  const { logo, menuItems, user } = headerData as HeaderData;

  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center mb-4 lg:mb-0">
          {/* <Image src={logo} alt="Logo" className="h-8 w-auto" width={32} height={32} /> */}
          <span className="text-white ml-2 text-lg font-semibold">
            Your Next.js App
          </span>
        </div>

        <nav className="flex flex-col lg:flex-row items-center space-y-4 lg:space-x-4 lg:space-y-0">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="text-white hover:text-gray-300">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center">
          <span className="text-white mr-2 hidden lg:inline">
            Welcome, {user.name}
          </span>
          {/* <Image
            src={user.avatar}
            alt="User Avatar"
            className="h-8 w-8 rounded-full"
            width={20}
            height={20}
          /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
