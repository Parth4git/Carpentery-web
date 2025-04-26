import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Lucide icons, or replace with SVGs

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      {/* Top Info Section */}
      <div className="bg-orange-400 w-full text-white text-sm px-6 py-2 flex justify-between items-center">
        <div>
          Email:{" "}
          <a href="mailto:tkcarpentry196@gmail.com" className="hover:underline">
            tkcarpentry196@gmail.com
          </a>
        </div>
        <div>
          Phone:{" "}
          <a href="tel:+917142592890" className="hover:underline">
            +91 7142592890
          </a>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-8xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* Logo Section */}
            <img
              src="/logo-carpentery.jpg"
              alt="Logo"
              className="h-12 w-28 rounded-full"
            />
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-10 text-gray-700 font-semibold">
            <a href="#" className="hover:text-orange-600">
              Home
            </a>
            <a href="#" className="hover:text-orange-600">
              About Us
            </a>
            <a href="#" className="hover:text-orange-600">
              Our Services
            </a>
            <a href="#" className="hover:text-orange-600">
              Gallery
            </a>
            <a href="#" className="hover:text-orange-600">
              Contact Us
            </a>
            <button className="bg-orange-400 text-white px-4 py-2 ml-8 rounded hover:bg-orange-600 transition duration-300">
              Get a Quote
            </button>
          </div>
        </div>

        {/* Mobile Nav Links */}
        {isOpen && (
          <div className="md:hidden flex flex-col px-6 pb-4 space-y-3 text-gray-700 font-medium">
            <a href="#" className="hover:text-orange-600">
              Home
            </a>
            <a href="#" className="hover:text-orange-600">
              About Us
            </a>
            <a href="#" className="hover:text-orange-600">
              Our Services
            </a>
            <a href="#" className="hover:text-orange-600">
              Gallery
            </a>
            <a href="#" className="hover:text-orange-600">
              Contact Us
            </a>
            <button className="bg-orange-400 text-white px-3 py-2  rounded hover:bg-orange-600 transition duration-300 w-fit">
              Get a Quote
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
