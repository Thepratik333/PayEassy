import React from "react";

function Committee() {
    return (
        <section className="container w-full max-w-[1480px] mx-auto p-8 mt-16">
            <div className="bg-gradient-to-r from-blue-200 to-blue-50 rounded-3xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Committee
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-xl font-semibold text-blue-700">Chief Patrons</h3>
                        <ul className="text-gray-700 mt-2">
                            <li>Dr. Nagesh Bhandari, Presidential Secretariat, Indus University</li>
                            <li>Dr. Ritu Bhandari, Presidential Secretariat, Indus University</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-blue-700">Patrons</h3>
                        <ul className="text-gray-700 mt-2">
                            <li>Prof. (Dr.) Sandeep Chakravorty, Executive President, Indus University</li>
                            <li>Prof. (Dr.) Vedvyas Dwivedi, Executive Vice President, Indus University</li>
                            <li>Dr. R. K Singh, Registrar, Indus University</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-xl font-semibold text-blue-700">General Chairs</h3>
                        <ul className="text-gray-700 mt-2">
                            <li>Prof. (Dr.) Rajeev Mathur, Professor & Director, IIICT, Indus University</li>
                            <li>Prof. (Dr.) K. C. Roy, Professor & Dean, IISHLS, Indus University</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-blue-700">Organising Chair</h3>
                        <p className="text-gray-700 mt-2">Prof. Bhavana Hotchandani, Assistant Professor and HOD, Computer Science, IIICT, Indus University</p>
                    </div>
                </div>
                <hr className="h-1 bg-[#e1e9f5] mt-6" />
                <h3 className="text-xl text-center font-semibold text-black mt-6">Assistant Professors, IIICT,</h3>
                <div className="mt-6">
                    <h3 className="text-xl font-semibold text-blue-700">Conveners</h3>
                    <ul className="text-gray-700 mt-2">
                        <li>Dr. Disha A. Shah, Assistant Professor, IIICT, Indus University</li>
                        <li>Mr. Kirtankumar Rathod, Assistant Professor, IIICT, Indus University</li>
                    </ul>
                </div>
                <div className="mt-6">
                    <h3 className="text-xl font-semibold text-blue-700">Organization Secretaries</h3>
                    <ul className="text-gray-700 mt-2 grid md:grid-cols-3 gap-2">
                        <li>Dr. Akshara Dave</li>
                        <li>Dr. Mukta Agrawal</li>
                        <li>Dr. Amrita Sharma</li>
                        <li>Dr. Hardiksinh Rayjada</li>
                        <li>Ms. Mansi Mehta</li>
                    </ul>
                </div>
                <div className="mt-6">
                    <h3 className="text-xl font-semibold text-blue-700">Organising Committee </h3>
                    <ul className="text-gray-700 mt-2 grid md:grid-cols-2 lg:grid-cols-4 gap-2">
                        <li>Dr. Vaishali Patel</li>
                        <li>Mr. Vivek Dave</li>
                        <li>Ms. Dolly Dave</li>
                        <li>Mr. Parimal Trivedi</li>
                        <li>Ms. Honey Shivnani</li>
                        <li>Ms. Manisha Bhatol</li>
                        <li>Ms. Hirva Gohel</li>
                        <li>Ms. Sucheta Trikha</li>
                        <li>Ms. Mita Ahuja</li>
                        <li>Ms. Bhargavi Chauhan</li>
                        <li>Ms. Archana Shrivastav</li>
                        <li>Ms. Abhilasha Waghmare</li>
                        <li>Mr. Sandip Gohil</li>
                        <li>Dr. Monika Tiwari</li>
                        <li>Ms. Aditi Mehta</li>
                        <li>Dr. Shefali Parihar</li>
                        <li>Mr. Prakash Kamar</li>
                        <li>Mr. Urmil Bhatt</li>
                        <li>Mr. Sneh Bhatt</li>
                        <li>Mr. Mitul Ghediya</li>
                    </ul>
                </div>
                <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-blue-700">Contact Information</h3>
                    <p className="text-gray-700 mt-2">For more details, please contact:</p>
                    <ul className="text-gray-700 mt-2">
                        <li>
                            <a href="tel:+919427066704" className="text-blue-600 hover:underline">
                                Dr. Disha Shah - <strong>+91 9427066704</strong>
                            </a>
                        </li>
                        <li>
                            <a href="tel:+919427950363" className="text-blue-600 hover:underline">
                                Mr. Kirtankumar Rathod - <strong>+91 9427950363</strong>
                            </a>
                        </li>
                    </ul>
                    <p className="text-gray-700 mt-2">E-mail: <a href="mailto:RSTVB-2025@indusuni.ac.in" className="text-blue-600 hover:underline">RSTVB-2025@indusuni.ac.in</a></p>
                </div>
            </div>
            {/* Footer Section */}
            <div className="flex flex-col items-center justify-center space-y-2 mt-8">
                <p className="text-lg text-gray-600 font-semibold">Made by Pratik Panchal</p>
                <p className="text-sm text-gray-500">Student of University</p>
                <p className="text-sm text-blue-500 cursor-pointer hover:underline">Contact: &nbsp;
                    <a href="tel:+918000318833" className="text-blue-600 hover:underline">
                        +91 8000318833
                    </a>
                </p>
                <div className="flex items-center space-x-2">
                    <p className="text-red-500">Indus University</p>
                    <p className="text-sm text-gray-500">© 2025 All Copyrights reserved</p>
                </div>
            </div>
        </section>
    );
}

export default Committee;
