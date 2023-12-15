// components/Header.tsx
"use client";
import React, { useEffect, useState } from "react";
import Navigation from "../Header/Navigation";
import MainHeader from "../Header/MainHeader";

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 100; // Adjust this value based on your design
      setIsSticky(scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <MainHeader />
      <Navigation isSticky={isSticky} />
    </>
  );
};

export default Header;
