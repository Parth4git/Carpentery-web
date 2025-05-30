import React from "react";

const Footer = () => {
  return (
    <footer className="bg-amber-500 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Company */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-6">
            ABOUT COMPANY
          </h3>
          <p className="text-sm leading-relaxed">
            At Top Knot Carpentry Works LLC, we believe every piece should tell
            a story — one of quality, style, and reliability.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-6">QUICK LINKS</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#" className="hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Our Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Photo Gallery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-6">SERVICES</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#" className="hover:text-gray-900">
                Luxury Furniture Manufacturing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Interior Fit-Out Solutions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Hospitality Fit-Outs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Kitchens & Wardrobes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Custom Woodwork
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Now */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-6">CONTACT NOW</h3>
          <p className="text-sm mb-4 leading-relaxed">
            PO Box 390451 AL- Quoz Industrial Area-4 Dubai UAE
          </p>
          <p className="text-sm mb-2">
            <a href="tel:97142592890" className="hover:text-gray-900">
              97142592890
            </a>
          </p>
          <p className="text-sm">
            <a
              href="http://www.gt12uae.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900"
            >
              Topknotcw.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-md text-white">
        Copyright © 2025 Top Knot Carpentry Works | Powered By{" "}
        <span className="text-black font-semibold">Quartz Technology</span>
      </div>
    </footer>
  );
};

export default Footer;
