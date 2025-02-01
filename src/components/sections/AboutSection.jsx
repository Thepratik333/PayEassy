import React from "react";

const AboutSection = () => {
  return (
    <>
    <section className="bg-gray-100 py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-[80rem] text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Indus University</h2>
        <p className="text-gray-600 leading-relaxed">
          Indus University has been established to make a noteworthy contribution to the social, economic, and cultural
          life of our country. The founders of Indus University seek to deliver the best quality education to their
          students. The three pillars on which this University firmly stands are educational wisdom, professional
          brilliance, and research & innovation, all of which aim to nurture a spirit of entrepreneurship and social
          responsibility.
        </p>
        <blockquote className="mt-4 text-xl font-semibold text-indigo-600">"ज्ञानेन प्रकाशते जगत्" - "Knowledge Enlightens the World"</blockquote>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Indus Institute of Information & Communication Technology</h3>
          <p className="text-gray-600">
            The IIICT offers UG & PG programmes in IT, computer applications, data science, and cyber security. It
            fosters the development of creative IT and managerial skills, encouraging technical entrepreneurship and
            innovation.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Department of Computer Science</h3>
          <p className="text-gray-600">
            Committed to serving society by applying IT across various sectors, the department provides an intellectually
            stimulating environment with a holistic approach to student development.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Indian Society for Technical Education (ISTE)</h3>
          <p className="text-gray-600">
            ISTE is the leading national professional society for the technical education system, contributing
            significantly to various missions of the Union Government to enhance technical education in India.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">National Conference on Viksit Bharat@2047</h3>
          <p className="text-gray-600">
            The conference explores scientific innovation, technological advancements, and management practices to
            accelerate India's progress towards becoming a developed nation by 2047. It brings together experts to
            discuss transformative solutions for a sustainable future.
          </p>
        </div>
      </div>
    </section>
    <section className="bg-gray-100 py-12 px-6 md:px-8 lg:px-16">
      <div className="w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Submission Guidelines</h2>

        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Author Details</h3>
            <p className="mt-2">
              The manuscript should be submitted with the author's details mentioned at the beginning. The author's details should include:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Full name</li>
              <li>Affiliation</li>
              <li>E-mail address</li>
            </ul>
            <p className="mt-2">The author should not be identified anywhere else in the article.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800">Manuscript Length & Format</h3>
            <p className="mt-2">
              Manuscripts should not exceed <strong>7,500 words</strong> (about <strong>15 A-4 size pages</strong>, typed one and a half space only).
            </p>
            <p>Articles should be written in clear, coherent, and concise English.</p>
            <p>Manuscripts should be submitted in <strong>MS-Word format.</strong></p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800">Tables & Figures</h3>
            <p className="mt-2">
              Tables should be numbered as <strong>Table 1, Table 2, etc.</strong> and must be referred to in the text.
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Tables should not duplicate results in graphs.</li>
              <li>Use minimal descriptive text on graphs and drawings.</li>
              <li>Tables and figures should be <strong>monochromatic</strong> and clearly readable.</li>
              <li>Avoid inserting images of tables and figures.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800">Review Process</h3>
            <p className="mt-2">
              All submitted papers will undergo a <strong>peer-review process</strong> to ensure quality and relevance.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutSection;
