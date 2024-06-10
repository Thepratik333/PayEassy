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
        <section className="contact-section py-10 px-8" id="contact">
            <div className="container md:flex ">
                <div className="contact-info-cont text-start">
                    <div className="text-left">
                        <h2 className="text-3xl text-[#15295f] font-bold mb-4">Let's Connect</h2>
                    </div>
                    <p className="text-left mb-4">
                        Please fill out the form on this section to contact with me. Or call between 9 AM To 7 PM
                    </p>
                    <p className="text-left mb-4">
                        <b>Address : Pay Eassy,Pay Eassy Retail Private Limited, 3rd Floor, Nirmal Heights,,Nandi Stop, Ausa Road, Latur - 413512,Maharashtra,Latur.</b>
                    </p>
                    <a href="tel:9021690216">
                        <p className="text-left mb-4">
                            Contact No : 9021690216
                        </p>
                        </a>
                        <a href="mailto:sales@payeassy.com">
                            <p className="text-left mb-4">
                                Email ID : sales@payeassy.com
                            </p>
                        </a>
                        <a href="/">
                            <p className="text-left mb-4">
                            Terms & Conditions / Terms Of Use
                            </p>
                        </a>
                        <a href="/">
                            <p className="text-left mb-4">
                            About Us
                            </p>
                        </a>
                        <a href="/">
                            <p className="text-left mb-4">
                            Shipping Policy
                            </p>
                        </a>
                        <a href="/">
                            <p className="text-left mb-4">
                            Privacy Policy
                            </p>
                        </a>
                        <a href="/">
                            <p className="text-left mb-4">
                            Refund & Cancellation Policy
                            </p>
                        </a>
                        <div className="socialMedia flex">
                        <FaInstagram  className='mr-2 text-xl' />
                        <FaTwitter className='mr-2 text-xl'/>
                        <FiFacebook className='mr-2 text-xl'/>
                        </div>
                    </div>
                <form onSubmit={handleSubmit} className="contact-form">
                    <h3 className="text-3xl text-[#15295f] font-bold mb-4 ">Let's message me and make something together</h3>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="input-control mb-4 block w-full border rounded py-3 px-3 placeholder-gray-400"
                        placeholder="Your Name"
                    />
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="input-control mb-4 block w-full border rounded py-3 px-3 placeholder-gray-400"
                        placeholder="Your Email"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="input-control mb-4 block w-full border rounded py-3 px-3 placeholder-gray-400"
                        placeholder="Message"
                    ></textarea>
                    <div className="form-btn">
                        <button type="submit" className="btn bg-red-500 text-white text-md py-2 px-6 rounded-full">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
