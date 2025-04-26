import React from "react";

const Portifolio = () => {
  const portfolioImages = [
    "/Photos, Video & Logo/WhatsApp Image 2025-04-21 at 6.44.19 PM.jpeg",
    "/Photos, Video & Logo/WhatsApp Image 2025-04-22 at 11.05.46 AM (1).jpeg",
    "/Photos, Video & Logo/WhatsApp Image 2025-04-21 at 6.44.18 PM (1).jpeg",
    "/Photos, Video & Logo/WhatsApp Image 2025-04-21 at 6.44.59 PM.jpeg",
    "/Photos, Video & Logo/WhatsApp Image 2025-04-21 at 6.44.24 PM.jpeg",
    "/Photos, Video & Logo/WhatsApp Image 2025-04-21 at 6.44.19 PM (1).jpeg",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Our Portfolio
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolioImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg group"
            >
              <img
                src={img}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portifolio;
