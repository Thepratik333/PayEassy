import React from 'react';
import '../../App.css';
import build2 from '../../assets/Building2.jpg';
import indus3 from '../../assets/indus3.png';
import indus4 from '../../assets/indus4.png';
import indus5 from '../../assets/indus5.png';

const HeroSection = () => {
  return (
    <section 
      className={`build text-white py-20 px-10`} 
      id="home"
    >
      <div className="container lg:mx-auto lg:px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-6">Welcome to Indus University</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <img src={indus3} alt="hero_img" className="w-64 rounded-lg shadow-lg" />
          <div className='flex gap-4'>
            <img src={indus5} alt="hero_img" className="w-32 rounded-lg shadow-lg bg-white" />
            <img src={indus4} alt="hero_img" className="w-32 rounded-lg shadow-lg bg-white" />
          </div>
        </div>

        {/* Conference Section */}
        <div className="mt-16 bg-white bg-opacity-80 text-gray-900 p-3 lg:p-8 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex-1 text-left">
            <h2 className="text-3xl font-bold text-[#644583] mb-2">National Conference</h2>
            <h3 className="text-2xl font-semibold mb-2">on</h3>
            <h3 className="text-xl font-bold text-[#8e3f44] mb-4">Role of Science & Technology in Viksit Bharat@2047</h3>
            <p className="text-lg font-semibold text-gray-700">(30 - 31 May, 2025)</p>
          </div>
          <div className="flex-1 border-l-2 border-gray-300 lg:pl-6 text-[1.1rem] font-semibold">
            <p className="text-lg text-gray-800">Organized by</p>
            <p className="text-gray-700">Department of Computer Science</p>
            <p className="text-gray-700">Indus Institute of Information and Communication Technology</p>
            <p className="text-gray-700">Indus University</p>
            <p className="text-gray-700">Rancharda, Via: Shilaj, Ahmedabad - 382115, Gujarat, India.</p>
          </div>
          <div className="flex-1 border-l-2 border-gray-300 lg:pl-6 text-[1.1rem] font-semibold h-[11.6rem]">
            <p className="text-lg font-semibold text-gray-800">Sponsored By</p>
            <p className="text-gray-700">Indian Society for Technical Education (ISTE)</p>
            <p className="text-gray-700">Shaheed Jeet Singh Marg, Near Katwaria Sarai,</p>
            <p className="text-gray-700">Opp. Sanskrit Vidyapeeth, IIT Campus,</p>
            <p className="text-gray-700">New Delhi - 110 016</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
