import React from 'react';
import android from '../../assets/android.svg'
import pdf from '../../assets/pdf.svg'
import doc from '../../assets/apidoc.svg'

const BlogSection = () => {
  return (
    <section className="blog-section bg-[#1f1d2b] py-8 wow fadeInUp" id="blog">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="blog-title-container wow fadeInUp">
            <div className="section_title flex flex-col items-center justify-center">
              <p className='text-red-500 text-xl font-semibold'>DOWNLOAD</p>
              <h2 className='text-white text-2xl font-bold'>You Can Download The Documents And Application From Here.</h2>
            </div>
          </div>
          <div className="swiper blog-cont wow fadeInUp w-full">
            <div className="swiper-wrapper blog-items grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="swiper-slide">
                <div className="blog-item">
                <div className='flex justify-center items-center h-[25vh]'>
                <img src={android} className='h-36 hover:scale-110 ease-in duration-200' alt="blog_image" />
                </div>
                  <div className="blog-item-desc text-white text-center">
                    <h4 className="text-red-500 text-lg">How to recharge your mobile online?</h4>
                    <p>Mobile recharges are now easier and faster with our instant online recharge services. Here’s how you can recharge your mobile online.</p>
                    <a href="#" className="read-more">Read more</a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="blog-item">
                <div className='flex justify-center items-center h-[25vh]'>
                <img src={pdf} className='h-36 hover:scale-110 ease-in duration-200' alt="blog_image" />
                </div>               
                   <div className="blog-item-desc text-white text-center">
                    <h4 className="text-red-500 text-lg">Advantages of Online Mobile Recharge</h4>
                    <p>Discover the numerous advantages of using our online mobile recharge services.</p>
                    <a href="#" className="read-more">Read more</a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="blog-item">
                <div className='flex justify-center items-center h-[25vh]'>
                <img src={doc} className='h-36 hover:scale-110 ease-in duration-200' alt="blog_image" />
                </div>               
                   <div className="blog-item-desc text-white text-center">
                    <h4 className="text-red-500 text-lg">Safe and Secure Online Payments</h4>
                    <p>Our platform ensures safe and secure online payments for all your transactions.</p>
                    <a href="#" className="read-more">Read more</a>
                  </div>
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

export default BlogSection;
