import React, { useState, useEffect } from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import LogoImage from "../assets/images/ab_logo.png"; 

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / windowHeight) * 100;

      // Set background and font color based on scroll position
      if (scrollPercentage >= 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Full Navbar for PC */}
      <nav
        className={`fixed top-0 z-50 items-center justify-between hidden mx-auto px-8 py-4 shadow-md md:flex ${
          isScrolled ? "bg-white text-black" : "bg-transparent text-white"
        } transition-colors duration-300`}
        style={{
          height: "50px",
          width: "50%", // Set a suitable width (80% of viewport)
          left: "50%", // Center the navbar
          transform: "translateX(-50%)", // Center by offsetting half its width
          fontFamily: "'Poppins', sans-serif",
          fontWeight: "300",
          fontSize: "18px",
          lineHeight: "36px",
          borderBottomLeftRadius: "345px",
          borderBottomRightRadius: "345px",
        }}
      >
        <ul className="flex items-center justify-center w-full space-x-8 text-lg font-medium">
          <li>
            <a
              href="/services"
              className="hover:text-gray-700 transition-colors duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className="hover:text-gray-700 transition-colors duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <div className={`${isScrolled ? "bg-white" : "bg-transparent"} p-6 rounded-full mt-4 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]`}>
              <a href="/">
                <img src={LogoImage} alt="Company Logo" className="h-12" />
              </a>
            </div>
          </li>
          <li>
            <a
              href="/about"
              className="hover:text-gray-700 transition-colors duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-gray-700 transition-colors duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      {/* Arrow Button for Mobile */}
      <div
        className={`md:hidden fixed top-1/4 left-2 transform -translate-y-1/2 p-2 rounded-full cursor-pointer z-50 ${
          isSidebarOpen ? "hidden" : "block"
        } ${isScrolled ? "bg-white text-black" : "bg-transparent text-white"}`}
        onClick={toggleSidebar}
      >
        <FaArrowRight size={20} />
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-[15%] left-0 bg-white bg-opacity-70 shadow-lg p-4 z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden rounded-r-lg`}
        style={{
          width: "45vw",
          height: "auto",
          maxHeight: "70vh",
          overflowY: "auto",
          borderTopRightRadius: "60px",
          borderBottomRightRadius: "60px",
        }}
      >
        {/* Close Button */}
        <button
          className="absolute text-red-500 right-4 top-4 hidden"
          onClick={toggleSidebar}
        >
          <FaTimes size={24} />
        </button>

        {/* Sidebar Links */}
        <ul className="flex flex-col items-start mt-1 space-y-4 text-lg font-medium">
          <li>
            <a
              href="/"
              className="px-4 py-2 text-black transition-colors duration-300 hover:bg-gray-200 hover:rounded-md"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="px-4 py-2 text-black transition-colors duration-300 hover:bg-gray-200 hover:rounded-md"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className="px-4 py-2 text-black transition-colors duration-300 hover:bg-gray-200 hover:rounded-md"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="px-4 py-2 text-black transition-colors duration-300 hover:bg-gray-200 hover:rounded-md"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="px-4 py-2 text-black transition-colors duration-300 hover:bg-gray-200 hover:rounded-md"
            >
              Contact
            </a>
          </li>

          <li>
            <button
              onClick={toggleSidebar}
              className="w-full text-left px-4  text-red-600 transition-colors duration-300 hover:bg-gray-200 hover:rounded-md"
            >
              Close
            </button>
          </li>

          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;