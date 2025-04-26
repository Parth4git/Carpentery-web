import React from "react";

const ContactUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-8xl mx-auto px-2 flex flex-col md:flex-row items-center gap-12 bg-amber-500">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Get In Touch
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-white mb-2 text-xl">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border  bg-white border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            <div>
              <label className="block text-white mb-2 text-xl">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border bg-white border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            <div>
              <label className="block text-white mb-2 text-xl">Message</label>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border  bg-white border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-800 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/Photos, Video & Logo/WhatsApp Image 2025-04-22 at 11.05.45 AM.jpeg"
            alt="Contact Us"
            className="rounded-2xl shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
