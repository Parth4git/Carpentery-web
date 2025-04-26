import React from "react";

const About = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 relative h-64 md:h-96 overflow-hidden rounded-2xl shadow-lg">
          <img
            src="https://previews.123rf.com/images/belchonock/belchonock1402/belchonock140203858/25873469-collage-of-working-man-and-carpentry-tools.jpg"
            alt="About Us"
            className="rounded-2xl shadow-lg object-cover w-full h-full"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-800 mb-6">
            We Provide The Beauty of Your Home
          </h2>
          <p className="text-gray-600 mb-6 font-sans text-lg">
            At Gunjan Technical Services, we specialize in high-quality fit-out
            solutions tailored to transform commercial and residential spaces
            across the UAE. With a commitment to precision, innovation, and
            efficiency, we bring your vision to life, ensuring seamless
            execution from concept to completion.
          </p>
          <div className="flex flex-col md:flex-row gap-6 mb-4">
            <ul className="text-gray-700 space-y-3 mb-4 font-sans">
              <li>✔️ Interior & Exterior Fit-Outs</li>
              <li>✔️ Customized Carpentry & Joinery</li>
              <li>✔️ Gypsum & Ceiling Works</li>
            </ul>
            <ul className="text-gray-700 space-y-3 mb-4 font-sans">
              <li>✔️ Flooring & Wall Finishes</li>
              <li>✔️ 100% Satisfaction Guarantee</li>
              <li>✔️ Electrical & Plumbing Installations</li>
            </ul>
          </div>
          <a
            href="#contact"
            className="inline-block bg-orange-500 text-white px-6 py-1 rounded hover:bg-orange-600 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
