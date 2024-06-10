import React from 'react';

const AboutSection = () => {
    return (
        <section className="about-section py-10 bg-[#f9edf0] flex flex-col items-center justify-center" id="about">
            <div className="heading flex flex-col py-5 items-center justify-center">
                <h2 className='text-red-500 text-lg'>Who we are</h2>
                <h1 className='font-bold text-2xl'>About Our Company</h1>
            </div>
            <p className='px-32'>It has secured direct relationships with service providers and has singularly focused on investing in developing a strong technical backbone to make the recharge experience reliable, secure, intuitive and seamless for the end user. 
            <br />
            <br />
                Our specialty is to provide the recharge without gmail, facebook interface. Pay Eassy is one of the best recharge level website in the India. Pay Eassy gives you to multiple operator recharge in single balance. It means the retailer does't have to invest separately for each operator and hence saving the hassle of maintaining separate sims and mobiles for different operators.
                <br />
                <br />
                The recharge solutions have been developed and scrubbed to ensure its availability at no extra cost to the end user so that the user can transact securely from any location at his convenience. We would like to take the opportunity to thank our patrons for helping us help them and essentially for shaping our growth.
                <br />
                <br />
                Pay Eassy Service came into existence as one of the fastest online mobile recharge service provider in India. We believe in providing quality services to our customers and are constantly working towards it. As a result we are always one step ahead of our competitors and have been able to gain popularity among our users within such a short span of time</p>
        </section>
    );
};

export default AboutSection;
