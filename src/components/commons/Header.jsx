import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import { BiMenuAltLeft, BiX } from "react-icons/bi";
import '../../App.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const header = document.querySelector('header');
    const home = document.getElementById('home');
    console.log(home);
    const handleScroll = () => {
      if (window.scrollY > 100) {
        header.classList.add('fixed'); 
      } else {
        header.classList.remove('fixed'); 

      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (!isMenuOpen) {
      window.addEventListener('scroll', handleScroll);
      header.classList.remove('fixed');
      home.classList.remove('py-32'); 


    } else {
      window.removeEventListener('scroll', handleScroll);
      header.classList.add('fixed');
      home.classList.add('py-32'); 

    }

    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`shadow-md bg-[#f9edf0] py-5 px-10 transition-all duration-300 ease-in-out w-full z-[9999]`}>
      <nav className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <a href="#home" className="block z-20">
            <img src={logo} alt="brand_logo" className="h-7" />
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-[21px] z-20">
          <li className="text-gray-600 hover:text-gray-900 list-none ">
            <a href="/" className="text-red-500">
              Home
            </a>
          </li>
          <li className="text-gray-600 hover:text-red-500 list-none">
            <a href="#services">Services</a>
          </li>
          <li className="text-gray-600 hover:text-red-500 list-none">
            <a href="#about">About</a>
          </li>
          <li className="text-gray-600 hover:text-red-500 list-none">
            <a href="#works">Provider</a>
          </li>
          <li className="text-gray-600 hover:text-red-500 list-none">
            <a href="#contact">Contact</a>
          </li>
        </div>
        <div className="flex items-center space-x-6">
          <div className="hidden md:block z-20">
            <Link
              to="/login"
              className="btn bg-red-500 text-white px-6 py-3 rounded-full border-2 border-red-500 hover:bg-inherit hover:text-red-500"
            >
              Login
            </Link>
          </div>
          <button
            onClick={toggleMenu}
            className="text-black text-3xl p-2 rounded-md focus:outline-none md:hidden"
          >
            {isMenuOpen ? <BiX /> : <BiMenuAltLeft />}
          </button>
        </div>
      </nav>
      <div className={`inset-x-0 pb-8 top-14 p-5 bg-[#f9edf0] flex flex-col items-start space-y-5 text-[21px] ${isMenuOpen ? 'transition-all duration-300 ease-in-out translate-y-2 opacity-100 items-start z-[9999] fixed' : 'transition-all duration-300 ease-in-out translate-y-0 opacity-0 hidden '}`}>
      <ul className="ml-4">
        <li className="text-gray-600 hover:text-gray-900 list-none">
          <a href="/" className="text-red-500" onClick={toggleMenu}>
            Home
          </a>
        </li>
        <li className="text-gray-600 hover:text-red-500 list-none">
          <a href="#services" onClick={toggleMenu}>Services</a>
        </li>
        <li className="text-gray-600 hover:text-red-500 list-none">
          <a href="#about" onClick={toggleMenu}>About</a>
        </li>
        <li className="text-gray-600 hover:text-red-500 list-none">
          <a href="#works" onClick={toggleMenu}>Provider</a>
        </li>
        <li className="text-gray-600 hover:text-red-500 list-none">
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </li>
        </ul>
        <div>
          <Link
            to="/login"
            className="btn bg-red-500 text-white px-6 py-3 rounded-full border-2 border-red-500 hover:bg-[#f9edf0] hover:text-red-500"
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
