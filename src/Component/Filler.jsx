import React from "react";

const Filler = () => {
  return (
    <div className="bg-orange-400 py-16 items-center flex flex-col justify-center">
      <h2 className="text-3xl md:text-6xl font-bold text-center text-white mb-10">
        Let’s Create Something Exceptional
      </h2>
      <p className="text-lg text-center text-white mb-8 max-w-2xl mx-auto">
        At Top Knot, we believe in the power of collaboration. Whether you have
        a clear vision or need guidance, our team is here to help you every step
        of the way.
      </p>
      <p className="text-lg text-center text-white mb-8 max-w-2xl mx-auto">
        Contact us today to discuss your project and discover how we can bring
        your ideas to life with our expertise and dedication.
      </p>
      <button className="bg-white text-orange-400  px-6 py-2 rounded hover:scale-110 hover:border-2 border-amber-600 transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default Filler;
