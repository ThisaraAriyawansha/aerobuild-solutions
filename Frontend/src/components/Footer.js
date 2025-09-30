import React from 'react';
import logo from "../assets/images/ab_logo.png";
import "./Footer.css"; 


const Footer = () => {
  return (
    <footer className="py-12 text-white bg-[#f4f9fc] font-poppins">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 space-x-6 sm:flex-row sm:items-start sm:justify-between text-[#6b8384]">
          {/* Logo and Description */}
            <div className="container">
              <div className="flex-container">
                  <div className="content-wrapper">
                      <div className="mobile-logo">
                        <img src={logo} alt="Aerobuild Solutions Logo" className="logo"></img>
                      </div>
                      <p className="text-content drop-cap-container">
                          <span className="desktop-logo-container">
                            <img src={logo} alt="Aerobuild Solutions Logo" className="desktop-logo"></img>
                          </span>
                          At Aerobuild Solutions, a construction site is more than just a workplace—it is the foundation of progress and innovation. 
                          Our skilled professionals and advanced machinery work together to bring bold architectural visions to life. 
                          Every beam, brick, and detail reflects Aerobuild Solutions' commitment to careful planning, precision, and quality, 
                          while strict safety standards ensure the well-being of everyone on site. Materials such as steel, concrete, and timber 
                          are seamlessly integrated, guided by modern technology and expert craftsmanship. From the first sketch on a blueprint 
                          to the final finishing touch, Aerobuild Solutions transforms concepts into sustainable, lasting landmarks for 
                          future generations.
                      </p>
                  </div>
              </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 mb-6 text-center sm:mb-0 sm:text-left">
            <h4 className="mb-4 text-lg font-poppins">Navigation</h4>
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

          <div className="flex-1 text-center sm:text-left ">
            <ul className="space-y-4 text-sm leading-relaxed">
              <li className="flex items-center mb-4">
                <i className="mr-4 fas fa-map-marker-alt"></i>
                <span className="font-poppins">
                  Aerobuild Solutions (Pvt) Ltd
                  12 B, Galle Road, Matara, Sri Lanka
                </span>
              </li>
              <li className="flex items-center mb-4">
                <i className="mr-4 fas fa-envelope"></i>
                <a href="mailto:info@aerobuildsolutions.com" className="hover:underline">
                  info@aerobuildsolutions.com
                </a>
              </li>
              <li className="flex items-center mb-4">
                <i className="mr-4 fas fa-phone-alt"></i>
                <a href="tel:+94 77 678 5362" className="hover:underline">
                  +94 77 678 5362
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

      <hr className="w-3/4 mx-auto mt-10 border-t-2 text-[#6b8384]" />

      <div className="pt-4 mt-8 text-sm text-center text-[#6b8384]">
        <p>
          2024 © All Rights Reserved | Aerobuild Solutions (Pvt) Ltd 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
