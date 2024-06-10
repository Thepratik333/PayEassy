import React from 'react';
import one from '../../assets/1.jpg'
import two from '../../assets/2.png'
import three from '../../assets/3.jpg'
import four from '../../assets/4.jpg'
import five from '../../assets/5.png'
import six from '../../assets/6.jpg'
import seven from '../../assets/7.jpg'
import eight from '../../assets/8.jpg'


const WorksSection = () => {
  return (
    <section className="works-section wow py-10 fadeInUp" id="works">
      <div className="container min-w-[98vw]">
        <div className="flex flex-col w-full items-center">
          <div className="works-title-container wow fadeInUp md:w-1/2">
            <div className="section_title flex flex-col items-center justify-center">
              <p className='text-red-500 text-center font-semibold py-2'>Provide mobile top-up services and DTH TV recharge for your customers in minutes</p>
              <h2 className='text-[#15295f] font-bold text-3xl py-2'>Our Service Providers</h2>
            </div>
          </div>
          <div className="min-w-[98vw] px-8 works-cont wow fadeInUp md:w-1/2">
            <div className="swiper-wrapper works-items grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="swiper-slide">
                <div className="works-item">
                  <img src={one} className='hover:scale-110 ease-in duration-200' alt="work_image" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="works-item">
                  <img src={two} className='hover:scale-110 ease-in duration-200' alt="work_image" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="works-item">
                  <img src={three} className='hover:scale-110 ease-in duration-200' alt="work_image" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="works-item">
                  <img src={four} className='hover:scale-110 ease-in duration-200' alt="work_image" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="works-item">
                  <img src={five} className='hover:scale-110 ease-in duration-200' alt="work_image" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="works-item">
                  <img src={six} className='hover:scale-110 ease-in duration-200' alt="work_image" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="works-item">
                  <img src={seven} className='hover:scale-110 ease-in duration-200' alt="work_image" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="works-item">
                  <img src={eight} className='hover:scale-110 ease-in duration-200' alt="work_image" />
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
