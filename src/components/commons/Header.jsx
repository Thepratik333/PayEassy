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
    <header className="transition-all duration-300 ease-in-out w-full z-50 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
      <nav className="flex items-center justify-between p-5 container mx-auto">
        <div className="flex items-center space-x-6">
          <a href="#home" className="block z-20">
            <img src={logo} alt="brand_logo" className="h-8" />
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-lg z-20">
          <li className="list-none">
            <a href="/" className="hover:underline transition-all duration-300">Home</a>
          </li>
          <li className="list-none">
            <a href="#services" className="hover:underline transition-all duration-300">Services</a>
          </li>
          <li className="list-none">
            <a href="#about" className="hover:underline transition-all duration-300">About</a>
          </li>
          <li className="list-none">
            <a href="#works" className="hover:underline transition-all duration-300">Provider</a>
          </li>
          <li className="list-none">
            <a href="#contact" className="hover:underline transition-all duration-300">Contact</a>
          </li>
        </div>
        <div className="flex items-center space-x-6">
          <div className="hidden md:block z-20">
            <Link
              to="/login"
              className="btn bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white border border-white transition-all duration-300"
            >
              Login
            </Link>
          </div>
          <button
            onClick={toggleMenu}
            className="text-3xl p-2 rounded-md focus:outline-none md:hidden z-20"
          >
            {isMenuOpen ? <BiX /> : <BiMenuAltLeft />}
          </button>
        </div>
      </nav>
      <div className={`fixed inset-x-0 top-16 bg-white text-black p-5 md:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'} z-40`}>
        <ul className="flex flex-col space-y-5 text-lg">
          <li className="list-none">
            <a href="/" className="hover:text-blue-600 transition-colors duration-300" onClick={toggleMenu}>Home</a>
          </li>
          <li className="list-none">
            <a href="#services" className="hover:text-blue-600 transition-colors duration-300" onClick={toggleMenu}>Services</a>
          </li>
          <li className="list-none">
            <a href="#about" className="hover:text-blue-600 transition-colors duration-300" onClick={toggleMenu}>About</a>
          </li>
          <li className="list-none">
            <a href="#works" className="hover:text-blue-600 transition-colors duration-300" onClick={toggleMenu}>Provider</a>
          </li>
          <li className="list-none">
            <a href="#contact" className="hover:text-blue-600 transition-colors duration-300" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
        <div className="mt-5">
          <Link
            to="/login"
            className="btn bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-600 border border-blue-600 transition-all duration-300"
            onClick={toggleMenu}
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
