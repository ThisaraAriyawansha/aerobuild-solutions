import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 text-white bg-customGreen font-poppins">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 space-x-6 sm:flex-row sm:items-start sm:justify-between">
          {/* Logo and Description */}
          <div className="flex flex-col items-center w-full h-auto mb-6 sm:items-start sm:mb-0 lg:w-full lg-h-auto md:w-full md:h-auto sm:w-full sm:h-auto">
            <img
              src="/images/414004164_377982111404002_5386038758596751474_n 1.jpg"
              alt="Company Logo"
              className="w-full h-auto sm:w-full sm:h-auto lg:w-full lg-h-auto md:w-full md:h-auto " 
            />
          </div>

          <div className="mb-6 text-left sm:mb-0 sm:text-left">
            <p className="mr-3 text-sm leading-loose text-justify font-poppins sm:mr-0">
              Construction site is a bustling environment where buildings, roads,
              or other infrastructure projects come to life. It is filled with the sights
              and sounds of progress, including heavy machinery like cranes, excavators,
              and bulldozers, alongside teams of workers in safety gear collaborating
              to meet project goals. Safety is a top priority, with protocols in place
              to ensure the well-being of everyone involved. Materials such as steel,
              concrete, and lumber are strategically moved and assembled as blueprints
              transform into reality. The dynamic atmosphere reflects both the complexity
              and precision required to bring architectural visions to completion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 mb-6 text-left sm:mb-0 sm:text-left">
            <h4 className="mb-4 text-lg font-poppins">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm leading-relaxed font-poppins">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                Services
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                About
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:underline">
                Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-1 text-center sm:text-left">
            <ul className="space-y-4 text-sm leading-relaxed">
              <li className="flex items-center mb-4">
                <i className="mr-4 fas fa-map-marker-alt"></i>
                <span className="font-poppins">
                  Kandalama Homes (Pvt) Ltd, 2nd Mile Post, Kandalama Road, Dambulla
                </span>
              </li>
              <li className="flex items-center mb-4">
                <i className="mr-4 fas fa-envelope"></i>
                <a href="mailto:info@kandalamahomes.com" className="hover:underline">
                  info@kandalamahomes.com
                </a>
              </li>
              <li className="flex items-center mb-4">
                <i className="mr-4 fas fa-phone-alt"></i>
                <a href="tel:+947627087" className="hover:underline">
                  +94 76 65 27 087
                </a>
              </li>
              <li className="flex items-center">
                <i className="mr-4 fas fa-business-time"></i>
                <span className="font-poppins">Monday-Saturday: 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="w-3/4 mx-auto mt-10 border-t-2 border-white" />

      <div className="pt-4 mt-8 text-sm text-center border-teal-700">
        <p>
          2024 © All Rights Reserved | Kandalama Homes (Pvt) Ltd | Designed and Developed by Silicon Radon Networks (Pvt) Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
