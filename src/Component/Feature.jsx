import React from "react";
import { Hammer, Home, Wrench } from "lucide-react"; // Importing icons from lucide-react

const features = [
  {
    icon: <Hammer size={36} className="text-orange-500" />,
    title: "Custom Fit-Outs",
    description:
      "Tailored solutions to match your vision, whether it's commercial or residential, with unmatched craftsmanship.",
    button: "Learn More",
  },
  {
    icon: <Home size={36} className="text-orange-500" />,
    title: "Interior Design",
    description:
      "Innovative designs that elevate your space’s aesthetics and functionality, brought to life by our experts.",
    button: "Explore",
  },
  {
    icon: <Wrench size={36} className="text-orange-500" />,
    title: "Maintenance Services",
    description:
      "Reliable and efficient maintenance solutions to keep your property running smoothly and looking its best.",
    button: "Get Support",
  },
];

const Feature = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Core Services
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto font-serif">
          We provide a wide range of services to meet your needs with quality,
          speed, and precision.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition hover:scale-110  shadow-orange-400"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-5">{feature.description}</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:scale-110 border-md border-amber-600 transition">
                {feature.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
