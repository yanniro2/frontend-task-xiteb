// Navigation.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import SubMenus from "./SubMenus";
import headerData from "../../data/headerData.json";

interface Section {
  id: number;
  title: string;
  url: string;
}

interface SubMenu {
  id: number;
  dec: string;
  sections: Section[];
}

interface MenuItem {
  id: number;
  label: string;
  url: string;
  sub?: SubMenu[];
  footer?: string;
}

const Header: React.FC = () => {
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveSubMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveSubMenu(null);
  };

  return (
    <header className="bg-gray-800 text-white font-mono relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <nav className="flex flex-col lg:flex-row items-center space-y-4 lg:space-x-4 lg:space-y-0">
          {headerData.menuItems.map((item, index) => (
            <div
              key={item.id}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}>
              <Link
                href={item.url}
                className="text-white flex items-center gap-2 uppercase font-medium hover:bg-white hover:text-gray-800 transition-all p-3">
                {item.label}
              </Link>

              {item.sub && activeSubMenu === index && (
                <SubMenus submenus={item.sub} footer={item.footer} />
              )}
            </div>
          ))}
        </nav>

        <button>Find a Hotel</button>
      </div>
    </header>
  );
};

export default Header;
