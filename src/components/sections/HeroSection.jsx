import React from 'react';
import hero from '../../assets/hero.png';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-20 px-10" id="home">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <span className="block text-yellow-300 text-2xl font-bold mb-2 animate-fadeInUp">100% Secured</span>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-4 animate-fadeInUp">Pay Eassy</h1>
            <h3 className="text-xl md:text-2xl font-medium mb-4 animate-fadeInUp">India's No. 1 Recharge Site</h3>
            <p className="text-lg md:text-xl mb-6 animate-fadeInUp">
              Pay Eassy is India's No. 1 recharge site that delivers next generation instant online pre-paid recharge solutions to end users.
            </p>
            <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4 animate-fadeInUp">
              <Link to="/login" className="bg-yellow-300 border-2 border-yellow-300 text-purple-800 py-3 px-7 rounded-full hover:bg-white hover:text-yellow-300 transition-all duration-300">Login</Link>
              <a href="#contact" className="bg-white text-red-500 py-3 px-7 border-2 border-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300">Contact</a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img src={hero} alt="hero_img" className="w-full max-w-lg rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
