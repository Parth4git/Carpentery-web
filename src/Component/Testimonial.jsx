import React from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Interior Designer",
    feedback:
      "Top Knot team did a phenomenal job on my office renovation. The attention to detail and commitment to quality were beyond expectations!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Brown",
    title: "Homeowner",
    feedback:
      "Their craftsmanship is outstanding! They transformed my house beautifully, and everything was completed on time.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Sharma",
    title: "Restaurant Owner",
    feedback:
      "From design to execution, the team handled everything professionally. Highly recommend for commercial fit-outs!",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
            >
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-20 h-20 object-cover rounded-full mb-6"
              />
              <p className="text-gray-600 mb-4">"{testimonial.feedback}"</p>
              <h3 className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-orange-500 text-sm">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
