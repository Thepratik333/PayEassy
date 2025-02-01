import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import { GiPentarrowsTornado } from 'react-icons/gi';
import { PiUploadThin } from 'react-icons/pi';
import { AiOutlineSound } from 'react-icons/ai';
import { CiMobile4 } from 'react-icons/ci';

SwiperCore.use([Navigation]);

const ServiceSection = () => {
  return (
    <section className="service-section py-16 bg-gray-100" id="services">
      <div className="w-full px-4">
        <div className="w-full text-center flex flex-col  items-center">
          <div className="section_title animate__animated animate__fadeInUp mb-8">
            <h2 className="text-3xl font-bold mb-2">Call for Paper</h2>
            <p className="text-[#151212] text-xl pr-2">Original contributions from researchers describing their original, unpublished, research contribution which is not currently under review by another conference or journal and addressing state-of-the-art research are invited to share their work in the following themes but not limited to the conference tracks.
            </p>
          </div>
          <div className="swiper-container md:overflow-auto services-cont animate__animated animate__fadeInUp mt-8 md:mt-0 w-full">
            <h5 className='text-red-500 text-2xl font-bold mb-4 bg-[#dfdcef] shadow-lg rounded-lg transition-shadow duration-300'>Conference Tracks:</h5>
            <Swiper
            className='h-[16.5rem]'
              spaceBetween={20}
              slidesPerView={3}
              navigation={{
                nextEl: '.service-swiper-button-right',
                prevEl: '.service-swiper-button-left',
              }}
              loop={true}
              breakpoints={{
                360: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide>
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 min-h-[228px]">
                  <div className="service-item text-start">
                    {/* <span className="service-item-logo service-item-logo-cont-1 inline-block mb-4 text-white p-4 text-5xl bg-[#9c19c9] rounded-full">
                      <GiPentarrowsTornado />
                    </span>*/}
                    <h4 className="text-lg font-semibold">1. Innovative Technologies for Sustainable Development:</h4>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      <li>Advances in renewable energy</li>
                      <li>Smart cities and infrastructure</li>
                      <li>Sustainable agricultural practices</li>
                      <li>Water and waste management technologies</li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 min-h-[228px]">
                  <div className="service-item text-start">
                    <h4 className="text-lg font-semibold">2. Health and Biotechnology:</h4>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      <li>Healthcare innovations and digital health</li>
                      <li>Genomics and personalized medicine</li>
                      <li>Biotechnology in agriculture and industry</li>
                      <li>Strategies for combating emerging diseases</li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 min-h-[228px]">
                  <div className="service-item text-start">
                    <h4 className="text-lg font-semibold">Education and Skill Development:</h4>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      <li>Enhancing STEM education and research</li>
                      <li>Integration of technology in education</li>
                      <li>Project based & personalised learning</li>
                      <li>Bridging the digital divide</li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 min-h-[228px]">
                  <div className="service-item text-start">
                    <h4 className="text-lg font-semibold">4. Economic Growth and Technological Entrepreneurship:</h4>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      <li>Role of technology in industrial growth</li>
                      <li>Startups and innovation ecosystems</li>
                      <li>Technology-driven economic policies</li>
                      <li>Intellectual property and commercialization</li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 min-h-[228px]">
                  <div className="service-item text-start">
                    <h4 className="text-lg font-semibold">5.  Cybersecurity and Digital Infrastructure:</h4>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      <li> Advances in cybersecurity</li>
                      <li>Digital governance and policy</li>
                      <li>Emerging technologies and their implications</li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 min-h-[228px]">
                  <div className="service-item text-start">
                    <h4 className="text-lg font-semibold">6. Data Management, Analytics and Innovation</h4>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      <li>Real time cloudbase platforms</li>
                      <li>Business Intelligence Standardization</li>
                      <li>Data quality Compliance and regulation</li>
                      <li>Data privacy and protection</li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 min-h-[228px]">
                  <div className="service-item text-start">
                    <h4 className="text-lg font-semibold">7. Space Technology and Satellite Applications:</h4>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      <li>Space missions and their impact</li>
                      <li>Satellite technology for societal benefits</li>
                      <li>International collaboration in space research</li>
                      <li>Space technology for disaster management</li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 min-h-[228px]">
                  <div className="service-item text-start">
                    <h4 className="text-lg font-semibold">8. Environmental Science and Climate Change:</h4>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      <li>Technology in climate change mitigation</li>
                      <li>Environmental monitoring and management</li>
                      <li>Role of science in policy-making for climate action</li>
                      <li>Innovative solutions for environmental challenges</li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 min-h-[228px]">
                  <div className="service-item text-start">
                    <h4 className="text-lg font-semibold">9. Scientific Computing & Mathematical Modelling</h4>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      <li>Numerical Computing and Mathematical Programming</li>
                      <li>Simulations and Computational Models</li>
                      <li>Operation Research</li>
                      <li>Optimal Control and Optimization Models</li>
                      <li>Soft Intelligence and Predictive Modelling</li>
                      <li>Application of Group Theory and Applied Graph Theory</li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="md:w-1/3 md:text-left mt-5">
            <div className="service-btn-container animate__animated animate__fadeInUp flex  items-center md:justify-center space-x-4">
              <button
                className="slider-arrow text-[1.5rem] bg-gray-200 text-black p-4 rounded-[12px] service-swiper-button-left hover:scale-110"
              >
                <FaArrowLeft />
              </button>
              <button
                className="slider-arrow text-[1.5rem] active bg-red-500 text-white rounded-[12px] p-4 service-swiper-button-right hover:scale-110"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
