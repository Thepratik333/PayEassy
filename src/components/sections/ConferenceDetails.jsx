import React from 'react';

const ConferenceDetails = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <head>
        <title>Indus University Conference Registration & Details</title>
      </head>
      <div className="container mx-auto p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
          {/* Registration Section */}
          <section id="registration">
            <h2 className="text-3xl font-semibold text-center text-blue-600">Registration</h2>
            <p className="text-lg text-gray-700">
              It is mandatory for at least one author of an accepted paper to register in order for the paper to appear in the Proceedings and be included in the Technical Program. If an author has more than one accepted paper, each must be registered. The registration fee includes a softcopy of the proceedings, high tea, and lunch.
            </p>
            
            <div className="mt-4">
              <h3 className="text-2xl text-gray-800 font-medium">Category</h3>
              <table className="table-auto w-full mt-4">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left">Fees Category</th>
                    <th className="px-4 py-2 text-left">Fees</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Indian Delegates (ISTE Members)</td>
                    <td className="border px-4 py-2">INR 2,360 (2000+18%GST)</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Indian Delegates (Non ISTE Members)</td>
                    <td className="border px-4 py-2">INR 2,950 (2500+18%GST)</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Foreign Delegates</td>
                    <td className="border px-4 py-2">USD 60</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-2 text-sm text-gray-500">*Registration fees do not include accommodation charges.</p>
            </div>

            <div className="mt-6">
              <p className="text-xl font-semibold text-blue-600">Payment Link:</p>
              <p className="text-blue-500 cursor-pointer hover:underline">[Insert Payment Link]</p>
              <p className="mt-2 text-xl font-semibold text-blue-600">Registration Link:</p>
              <p className="text-blue-500 cursor-pointer hover:underline">[Insert Registration Link]</p>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl text-gray-800 font-medium">Important Dates:</h3>
              <ul className="list-inside space-y-2 mt-4">
                <li className="text-lg text-gray-700">Announcement Date: February 01, 2025</li>
                <li className="text-lg text-gray-700">Paper Submission Last Date: March 15, 2025</li>
                <li className="text-lg text-gray-700">Notification of Acceptance: April 15, 2025</li>
                <li className="text-lg text-gray-700">Conference Date: May 30 - 31, 2025</li>
              </ul>
            </div>
          </section>

          {/* Venue Section */}
          <section id="venue" className="mt-12">
            <h2 className="text-3xl font-semibold text-center text-blue-600">Venue</h2>
            <p className="text-lg text-gray-700 mt-4">
              Conference Venue: Auditorium, Main Building, Indus University, Ahmedabad - 382115, Gujarat, India
            </p>
          </section>

          {/* Keynote Speakers Section */}
          <section id="keynote" className="mt-12">
            <h2 className="text-3xl font-semibold text-center text-blue-600">Keynote Speakers</h2>
            <p className="text-lg text-gray-700 mt-4">To be announced……</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ConferenceDetails;
