import React, { useState } from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Full Navbar for PC (unchanged) */}
      <nav
        className="fixed top-0 z-50 items-center justify-between hidden w-full px-16 py-4 text-black bg-white shadow-md md:flex"
        style={{
          width: "650px",
          height: "70px",
          right: "0",
          borderBottomLeftRadius: "345px",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: "300",
          fontSize: "24px",
          lineHeight: "36px",
        }}
      >      
        <ul className="flex justify-between w-full space-x-6 text-lg font-medium">
          <li>
            <a
              href="/"
              className="hover:text-gray-700"
              style={{ color: "#000000" }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="hover:text-gray-700"
              style={{ color: "#000000" }}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className="hover:text-gray-700"
              style={{ color: "#000000" }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="hover:text-gray-700"
              style={{ color: "#000000" }}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-gray-700"
              style={{ color: "#000000" }}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      {/* Arrow Button for Mobile */}
      <div
        className={`md:hidden fixed top-1/4 left-2 transform -translate-y-1/2 p-2 bg-white text-black rounded-full cursor-pointer z-50 ${
          isSidebarOpen ? "hidden" : "block"
        }`}
        onClick={toggleSidebar}
      >
        <FaArrowRight size={20} />
      </div>

      {/* Sidebar for Mobile */}
      <div
  className={`fixed top-[15%] left-0 bg-white shadow-lg p-4 z-50 transform ${
    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
  } transition-transform duration-300 ease-in-out md:hidden rounded-r-lg`}
  style={{
    width: "55vw", // Set width for mobile devices (75% of the viewport)
    height: "auto", // Adjust height to fit content
    maxHeight: "70vh", // Restrict max height
    overflowY: "auto", // Enable scrolling if content exceeds
    borderTopRightRadius: "60px", // Rounded top-right corner
    borderBottomRightRadius: "60px", // Rounded bottom-right corner
  }}
>
  {/* Close Button */}
  <button
    className="absolute text-red-500 right-4 top-4"
    onClick={toggleSidebar}
  >
    <FaTimes size={24} />
  </button>

  {/* Sidebar Links */}
  <ul className="flex flex-col items-start mt-8 space-y-4 text-lg font-medium">
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
  </ul>
</div>





    </div>
  );
};

export default Navbar;
