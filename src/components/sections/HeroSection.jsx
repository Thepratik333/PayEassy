import React from 'react';
import hero from '../../assets/hero.png'
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    
    <section className="bg-[#f9edf0] py-10 px-10" id="home">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <span className="block text-red-500 text-2xl font-bold  mb-2 animate-fadeInUp">100% Secured</span>
            <h1 className="text-7xl text-[#15295f] font-bold mb-4 animate-fadeInUp">Pay Eassy</h1>
            <h3 className="text-lg md:text-2xl text-[#15295f] font-medium mb-4 animate-fadeInUp">India's No. 1 Recharge Site</h3>
            <p className="text-gray-700 mb-6 animate-fadeInUp">
              Pay Eassy is India's No. 1 recharge site that delivers next generation instant online pre-paid recharge solutions to end users.
            </p>
            <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4 animate-fadeInUp">
              <Link to="/login" className="bg-red-500 border-2 border-red-500 text-white py-3 px-7 rounded-full hover:bg-[#f9edf0] hover:text-red-500">Login</Link>
              <a href="#contact" className="bg-[#f9edf0] text-red-500 py-3 px-7 border-2 border-red-500 rounded-full hover:bg-red-500 hover:text-white">Contact</a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img src={hero} alt="dora_img" className="w-full max-w-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
