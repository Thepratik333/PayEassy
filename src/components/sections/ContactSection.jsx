import React, { useState } from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData); 
    };

    return (
        <section className="contact-section py-10 px-8 bg-gray-100" id="contact">
            <div className="container md:flex justify-between items-center">
                <div className="contact-info-cont text-start mr-8">
                    <div className="text-left mb-8">
                        <h2 className="text-3xl text-[#15295f] font-bold mb-4">Let's Connect</h2>
                        <p className="text-gray-600">
                            Please fill out the form below to contact us, or feel free to call us between 9 AM to 7 PM.
                        </p>
                    </div>
                    <p className="text-gray-600 mb-8">
                        <b>Address:</b> Pay Eassy, Pay Eassy Retail Private Limited, 3rd Floor, Nirmal Heights, Nandi Stop, Ausa Road, Latur - 413512, Maharashtra, Latur.
                    </p>
                    <p className="text-gray-600 mb-8">
                        <b>Contact No:</b> <a href="tel:9021690216">9021690216</a>
                    </p>
                    <p className="text-gray-600 mb-8">
                        <b>Email ID:</b> <a href="mailto:sales@payeassy.com">sales@payeassy.com</a>
                    </p>
                    <div className="socialMedia flex mb-8">
                        <FaInstagram className='mr-4 text-xl transition duration-500 ease-in-out transform hover:scale-110' />
                        <FaTwitter className='mr-4 text-xl transition duration-500 ease-in-out transform hover:scale-110'/>
                        <FiFacebook className='mr-4 text-xl transition duration-500 ease-in-out transform hover:scale-110'/>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="contact-form w-full md:w-1/2">
                    <h3 className="text-3xl text-[#15295f] font-bold mb-4">Let's message and make something together</h3>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="input-control mb-4 block w-full border rounded py-3 px-4 placeholder-gray-400 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Your Name"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="input-control mb-4 block w-full border rounded py-3 px-4 placeholder-gray-400 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Your Email"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="input-control mb-4 block w-full border rounded py-3 px-4 placeholder-gray-400 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Message"
                    ></textarea>
                    <div className="form-btn">
                        <button type="submit" className="btn bg-red-500 text-white text-md py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-110">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
