import React from 'react';

const AboutSection = () => {
  return (
    <section className="about-section py-16 bg-[#f9edf0] flex flex-col items-center justify-center">
      <div className="heading flex flex-col py-5 items-center justify-center animate__animated animate__fadeInUp">
        <h2 className="text-red-500 text-lg font-semibold">Who We Are</h2>
        <h1 className="font-bold text-2xl md:text-4xl mt-2 text-center">About Our Company</h1>
      </div>
      <p className="max-w-4xl text-center px-5 md:px-20 lg:px-32 text-gray-700 leading-relaxed animate__animated animate__fadeInUp animate__delay-1s">
        It has secured direct relationships with service providers and has singularly focused on investing in developing a strong technical backbone to make the recharge experience reliable, secure, intuitive and seamless for the end user.
        <br />
        <br />
        Our specialty is to provide the recharge without Gmail, Facebook interface. Pay Eassy is one of the best recharge level websites in India. Pay Eassy gives you multiple operator recharge in a single balance. It means the retailer doesn't have to invest separately for each operator and hence saving the hassle of maintaining separate sims and mobiles for different operators.
        <br />
        <br />
        The recharge solutions have been developed and scrubbed to ensure its availability at no extra cost to the end user so that the user can transact securely from any location at his convenience. We would like to take the opportunity to thank our patrons for helping us help them and essentially for shaping our growth.
        <br />
        <br />
        Pay Eassy Service came into existence as one of the fastest online mobile recharge service providers in India. We believe in providing quality services to our customers and are constantly working towards it. As a result, we are always one step ahead of our competitors and have been able to gain popularity among our users within such a short span of time.
      </p>
    </section>
  );
};

export default AboutSection;
