import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import { BiMenuAltLeft, BiX } from "react-icons/bi";
import '../../App.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const header = document.querySelector('header');
    const handleScroll = () => {
      if (window.scrollY > 100) {
        header.classList.add('fixed', 'shadow-lg', 'bg-white', 'text-gray-800');
      } else {
        header.classList.remove('fixed', 'shadow-lg', 'bg-white', 'text-gray-800');
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (!isMenuOpen) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="transition-all duration-300 ease-in-out w-full z-50 bg-gradient-to-r from-[#336fbc] to-[#707b89] text-white">
      <nav className="flex items-center justify-center p-5 container mx-auto">

        <div className="flex items-center space-x-8 text-lg z-20">
          <li className="list-none">
            <Link to="/" className="hover:underline transition-all duration-300">Home</Link>
          </li>
          <li className="list-none">
            <Link to="/details" className="hover:underline transition-all duration-300">Registration & Venue</Link>
          </li>
          <li className="list-none">
            <Link to="/publication" className="hover:underline transition-all duration-300">Publication</Link>
          </li>
        </div>
       
      </nav>
    
    </header>
  );
};

export default Header;
