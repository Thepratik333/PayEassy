import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet"; // Sidebar from shadcn/ui
import logo from "../../assets/ilogo.png";
import "../../App.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`transition-all duration-300 ease-in-out w-full z-50 ${isScrolled
        ? "sticky top-0 shadow-lg bg-white text-gray-800"
        : "bg-gradient-to-r from-[#336fbc] to-[#707b89] text-white"
        }`}
    >
      <nav className="flex items-center justify-between p-5 container mx-auto">
        {/* Sidebar Toggle Button */}
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <BiMenuAltLeft size={32} className="text-black cursor-pointer" />
          </SheetTrigger>
          <SheetContent side="left" className="w-64 bg-white p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Menu</h2>
            </div>
            <ul className="space-y-4">
              <li>
                <SheetTrigger asChild>
                  <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
                </SheetTrigger>
              </li>
              <li>
                <SheetTrigger asChild>
                  <Link to="/details" className="text-gray-700 hover:text-blue-500">Registration & Venue</Link>
                </SheetTrigger>
              </li>
              <li>
                <SheetTrigger asChild>
                  <Link to="/publication" className="text-gray-700 hover:text-blue-500">Publication</Link>
                </SheetTrigger>
              </li>
            </ul>
          </SheetContent>
        </Sheet>

        {/* Logo aligned to the left */}
        <a href="/" className="w-40 h-20">
          <img src={logo} alt="Logo" className="w-40 h-20 object-contain" />
        </a>

        {/* Navigation Menu - Centered */}
        <ul className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 text-lg">
          <li className="list-none">
            <Link to="/" className="hover:underline transition-all duration-300">Home</Link>
          </li>
          <li className="list-none">
            <Link to="/details" className="hover:underline transition-all duration-300">Registration & Venue</Link>
          </li>
          <li className="list-none">
            <Link to="/publication" className="hover:underline transition-all duration-300">Publication</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
