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
    <section className="service-section h-[55vh] py-16 bg-gray-100" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center md:flex md:justify-between md:items-center">
          <div className="md:w-1/3 md:text-left">
            <div className="section_title animate__animated animate__fadeInUp mb-8">
              <p className="text-red-500 text-2xl">Services</p>
              <h2 className="text-3xl font-bold">We Provide Wide Range Services</h2>
            </div>
            <div className="service-btn-container animate__animated animate__fadeInUp flex  items-center md:justify-center space-x-4">
              <button
                className="slider-arrow bg-gray-200 text-black p-3 rounded-full service-swiper-button-left hover:scale-110"
              >
                <FaArrowLeft />
              </button>
              <button
                className="slider-arrow active bg-red-500 text-white rounded-full p-3 service-swiper-button-right hover:scale-110"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="swiper-container md:overflow-auto services-cont animate__animated animate__fadeInUp mt-8 md:mt-0 md:w-2/3">
            <Swiper
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
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="service-item text-center">
                    <span className="service-item-logo service-item-logo-cont-1 inline-block mb-4 text-white p-4 text-5xl bg-[#9c19c9] rounded-full">
                      <GiPentarrowsTornado />
                    </span>
                    <h4 className="text-lg font-semibold">Mobile Recharge</h4>
                    <p className="text-gray-600 mt-2">
                      We provide online mobile recharges for Airtel, Idea, Vodafone, Virgin, Videocon, MTS, Tata Indicom, Tata Docomo, Aircel, Reliance & Uninor.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="service-item text-center">
                    <span className="service-item-logo service-item-logo-cont-2 inline-block mb-4 text-white p-4 text-5xl bg-[#9c19c9] rounded-full">
                      <PiUploadThin />
                    </span>
                    <h4 className="text-lg font-semibold">DTH</h4>
                    <p className="text-gray-600 mt-2">
                      We are the most reliable online DTH recharge service provider. Our DTH service covers providers like Tata Sky, Dish TV, Sun Direct, Videocon d2h, Big TV. etc.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="service-item text-center">
                    <span className="service-item-logo service-item-logo-cont-3 inline-block mb-4 text-white p-4 text-5xl bg-[#9c19c9] rounded-full">
                      <AiOutlineSound />
                    </span>
                    <h4 className="text-lg font-semibold">Data Card Recharge</h4>
                    <p className="text-gray-600 mt-2">
                      All major data card operators like Airtel, Idea, Vodafone, MTS, Tata Indicom, Tata Docomo, Aircel, Reliance & Uninor can be recharged using our service.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="service-item text-center">
                    <span className="service-item-logo service-item-logo-cont-4 inline-block mb-4 text-white p-4 text-5xl bg-[#9c19c9] rounded-full">
                      <CiMobile4 />
                    </span>
                    <h4 className="text-lg font-semibold">Post Paid</h4>
                    <p className="text-gray-600 mt-2">
                      Postpaid recharges of all the operators can be done instantly with our system.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="service-item text-center">
                    <span className="service-item-logo service-item-logo-cont-4 inline-block mb-4 text-white p-4 text-5xl bg-[#9c19c9] rounded-full">
                      <CiMobile4 />
                    </span>
                    <h4 className="text-lg font-semibold">Utility Payment</h4>
                    <p className="text-gray-600 mt-2">Utility Payment Information.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="service-item text-center">
                    <span className="service-item-logo service-item-logo-cont-4 inline-block mb-4 text-white p-4 text-5xl bg-[#9c19c9] rounded-full">
                      <CiMobile4 />
                    </span>
                    <h4 className="text-lg font-semibold">UPI Payments</h4>
                    <p className="text-gray-600 mt-2">
                      Unified Payments Interface (UPI) is an instant real-time payment system.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
